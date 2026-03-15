import { BaseQuery } from "./BaseQuery";
import { IDiscountQuery } from "./IDiscountQuery";
import { Discount } from "./Discount";
export declare class DiscountQuery extends BaseQuery<Discount> {
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        createdAt: number;
        name: string;
        amount: number;
        discountType: "PERCENTAGE" | "AMOUNT";
    };
    id: number;
    metadata: string;
    name: string;
    amount: number;
    discountType: 'PERCENTAGE' | 'AMOUNT';
    objectType: string;
    constructor(q?: IDiscountQuery);
}
