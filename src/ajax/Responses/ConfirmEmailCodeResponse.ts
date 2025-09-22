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

import { ResponseBodyBase } from "./ResponseBodyBase";
import { CustomerAccountData } from "../../flux_types/CustomerAccountData";
import { CustomerSensitiveData } from "../../flux_types/CustomerSensitiveData";

// Interface for CustomerTransactionsData
export interface CustomerTransactionsData {
    id: number;
    masterMacId: number;
    email: string;
    databaseName: string;
    transactionId: number;
    activeStatus: boolean;
    createdAt: string;
    updatedAt: string;
    uniqueId: string;
    metadata: string;
    objectType: string;
    merchantId: number;
    version: number;
}

// Interface for TransactionDetails
export interface TransactionDetails {
    id: number;
    txnHash: string;
    direction: string;
    transactionId: number;
    productId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    productName: string;
    productDescription: string;
    productSku: string;
    currency: string;
    createdAt: string;
    updatedAt: string;
    activeStatus: boolean;
    uniqueId: string;
    metadata: string;
    objectType: string;
    merchantId: number;
    databaseName: string;
    version: number;
}

export class ConfirmEmailCodeResponse extends ResponseBodyBase {
    private _message: string;
    private _confirmed: boolean;
    private _transactionData: CustomerTransactionsData[];
    private _sensitiveData: CustomerSensitiveData[];
    private _accountData: CustomerAccountData[];
    private _transactionDetails: TransactionDetails[];

    get message(): string {
        return this._message;
    }

    set message(message: string) {
        this._message = message;
    }

    get confirmed(): boolean {
        return this._confirmed;
    }

    set confirmed(confirmed: boolean) {
        this._confirmed = confirmed;
    }

    get transactionData(): CustomerTransactionsData[] {
        return this._transactionData;
    }

    set transactionData(transactionData: CustomerTransactionsData[]) {
        this._transactionData = transactionData;
    }

    get sensitiveData(): CustomerSensitiveData[] {
        return this._sensitiveData;
    }

    set sensitiveData(sensitiveData: CustomerSensitiveData[]) {
        this._sensitiveData = sensitiveData;
    }

    get accountData(): CustomerAccountData[] {
        return this._accountData;
    }

    set accountData(accountData: CustomerAccountData[]) {
        this._accountData = accountData;
    }

    get transactionDetails(): TransactionDetails[] {
        return this._transactionDetails;
    }

    set transactionDetails(transactionDetails: TransactionDetails[]) {
        this._transactionDetails = transactionDetails;
    }

    public getClientReturnValue(): ConfirmEmailCodeResponse {
        return this;
    }
}
