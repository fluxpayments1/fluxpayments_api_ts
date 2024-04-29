import { BaseQuery } from "./BaseQuery";
import { ITransactionQuery } from "./ITransactionQuery";
import { Transaction } from "./Transaction";
export declare class TransactionQuery extends BaseQuery<Transaction> implements ITransactionQuery {
    serialize(): {
        id: number;
        email: string;
        cardBrandId: string;
        version: number;
        metadata: string;
        accountId: number;
        accountDumpId: number;
        direction: string;
        paymentMethodId: number;
        transactionCost: number;
        transactionType: any;
        paymentMethodUniqueid: string;
        accountVersion: number;
        paymentMethodAddressVersion: number;
        inventoryOnlyOrder: any;
        paymentMethodAddressDumpId: number;
        paymentMethodAddressId: number;
        uniqueid: string;
        taxRate: number;
        taxAmount: number;
        amount: number;
        activeStatus: any;
        currency: string;
        transactionStatus: any;
        shippingAddressId: number;
        shippingAddressDumpId: number;
        shippingAddressVersion: number;
        createdAt: Date;
        updatedAt: Date;
        objectType: string;
        hasBackOrderedProducts: any;
        baseTransaction: number;
    };
    id: number;
    email: string;
    cardBrandId: string;
    version: number;
    metadata: string;
    accountId: number;
    accountDumpId: number;
    direction: string;
    paymentMethodId: number;
    transactionCost: number;
    transactionType: any;
    paymentMethodUniqueid: string;
    accountVersion: number;
    paymentMethodAddressVersion: number;
    inventoryOnlyOrder: any;
    paymentMethodAddressDumpId: number;
    paymentMethodAddressId: number;
    uniqueid: string;
    taxRate: number;
    taxAmount: number;
    amount: number;
    activeStatus: any;
    currency: string;
    transactionStatus: any;
    shippingAddressId: number;
    shippingAddressDumpId: number;
    shippingAddressVersion: number;
    createdAt: Date;
    updatedAt: Date;
    hasBackOrderedProducts: any;
    baseTransaction: number;
    protected objectType: string;
    constructor(tokQ?: ITransactionQuery);
    static createQuery(ipq: ITransactionQuery): TransactionQuery;
}
