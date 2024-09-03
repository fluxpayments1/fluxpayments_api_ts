import { BaseQuery } from "./BaseQuery";
import { CustomerWallet } from "./CustomerWallet";
import { ICustomerWallet } from "./ICustomerWallet";
import { ICustomerWalletQuery } from "./ICustomerWalletQuery";
export declare class CustomerWalletQuery extends BaseQuery<CustomerWallet> implements ICustomerWalletQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        chain: string;
        publicAddress: any;
    };
    chain: string;
    publicAddress: any;
    metadata: string;
    id: number;
    uniqueId?: string;
    protected objectType: string;
    constructor(tokQ?: ICustomerWallet);
    static createQuery(ipq: ICustomerWallet): CustomerWalletQuery;
}
