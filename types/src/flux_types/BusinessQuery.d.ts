import { BaseQuery } from "./BaseQuery";
import { IBusinessQuery } from "./IBusinessQuery";
import { Business } from "./Business";
export declare class BusinessQuery extends BaseQuery<Business> {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        createdAt: number;
        activeStatus: boolean;
        businessName: string;
        businessEmail: string;
        businessPhone: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        taxId: string;
    };
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
    taxId: string;
    objectType: string;
    constructor(q?: IBusinessQuery);
}
