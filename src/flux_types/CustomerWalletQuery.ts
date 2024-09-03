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

import { BaseQuery } from "./BaseQuery";
import { CustomerWallet } from "./CustomerWallet";
import { ICustomerWallet } from "./ICustomerWallet";
import { ICustomerWalletQuery } from "./ICustomerWalletQuery";
import { IWallet } from "./IWallet";
import { IWalletQuery } from "./IWalletQuery";
import { Wallet } from "./Wallet";


export class CustomerWalletQuery extends BaseQuery<CustomerWallet> implements ICustomerWalletQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            chain: this.chain,
            publicAddress: this.publicAddress
        }
    }
    chain: string;
    publicAddress;
    metadata: string;
    id: number;
    uniqueId?: string;
    protected objectType: string = "customer_wallet";

    constructor(tokQ?: ICustomerWallet) {
        super(CustomerWallet);
        Object.assign(this, tokQ);

    }


    public static createQuery(ipq: ICustomerWallet) {
        return new CustomerWalletQuery(ipq)
    }
}
