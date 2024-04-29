import { BaseQuery } from "./BaseQuery";
import { IToken } from "./IToken";
import { ITokenQuery } from "./ITokenQuery";
import { Token } from "./Token";
export declare class TokenQuery extends BaseQuery<Token> implements ITokenQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        token: string;
    };
    token: string;
    metadata: string;
    id: number;
    uniqueId?: string;
    protected objectType: string;
    /**
     * @returns The token associated with the
     */
    getToken(): string;
    parseToken(tokenString: string): number;
    constructor(tokQ?: IToken);
    static createQuery(ipq: IToken): TokenQuery;
}
