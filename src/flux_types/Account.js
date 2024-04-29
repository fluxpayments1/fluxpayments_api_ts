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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const AccountAddress_1 = require("./AccountAddress");
const AccountAddressQuery_1 = require("./AccountAddressQuery");
const Address_1 = require("./Address");
const FluxIdentifier_1 = require("./FluxIdentifier");
const FluxType_1 = require("./FluxType");
const PaymentMethod_1 = require("./PaymentMethod");
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
class Account extends FluxType_1.FluxType {
    serialize() {
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
            objectType: this.objectType
        };
    }
    /**'
     * Gets the addresses of the current context.
     *
     * @returns Promise resolving to the addresses
     * of the current context.
     *
     */
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            let accountAddresses = yield FluxType_1.FluxType.queryObjects(AccountAddressQuery_1.AccountAddressQuery.createQuery({
                accountId: this.id,
                accountUniqueId: this.uniqueId
            }));
            if (accountAddresses.length === 0)
                return [];
            let accAddFI = accountAddresses.map(i => new FluxIdentifier_1.FluxIdentifier(i.addressUniqueId, i.addressId, "address"));
            return yield Address_1.Address.getObjectsById(accAddFI);
        });
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
    addAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!address)
                throw new Error("address wasn't defined or null");
            let adArr = Array.isArray(address) ? address : [address];
            let accAdd = adArr.map(i => {
                return new AccountAddress_1.AccountAddress({
                    accountId: this.id,
                    accountUniqueId: this.uniqueId,
                    addressId: i.id,
                    addressUniqueId: i.uniqueId
                });
            });
            yield FluxType_1.FluxType.createObjectsSafe(accAdd);
        });
    }
    getPurchasedProducts() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getRecurringTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getInstallmentTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getPaymentMethods() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
        });
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
    removeAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!address)
                return undefined;
            let adArr = Array.isArray(address) ? address : [address];
            let adMapId = new Map();
            let adMapUniqueId = new Map();
            let undefinedId = undefined;
            adArr.forEach(e => {
                e.id ? adMapId.set(e.id, e) : (e.uniqueId ? adMapUniqueId.set(e.uniqueId, e) : undefinedId = e);
            });
            if (undefinedId)
                throw new Error(`${undefinedId} does not have an identifier`);
            let fiAdd = new AccountAddressQuery_1.AccountAddressQuery({
                accountId: this.id,
                accountUniqueId: this.uniqueId
            });
            let accAddToDelete = yield FluxType_1.FluxType.queryObjects(fiAdd);
            let fiAccAdd = accAddToDelete.filter((e) => adMapId.has(e.addressId) || adMapUniqueId.has(e.addressUniqueId)).map(e => e.getId());
            yield AccountAddress_1.AccountAddress.deleteObjects(fiAccAdd);
            return adArr;
        });
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
    setDefaultShippingAddress(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let thisClone = (0, cloneDeep_1.default)(this);
            for (let key in thisClone) {
                if (key !== 'defaultShippingAddressId' && key !== 'defaultShippingAddressUniqueId') {
                    delete thisClone[key];
                }
            }
            thisClone.id = this.id;
            thisClone.uniqueId = this.uniqueId;
            thisClone.defaultShippingAddressId = ob.id;
            thisClone.defaultShippingAddressUniqueId = ob.uniqueId;
            thisClone.obName = this.obName;
            thisClone.obType = this.obType;
            thisClone.objectType = this.objectType;
            yield Account.updateObjects(thisClone);
            this.defaultShippingAddressId = ob.id;
            this.defaultShippingAddressUniqueId = ob.uniqueId;
        });
    }
    /**
     * Gets the default shipping address of the current
     * context. Returns undefined if there is no shipping
     * address
     *
     * @returns A promise resolving to the default shipping address for the account
     */
    getDefaultShippingAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.defaultShippingAddressId && !this.defaultShippingAddressUniqueId)
                return undefined;
            let fi = { id: this.defaultShippingAddressId, uniqueId: this.defaultShippingAddressUniqueId, objectType: "address" };
            let shippingAddress = yield Address_1.Address.getObjectsById(fi);
            if (shippingAddress.length === 0)
                return undefined;
            return shippingAddress[0];
        });
    }
    setDefaultPaymentMethod(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let thisClone = (0, cloneDeep_1.default)(this);
            for (let key in thisClone) {
                if (key !== 'defaultPaymentMethodId' && key !== 'defaultPaymentMethodUniqueId') {
                    delete thisClone[key];
                }
            }
            thisClone.id = this.id;
            thisClone.uniqueId = this.uniqueId;
            thisClone.defaultPaymentMethodId = ob.id;
            thisClone.defaultPaymentMethodUniqueId = ob.uniqueId;
            thisClone.obName = this.obName;
            thisClone.obType = this.obType;
            thisClone.objectType = this.objectType;
            console.log(thisClone);
            yield Account.updateObjects(thisClone);
            this.defaultPaymentMethodId = ob.id;
            this.defaultPaymentMethodUniqueId = ob.uniqueId;
        });
    }
    getDefaultPaymentMethod() {
        return __awaiter(this, void 0, void 0, function* () {
            let fluxId = new FluxIdentifier_1.FluxIdentifier(this.defaultPaymentMethodUniqueId, this.defaultPaymentMethodId, "payment_method");
            let paymentMethods = yield PaymentMethod_1.PaymentMethod.getObjectsById(fluxId);
            if (paymentMethods.length === 0)
                return undefined;
            return paymentMethods[0];
        });
    }
    constructor(account) {
        super(account, Account);
        this.obName = "Account";
        this.objectType = "account";
        Object.assign(this, account);
    }
    static generateSession(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield FluxType_1.FluxType.getBackendConn();
            return conn.createSession({
                id: arg.id,
                uniqueId: arg.uniqueId
            });
        });
    }
    generateAccountSession() {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield FluxType_1.FluxType.getBackendConn();
            return conn.createSession(this.getId());
        });
    }
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
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map