/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import _cloneDeep from 'lodash/cloneDeep';
import { AccountAddress } from './AccountAddress';
import { AccountAddressQuery } from './AccountAddressQuery';
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
export class Account extends FluxType implements IAccount {
    public obName: string = "Account"
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            currency: this.currency,
            metadata: this.metadata,
            accountEmail: this.accountEmail,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            accountUserType: this.accountUserType,
            defaultShippingAddressId: this.defaultShippingAddressId,
            defaultShippingAddressUniqueId: this.defaultShippingAddressUniqueId,
            defaultPaymentMethodId: this.defaultPaymentMethodId,
            defaultPaymentMethodUniqueId: this.defaultPaymentMethodUniqueId,
            objectType : this.objectType
        }
    }


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
    private defaultShippingAddressId: number;
    private defaultShippingAddressUniqueId: string;
    private defaultPaymentMethodId: number;
    private defaultPaymentMethodUniqueId: string;
    protected objectType: string = "account";

    /**'
     * Gets the addresses of the current context.
     * 
     * @returns Promise resolving to the addresses
     * of the current context.
     * 
     */
    async getAddresses(): Promise<Address[]> {
        let accountAddresses: AccountAddress[] = await FluxType.queryObjects(
            AccountAddressQuery.createQuery({
                accountId: this.id,
                accountUniqueId: this.uniqueId
            })
        );
        if (accountAddresses.length === 0) return [];
        let accAddFI: FluxIdentifier[] = accountAddresses.map(i => new FluxIdentifier(i.addressUniqueId, i.addressId, "address"));
        return await Address.getObjectsById(accAddFI);
    }

    /** 
     * Adds addresses to the current context. 
     * 
     * Automatically merges the addresses into the 
     * account, no need to call merge.
     * 
     * @param address An address or list of addresses
     * 
     */
    async addAddress(address: Address | Address[]): Promise<void> {

        if (!address) throw new Error("address wasn't defined or null");

        let adArr = Array.isArray(address) ? address : [address];

        let accAdd: AccountAddress[] = adArr.map(i => {
            return new AccountAddress({
                accountId: this.id,
                accountUniqueId: this.uniqueId,
                addressId: i.id,
                addressUniqueId: i.uniqueId
            })
        })


        await FluxType.createObjectsSafe<AccountAddress>(accAdd);

    }

    public async getPurchasedProducts () {

    }

    public async getRecurringTransactions () {
        
    }

    public async getInstallmentTransactions() {

    }

    public async getPaymentMethods () {
        
    }

    public async getTransactions () {

    }

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
    async removeAddress(address: Address | Address[]): Promise<Address[]> {

        if (!address) return undefined;

        let adArr = Array.isArray(address) ? address : [address];

        let adMapId: Map<number, Address> = new Map();
        let adMapUniqueId: Map<string, Address> = new Map();
        let undefinedId = undefined;
        adArr.forEach(e => {
            e.id ? adMapId.set(e.id, e) : (
                e.uniqueId ? adMapUniqueId.set(e.uniqueId, e) : undefinedId = e
            )
        })

        if (undefinedId) throw new Error(`${undefinedId} does not have an identifier`)

        let fiAdd: AccountAddressQuery = new AccountAddressQuery({
            accountId: this.id,
            accountUniqueId: this.uniqueId
        })

        let accAddToDelete: AccountAddress[] = await FluxType.queryObjects<AccountAddress, AccountAddressQuery>(fiAdd);

        let fiAccAdd = accAddToDelete.filter((e) => adMapId.has(e.addressId) || adMapUniqueId.has(e.addressUniqueId)).map(e => e.getId())
        await AccountAddress.deleteObjects(fiAccAdd)
        return adArr
    }


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
    async setDefaultShippingAddress(ob: FluxIdentifier | Address): Promise<void> {

        let thisClone: Account = _cloneDeep(this);

        for (let key in thisClone) {
            if (key !== 'defaultShippingAddressId' && key !== 'defaultShippingAddressUniqueId') {
                delete thisClone[key];
            }
        }

        thisClone.id = this.id
        thisClone.uniqueId = this.uniqueId
        thisClone.defaultShippingAddressId = ob.id;
        thisClone.defaultShippingAddressUniqueId = ob.uniqueId
        thisClone.obName = this.obName
        thisClone.obType = this.obType
        thisClone.objectType = this.objectType

        await Account.updateObjects(thisClone)
        this.defaultShippingAddressId = ob.id;
        this.defaultShippingAddressUniqueId = ob.uniqueId

    }

    /**
     * Gets the default shipping address of the current 
     * context. Returns undefined if there is no shipping
     * address
     * 
     * @returns A promise resolving to the default shipping address for the account
     */
    public async getDefaultShippingAddress(): Promise<Address> {

        if (!this.defaultShippingAddressId && !this.defaultShippingAddressUniqueId) return undefined;

        let fi: FluxIdentifier = { id: this.defaultShippingAddressId, uniqueId: this.defaultShippingAddressUniqueId, objectType: "address" }

        let shippingAddress: Address[] = await Address.getObjectsById<Address>(fi)

        if (shippingAddress.length === 0) return undefined;

        return shippingAddress[0];
    }


    public async setDefaultPaymentMethod (ob: PaymentMethod | FluxIdentifier) : Promise<void> {
        
        let thisClone : Account = _cloneDeep(this);

        for (let key in thisClone) {
            if (key !== 'defaultPaymentMethodId' && key !== 'defaultPaymentMethodUniqueId') {
                delete thisClone[key];
            }
        }
        thisClone.id = this.id
        thisClone.uniqueId = this.uniqueId
        thisClone.defaultPaymentMethodId = ob.id;
        thisClone.defaultPaymentMethodUniqueId = ob.uniqueId
        thisClone.obName = this.obName
        thisClone.obType = this.obType
        thisClone.objectType = this.objectType

        console.log(thisClone)
        await Account.updateObjects(thisClone)
        this.defaultPaymentMethodId = ob.id;
        this.defaultPaymentMethodUniqueId = ob.uniqueId

    }


    public async getDefaultPaymentMethod () : Promise<PaymentMethod> {
        let fluxId = new FluxIdentifier(this.defaultPaymentMethodUniqueId, this.defaultPaymentMethodId, "payment_method")
        let paymentMethods : PaymentMethod[] = await PaymentMethod.getObjectsById(fluxId);

        if (paymentMethods.length === 0) return undefined;

        return paymentMethods[0];
    }

    constructor(account?: Partial<IAccount>) {
        super(account, Account);
        Object.assign(this, account);

    }


    public static async generateSession (arg: Account | IAccount): Promise<string> {
        let conn = await FluxType.getBackendConn()

        return conn.createSession({
            id: arg.id,
            uniqueId: arg.uniqueId
        }) 
    }

    public async generateAccountSession () : Promise<string> {
        let conn = await FluxType.getBackendConn()

        return conn.createSession(this.getId()) 

    }

    public static async createInstanceLazy(acc: Partial<IAccount>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IAccount>) {
        return await FluxType.instantiateInstance(acc, this)
    }
}