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

import { FluxBaseObject } from "./FluxBaseObject";
import { FluxIdentifier } from "./FluxIdentifier";
import _cloneDeep from 'lodash/cloneDeep';
import { AccountAddress, AccountAddressQuery, AccountQuery, AccountUserType, IAccountQuery, PaymentMethod } from ".";
import { IAccount } from "./IAccount";
import { Address } from "./Address";
import { Flux } from "../lib/Flux";


export class Account extends FluxBaseObject {
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
            objectType : "account"
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
    accountUserType: AccountUserType;
    private defaultShippingAddressId: number;
    private defaultShippingAddressUniqueId: string;
    private defaultPaymentMethodId: number;
    private defaultPaymentMethodUniqueId: string;
    protected objectType: string = "account";

    // private getBackendConn?() {
    //     let fi = FluxBackend.getInstance()

    //     if (!fi) throw new Error("no flux connection established")

    //     return fi;
    // }

    /**'
     * Gets the addresses of the current context.
     * 
     * @returns Promise resolving to the addresses
     * of the current context.
     * 
     */
    async getAddressses(): Promise<Address[]> {
        let fi = (await FluxBaseObject.getBackendConn())

        let accountAddresses: AccountAddress[] = await fi.getAccountAddresses(AccountAddressQuery.createQuery({
            accountId: this.id,
            accountUniqueId: this.uniqueId,
        }))

        if (accountAddresses.length === 0) return [];

        let accAddFI: FluxIdentifier[] = accountAddresses.map(i => new FluxIdentifier(i.addressUniqueId, i.addressId, "address"));

        return await fi.getAddressesById(accAddFI)
    }

    /** 
     * Adds addresses to the current context. 
     * 
     * Automatically merges the addresses into the 
     * account, no need to call merge.
     * 
     * @param address An address or list of addresses which are already 
     * persisted / merged to the flux system. This function will not
     * merge an address and will not error out on an unmerged address.
     * It will error out an instance not yet persisted.
     * 
     */
    async addAddress(address: Address | Address[]): Promise<void> {

        if (!address) return;

        let adArr = Array.isArray(address) ? address : [address];

        let fiAdd: AccountAddress[] = adArr.map(i => {
            return new AccountAddress({
                accountId: this.id,
                accountUniqueId: this.uniqueId,
                addressId: i.id,
                addressUniqueId: i.uniqueId
            })
        })

        let fi = (await FluxBaseObject.getBackendConn())

        await fi.createAccountAddress(fiAdd)

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
        let fi = (await FluxBaseObject.getBackendConn())

        let accAddToDelete: AccountAddress[] = await fi.getAccountAddresses(fiAdd)



        let fiAccAdd = accAddToDelete.filter((e) => adMapId.has(e.addressId) || adMapUniqueId.has(e.addressUniqueId)).map(e => e.getId())
        await fi.deleteAccountAddress(fiAccAdd)
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

        let thisClone = _cloneDeep(this);

        for (let key in thisClone) {
            if (key !== 'defaultShippingAddressId' && key !== 'defaultShippingAddressUniqueId') {
                delete thisClone[key];
            }
        }

        thisClone.id = this.id
        thisClone.uniqueId = this.uniqueId
        thisClone.defaultShippingAddressId = ob.id;
        thisClone.defaultShippingAddressUniqueId = ob.uniqueId
        let fi = (await FluxBaseObject.getBackendConn())

        await fi.updateAccount(thisClone)
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

        let i = (await FluxBaseObject.getBackendConn())
        let shippingAddress: Address[] = await i.getAddresses(fi);

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

        let fi : Flux = (await FluxBaseObject.getBackendConn())

        await fi.updateAccount(thisClone)
        this.defaultPaymentMethodId = ob.id;
        this.defaultPaymentMethodUniqueId = ob.uniqueId

    }


    public async getDefaultPaymentMethod () : Promise<PaymentMethod> {
        let fi : Flux = await FluxBaseObject.getBackendConn();
        let fluxId = new FluxIdentifier(this.defaultPaymentMethodUniqueId, this.defaultPaymentMethodId, "payment_method")
        let paymentMethods : PaymentMethod[] = await fi.getPaymentMethodById(fluxId);

        if (paymentMethods.length === 0) return undefined;

        return paymentMethods[0];


    }

