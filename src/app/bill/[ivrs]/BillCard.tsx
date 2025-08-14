import { Card, CardContent } from "@/components/ui/card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BillCard({ billDetails }: { billDetails: any }) {
  return (
    <div className="p-3 max-w-md mx-auto text-base flex flex-col gap-y-3">
      <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <h2 className="text-xl">{billDetails?.CONS_NAME_1}</h2>
          <h2 className="text-xl">
            कुल देयक राशि: <strong className="text-green-700">{billDetails?.NET_BILL_1}</strong>
          </h2>
        </CardContent>
      </Card>

      {/* Top Security Deposit Section */}
      {/* //TODO: hidden for now */}
      {/* <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>सुरक्षा निधि जो जमा है रु.:</span>
              <span>1452</span>
            </div>
            <div className="flex justify-between">
              <span>नियत तिथि तक देय राशि रु.:</span>
              <span>149</span>
            </div>
            <div className="flex justify-between">
              <span>सुरक्षा निधि जो लेनी है रु.:</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>अधिभार सहित सकल देय राशि रु.:</span>
              <span>154</span>
            </div>
            <div className="flex justify-between">
              <span>देय तिथि:</span>
              <span>13-08-2025</span>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* // TODO: removing some info that are not essential */}
      {/* Consumer Details */}
      {/* <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>प्रयोजन:</span>
              <span>Domestic light and fan</span>
            </div>
            <div className="flex justify-between">
              <span>टैररफ श्रेणी:</span>
              <span>LV1.2</span>
            </div>
            <div className="flex justify-between">
              <span>मोतीलाल मोहन</span>
              <span></span>
            </div>
            <div className="flex justify-between">
              <span>श्रेणी:</span>
              <span>SINGLE</span>
            </div>
            <div className="flex justify-between">
              <span>मोबाइल:</span>
              <span>7049212709</span>
            </div>
            <div className="flex justify-between">
              <span>स्वीकृत:</span>
              <span>1.2 KW</span>
            </div>
            <div className="flex justify-between">
              <span>मीटर:</span>
              <span>4246306097</span>
            </div>
            <div className="flex justify-between">
              <span>संधारल</span>
              <span></span>
            </div>
            <div className="flex justify-between">
              <span>डिवीजन:</span>
              <span>Sundrel</span>
            </div>
            <div className="flex justify-between">
              <span>संभाग:</span>
              <span>mhow (o&amp;m)</span>
            </div>
            <div className="flex justify-between">
              <span>कॉल सेंटर:</span>
              <span>1912</span>
            </div>
            <div className="flex justify-between">
              <span>फीडर क्र.</span>
              <span></span>
            </div>
            <div className="flex justify-between">
              <span>बिल:</span>
              <span>JUL25N005676181</span>
            </div>
            <div className="flex justify-between">
              <span>बिल माह:</span>
              <span>JUL-2025</span>
            </div>
            <div className="flex justify-between">
              <span>तारीख:</span>
              <span>25-07-2025</span>
            </div>
            <div className="flex justify-between">
              <span>रीडिंग प्रकार:</span>
              <span>NORMAL</span>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Meter Reading - Vertical */}
      <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <h2 className="font-semibold mb-2">मीटर रीडिंग</h2>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>वर्तमान रीडिंग:</span>
              <span>{billDetails?.RDG_CURR}</span>
            </div>
            <div className="flex justify-between">
              <span>वर्तमान रीड तारीख:</span>
              <span>{billDetails?.RDG_DATE}</span>
            </div>
            <div className="flex justify-between">
              <span>पिछली रीडिंग:</span>
              <span>{billDetails?.RDG_PREV}</span>
            </div>
            <div className="flex justify-between">
              <span>मीटर गुणांक:</span>
              <span>{billDetails?.MF}</span>
            </div>
            <div className="flex justify-between">
              <span>मीटर खपत:</span>
              <span>{billDetails?.MTR_UNITS}</span>
            </div>
            <div className="flex justify-between">
              <span>अंकलित खपत:</span>
              <span>{billDetails?.ASS_UNITS}</span>
            </div>
            <div className="flex justify-between">
              <span>कुल खपत:</span>
              <span>{billDetails?.TOT_UNITS_1}</span>
            </div>
            <div className="flex justify-between">
              <span>औसत दैनिक खपत:</span>
              <span>{billDetails?.AVG_2}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Payment Details - Vertical */}
      <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <h2 className="font-semibold mb-2">भुगतान विवरण</h2>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>बिल माह:</span>
              <span>{billDetails?.MONTH_1}</span>
            </div>
            <div className="flex justify-between">
              <span>राशि भुगतान:</span>
              <span>{billDetails?.CASH_MSG_1?.split(" ", 4)?.[3]}</span>
            </div>
            <div className="flex justify-between">
              <span>भुगतान संदर्भ संख्या:</span>
              <span>{billDetails?.CASH_MSG_1?.split(" ", 4)?.[1]}</span>
            </div>
            <div className="flex justify-between">
              <span>भुगतान दिनांक:</span>
              <span>{billDetails?.CASH_MSG_1?.split(" ", 4)?.[0]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Month-wise consumption */}
      <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <h2 className="font-semibold mb-2">विगत माहों के खपत का ब्यौरा</h2>
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-accent">
                <tr>
                  <th className="p-2">वाचन माह</th>
                  <th className="p-2">तिथि</th>
                  <th className="p-2">रीडिंग</th>
                  <th className="p-2">खपत</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="p-2">{billDetails?.MONTH_1}</td>
                  <td className="p-2">{billDetails?.RDG_DATE_1}</td>
                  <td className="p-2">{billDetails?.RDG_1}</td>
                  <td className="p-2">{billDetails?.CONS_1}</td>
                </tr>
                <tr>
                  <td>{billDetails?.MONTH_2}</td>
                  <td className="p-2">{billDetails?.RDG_DATE_2}</td>
                  <td className="p-2">{billDetails?.RDG_2}</td>
                  <td className="p-2">{billDetails?.CONS_2}</td>
                </tr>
                <tr>
                  <td>{billDetails?.MONTH_3}</td>
                  <td className="p-2">{billDetails?.RDG_DATE_3}</td>
                  <td className="p-2">{billDetails?.RDG_3}</td>
                  <td className="p-2">{billDetails?.CONS_3}</td>
                </tr>
                <tr>
                  <td>{billDetails?.MONTH_4}</td>
                  <td className="p-2">{billDetails?.RDG_DATE_4}</td>
                  <td className="p-2">{billDetails?.RDG_4}</td>
                  <td className="p-2">{billDetails?.CONS_4}</td>
                </tr>
               <tr>
                  <td>{billDetails?.MONTH_5}</td>
                  <td className="p-2">{billDetails?.RDG_DATE_5}</td>
                  <td className="p-2">{billDetails?.RDG_5}</td>
                  <td className="p-2">{billDetails?.CONS_5}</td>
                </tr>
                <tr>
                  <td>{billDetails?.MONTH_6}</td>
                  <td className="p-2">{billDetails?.RDG_DATE_6}</td>
                  <td className="p-2">{billDetails?.RDG_6}</td>
                  <td className="p-2">{billDetails?.CONS_6}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      {/* Billing Details */}
      <Card className="shadow-sm">
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-accent text-left">
                <tr>
                  <th className="p-2">विवरण विवरण</th>
                  <th className="p-2 text-right">राशि रु.में</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="p-2">ऊर्जा शुल्क</td>
                  <td className="p-2 text-right">{billDetails?.ENCH}</td>
                </tr>
                <tr>
                  <td className="p-2">ईंधन और विद्युत क्रय समायोजन अधिभार</td>
                  <td className="p-2 text-right">{billDetails?.FCA_CH}</td>
                </tr>
                <tr>
                  <td className="p-2">नियत प्रभाव</td>
                  <td className="p-2 text-right">{billDetails?.FXCH}</td>
                </tr>
                <tr>
                  <td className="p-2">विद्युत शुल्क</td>
                  <td className="p-2 text-right">{billDetails?.DUTY}</td>
                </tr>
                <tr>
                  <td className="p-2">सुरक्षा निधि कटौती</td>
                  <td className="p- text-right">{billDetails?.SD_INST}</td>
                </tr>
                <tr>
                  <td className="p-2">अन्य शुल्क</td>
                  <td className="p-2 text-right">{billDetails?.OCH}</td>
                </tr>
                <tr>
                  <td className="p-2">वर्तमान माह देयक</td>
                  <td className="p-2 text-right">{billDetails?.MONTH_BILL_1}</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">
                    म.प्र. शासन सब्सिडी राशि
                  </td>
                  <td className="p-2 text-right font-semibold">{billDetails?.SUBSIDY_TOTAL}</td>
                </tr>
                <tr>
                  <td className="p-2">सुरक्षा निधि पर ब्याज (-)</td>
                  <td className="p-2 text-right">{billDetails?.SD_INT}</td>
                </tr>
                <tr>
                  <td className="p-2">समायोजन गणना राशि</td>
                  <td className="p-2 text-right">{billDetails?.SD_INT}</td>
                </tr>
                <tr>
                  <td className="p-2">लॉक क्रेडिट/कर्मचारी छूट (-)</td>
                  <td className="p-2 text-right">{billDetails?.LF_LOCK_REBATE}</td>
                </tr>
                <tr>
                  <td className="p-2">गत माह विलंब शुल्क</td>
                  <td className="p-2 text-right">{billDetails?.Prev_Pendng_AMNT}</td>
                </tr>
                <tr>
                  <td className="p-2">ऑनलाइन/अग्रिम प्रोत्साहन</td>
                  <td className="p-2 text-right">{billDetails?.ONLN_PYMT_RBT}</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">वर्तमान देयक राशि</td>
                  <td className="p-2 text-right font-semibold">{billDetails?.MONTH_BILL}</td>
                </tr>
                <tr>
                  <td className="p-2">पिछला बकाया</td>
                  <td className="p-2 text-right">{billDetails?.Prev_Pendng_AMNT}</td>
                </tr>
                <tr>
                  <td className="p-2">रकम प्राप्त</td>
                  <td className="p-2 text-right">{billDetails?.AMT_RCVD}</td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="p-2 font-semibold">
                    नियत तिथि तक कुल देयक राशि
                  </td>
                  <td className="p-2 text-right font-semibold">{billDetails?.NET_BILL_1}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
