import { Address } from "./Address";
import { BaseQuery } from "./BaseQuery";
import { IAddressQuery } from "./IAddressQuery";
export declare class AddressQuery extends BaseQuery<Address> implements IAddressQuery {
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
        addressState: string;
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
