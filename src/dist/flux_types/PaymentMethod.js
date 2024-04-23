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
exports.PaymentMethod = void 0;
const Address_1 = require("./Address");
const FluxType_1 = require("./FluxType");
class PaymentMethod extends FluxType_1.FluxType {
    serialize() {
        return {
            objectType: this.objectType,
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            payType: this.payType,
            address: this.address,
            encSensitiveData: this.encSensitiveData,
            encAesKey: this.encAesKey,
            aesNonce: this.aesNonce
        };
    }
    constructor(c) {
        super(c, PaymentMethod);
        this.obName = "PaymentMethod";
        this.objectType = "payment_method";
        if (!c)
            return;
        this.id = c.id;
        this.uniqueId = c.uniqueId;
        this.metadata = c.metadata;
        this.address = new Address_1.Address(c.address);
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
exports.PaymentMethod = PaymentMethod;
//# sourceMappingURL=PaymentMethod.js.map