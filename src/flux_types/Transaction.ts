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

import { ProductDump, Account, Address, PaymentMethod, Product, ITransaction, FluxIdentifier, IProduct, FluxType, IAccount, IAddress, AccountDump, AddressDump } from ".";

export class Transaction extends FluxType {
    public obName: string = "Transaction";


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

    /**
     * Fetches the account that was used
     * at the time of purchase
     * 
     * @returns The account used at the time of the transaction
     */
    public async getAccount () : Promise<IAccount>{
        let fi = new FluxIdentifier(undefined, this.accountDumpId, "account_dump")
        let accountDump = await FluxType.getObjectsById(fi, AccountDump, "AccountDump")

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
     * @returns 
     */
    public async getCurrentAccount () : Promise<Account> {
        let fi = new FluxIdentifier(undefined, this.accountId, "account")
        let account = await FluxType.getObjectsById(fi, Account, "Account")

        if (account.length === 0) throw new Error("could not find account associated with the transaction");

        let acc : Account = account[0]

        return acc;
    }
    /**
     * Fetches the payment method that was used
     * for the transaction.
     * 
     */
    public async getPaymentMethod () : Promise<PaymentMethod> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodId, "payment_method")
        let paymentMethods = await FluxType.getObjectsById(fi, PaymentMethod, "PaymentMethod")

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
        let addressDump = await FluxType.getObjectsById(fi, AddressDump, "AddressDump")

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
        let addresses = await FluxType.getObjectsById(fi, Address, "Address")

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
        let addressDump = await FluxType.getObjectsById(fi, AddressDump, "AddressDump")

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : AddressDump = addressDump[0]

        return add.getInterface()
    }

    /**
     * Fetches the payment method address as it exists in 
     * the flux system currently. This may
     * not be the payment method address used at the time
     * of purchase if it has been updated
     * 
     * @returns 
     */
    public async getCurrentPaymentMethodAddress () : Promise<Address> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "address")
        let addressDump = await FluxType.getObjectsById(fi, Address, "address")

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
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "address")
        let prods = await FluxType.getObjectsById(this.getId(), ProductDump, "TransactionProductDump")

        if (prods.length === 0) throw new Error("could not find address associated with the transaction");

        return prods.map(e => e.getInterface());
    }
    /**
     * Fetches the products as they exists in 
     * the flux system currently. These may
     * not be the products used at the time
     * of purchase if they have been updated
     * 
     * @returns 
     */
    public async getFluxProducts () : Promise<Product[]> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "address")
        let prods = await FluxType.getObjectsById(this.getId(), Product, "TransactionProductDump")


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


    public serialize() {
        return {
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
            inventoryOnlyOrder: this.inventoryOnlyOrder
        };
    }

}