    /**
     * Merges the instance context to the
     * flux system. 
     * 
     * Any updated public fields on the context will
     * be merged to the flux system.
     * 
     * @returns The persisted instance
     */
    public async merge(): Promise<void> {
        let accs: Account[] = await (await FluxBaseObject.getBackendConn()).updateAccount(this);
        if (accs.length !== 1) throw new Error("couldn't persist the account");

        Object.assign(this, accs[0])

    }


    public async refresh(): Promise<void> {
        let accs: Account[] = await (await FluxBaseObject.getBackendConn()).getAccountsById(this.getId())

        if (accs.length !== 1) throw new Error("couldn't refresh the account");

        Object.assign(this, accs[0])

    }

    public async delete(): Promise<void> {
        let rmAcc = await (await FluxBaseObject.getBackendConn()).deleteAccount({ id: this.id, uniqueId: this.uniqueId, objectType: this.objectType })
        Object.assign(this, {})
    }

    public async persist(): Promise<void> {
        let accs = await (await FluxBaseObject.getBackendConn()).createAccount(this)
        this.setId(accs[0]);
    }

    constructor(account?: Partial<IAccount>) {
        super(account);
        Object.assign(this, account);

    }
    /**
     * Instantiates a new account and
     * persists the account to the flux system.
     * 
     * If the account is already persisted, it will
     * load the context of that account.
     * 
     * This WILL override any changes you've made to an
     * account. If you need to make changes, create the
     * instance, update the public fields, then merge() your 
     * changes.
     * 
     * @param acc Account
     * @returns 
     */
    public static async createInstanceSafe(acc: Partial<IAccount>): Promise<Account> {
        let fi = (await FluxBaseObject.getBackendConn())

        let account: Account = new Account(acc)

        let accs = await fi.getAccountsById(account.getId())
        let persisted = (accs).length === 1;

        if (!persisted) {
            account.setId((await fi.createAccount(account))[0])
            return account;
        }
        return accs[0]


    }

    /**
     * Instantiates a new account and doesn't synchronize its 
     * context with the flux system.
     * 
     * Assumes that the FluxIdentifier has already been persisted in the
     * flux system.
     * 
     * If you have latency sensitive operations and are confident that the object
     * is persisted, use this method.
     * 
     * @param acc 
     * @returns 
     */
    public static createInstanceLazy(acc?: Partial<IAccount>): Account {
        let account: Account = new Account(acc)
        return account;
    }



    public static async updateObjects(acc: IAccount | IAccount[]) : Promise<Account[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
    
        if (Array.isArray(acc)) {
            let accs = acc.map(e => Account.createInstanceLazy(e))
            return await fi.updateAccount(accs)
        } 
        return await fi.updateAccount(Account.createInstanceLazy(acc))
    }

    public static async deleteObjects(fii: FluxIdentifier | FluxIdentifier[]) : Promise<FluxIdentifier[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
        return await fi.deleteAccount(fii)
    }


    public static async createObjects(acc: IAccount | IAccount[]) : Promise<FluxIdentifier[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
    
        if (Array.isArray(acc)) {
            let accs = acc.map(e => Account.createInstanceLazy(e))
            return await fi.createAccount(accs)
        } 
        return await fi.createAccount(Account.createInstanceLazy(acc))
    }

    public static async getObjectsById(acc: FluxIdentifier | FluxIdentifier[]) : Promise<Account[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        return await fi.getAccountsById(acc)
    }

    public static async generateAccountSession (arg: Account | IAccount): Promise<string> {
        let conn = await FluxBaseObject.getBackendConn() as Flux

        return conn.createSession({
            id: arg.id,
            uniqueId: arg.uniqueId
        }) 
    }

    public async generateAccountSession () : Promise<string> {
        let conn = await FluxBaseObject.getBackendConn() as Flux

        return conn.createSession(this.getId()) 

    }

}