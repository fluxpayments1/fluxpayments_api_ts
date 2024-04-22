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
import { ResponseBody } from "./";

export abstract class ResponseBodyBase implements ResponseBody {

    _status: number;
    _metadata: any;

    getMetaData () : any {
        return this._metadata
    }

    get status(): number {
        return this._status;
    }

    set status(status: number) {
        this._status = status;
    }

    public sanitizeResults<T>(clazz: new (op? : any) => T, obj : any) {
        let basePropsSet = new Set(Object.keys(new clazz()));
        let keys = Object.keys(obj);
        for (let key of keys) {
            if (!basePropsSet.has(key) ) delete obj[key]
        }


    }

    public setResponseJSON(json: string): ResponseBody {
        /**
         * Parse the json as an object, walk through the
         * keys and set this[key] = jsonObj[key]
         * 
         * Follow convention an use the underscore. Otherwise
         * this framework will not work.
         */
        let jsonObj = JSON.parse(json);
        for (let key in jsonObj) {
            this["_".concat(key)] = jsonObj[key];
        }
        return this;
    }
    public abstract getClientReturnValue(): any

}


