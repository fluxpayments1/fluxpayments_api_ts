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

import { IPermissions } from "./IPermissions";
import { FluxType } from "./FluxType";

export class Permissions extends FluxType implements IPermissions {
    id: number;
    uniqueId: string;
    metadata: string;
    permissionObjectType: string;
    permissionAction: string;

    public getDispName(): string {
        return this.permissionObjectType.slice(0, 5) + ":" + this.permissionAction.slice(0, 5);
    }
    
    protected objectType: string = "permissions";

    public obName: string = "Permissions";
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            permissionObjectType: this.permissionObjectType,
            permissionAction: this.permissionAction,
        }
    }

    public constructor(c?: Partial<IPermissions>) {
        super(c, Permissions)
        if (!c) return;
        Object.assign(this, c);
    }



}
