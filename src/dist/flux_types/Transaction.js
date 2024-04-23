"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const Account_1 = require("./Account");
const AccountDump_1 = require("./AccountDump");
const Address_1 = require("./Address");
const AddressDump_1 = require("./AddressDump");
const FluxIdentifier_1 = require("./FluxIdentifier");
const FluxType_1 = require("./FluxType");
const PaymentMethod_1 = require("./PaymentMethod");
const Product_1 = require("./Product");
const ProductDump_1 = require("./ProductDump");
class Transaction extends FluxType_1.FluxType {
    static createInstanceLazy(acc) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FluxType_1.FluxType.instantiateLazyInstance(acc, this);
        });
    }
    static createInstanceSafe(acc) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FluxType_1.FluxType.instantiateInstance(acc, this);
        });
    }
    /**
     * Fetches the account that was used
     * at the time of purchase
     *
     * @returns The account used at the time of the transaction
     */
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.accountDumpId, "account_dump");
            let accountDump = yield FluxType_1.FluxType.getObjectsById(fi, AccountDump_1.AccountDump);
            if (accountDump.length === 0)
                throw new Error("could not find account associated with the transaction");
            let acc = accountDump[0];
            return acc.getInterface();
        });
    }
    /**
     * Fetches the account as it exists in
     * the flux system currently. This may
     * not be the account used at the time
     * of purchase if it has been updated
     *
     * @returns
     */
    getCurrentAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.accountId, "account");
            let account = yield FluxType_1.FluxType.getObjectsById(fi, Account_1.Account);
            if (account.length === 0)
                throw new Error("could not find account associated with the transaction");
            let acc = account[0];
            return acc;
        });
    }
    /**
     * Fetches the payment method that was used
     * for the transaction.
     *
     */
    getPaymentMethod() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.paymentMethodId, "payment_method");
            let paymentMethods = yield FluxType_1.FluxType.getObjectsById(fi, PaymentMethod_1.PaymentMethod);
            if (paymentMethods.length === 0)
                throw new Error("could not find payment method associated with the transaction");
            let paymentMethod = paymentMethods[0];
            return paymentMethod;
        });
    }
    /**
     * Fetches the shipping address that was used
     * at the time of purchase
     *
     * @returns The shipping address used at the time of the transaction
     */
    getShippingAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.shippingAddressDumpId, "address_dump");
            let addressDump = yield FluxType_1.FluxType.getObjectsById(fi, AddressDump_1.AddressDump);
            if (addressDump.length === 0)
                throw new Error("could not find address associated with the transaction");
            let add = addressDump[0];
            return add.getInterface();
        });
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
    getCurrentShippingAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.shippingAddressId, "address");
            let addresses = yield FluxType_1.FluxType.getObjectsById(fi, Address_1.Address);
            if (addresses.length === 0)
                throw new Error("could not find address associated with the transaction");
            let add = addresses[0];
            return add;
        });
    }
    /**
     * Fetches the payment method address that was used
     * at the time of purchase
     *
     * @returns The payment method address used at the time of the transaction
     */
    getPaymentMethodAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.paymentMethodAddressDumpId, "address_dump");
            let addressDump = yield FluxType_1.FluxType.getObjectsById(fi, AddressDump_1.AddressDump);
            if (addressDump.length === 0)
                throw new Error("could not find address associated with the transaction");
            let add = addressDump[0];
            return add.getInterface();
        });
    }
    /**
     * Fetches the payment method address as it exists in
     * the flux system currently. This may
     * not be the payment method address used at the time
     * of purchase if it has been updated
     *
     * @returns
     */
    getCurrentPaymentMethodAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.paymentMethodAddressId, "address");
            let addressDump = yield FluxType_1.FluxType.getObjectsById(fi, Address_1.Address);
            if (addressDump.length === 0)
                throw new Error("could not find address associated with the transaction");
            let add = addressDump[0];
            return add;
        });
    }
    /**
     * Fetches the products that were used
     * at the time of purchase
     *
     * @returns The products used at the time of the transaction
     */
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.paymentMethodAddressId, "address");
            let prods = yield FluxType_1.FluxType.getObjectsById(this.getId(), ProductDump_1.ProductDump);
            if (prods.length === 0)
                throw new Error("could not find address associated with the transaction");
            return prods.map(e => e.getInterface());
        });
    }
    /**
     * Fetches the products as they exists in
     * the flux system currently. These may
     * not be the products used at the time
     * of purchase if they have been updated
     *
     * @returns
     */
    getFluxProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            let fi = new FluxIdentifier_1.FluxIdentifier(undefined, this.paymentMethodAddressId, "address");
            let prods = yield FluxType_1.FluxType.getObjectsById(this.getId(), Product_1.Product);
            if (prods.length === 0)
                throw new Error("could not find address associated with the transaction");
            return prods;
        });
    }
    constructor(transaction) {
        super(transaction, Transaction);
        this.obName = "Transaction";
        this.objectType = "transaction";
        Object.assign(this, transaction);
        if (!transaction)
            return;
        if (transaction.products)
            this.products = Array.isArray(transaction.products) ? transaction.products : [transaction.products];
        if (transaction.account) {
            this.accountId = transaction.account.id;
            this.accountUniqueId = transaction.account.uniqueId;
        }
        if (transaction.paymentMethod) {
            this.paymentMethodId = transaction.paymentMethod.id;
            this.paymentMethodUniqueId = transaction.paymentMethod.uniqueId;
        }
        if (transaction.shippingAddress) {
            this.shippingAddressId = transaction.shippingAddress.id;
            this.shippingAddressUniqueId = transaction.shippingAddress.uniqueId;
        }
    }
    serialize() {
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
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map