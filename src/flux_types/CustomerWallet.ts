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

import _cloneDeep from 'lodash/cloneDeep';
import { FluxType } from './FluxType';
import { ICustomerWallet } from './ICustomerWallet';

export class CustomerWallet extends FluxType implements ICustomerWallet {
    public obName: string = "CustomerWallet";

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            publicAddress: this.publicAddress,
            chain: this.chain,
            objectType: "customer_wallet"
        }
    }

    publicAddress: string;
    chain: string
    id: number;
    uniqueId: string;
    metadata: string;
    protected objectType: string = "customer_wallet";



    public constructor(wallet?: Partial<ICustomerWallet>) {
        super(wallet, CustomerWallet);

        if (!wallet) return;

        Object.assign(this, wallet);
    }

    public static async createInstanceLazy(acc: Partial<ICustomerWallet>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<ICustomerWallet>) {
        return await FluxType.instantiateInstance(acc, this)
    }

}