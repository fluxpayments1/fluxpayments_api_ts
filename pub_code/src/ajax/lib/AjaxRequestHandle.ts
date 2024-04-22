/*
 * Copyright (c) [Year] [Your Name or Your Company's Name]
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

import { SecurityHandler } from "../../ajax/security";
import { RequestBody } from "../../ajax/Requests";
import { ResponseBody } from "../../ajax/Responses";

export interface ARH {
    method: string,
    path: string,
}

export class AjaxRequestHandle<T extends RequestBody, U extends ResponseBody, V extends SecurityHandler> implements ARH {
    _desc: string
    _mthd: string
    _pth: string
    _req: T
    _res: U
    _sec: V


    constructor(req: new () => T, res: new (r?: any) => U, sec: V, type?: any) {
        if (req) this._req = new req();
        if (res) this._res = new res(type);
        this._sec = sec
    }

    get method() {
        return this._mthd;
    }

    set method(mthd: string) {
        this._mthd = mthd;
    }

    get path() {
        return this._pth;
    }

    set path(pth: string) {
        this._pth = pth;
    }

    get request() {
        return this._req;
    }

    set request(req: T) {
        this._req = req;
    }

    get response() {
        return this._res;
    }

    set response(res: U) {
        this._res = res;
    }

    get securityHandler() {
        return this._sec;
    }

    set securityHandler(sec: V) {
        this._sec = sec;
    }
}


