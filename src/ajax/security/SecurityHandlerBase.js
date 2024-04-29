"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityHandlerBase = void 0;
const crypto = __importStar(require("crypto"));
const util_1 = require("util");
class SecurityHandlerBase {
    get publicKey() { return this.publicKey; }
    static sha256(str, salt) {
        const hash = crypto.createHash('sha256');
        hash.update(str + salt);
        return hash.digest('base64');
    }
    static decryptAESBrowser(keyBase64, base64Nonce, encryptedData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convert Base64 to ArrayBuffer for key and nonce
            const keyBuffer = SecurityHandlerBase.base64ToArrayBuffer(keyBase64);
            const ivBuffer = SecurityHandlerBase.base64ToArrayBuffer(base64Nonce);
            // Import the key
            const key = yield window.crypto.subtle.importKey("raw", keyBuffer, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
            // Convert Base64 encrypted data to ArrayBuffer
            const encryptedBuffer = SecurityHandlerBase.base64ToArrayBuffer(encryptedData);
            // Decrypt the data
            const decrypted = yield window.crypto.subtle.decrypt({ name: "AES-GCM", iv: ivBuffer }, key, encryptedBuffer);
            // Decode the decrypted data back to a string (assuming it was a UTF-8 string originally)
            const decoder = new TextDecoder();
            return decoder.decode(decrypted);
        });
    }
    static encryptAESBrowser(keyBase64, base64Nonce, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convert Base64 to ArrayBuffer for key and nonce
            const keyBuffer = SecurityHandlerBase.base64ToArrayBuffer(keyBase64);
            const ivBuffer = SecurityHandlerBase.base64ToArrayBuffer(base64Nonce);
            // Import the key
            const key = yield window.crypto.subtle.importKey("raw", keyBuffer, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
            // Encode the data as a UTF-8 string (or other encoding as required)
            const encoder = new TextEncoder();
            const encodedData = encoder.encode(data);
            // Encrypt the data
            const encrypted = yield window.crypto.subtle.encrypt({ name: "AES-GCM", iv: ivBuffer }, key, encodedData);
            // Return the encrypted data as base64
            return SecurityHandlerBase.arrayBufferToBase64(encrypted);
        });
    }
    // Helper function to convert Base64 string to ArrayBuffer
    static base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        return bytes.map((byte, i) => binaryString.charCodeAt(i));
    }
    static encryptAES(keyBase64, base64Nonce, data) {
        // Convert Base64 to buffer for the key
        const keyBuffer = Buffer.from(keyBase64, 'base64');
        // Convert hex to buffer for the IV
        const ivBuffer = Buffer.from(base64Nonce, 'base64');
        // Create a new Cipher instance with AES-GCM algorithm
        const cipher = crypto.createCipheriv('aes-256-gcm', keyBuffer, ivBuffer);
        // Assuming 'data' is a Buffer or binary string to encrypt
        let encrypted = cipher.update(data, 'binary', 'base64');
        encrypted += cipher.final('base64');
        // Get the authentication tag
        const tag = cipher.getAuthTag();
        // Combine the encrypted data and tag into a single string
        const result = encrypted + tag.toString('base64');
        return result;
    }
    static decryptAES(keyBase64, ivBase64, encryptedDataWithIVKeyTag) {
        const keyBuffer = Buffer.from(keyBase64, 'base64');
        const ivBuffer = Buffer.from(ivBase64, 'base64');
        const buffer = Buffer.from(encryptedDataWithIVKeyTag, 'base64');
        const tagLength = 16;
        const encryptedBuffer = buffer.slice(0, buffer.length - tagLength);
        const tagBuffer = buffer.slice(buffer.length - tagLength);
        const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, ivBuffer);
        decipher.setAuthTag(tagBuffer);
        const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
        return decrypted.toString();
    }
    static utf8ToBase64(data) {
        return Buffer.from(data, 'utf-8').toString("base64");
    }
    static encryptRsa(publicKeyPem, plaintext) {
        const publicKey = `-----BEGIN PUBLIC KEY-----\n${publicKeyPem}\n-----END PUBLIC KEY-----`;
        const encrypted = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
        }, Buffer.from(plaintext));
        return encrypted.toString('base64');
    }
    static encryptRsaBrowser(publicKeyPem, plaintext) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convert the PEM encoded public key to a format usable by the Web Crypto API
            const publicKey = yield window.crypto.subtle.importKey("spki", SecurityHandlerBase.pemToBuffer(publicKeyPem), {
                name: "RSA-OAEP",
                hash: "SHA-1"
            }, true, ["encrypt"]);
            // Convert plaintext to an ArrayBuffer
            const encodedText = new TextEncoder().encode(plaintext);
            // Encrypt the text
            const encrypted = yield window.crypto.subtle.encrypt({
                name: "RSA-OAEP"
            }, publicKey, encodedText);
            // Return the base64 encoded string
            return SecurityHandlerBase.arrayBufferToBase64(encrypted);
        });
    }
    static pemToBuffer(pem) {
        const b64Lines = pem.replace(/-----BEGIN PUBLIC KEY-----|-----END PUBLIC KEY-----|\r|\n/g, '');
        const binaryDerString = atob(b64Lines);
        return new Uint8Array([...binaryDerString].map(char => char.charCodeAt(0))).buffer;
    }
    static arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    static generateRsaKeyPairBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const keyPair = yield window.crypto.subtle.generateKey({
                    name: "RSA-OAEP",
                    modulusLength: 2048, // Can be 1024, 2048, or 4096
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    hash: { name: "SHA-256" },
                }, true, // whether the key is extractable (i.e., can be used in exportKey)
                ["encrypt", "decrypt"] // must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
                );
                const publicKey = yield window.crypto.subtle.exportKey("spki", keyPair.publicKey);
                const privateKey = yield window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
                // Convert ArrayBuffers to Base64
                const publicKeyBase64 = SecurityHandlerBase.arrayBufferToBase64(publicKey);
                const privateKeyBase64 = SecurityHandlerBase.arrayBufferToBase64(privateKey);
                return { publicKey: publicKeyBase64, privateKey: privateKeyBase64 };
            }
            catch (error) {
                console.error("Error generating RSA key pair:", error);
                throw error;
            }
        });
    }
    static generateRsaKeyPair() {
        return __awaiter(this, void 0, void 0, function* () {
            const generateKeyPairAsync = (0, util_1.promisify)(crypto.generateKeyPair);
            try {
                const { publicKey, privateKey } = yield generateKeyPairAsync('rsa', {
                    modulusLength: 2048, // Bit length of the key
                    publicKeyEncoding: {
                        type: 'spki', // Public Key Cryptography Standards (PKCS) #1 and #8 used
                        format: 'pem'
                    },
                    privateKeyEncoding: {
                        type: 'pkcs8',
                        format: 'pem'
                    }
                });
                return { publicKey, privateKey };
            }
            catch (error) {
                console.error("Error generating RSA key pair:", error);
                throw error;
            }
        });
    }
    static decryptRsa(privateKeyPem, encryptedText) {
        const privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKeyPem}\n-----END PRIVATE KEY-----`;
        const decrypted = crypto.privateDecrypt({
            key: privateKey,
            // Ensure the padding matches the one used in the encryption
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
        }, Buffer.from(encryptedText, 'base64') // The encrypted text should be in base64 as per your encryption function
        );
        return decrypted.toString();
    }
    static decryptRsaBrowser(privateKeyPem, encryptedText) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convert the PEM encoded private key to a format usable by the Web Crypto API
            const privateKey = yield window.crypto.subtle.importKey("pkcs8", SecurityHandlerBase.pemToBuffer(privateKeyPem), {
                name: "RSA-OAEP",
                hash: "SHA-1"
            }, false, ["decrypt"]);
            // Convert base64 encoded encryptedText to an ArrayBuffer
            const encryptedBuffer = SecurityHandlerBase.base64ToArrayBuffer(encryptedText);
            // Decrypt the text
            const decrypted = yield window.crypto.subtle.decrypt({
                name: "RSA-OAEP"
            }, privateKey, encryptedBuffer);
            // Convert ArrayBuffer back to string
            const decoder = new TextDecoder();
            return decoder.decode(decrypted);
        });
    }
    static genAesKey() {
        const key = crypto.randomBytes(32);
        return key.toString('base64');
    }
    static generateNonce() {
        const key = crypto.randomBytes(16);
        return key.toString('base64');
    }
}
exports.SecurityHandlerBase = SecurityHandlerBase;
SecurityHandlerBase.shaSaltGlobal = "FLUX_SALT";
//# sourceMappingURL=SecurityHandlerBase.js.map