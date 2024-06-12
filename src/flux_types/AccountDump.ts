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

import { AccountUserType } from "./AccountUserType";
import { DumpId } from "./DumpId";
import { FluxType } from "./FluxType";
import { IAccount } from "./IAccount";


export class AccountDump extends FluxType implements IAccount {
    public obName: string = "AccountDump";
    public serialize() {
        throw new Error("Method not implemented.");
    }
    protected objectType: string = "account_dump";

    public dumpId: DumpId
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public metadata: string;
    public accountEmail: string;
    public accountUserType: AccountUserType;
    public phoneNumber: string;
    public creationTime: Date;

    public getInterface(): IAccount {
        return {
            id: this.dumpId.refId,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            accountEmail: this.accountEmail,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            accountUserType: this.accountUserType,
            phoneNumber: this.phoneNumber
        } as IAccount
    }

    public constructor(accDump?: any) {
        super(accDump, AccountDump);
        Object.assign(this, accDump)
    }

    public static async createInstanceLazy(acc: Partial<IAccount>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IAccount>) {
        return await FluxType.instantiateInstance(acc, this)
    }


}