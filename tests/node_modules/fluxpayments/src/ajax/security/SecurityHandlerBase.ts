/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { SecurityHandler } from "./SecurityHandler";
import * as crypto from 'crypto';
import { promisify } from "util";

export abstract class SecurityHandlerBase implements SecurityHandler {
  public abstract decodeResponse(response: string): Promise<string>;
  public abstract encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
  private static shaSaltGlobal = "FLUX_SALT"

  get publicKey () {return this.publicKey}

  public static sha256(str: string, salt: string) {
    const hash = crypto.createHash('sha256');
    hash.update(str + salt);
    return hash.digest('base64');

  }
  public static async decryptAESBrowser(keyBase64, base64Nonce, encryptedData) {
    // Convert Base64 to ArrayBuffer for key and nonce
    const keyBuffer = SecurityHandlerBase.base64ToArrayBuffer(keyBase64);
    const ivBuffer = SecurityHandlerBase.base64ToArrayBuffer(base64Nonce);

    // Import the key
    const key = await window.crypto.subtle.importKey(
      "raw",
      keyBuffer,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );

    // Convert Base64 encrypted data to ArrayBuffer
    const encryptedBuffer = SecurityHandlerBase.base64ToArrayBuffer(encryptedData);

    // Decrypt the data
    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv: ivBuffer },
      key,
      encryptedBuffer
    );

    // Decode the decrypted data back to a string (assuming it was a UTF-8 string originally)
    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  }

  public static async encryptAESBrowser(keyBase64, base64Nonce, data) {
    // Convert Base64 to ArrayBuffer for key and nonce
    const keyBuffer = SecurityHandlerBase.base64ToArrayBuffer(keyBase64);
    const ivBuffer = SecurityHandlerBase.base64ToArrayBuffer(base64Nonce);

    // Import the key
    const key = await window.crypto.subtle.importKey(
      "raw",
      keyBuffer,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt"]
    );

    // Encode the data as a UTF-8 string (or other encoding as required)
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);

    // Encrypt the data
    const encrypted = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: ivBuffer },
      key,
      encodedData
    );

    // Return the encrypted data as base64
    return SecurityHandlerBase.arrayBufferToBase64(encrypted);
  }

  // Helper function to convert Base64 string to ArrayBuffer
  public static base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
  }


  public static encryptAES(keyBase64, base64Nonce, data) {

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



  public static decryptAES(keyBase64, ivBase64, encryptedDataWithIVKeyTag) {
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

  public static utf8ToBase64(data: string) {
    return Buffer.from(data, 'utf-8').toString("base64");
  }

  public static encryptRsa(publicKeyPem: string, plaintext: string): string {
    const publicKey = `-----BEGIN PUBLIC KEY-----\n${publicKeyPem}\n-----END PUBLIC KEY-----`;

    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
      },
      Buffer.from(plaintext)
    );

    return encrypted.toString('base64');
  }

  public static async encryptRsaBrowser(publicKeyPem, plaintext) {
    // Convert the PEM encoded public key to a format usable by the Web Crypto API
    const publicKey = await window.crypto.subtle.importKey(
      "spki",
      SecurityHandlerBase.pemToBuffer(publicKeyPem),
      {
        name: "RSA-OAEP",
        hash: "SHA-1"
      },
      true,
      ["encrypt"]
    );

    // Convert plaintext to an ArrayBuffer
    const encodedText = new TextEncoder().encode(plaintext);

    // Encrypt the text
    const encrypted = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP"
      },
      publicKey,
      encodedText
    );

    // Return the base64 encoded string
    return SecurityHandlerBase.arrayBufferToBase64(encrypted);
  }

  public static pemToBuffer(pem) {
    const b64Lines = pem.replace(/-----BEGIN PUBLIC KEY-----|-----END PUBLIC KEY-----|\r|\n/g, '');
    const binaryDerString = atob(b64Lines);
    return new Uint8Array([...binaryDerString].map(char => char.charCodeAt(0))).buffer;
  }

  public static arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  public static async generateRsaKeyPairBrowser() {
    try {
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 2048, // Can be 1024, 2048, or 4096
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        true, // whether the key is extractable (i.e., can be used in exportKey)
        ["encrypt", "decrypt"] // must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
      );

      const publicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
      const privateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

      // Convert ArrayBuffers to Base64
      const publicKeyBase64 = SecurityHandlerBase.arrayBufferToBase64(publicKey);
      const privateKeyBase64 = SecurityHandlerBase.arrayBufferToBase64(privateKey);

      return { publicKey: publicKeyBase64, privateKey: privateKeyBase64 };
    } catch (error) {
      console.error("Error generating RSA key pair:", error);
      throw error;
    }
  }

  public static async generateRsaKeyPair() {
    const generateKeyPairAsync = promisify(crypto.generateKeyPair);

    try {
      const { publicKey, privateKey } = await generateKeyPairAsync('rsa', {
        modulusLength: 2048,  // Bit length of the key
        publicKeyEncoding: {
          type: 'spki',      // Public Key Cryptography Standards (PKCS) #1 and #8 used
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem'
        }
      });

      return { publicKey, privateKey };
    } catch (error) {
      console.error("Error generating RSA key pair:", error);
      throw error;
    }
  }

  public static decryptRsa(privateKeyPem: string, encryptedText: string): string {
    const privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKeyPem}\n-----END PRIVATE KEY-----`;

    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey,
        // Ensure the padding matches the one used in the encryption
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
      },
      Buffer.from(encryptedText, 'base64') // The encrypted text should be in base64 as per your encryption function
    );

    return decrypted.toString();
  }

  public static async decryptRsaBrowser(privateKeyPem, encryptedText) {
    // Convert the PEM encoded private key to a format usable by the Web Crypto API
    const privateKey = await window.crypto.subtle.importKey(
      "pkcs8",
      SecurityHandlerBase.pemToBuffer(privateKeyPem),
      {
        name: "RSA-OAEP",
        hash: "SHA-1"
      },
      false,
      ["decrypt"]
    );

    // Convert base64 encoded encryptedText to an ArrayBuffer
    const encryptedBuffer = SecurityHandlerBase.base64ToArrayBuffer(encryptedText);

    // Decrypt the text
    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: "RSA-OAEP"
      },
      privateKey,
      encryptedBuffer
    );

    // Convert ArrayBuffer back to string
    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  }



  public static genAesKey() {
    const key = crypto.randomBytes(32);
    return key.toString('base64');
  }

  public static generateNonce() {
    const key = crypto.randomBytes(16);
    return key.toString('base64');
  }

  public static instance: SecurityHandler;

  public abstract createHeaders(): Promise<Map<string, string>>;
}