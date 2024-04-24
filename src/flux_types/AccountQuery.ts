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

import { Account } from "./Account";
import { AccountUserType } from "./AccountUserType";
import { BaseQuery } from "./BaseQuery";
import { IAccountQuery } from "./IAccountQuery";


export class AccountQuery extends BaseQuery<Account> {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            accountEmail: this.accountEmail,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            objectType: this.objectType,
            pagination: this.pagination,
            additionalSearchOptions: this.additionalSearchOptions,
            accountUserType: this.accountUserType,
            defaultShippingAddressId: this.defaultShippingAddressId,
            defaultShippingAddressUniqueId: this.defaultShippingAddressUniqueId,
            defaultPaymentMethodId: this.defaultPaymentMethodId,
            defaultPaymentMethodUniqueId: this.defaultPaymentMethodUniqueId
        }
    }

    id: number;
    uniqueId: string;
    metadata: string;
    accountEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    accountUserType: AccountUserType;
    defaultShippingAddressId: number;
    defaultShippingAddressUniqueId: string;
    defaultPaymentMethodId: number;
    defaultPaymentMethodUniqueId: string;
    protected objectType: string = "account";

    constructor(accQ?: IAccountQuery){
        super(Account);
        this.attachedObject = Account
        Object.assign(this, accQ);
    }

    public static createQuery(accQ? : IAccountQuery) {return new AccountQuery(accQ)}
}
