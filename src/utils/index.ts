import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
import pad from "crypto-js/pad-pkcs7";
// import _mode from "crypto-js/mode-cbc.js";

const _mode = CryptoJS.mode;

export function encrypt(text: string): string {
  const key = enc.parse(process.env.SECRET_KEY || "");
  const iv = enc.parse(process.env.SECRET_IV || "");
  const encrypted = AES.encrypt(text, key, {
    iv: iv,
    mode: _mode.CBC,
    padding: pad,
  });
  return encrypted.toString();
}

export function encrypt2(text: string): string {
  const key = enc.parse(process.env.SECRET_KEY1 || "");
  const iv = enc.parse(process.env.SECRET_IV1 || "");
  const encrypted = AES.encrypt(text, key, {
    iv: iv,
    mode: _mode.CBC,
    padding: pad,
  });
  return encrypted.toString();
}

export function decrypt(text: string): string {
  const key = enc.parse(process.env.SECRET_KEY || "");
  const iv = enc.parse(process.env.SECRET_IV || "");
  const encrypted = AES.decrypt(text, key, {
    keySize: 16,
    iv: iv,
    mode: _mode.CBC,
    padding: pad,
  });
  return encrypted.toString(enc);
}

export function decrypt2(text: string): string {
  const key = enc.parse(process.env.SECRET_KEY1 || "");
  const iv = enc.parse(process.env.SECRET_IV1 || "");
  const encrypted = AES.decrypt(text, key, {
    keySize: 16,
    iv: iv,
    mode: _mode.CBC,
    padding: pad,
  });
  return encrypted.toString(enc);
}

export async function catchError<T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error]> {
  return promise
    .then((data) => [undefined, data] as [undefined, T])
    .catch((error) => [error]);
}
