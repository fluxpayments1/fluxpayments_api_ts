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

import { RequestBodyBase } from ".";
import { Transaction, Product } from "../../flux_types/";

export class CreateTransactionRequest extends RequestBodyBase {
    private _prod: any[];
    private _txn: any;
    
    get txn () : any {
        return this._txn
    }
    
    set txn (txn : any) {
        this._txn = txn
    }

    get prod () : Product[] {
        return this._prod
    }

    set prod (prod : Product | Product[]) {
        this._prod = Array.isArray(prod) ? prod : [prod]
    }

    public loadClientData(txn: Transaction, prod : Product | Product[]): void {
        this._txn = txn.serialize()
        this._prod = Array.isArray(prod) ? prod : [prod]

        this._prod = this._prod.map(e => e.serialize())

    }
}
