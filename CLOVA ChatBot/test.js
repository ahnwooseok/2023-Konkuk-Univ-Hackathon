const HmacSHA256 = require('crypto-js/hmac-sha256');
const EncBase64 = require('crypto-js/enc-base64');
signatureHeader = HmacSHA256(requestBodyString, secretKey).toString(EncBase64);