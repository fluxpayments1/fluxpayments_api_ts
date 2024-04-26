export interface SecurityHandler {
    createHeaders(): Promise<Map<string, string>>;
    encodeRequest(req: string, headers?: Map<string, string>): Promise<string>;
    decodeResponse(response: string, headers?: any): Promise<string>;
    get publicKey(): string;
}
export type SecurityHandlerType = SecurityHandler;
