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

import { AdditionalSearchOptions } from "../../flux_types/AdditionalSearchOptions";
import { BaseQuery } from "../../flux_types/BaseQuery";
import { PaginationSupport } from "../../flux_types/PaginationSupport";
import { RequestBodyBase } from "./RequestBodyBase";

export class GenericGetterRequest<T extends BaseQuery> extends RequestBodyBase {
    _queryObj: T;
    _additionalSearchOptions: AdditionalSearchOptions[];
    _pagination: PaginationSupport;
    _lookupPage: string

    get lookupPage(): string {
        return this._lookupPage
    }

    set lookupPage(s: string) {
        this._lookupPage = s
    }

    get additionalSearchOptions(): AdditionalSearchOptions[] {
        return this._additionalSearchOptions;
    }

    set additionalSearchOptions(additionalSearchOptions: AdditionalSearchOptions[]) {
        this._additionalSearchOptions = additionalSearchOptions
    }

    get pagination(): PaginationSupport {
        return this._pagination
    }

    set pagination(paginationSupport: PaginationSupport) {
        this._pagination = paginationSupport;
    }

    get queryObj(): T {
        return this._queryObj;
    }

    set queryObj(prodQuery: T) {
        this._queryObj = prodQuery;
    }

    public loadClientData(prodQuery: T): void {
        this._queryObj = prodQuery.serialize();

        if (prodQuery.lookupPage) this._lookupPage = prodQuery.lookupPage

        this._additionalSearchOptions = this._queryObj.additionalSearchOptions

        this._queryObj.additionalSearchOptions = undefined
        delete this._queryObj.additionalSearchOptions

        this._pagination = this._queryObj.pagination

        this._queryObj.pagination = undefined
        delete this._queryObj.pagination

    }

}