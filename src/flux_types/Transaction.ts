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

import { Account } from "./Account";
import { AccountDump } from "./AccountDump";
import { Address } from "./Address";
import { AddressDump } from "./AddressDump";
import { FluxIdentifier } from "./FluxIdentifier";
import { FluxType } from "./FluxType";
import { IAccount } from "./IAccount";
import { IAddress } from "./IAddress";
import { IProduct } from "./IProduct";
import { ITransaction } from "./ITransaction";
import { PaymentMethod } from "./PaymentMethod";
import { Product } from "./Product";
import { ProductDump } from "./ProductDump";


export class Transaction extends FluxType implements ITransaction {
    public obName: string = "Transaction";
    public static async createInstanceLazy(acc: Partial<ITransaction>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<ITransaction>) {
        return await FluxType.instantiateInstance(acc, this)
    }

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
    objectType: string = "transaction";
    products : Product[];
    id: number;

    /**
     * Fetches the account that was used
     * at the time of purchase
     * 
     * @returns The account used at the time of the transaction
     */
    public async getAccount () : Promise<IAccount>{
        let fi = new FluxIdentifier(undefined, this.accountDumpId, "account_dump")
        let accountDump = await AccountDump.getObjectsById(fi)

        if (accountDump.length === 0) throw new Error("could not find account associated with the transaction");

        let acc : AccountDump = accountDump[0]

        return acc.getInterface()
    }

    /**
     * Fetches the account as it exists in 
     * the flux system currently. This may
     * not be the account used at the time
     * of purchase if it has been updated
     * 
     * @returns Account as it exists currently
     */
    public async getCurrentAccount () : Promise<Account> {
        let fi = new FluxIdentifier(undefined, this.accountId, "account")
        let account = await Account.getObjectsById(fi)

        if (account.length === 0) throw new Error("could not find account associated with the transaction");

        let acc : Account = account[0]

        return acc;
    }
    /**
     * Fetches the payment method that was used
     * for the transaction.
     * 
     * @return Payment method at time of the purchase
     * 
     */
    public async getPaymentMethod () : Promise<PaymentMethod> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodId, "payment_method")
        let paymentMethods = await PaymentMethod.getObjectsById(fi)

        if (paymentMethods.length === 0) throw new Error("could not find payment method associated with the transaction");

        let paymentMethod = paymentMethods[0]

        return paymentMethod
    }

    /**
     * Fetches the payment method
     * 
     * 
     * @returns Payment method as it currently exists in the system
     */
    public async getCurrentPaymentMethod () : Promise<PaymentMethod> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodId, "payment_method")
        let paymentMethods = await PaymentMethod.getObjectsById(fi)

        if (paymentMethods.length === 0) throw new Error("could not find payment method associated with the transaction");

        let paymentMethod = paymentMethods[0]

        return paymentMethod
    }
    
    /**
     * Fetches the shipping address that was used
     * at the time of purchase
     * 
     * @returns The shipping address used at the time of the transaction
     */
    public async getShippingAddress () : Promise<IAddress> {
        let fi = new FluxIdentifier(undefined, this.shippingAddressDumpId, "address_dump")
        let addressDump = await AddressDump.getObjectsById(fi)

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : AddressDump = addressDump[0]

        return add.getInterface()
    }
    /**
     * Fetches the shipping address as it exists in 
     * the flux system currently. This may
     * not be the shipping address used at the time
     * of purchase if it has been updated
     * 
     * 
     * @returns 
     */
    public async getCurrentShippingAddress () : Promise<Address> {
        let fi = new FluxIdentifier(undefined, this.shippingAddressId, "address")
        let addresses = await Address.getObjectsById(fi)

        if (addresses.length === 0) throw new Error("could not find address associated with the transaction");

        let add : Address = addresses[0]

        return add;
    }
    
    /**
     * Fetches the payment method address that was used
     * at the time of purchase
     * 
     * @returns The payment method address used at the time of the transaction
     */
    public async getPaymentMethodAddress () : Promise<IAddress> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressDumpId, "address_dump")
        let addressDump = await AddressDump.getObjectsById(fi)

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : AddressDump = addressDump[0]

        return add.getInterface()
    }

    /**
     * Fetches the payment method address as it exists in 
     * the flux system currently. This may
     * not be the payment method address used at the time
     * of purchase if it has been updated...
     * 
     * @returns Current address as it exists in the system
     */
    public async getCurrentPaymentMethodAddress () : Promise<Address> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "address")
        let addressDump = await Address.getObjectsById(fi)

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : Address = addressDump[0]

        return add
    }

    /**
     * Fetches the products that were used
     * at the time of purchase
     * 
     * @returns The products used at the time of the transaction
     */
    public async getProducts () : Promise<IProduct[]> {
        let prods = await Transaction.getLinkedObjectsById(ProductDump, this.getId())

        if (prods.length === 0) throw new Error("could not find address associated with the transaction");

        return prods.map(e => e.getInterface());
    }
    /**
     * Fetches the products as they exists in 
     * the flux system currently. These may
     * not be the products used at the time
     * of purchase if they have been updated
     * 
     * @returns Gets the products as they currently exist in the system
     */
    public async getCurrentProducts () : Promise<Product[]> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "product")
        let prods = await Transaction.getLinkedObjectsById(Product, this.getId())


        if (prods.length === 0) throw new Error("could not find address associated with the transaction");

        return prods;
    }

    

    constructor(transaction?: Partial<ITransaction>) {
        super(transaction, Transaction);
        Object.assign(this, transaction);

        if (!transaction) return;

        if (transaction.products) this.products = Array.isArray(transaction.products) ? transaction.products : [transaction.products]
        if (transaction.account) {
            this.accountId = transaction.account.id
            this.accountUniqueId = transaction.account.uniqueId
        }
        if (transaction.paymentMethod) {
            this.paymentMethodId = transaction.paymentMethod.id
            this.paymentMethodUniqueId = transaction.paymentMethod.uniqueId
        }

        if (transaction.shippingAddress) {
            this.shippingAddressId = transaction.shippingAddress.id
            this.shippingAddressUniqueId = transaction.shippingAddress.uniqueId
        }



    }

    /**
     * 
     * Serializes this object into one readable by
     * the system.
     * 
     * @returns Object
     */
    public serialize() {
        return {
            id: this.id,
            accountId: this.accountId,
            accountUniqueId: this.accountUniqueId,
            paymentMethodId: this.paymentMethodId,
            paymentMethodUniqueId: this.paymentMethodUniqueId,
            uniqueId: this.uniqueId,
            taxRate: this.taxRate,
            currency: this.currency,
            objectType: this.objectType,
            shippingAddressId: this.shippingAddressId,
            shippingAddressUniqueId: this.shippingAddressUniqueId,
            inventoryOnlyOrder: this.inventoryOnlyOrder,
            products: this.products
        };
    }

}