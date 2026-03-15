import { FluxType } from './FluxType';
import { IDiscount } from './IDiscount';
export declare class Discount extends FluxType implements IDiscount {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        name: string;
        amount: number;
        discountType: "PERCENTAGE" | "AMOUNT";
    };
    uniqueId: string;
    id: number;
    metadata: string;
    name: string;
    amount: number;
    discountType: 'PERCENTAGE' | 'AMOUNT';
    protected objectType: string;
    getDispName(): string;
    constructor(discount?: Partial<Discount>);
}
