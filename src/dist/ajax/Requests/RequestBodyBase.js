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
exports.RequestBodyBase = void 0;
const FluxType_1 = require("../../flux_types/FluxType");
const BaseQuery_1 = require("../../flux_types/BaseQuery");
class RequestBodyBase {
    serializeRecursively(object) {
        if (object instanceof FluxType_1.FluxType || object instanceof BaseQuery_1.BaseQuery) {
            // If the object itself is a FluxType, serialize it
            let retVal = object.serialize();
            Object.keys(retVal).forEach(e => {
                retVal[e] = this.serializeRecursively(retVal[e]);
            });
            return retVal;
        }
        else {
            return object;
        }
    }
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
}
exports.RequestBodyBase = RequestBodyBase;
//# sourceMappingURL=RequestBodyBase.js.map