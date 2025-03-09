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
import { IPermissionsQuery } from "./IPermissionsQuery";
import { IProductQuery } from "./IProductQuery";
import { Permissions } from "./Permissions";
import { Product } from "./Product";
/**
 * This is an object that is used to query for products.
 */
export class PermissionsQuery extends BaseQuery<Permissions> implements IPermissionsQuery {
    protected objectType: string = "permissions";
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            permissionObjectType: this.permissionObjectType,
            permissionAction: this.permissionAction,
            objectType: this.objectType
        }
    }

    id?: number;
    uniqueId?: string;
    metadata?: string;
    permissionObjectType?: string;
    permissionAction?: string;

    constructor(permissionsQuery?: IPermissionsQuery) {
        super(Permissions);
        Object.assign(this, permissionsQuery);
    }


    public static createQuery(ipq: IProductQuery) {
        return new PermissionsQuery(ipq)
    }
}
