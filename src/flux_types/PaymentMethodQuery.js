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
exports.PaymentMethodQuery = void 0;
const BaseQuery_1 = require("./BaseQuery");
const PaymentMethod_1 = require("./PaymentMethod");
class PaymentMethodQuery extends BaseQuery_1.BaseQuery {
    serialize() {
        return {
            id: this.id,
            uniqueid: this.uniqueid,
            metadata: this.metadata,
            activeStatus: this.activeStatus,
            token: this.token,
            payType: this.payType,
            addressId: this.addressId,
            firstName: this.firstName,
            lastName: this.lastName,
            objectType: this.objectType,
        };
    }
    constructor(tokQ) {
        super(PaymentMethod_1.PaymentMethod);
        this.objectType = "payment_method";
        Object.assign(this, tokQ);
        // Add additional constructor logic here if needed
    }
    // Additional methods like getToken and parseToken can be added here
    static createQuery(ipq) {
        return new PaymentMethodQuery(ipq);
    }
}
exports.PaymentMethodQuery = PaymentMethodQuery;
//# sourceMappingURL=PaymentMethodQuery.js.map