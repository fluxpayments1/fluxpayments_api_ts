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
import { ITransactionProductQuery } from "./ITransactionProductQuery";
import { TransactionProduct } from "./TransactionProduct";

/**
 * This is an object that is used to query for transaction products.
 */
export class TransactionProductQuery extends BaseQuery<TransactionProduct> implements ITransactionProductQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            productId: this.productId,
            productVersion: this.productVersion,
            productDumpId: this.productDumpId,
            productUniqueId: this.productUniqueId,
            transactionId: this.transactionId,
            transactionUniqueId: this.transactionUniqueId,
            quantity: this.quantity,
            backOrdered: this.backOrdered,
            createdAt: this.createdAt,
            objectType: this.objectType,
            pagination: this.pagination,
            additionalSearchOptions: this.additionalSearchOptions
        }
    }

    metadata: string;
    id: number;
    uniqueId?: string;
    productId?: number;
    productVersion?: number;
    productDumpId?: number;
    productUniqueId?: string;
    transactionId?: number;
    transactionUniqueId?: string;
    quantity?: number;
    backOrdered?: boolean;
    objectType: string = "transaction_product";

    constructor(transactionProductQuery?: ITransactionProductQuery) {
        super(TransactionProduct);
        Object.assign(this, transactionProductQuery);
    }

    public static createQuery(itpq: ITransactionProductQuery) {
        return new TransactionProductQuery(itpq)
    }
}

