import { FluxType } from './FluxType';
import { IDiscount } from './IDiscount';

export class Discount extends FluxType implements IDiscount {
    obName: string = "Discount";

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            name: this.name,
            amount: this.amount,
            discountType: this.discountType
        };
    }

    uniqueId: string;
    id: number;
    metadata: string;
    name: string;
    amount: number;
    discountType: 'PERCENTAGE' | 'AMOUNT';
    protected objectType: string = "discount";

    getDispName(): string {
        return this.name || "";
    }

    public constructor(discount?: Partial<Discount>) {
        super(discount, Discount);
        Object.assign(this, discount);
    }
}
