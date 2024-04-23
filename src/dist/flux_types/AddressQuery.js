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
exports.AddressQuery = void 0;
const BaseQuery_1 = require("./BaseQuery");
class AddressQuery extends BaseQuery_1.BaseQuery {
    serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            streetAddress: this.streetAddress,
            country: this.country,
            zipCode: this.zipCode,
            city: this.city,
            objectType: this.objectType,
            pagination: this.pagination,
            additionalSearchOptions: this.additionalSearchOptions
        };
    }
    constructor(addressQuery) {
        super();
        this.objectType = "address";
        Object.assign(this, addressQuery);
    }
    static createQuery(accQ) { return new AddressQuery(accQ); }
}
exports.AddressQuery = AddressQuery;
//# sourceMappingURL=AddressQuery.js.map