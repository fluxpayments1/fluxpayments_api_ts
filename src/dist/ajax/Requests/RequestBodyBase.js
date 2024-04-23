"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBodyBase = void 0;
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
const Product_1 = require("../../flux_types/Product");
const Account_1 = require("../../flux_types/Account");
const Address_1 = require("../../flux_types/Address");
const ProductQuery_1 = require("../../flux_types/ProductQuery");
const AccountQuery_1 = require("../../flux_types/AccountQuery");
const AddressQuery_1 = require("../../flux_types/AddressQuery");
class RequestBodyBase {
    getRequestAsString() {
        let str = JSON.stringify(this);
        let obj = JSON.parse(str);
        let retObj = {};
        for (let key in obj) {
            retObj[key.replace("_", "")] = obj[key];
        }
        if (retObj["obType"])
            delete retObj["obType"];
        return JSON.stringify(retObj);
    }
    constructor() {
    }
    loadObjectType(obj) {
        let type;
        const getObType = (obj) => {
            let type;
            if (obj instanceof Product_1.Product || obj instanceof ProductQuery_1.ProductQuery)
                type = "product";
            if (obj instanceof Account_1.Account || obj instanceof AccountQuery_1.AccountQuery)
                type = "account";
            if (obj instanceof Address_1.Address || obj instanceof AddressQuery_1.AddressQuery)
                type = "address";
            return type;
        };
        try {
            obj.forEach(product => {
                type = getObType(product);
                product.objectType = type;
            });
        }
        catch (e) {
            type = getObType(obj);
            obj.objectType = type;
        }
    }
}
exports.RequestBodyBase = RequestBodyBase;
//# sourceMappingURL=RequestBodyBase.js.map