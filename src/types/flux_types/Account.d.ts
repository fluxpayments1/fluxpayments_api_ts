import { AccountUserType } from './AccountUserType';
import { Address } from './Address';
import { FluxIdentifier } from './FluxIdentifier';
import { FluxType } from './FluxType';
import { IAccount } from './IAccount';
import { PaymentMethod } from './PaymentMethod';
/**
 * Class for managing accounts
 * stored in the flux system.
 * Use:
 * ```typescript
 * import { flux } from "fluxpayments/lib";
 * import { Account } from "fluxpayments/flux_types";
 * await flux (
 *   "public_key",
 *   "private_key",
 *   "username",
 *   "password"
 * );
 * let firstAccount : Account = await Account.createInstanceSafe({
 *     accountUserType: AccountUserType.CUSTOMER,
 *     uniqueId: "TESTACCOUNT"
 * });
 * ```
 */
export declare class Account extends FluxType implements IAccount {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        currency: string;
        metadata: string;
        accountEmail: string;
        isTaxExempt: boolean;
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
    isTaxExempt: boolean;
    currency: string;
    id: number;
    uniqueId: string;
    metadata: string;
    accountEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    /**
     * Describes the type of the account
     */
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
    getAddresses(): Promise<Address[]>;
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
    getPurchasedProducts(): Promise<void>;
    getRecurringTransactions(): Promise<void>;
    getInstallmentTransactions(): Promise<void>;
    getPaymentMethods(): Promise<void>;
    getTransactions(): Promise<void>;
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
    static generateSession(arg: Account | IAccount): Promise<string>;
    generateAccountSession(): Promise<string>;
    static createInstanceLazy(acc: Partial<IAccount>): Promise<Account>;
    static createInstanceSafe(acc: Partial<IAccount>): Promise<Account>;
}
