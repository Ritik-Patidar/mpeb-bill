import axios from "axios";
import { decrypt, encrypt, encrypt2 } from '@/utils';
import { NextRequest, NextResponse } from "next/server";

async function getServerTime() {
    const response = await axios.post(process.env.BASE_URL_URJBE + "/UPLX/SH_BL_RM_M_D");
    return response?.data?.txPcXvn;
}

async function generateBaseToken() {
    const username = encrypt("hi");
    const password = encrypt("123");
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const response = await axios.post(
        process.env.BASE_URL + "/token/generate-token",
        formData
    );
    return response?.data?.token;
}

async function generateToken() {
    if (!process.env.DTX || !process.env.BASE_URL_URJBE) return;
    const dtxValue = encrypt(process.env.DTX);
    const formData = new FormData();
    formData.append("dtx", dtxValue);
    const response = await axios.post(
        process.env.BASE_URL_URJBE + "/token/generate-token",
        formData
    );
    const decrypted = decrypt(response?.data?.resp);
    const parsedReponse = JSON.parse(decrypted);
    return parsedReponse.token;
}

async function getBill(consumerNo: string) {
    const token = await generateToken();

    const serverTime = await getServerTime();
    const decryptedServerTime = decrypt(serverTime);
    const urjx = encrypt2(decryptedServerTime + "@SEM");

    const formData = new FormData();
    formData.append("consno", consumerNo);
    formData.append("URJX", urjx);

    const response = await axios.post(process.env.BASE_URL_URJBE + "/hindi-bill-view/get-bill", formData, {
        headers: {
            "Authorization": `Urjas ${token}`,
            "Content-Type": "multipart/form-data"
        }
    });

    const decryptedResponse = decrypt(response?.data?.resp);
    const parsedReponse = JSON.parse(decryptedResponse);
    return parsedReponse;
}

export async function GET(request: NextRequest) {
    const ivrs = request.nextUrl.searchParams.get("ivrs");
    if (!ivrs) {
        return NextResponse.json({ success: false, message: "IVRS parameter is required" }, { status: 400 });
    }

    const consumerNo = encrypt(ivrs);
    const reposne = await getBill(consumerNo);
    return NextResponse.json({success: true, data: reposne});
}