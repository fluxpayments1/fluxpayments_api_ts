import { BaseQuery } from "./BaseQuery";
import { IBusinessQuery } from "./IBusinessQuery";
import { Business } from "./Business";

export class BusinessQuery extends BaseQuery<Business> {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            createdAt: this.createdAt,
            activeStatus: this.activeStatus,
            businessName: this.businessName,
            businessEmail: this.businessEmail,
            businessPhone: this.businessPhone,
            city: this.city,
            state: this.state,
            postalCode: this.postalCode,
            country: this.country
        };
    }

    id: number;
    uniqueId: string;
    metadata: string;
    activeStatus: boolean;
    businessName: string;
    businessEmail: string;
    businessPhone: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    objectType: string = "business";

    public constructor(q?: IBusinessQuery) {
        super(Business);
        Object.assign(this, q);
    }
}
