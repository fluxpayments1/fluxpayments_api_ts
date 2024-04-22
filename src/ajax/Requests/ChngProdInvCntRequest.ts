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

import { FluxIdentifier } from "../../flux_types/";
import { RequestBodyBase } from ".";

export class ChngProdInvCntRequest extends RequestBodyBase{
    
    _multiplier: number;
    _prod: FluxIdentifier;
    _quantity: number

    get multiplier () {
        return this._multiplier
    }

    set multiplier (m: number) {
        this._multiplier = m
    }
    
    get prod () {
        return this._prod;
    }

    set prod (p : FluxIdentifier) {
        this._prod = p;
    }

    get quantity () {
        return this._quantity
    }

    set quantity(q : number) {
        this._quantity = q;
    }

        
    public loadClientData(m: number, q : number, p: FluxIdentifier): void {
        this._quantity = q;
        this._multiplier = m;
        this._prod = p
    }
}
