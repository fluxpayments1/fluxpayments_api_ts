import { SecurityHandler } from "./SecurityHandler";
export declare abstract class SecurityHandlerBase implements SecurityHandler {
    abstract decodeResponse(response: string): Promise<string>;
    abstract encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
    private static shaSaltGlobal;
    static sha256(str: string, salt: string): string;
    static decryptAESBrowser(keyBase64: any, base64Nonce: any, encryptedData: any): Promise<string>;
    static encryptAESBrowser(keyBase64: any, base64Nonce: any, data: any): Promise<string>;
    static base64ToArrayBuffer(base64: any): Uint8Array;
    static encryptAES(keyBase64: any, base64Nonce: any, data: any): string;
    static decryptAES(keyBase64: any, ivBase64: any, encryptedDataWithIVKeyTag: any): string;
    static utf8ToBase64(data: string): string;
    static encryptRsa(publicKeyPem: string, plaintext: string): string;
    static encryptRsaBrowser(publicKeyPem: any, plaintext: any): Promise<string>;
    static pemToBuffer(pem: any): ArrayBufferLike;
    static arrayBufferToBase64(buffer: any): string;
    static generateRsaKeyPairBrowser(): Promise<{
        publicKey: string;
        privateKey: string;
    }>;
    static generateRsaKeyPair(): Promise<{
        publicKey: string;
        privateKey: string;
    }>;
    static decryptRsa(privateKeyPem: string, encryptedText: string): string;
    static decryptRsaBrowser(privateKeyPem: any, encryptedText: any): Promise<string>;
    static genAesKey(): string;
    static generateNonce(): string;
    static instance: SecurityHandler;
    abstract createHeaders(): Promise<Map<string, string>>;
}
