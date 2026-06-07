import { Account } from "./Account";
import { Address } from "./Address";
import { FluxType } from "./FluxType";
import { IAccount } from "./IAccount";
import { IAddress } from "./IAddress";
import { IProduct } from "./IProduct";
import { ITransaction } from "./ITransaction";
import { PaymentMethod } from "./PaymentMethod";
import { Product } from "./Product";
export declare class Transaction extends FluxType implements ITransaction {
    transactionType: string;
    getDispName(): string;
    obName: string;
    txnHash: string;
    static createInstanceLazy(acc: Partial<ITransaction>): Promise<Transaction>;
    static createInstanceSafe(acc: Partial<ITransaction>): Promise<Transaction>;
    approvalStatus: string;
    inventoryOnlyOrder: boolean;
    account: Account;
    shippingAddressDumpId: number;
    paymentMethodAddressDumpId: number;
    shippingAddress: Address;
    paymentMethod: PaymentMethod;
    paymentMethodAddressId: number;
    isReprocessRequest: boolean;
    baseTransaction: number;
    createdAt: number;
    accountId: number;
    isRefund: boolean;
    accountUniqueId: string;
    accountDumpId: number;
    taxRateId: number;
    confidenceLevel: number;
    paymentMethodId: number;
    paymentMethodUniqueId: string;
    uniqueId: string;
    chainNumber: number;
    defaultCurrencyAmount: number;
    amount: number;
    paymentLinkId: number;
    /**
     * For recurring renewal transactions: the catalog Product ID that this
     * single charge represents. Lets the merchant portal scope the displayed
     * line items to just the one being billed.
     */
    productId: number;
    taxRate: number;
    currency: string;
    currencyId: number;
    transactionStatus: string;
    shippingAddressId: number;
    shippingAddressUniqueId: string;
    objectType: string;
    products: Product[];
    id: number;
    oneTimeUseToken?: string;
    accountSession?: string;
    hasBeenSyncedToQuickbooks?: boolean;
    quickbooksTransactionId?: string;
    quickbooksSyncDate?: number;
    cardBrandId?: string;
    /**
     * Fetches the account that was used
     * at the time of purchase
     *
     * @returns The account used at the time of the transaction
     */
    getAccount(): Promise<IAccount>;
    /**
     * Fetches the account as it exists in
     * the flux system currently. This may
     * not be the account used at the time
     * of purchase if it has been updated
     *
     * @returns Account as it exists currently
     */
    getCurrentAccount(): Promise<Account>;
    /**
     * Fetches the payment method that was used
     * for the transaction.
     *
     * @return Payment method at time of the purchase
     *
     */
    getPaymentMethod(): Promise<PaymentMethod>;
    /**
     * Fetches the payment method
     *
     *
     * @returns Payment method as it currently exists in the system
     */
    getCurrentPaymentMethod(): Promise<PaymentMethod>;
    /**
     * Fetches the shipping address that was used
     * at the time of purchase
     *
     * @returns The shipping address used at the time of the transaction
     */
    getShippingAddress(): Promise<IAddress>;
    /**
     * Fetches the shipping address as it exists in
     * the flux system currently. This may
     * not be the shipping address used at the time
     * of purchase if it has been updated
     *
     *
     * @returns
     */
    getCurrentShippingAddress(): Promise<Address>;
    /**
     * Fetches the payment method address that was used
     * at the time of purchase
     *
     * @returns The payment method address used at the time of the transaction
     */
    getPaymentMethodAddress(): Promise<IAddress>;
    /**
     * Fetches the payment method address as it exists in
     * the flux system currently. This may
     * not be the payment method address used at the time
     * of purchase if it has been updated...
     *
     * @returns Current address as it exists in the system
     */
    getCurrentPaymentMethodAddress(): Promise<Address>;
    /**
     * Fetches the products that were used
     * at the time of purchase
     *
     * @returns The products used at the time of the transaction
     */
    getProducts(): Promise<IProduct[]>;
    /**
     * Fetches the products as they exists in
     * the flux system currently. These may
     * not be the products used at the time
     * of purchase if they have been updated
     *
     * @returns Gets the products as they currently exist in the system
     */
    getCurrentProducts(): Promise<Product[]>;
    constructor(transaction?: Partial<ITransaction>);
    /**
     *
     * Serializes this object into one readable by
     * the system.
     *
     * @returns Object
     */
    serialize(): {
        id: number;
        accountId: number;
        accountUniqueId: string;
        paymentMethodId: number;
        paymentMethodUniqueId: string;
        chainNumber: number;
        uniqueId: string;
        defaultCurrencyAmount: number;
        confidenceLevel: number;
        txnHash: string;
        isRefund: boolean;
        isReprocessRequest: boolean;
        amount: number;
        taxRate: number;
        taxRateId: number;
        approvalStatus: string;
        baseTransaction: number;
        accountSession: string;
        oneTimeUseToken: string;
        transactionType: string;
        createdAt: number;
        currency: string;
        currencyId: number;
        paymentLinkId: number;
        productId: number;
        objectType: string;
        shippingAddressId: number;
        shippingAddressUniqueId: string;
        inventoryOnlyOrder: boolean;
        products: Product[];
        hasBeenSyncedToQuickbooks: boolean;
        quickbooksTransactionId: string;
        quickbooksSyncDate: number;
        cardBrandId: string;
        customerEmail: string;
        customerFirstName: string;
        customerLastName: string;
        customerPhone: string;
        processorError: string;
        gatewayResponse: string;
    };
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    processorError: string;
    gatewayResponse: string;
}
