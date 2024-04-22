import { FluxType, FluxIdentifier, AccountUserType, PaymentMethod, IAccount, Address } from "./";
export declare class Account extends FluxType {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        currency: string;
        metadata: string;
        accountEmail: string;
        firstName: string;
        middleName: string;
        lastName: string;
        accountUserType: AccountUserType;
        defaultShippingAddressId: number;
        defaultShippingAddressUniqueId: string;
        defaultPaymentMethodId: number;
        defaultPaymentMethodUniqueId: string;
        objectType: string;
    };
    currency: string;
    id: number;
    uniqueId: string;
    metadata: string;
    accountEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    accountUserType: AccountUserType;
    private defaultShippingAddressId;
    private defaultShippingAddressUniqueId;
    private defaultPaymentMethodId;
    private defaultPaymentMethodUniqueId;
    protected objectType: string;
    /**'
     * Gets the addresses of the current context.
     *
     * @returns Promise resolving to the addresses
     * of the current context.
     *
     */
    getAddressses(): Promise<Address[]>;
    /**
     * Adds addresses to the current context.
     *
     * Automatically merges the addresses into the
     * account, no need to call merge.
     *
     * @param address An address or list of addresses
     *
     */
    addAddress(address: Address | Address[]): Promise<void>;
    /**
     * Removes addresses from the current context.
     *
     * This method DOES NOT delete the underlying addresses.
     * If you need to delete the address, call delete() on
     * the address object.
     *
     * @param address An address or list of addresses which are already
     * persisted / merged to the flux system.
     *
     * Returns the addresses that were passed for removal
     *
     */
    removeAddress(address: Address | Address[]): Promise<Address[]>;
    /**
     * Sets the Default shipping address of the
     * current context.
     *
     * Automatically merges the changes into the
     * account, no need to call merge.
     *
     * @param fi FluxIdentifier
     * @returns Promise that resolves to the updated account
     */
    setDefaultShippingAddress(ob: FluxIdentifier | Address): Promise<void>;
    /**
     * Gets the default shipping address of the current
     * context. Returns undefined if there is no shipping
     * address
     *
     * @returns A promise resolving to the default shipping address for the account
     */
    getDefaultShippingAddress(): Promise<Address>;
    setDefaultPaymentMethod(ob: PaymentMethod | FluxIdentifier): Promise<void>;
    getDefaultPaymentMethod(): Promise<PaymentMethod>;
    constructor(account?: Partial<IAccount>);
}