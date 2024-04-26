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

import { BaseQuery } from "./BaseQuery";
import { IProductQuery } from "./IProductQuery";
import { Product } from "./Product";
/**
 * This is an object that is used to query for products.
 */
export class ProductQuery extends BaseQuery<Product> implements IProductQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            name: this.name,
            type: this.type,
            subscriptionInterval: this.subscriptionInterval,
            category: this.category,
            objectType: this.objectType,
            pagination: this.pagination,
            additionalSearchOptions: this.additionalSearchOptions
        }
    }

    metadata: string;
    id: number;
    uniqueId?: string;
    name?: string;
    type?: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT';
    subscriptionInterval?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    category?: string;
    protected objectType: string = "product";

    constructor(productQuery?: IProductQuery) {
        super(Product);
        Object.assign(this, productQuery);
    }


    public static createQuery(ipq: IProductQuery) {
        return new ProductQuery(ipq)
    }
}
