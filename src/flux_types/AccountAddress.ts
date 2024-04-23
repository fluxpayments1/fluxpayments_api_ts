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

import { Address } from "./Address";
import { FluxType } from "./FluxType";
import { IAccountAddress } from "./IAccountAddress";



export class AccountAddress extends FluxType implements IAccountAddress {
    public obName: string = "AccountAddress"
    public serialize() {
        return {
            uniqueId: this.uniqueId,
            id :this.id,
            metadata: this.metadata,  
            accountId: this.accountId,
            accountUniqueId: this.accountUniqueId,
            addressId: this.addressId,
            addressUniqueId: this.addressUniqueId,
            address: this.address,
            objectType: "account_address"
        }    
    }

    uniqueId: string; 
    id : number;
    metadata: string;  
    accountId: number;
    accountUniqueId: string;
    addressId: number;
    addressUniqueId: string;
    address: Address
    protected objectType: string = "account_address"

    public constructor(add?: Partial<IAccountAddress>) {
        super(add, AccountAddress)
        Object.assign(this, add);
    }

    public static async createInstanceLazy(acc: Partial<IAccountAddress>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IAccountAddress>) {
        return await FluxType.instantiateInstance(acc, this)
    }

    
}
