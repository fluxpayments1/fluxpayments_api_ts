import { BaseQuery } from "./BaseQuery";
import { IDiscountQuery } from "./IDiscountQuery";
import { Discount } from "./Discount";

export class DiscountQuery extends BaseQuery<Discount> {
    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            createdAt: this.createdAt,
            name: this.name,
            amount: this.amount,
            discountType: this.discountType
        };
    }

    id: number;
    metadata: string;
    name: string;
    amount: number;
    discountType: 'PERCENTAGE' | 'AMOUNT';
    objectType: string = "discount";

    public constructor(q?: IDiscountQuery) {
        super(Discount);
        Object.assign(this, q);
    }
}
