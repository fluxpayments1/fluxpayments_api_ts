import { FluxType } from './FluxType';
import { ICustomerAddressData } from './ICustomerAddressData';
export declare class CustomerAddressData extends FluxType implements ICustomerAddressData {
    getDispName(): string;
    obName: string;
    id: number;
    email: string;
    streetAddress: string;
    activeStatus: boolean;
    country: string;
    zipcode: string;
    addressState: string;
    city: string;
    uniqueid: string;
    makeDefault: boolean;
    metadata: string;
    objectType: string;
    constructor(c?: Partial<CustomerAddressData>);
    accountSession: string;
    serialize(): {
        id: number;
        email: string;
        streetAddress: string;
        activeStatus: boolean;
        country: string;
        makeDefault: boolean;
        zipcode: string;
        addressState: string;
        createdAt: number;
        updatedAt: Date;
        city: string;
        uniqueid: string;
        metadata: string;
        objectType: string;
    };
}
