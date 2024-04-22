import { BaseQuery, IAddressQuery } from "./";
export declare class AddressQuery extends BaseQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        streetAddress: string;
        country: string;
        zipCode: string;
        city: string;
        objectType: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
    };
    uniqueId: string;
    id: number;
    metadata: string;
    streetAddress: string;
    country: string;
    zipCode: string;
    addressState: string;
    city: string;
    protected objectType: string;
    constructor(addressQuery?: IAddressQuery);
    static createQuery(accQ?: IAddressQuery): AddressQuery;
}