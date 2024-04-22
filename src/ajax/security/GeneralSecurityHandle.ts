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
import { SecurityHandlerBase } from "./";

export class GeneralSecurityHandle extends SecurityHandlerBase {

    private _publickey : string
    
    get publicKey () {
        return this._publickey
    }

    set publicKey (pk : string) {
        this._publickey = pk;
    }

    constructor(pk: string) {
        super();
        this._publickey = pk;
    }

    public async decodeResponse(response: string): Promise<string> {
        return response;
    }
    public async encodeRequest(request: string, headers: Map<string, string>): Promise<string> {
        return request;
    }
    public async createHeaders(): Promise<Map<string, string>> {
        let hdrs = new Map<string, string>();
        hdrs.set("X-Key", this._publickey)
        return hdrs;
    }

}