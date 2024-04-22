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
import { ResponseBodyBase } from "./ResponseBodyBase";
import { FluxTypeBase } from "../../flux_types/FluxBaseObject";

export class GenericUpdaterResponse<T extends FluxTypeBase> extends ResponseBodyBase {
    type: new (fbo) => T
    _updatedObjects: T[];

    constructor(type: new (fbo) => T) {
        super()
        this.type = type
    }

    get updatedObjects(): T[] {
        return this._updatedObjects;
    }

    set updatedObjects(products: T[]) {
        this._updatedObjects = products;
    }

    public getClientReturnValue(): T[] {
        if (this._updatedObjects)
            this._updatedObjects = this._updatedObjects.map(prod => {
                return new this.type(prod);
            });

        return this._updatedObjects;
    }
}