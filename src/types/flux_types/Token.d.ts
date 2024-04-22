import { FluxType, IToken } from "./";
export declare class Token extends FluxType {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        payload: string;
        objectType: string;
    };
    private payload;
    token: string;
    currency: string;
    id: number;
    uniqueId: string;
    metadata: string;
    protected objectType: string;
    /**
     * Get the decrypted payload
     *
     * @returns The encrypted payload, be careful with this
     * It return the raw decrypted payload.
     *
     */
    getDecryptedPayload(): string;
    setDecryptedPayload(payload: string): Promise<void>;
    /**
     * @returns The token associated with the
     */
    getToken(): string;
    parseToken(tokenString: string): number;
    constructor(token?: Partial<IToken>);
}
