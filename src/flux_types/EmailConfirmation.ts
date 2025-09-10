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


import { IEmailConfirmation } from "./IEmailConfirmation";
import { Account } from "./Account";
import { Address } from "./Address";
import { FluxType } from './FluxType';


export class EmailConfirmation extends FluxType implements IEmailConfirmation {
    public obName: string = "EmailConfirmation";

    getDispName(): string {
        return this.email
    }

    objectType: string = "email_confirmation";
    payLink: string;
    email: string;
    code: string;
    acc: Account;
    accountSession: string;
    adds: Address[];

    public constructor(ec?: Partial<EmailConfirmation>) {
        super(ec, EmailConfirmation);
        Object.assign(this, ec)
    }

    public serialize() {
        return {
            id: this.id,
            payLink: this.payLink,
            email: this.email,
            code: this.code,
            objectType: this.objectType,
            acc: this.acc,
            adds: this.adds,
            accountSession: this.accountSession
        };
    }

}