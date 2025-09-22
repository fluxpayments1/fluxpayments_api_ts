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

import { RequestBodyBase } from "./RequestBodyBase";

export class CreatePaymentMethodRequest extends RequestBodyBase {
    private _cardNumber: string;
    private _expiryDate: string;
    private _cvv: string;
    private _cardholderName: string;
    private _billingAddress: string;

    get cardNumber(): string {
        return this._cardNumber;
    }

    set cardNumber(cardNumber: string) {
        this._cardNumber = cardNumber;
    }

    get expiryDate(): string {
        return this._expiryDate;
    }

    set expiryDate(expiryDate: string) {
        this._expiryDate = expiryDate;
    }

    get cvv(): string {
        return this._cvv;
    }

    set cvv(cvv: string) {
        this._cvv = cvv;
    }

    get cardholderName(): string {
        return this._cardholderName;
    }

    set cardholderName(cardholderName: string) {
        this._cardholderName = cardholderName;
    }

    get billingAddress(): string {
        return this._billingAddress;
    }

    set billingAddress(billingAddress: string) {
        this._billingAddress = billingAddress;
    }

    public loadClientData(cardNumber: string, expiryDate: string, cvv: string, cardholderName: string, billingAddress: string): void {
        this._cardNumber = cardNumber;
        this._expiryDate = expiryDate;
        this._cvv = cvv;
        this._cardholderName = cardholderName;
        this._billingAddress = billingAddress;
    }
}
