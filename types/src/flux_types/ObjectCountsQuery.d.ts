import { BaseQuery } from "./BaseQuery";
import { IObjectCountsQuery } from "./IObjectCountsQuery";
import { ObjectCounts } from "./ObjectCounts";
/**
 * This is an object that is used to query for object_countss.
 */
export declare class ObjectCountsQuery extends BaseQuery<ObjectCounts> {
    serialize(): {
        id: number;
        uniqueid: string;
        metadata: string;
        version: number;
        email: string;
        account: number;
        address: number;
        product: number;
        createdAt: number;
        accountaddress: number;
        paymentmethod: number;
        token: number;
        accountLimit: number;
        addressLimit: number;
        productLimit: number;
        accountaddressLimit: number;
        paymentmethodLimit: number;
        tokenLimit: number;
        objectType: string;
    };
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
    objectType: string;
    constructor(tokQ?: IObjectCountsQuery);
}
