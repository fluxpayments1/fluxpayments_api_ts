import { FluxType } from './FluxType';
import { IToken } from './IToken';
export declare class Token extends FluxType implements IToken {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        payload: string;
        objectType: string;
    };
    payload: string;
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
    static createInstanceLazy(acc: Partial<IToken>): Promise<Token>;
    static createInstanceSafe(acc: Partial<IToken>): Promise<Token>;
}
