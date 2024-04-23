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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionQuery = void 0;
const BaseQuery_1 = require("./BaseQuery");
class TransactionQuery extends BaseQuery_1.BaseQuery {
    serialize() {
        return {
            id: this.id,
            email: this.email,
            cardBrandId: this.cardBrandId,
            version: this.version,
            metadata: this.metadata,
            accountId: this.accountId,
            accountDumpId: this.accountDumpId,
            direction: this.direction,
            paymentMethodId: this.paymentMethodId,
            transactionCost: this.transactionCost,
            transactionType: this.transactionType,
            paymentMethodUniqueid: this.paymentMethodUniqueid,
            accountVersion: this.accountVersion,
            paymentMethodAddressVersion: this.paymentMethodAddressVersion,
            inventoryOnlyOrder: this.inventoryOnlyOrder,
            paymentMethodAddressDumpId: this.paymentMethodAddressDumpId,
            paymentMethodAddressId: this.paymentMethodAddressId,
            uniqueid: this.uniqueid,
            taxRate: this.taxRate,
            taxAmount: this.taxAmount,
            amount: this.amount,
            activeStatus: this.activeStatus,
            currency: this.currency,
            transactionStatus: this.transactionStatus,
            shippingAddressId: this.shippingAddressId,
            shippingAddressDumpId: this.shippingAddressDumpId,
            shippingAddressVersion: this.shippingAddressVersion,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            objectType: this.objectType,
            hasBackOrderedProducts: this.hasBackOrderedProducts,
            baseTransaction: this.baseTransaction,
        };
    }
    constructor(tokQ) {
        super();
        this.objectType = "transaction";
        Object.assign(this, tokQ);
        // Add additional constructor logic here if needed
    }
    // Additional methods like getToken and parseToken can be added here
    static createQuery(ipq) {
        return new TransactionQuery(ipq);
    }
}
exports.TransactionQuery = TransactionQuery;
//# sourceMappingURL=TransactionQuery.js.map