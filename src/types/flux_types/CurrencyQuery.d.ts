import { BaseQuery } from "./BaseQuery";
import { Currency } from "./Currency";
import { ICurrency } from "./ICurrency";
import { ICurrencyQuery } from "./ICurrencyQuery";
export declare class CurrencyQuery extends BaseQuery<Currency> implements ICurrencyQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        shortName: string;
        chain: string;
        mintAddress: string;
        objectType: string;
    };
    chain: string;
    mintAddress: string;
    shortName: string;
    id: number;
    uniqueId: string;
    metadata: string;
    protected objectType: string;
    constructor(tokQ?: ICurrency);
    static createQuery(ipq: ICurrency): CurrencyQuery;
}
