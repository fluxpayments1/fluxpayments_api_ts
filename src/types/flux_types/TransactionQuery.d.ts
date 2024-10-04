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
        confidenceLevel: number;
        paymentMethodAddressDumpId: number;
        paymentMethodAddressId: number;
        uniqueId: string;
        chainNumber: number;
        taxRate: number;
        taxAmount: number;
        amount: number;
        activeStatus: any;
        defaultCurrencyAmount: number;
        currency: string;
        transactionStatus: any;
        shippingAddressId: number;
        shippingAddressDumpId: number;
        shippingAddressVersion: number;
        txnHash: string;
        createdAt: number;
        updatedAt: Date;
        objectType: string;
        hasBackOrderedProducts: any;
        baseTransaction: number;
        approvalStatus: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
    };
    txnHash: string;
    id: number;
    email: string;
    cardBrandId: string;
    version: number;
    chainNumber: number;
    approvalStatus: string;
    confidenceLevel: number;
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
    uniqueId: string;
    taxRate: number;
    taxAmount: number;
    amount: number;
    activeStatus: any;
    currency: string;
    transactionStatus: any;
    defaultCurrencyAmount: number;
    shippingAddressId: number;
    shippingAddressDumpId: number;
    shippingAddressVersion: number;
    createdAt: number;
    updatedAt: Date;
    hasBackOrderedProducts: any;
    baseTransaction: number;
    protected objectType: string;
    constructor(tokQ?: ITransactionQuery);
    static createQuery(ipq: ITransactionQuery): TransactionQuery;
}
