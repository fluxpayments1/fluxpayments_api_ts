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
import IUser from './IUser';
import { Permissions } from './Permissions';
export class User extends FluxType implements IUser {
    public obName: string = "User";

    public getDispName(): string {
        return this.customerPublicKey
    }

    public serialize() {
        return {
            id: this.id,
            objectType: "user",
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            isApiKey: this.isApiKey,
            isAdminKey: this.isAdminKey,
            isAccountLocked: this.isAccountLocked,
            userEmail: this.userEmail,
            permissions: this.permissions,
            password: this.password,
            customerPublicKey: this.customerPublicKey,
        }
    }


    uniqueId: string;
    id: number;
    metadata: string;
    isApiKey: boolean;
    isAdminKey: boolean;
    isAccountLocked: boolean;
    userEmail: string;
    customerPublicKey: string;
    password: string;
    permissions: Permissions[];
    protected objectType: string = "user";



    public constructor(user?: Partial<IUser>) {
        super(user, User);

        if (!user) return;

        Object.assign(this, user);
    }


}