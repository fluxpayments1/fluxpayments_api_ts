import { BaseQuery } from "./BaseQuery";
import { IToken } from "./IToken";
import { Token } from "./Token";
export declare class TokenQuery extends BaseQuery<Token> {
    serialize(): {
        id: number;
        uniqueId: number;
        metadata: string;
        objectType: string;
        token: string;
    };
    token: string;
    metadata: string;
    id: number;
    uniqueId?: number;
    protected objectType: string;
    /**
     * @returns The token associated with the
     */
    getToken(): string;
    parseToken(tokenString: string): number;
    constructor(tokQ?: IToken);
    static createQuery(ipq: IToken): TokenQuery;
}
