
let CryptoJS = require("crypto-js");

function AES(data, encrypt_key) {
    const iv = "2801003954373300";
    let key = CryptoJS.enc.Utf8.parse(encrypt_key);
    let iv_utf8 = CryptoJS.enc.Utf8.parse(iv);
    return CryptoJS.AES.encrypt(data, key, {
        iv: iv_utf8,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    }).toString()
}



let encrypt_key = "c28725d494c78ad782a6199c341630ee";
let b = AES("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36||H0eFNu7I6idikWAtlhdOWQ||1440:900||macintel||webkit", encrypt_key)
console.log(b)


var oldHexStr = CryptoJS.enc.Hex.parse("6332383732356434393463373861643738326136313939633334313633306565")
console.log(oldHexStr.toString(CryptoJS.enc.Utf8));
