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

import { FluxBaseObject } from "../../flux_types/FluxBaseObject";
import { ResponseBodyBase } from "./ResponseBodyBase";

export class GenericGetterResponse<T extends FluxBaseObject> extends ResponseBodyBase {
    _objects: T[];
    type: new (fbo: FluxBaseObject) => T;
    get objects() {
        return this._objects;
    }

    constructor(type: new () => T) {
        super();
        this.type = type;
    }

    set objects(products: T[]) {
        this._objects = products;
    }

    public getClientReturnValue(): T[] {
  
        this._objects = this._objects.map(prod => {
            let t = new this.type(prod);
            t.dataTableMetadata = this._metadata

            return t;
        });


        return this._objects
    }

}