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

import { FluxType, FluxIdentifier, AccountUserType, PaymentMethod, IAccount, Address, AccountAddress, AccountAddressQuery } from "./";
import _cloneDeep from 'lodash/cloneDeep';


export class Account extends FluxType {
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
    async getAddressses(): Promise<Address[]> {
        let accountAddresses: AccountAddress[] = await FluxType.getObjectsById<AccountAddress>(this.getId(), AccountAddress, "AccountAddress");
        if (accountAddresses.length === 0) return [];
        let accAddFI: FluxIdentifier[] = accountAddresses.map(i => new FluxIdentifier(i.addressUniqueId, i.addressId, "address"));
        return await FluxType.getObjectsById<Address>(accAddFI, Address, "Address");
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
                address: i
            })
        })


        await FluxType.createObjects<AccountAddress>(accAdd, AccountAddress, "AccountAddressInstanceSafe");

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

        let accAddToDelete: AccountAddress[] = await FluxType.queryObjects<AccountAddress, AccountAddressQuery>(fiAdd, AccountAddress, "AccountAddress");

        let fiAccAdd = accAddToDelete.filter((e) => adMapId.has(e.addressId) || adMapUniqueId.has(e.addressUniqueId)).map(e => e.getId())
        await FluxType.deleteObjects(fiAccAdd, "AccountAddress")
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
        await FluxType.updateObjects(thisClone, this.obType, this.obName)
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

        let shippingAddress: Address[] = await FluxType.getObjectsById<Address>(fi, Address, "Address")

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


        await FluxType.updateObjects(thisClone, Account, "Account")
        this.defaultPaymentMethodId = ob.id;
        this.defaultPaymentMethodUniqueId = ob.uniqueId

    }


    public async getDefaultPaymentMethod () : Promise<PaymentMethod> {
        let fluxId = new FluxIdentifier(this.defaultPaymentMethodUniqueId, this.defaultPaymentMethodId, "payment_method")
        let paymentMethods : PaymentMethod[] = await FluxType.getObjectsById<PaymentMethod>(fluxId, PaymentMethod, "PaymentMethod");

        if (paymentMethods.length === 0) return undefined;

        return paymentMethods[0];
    }

    constructor(account?: Partial<IAccount>) {
        super(account, Account);
        Object.assign(this, account);

    }
}