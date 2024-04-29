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

import { RequestBodyBase } from "./RequestBodyBase";
import { FluxType } from "../../flux_types/FluxType";

export class GenericUpdaterRequest<T extends FluxType> extends RequestBodyBase {

    constructor() {
        super();
    }

    private _updatedObjects: T[];

    get updatedObjects(): T[] {
        return this._updatedObjects;
    }

    set updatedObjects(product: T[]) {
        this._updatedObjects = product;
    }
    
    public loadClientData(product: T | T[]): void {
        this.updatedObjects = Array.isArray(product) ? product : [product];
        this._updatedObjects = this._updatedObjects.map(e => {return e.serialize()})
    }
}