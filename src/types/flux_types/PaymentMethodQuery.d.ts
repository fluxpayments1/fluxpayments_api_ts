import { BaseQuery } from "./BaseQuery";
import { IPaymentMethodQuery } from "./IPaymentMethodQuery";
export declare class PaymentMethodQuery extends BaseQuery {
    serialize(): {
        id: number;
        uniqueid: string;
        metadata: string;
        activeStatus: any;
        token: string;
        payType: any;
        addressId: number;
        firstName: string;
        lastName: string;
        objectType: string;
    };
    id: number;
    uniqueid: string;
    metadata: string;
    activeStatus: any;
    token: string;
    payType: any;
    addressId: number;
    firstName: string;
    lastName: string;
    protected objectType: string;
    constructor(tokQ?: IPaymentMethodQuery);
    static createQuery(ipq: IPaymentMethodQuery): PaymentMethodQuery;
}
