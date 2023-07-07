import CryptoJS from "crypto-js";

export const encryptStrWithKey = (data: string, key: string) => {
    return CryptoJS.AES.encrypt(data, key).toString();
}

export const decryptStrWithKey = (data: string, key: string) => {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
}

export const encryptObjWithKey = (data: object, key: string) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
}

export const decryptObjWithKey = (data: string, key: string) => {
    return JSON.parse(CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8));
}