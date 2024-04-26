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

import { AccountAddress } from "./AccountAddress";
import { BaseQuery } from "./BaseQuery";
import { IAccountAddressQuery } from "./IAccountAddressQuery";



/**
 * This is an object that is used to query for products.
 */

export class AccountAddressQuery extends BaseQuery<AccountAddress> implements IAccountAddressQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            addressUniqueId: this.addressUniqueId,
            accountUniqueId: this.accountUniqueId,
            addressId: this.addressId,
            accountId: this.accountId,
            objectType: this.objectType,
            pagination: this.pagination,
            additionalSearchOptions: this.additionalSearchOptions
        }
    }

    uniqueId: string;
    id: number;
    protected objectType: string = "account_address";
    accountId: number;
    addressId: number;
    accountUniqueId: string;
    addressUniqueId: string;

    constructor(accQ?: IAccountAddressQuery) {
        super(AccountAddress);
        Object.assign(this, accQ);
    }

    public static createQuery(accQ?: IAccountAddressQuery) { return new AccountAddressQuery(accQ) }
}
