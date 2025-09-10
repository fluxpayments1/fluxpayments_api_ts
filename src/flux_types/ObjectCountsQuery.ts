import { BaseQuery } from "./BaseQuery";
import { IObjectCountsQuery } from "./IObjectCountsQuery";
import { ObjectCounts } from "./ObjectCounts";

/**
 * This is an object that is used to query for object_countss.
 */
export class ObjectCountsQuery extends BaseQuery<ObjectCounts> {
    public serialize() {
        return {
            id: this.id,
            uniqueid: this.uniqueid,
            metadata: this.metadata,
            version: this.version,
            email: this.email,
            account: this.account,
            address: this.address,
            product: this.product,
            createdAt: this.createdAt,
            accountaddress: this.accountaddress,
            paymentmethod: this.paymentmethod,
            token: this.token,
            accountLimit: this.accountLimit,
            addressLimit: this.addressLimit,
            productLimit: this.productLimit,
            accountaddressLimit: this.accountaddressLimit,
            paymentmethodLimit: this.paymentmethodLimit,
            tokenLimit: this.tokenLimit,
            objectType: this.objectType
        }
    }
    id: number;
    uniqueid: string;
    metadata: string;
    version: number;
    email: string;
    account: number;
    address: number;
    product: number;
    accountaddress: number;
    paymentmethod: number;
    token: number;
    accountLimit: number;
    addressLimit: number;
    productLimit: number;
    accountaddressLimit: number;
    paymentmethodLimit: number;
    tokenLimit: number;
    objectType: string = "objectCounts";

    public constructor(tokQ?: IObjectCountsQuery){
        super(ObjectCounts);
        Object.assign(this, tokQ);
        // Add additional constructor logic here if needed
    }

}
