import { Account, Address, PaymentMethod, Product, ITransaction, IProduct, FluxType, IAccount, IAddress } from ".";
export declare class Transaction extends FluxType {
    obName: string;
    inventoryOnlyOrder: boolean;
    account: Account;
    shippingAddressDumpId: number;
    paymentMethodAddressDumpId: number;
    shippingAddress: Address;
    paymentMethod: PaymentMethod;
    paymentMethodAddressId: number;
    accountId: number;
    accountUniqueId: string;
    accountDumpId: number;
    paymentMethodId: number;
    paymentMethodUniqueId: string;
    uniqueId: string;
    taxRate: number;
    currency: string;
    transactionStatus: string;
    shippingAddressId: number;
    shippingAddressUniqueId: string;
    objectType: string;
    products: Product[];
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
     * @returns
     */
    getCurrentAccount(): Promise<Account>;
    /**
     * Fetches the payment method that was used
     * for the transaction.
     *
     */
    getPaymentMethod(): Promise<PaymentMethod>;
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
     * of purchase if it has been updated
     *
     * @returns
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
     * @returns
     */
    getFluxProducts(): Promise<Product[]>;
    constructor(transaction?: Partial<ITransaction>);
    serialize(): {
        accountId: number;
        accountUniqueId: string;
        paymentMethodId: number;
        paymentMethodUniqueId: string;
        uniqueId: string;
        taxRate: number;
        currency: string;
        objectType: string;
        shippingAddressId: number;
        shippingAddressUniqueId: string;
        inventoryOnlyOrder: boolean;
    };
}
