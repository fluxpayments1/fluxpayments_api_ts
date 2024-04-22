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

import {Address, Account, Product, AccountQuery, ProductQuery, AddressQuery} from "../../flux_types/";
import { RequestBody } from "./";

export abstract class RequestBodyBase implements RequestBody {
    public abstract loadClientData(...args: any) : void
    public getRequestAsString() : string {
        let str = JSON.stringify(this);
        let obj = JSON.parse(str);
        let retObj = {}
        for (let key in obj) {
            retObj[key.replace("_", "")] = obj[key];
        }
        if (retObj["obType"]) delete retObj["obType"]
        return JSON.stringify(retObj);

    }
    constructor() {
        
    }
    public loadObjectType (obj : any) : void {

        let type: string;
        const getObType = (obj: any) => { 
            let type: string;
            if (obj instanceof Product || obj instanceof ProductQuery) type = "product";
            if (obj instanceof Account || obj instanceof AccountQuery) type = "account";
            if (obj instanceof Address || obj instanceof AddressQuery) type = "address";
            return type
        }
        try {
            obj.forEach(product => {
                type = getObType(product);
                product.objectType = type;
            })
        } catch (e) {
            type = getObType(obj);
            obj.objectType = type
        }

    }

}
