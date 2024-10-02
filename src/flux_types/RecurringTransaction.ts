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

import _cloneDeep from 'lodash/cloneDeep';
import { FluxType } from './FluxType';
import { IRecurringTransaction } from './IRecurringTransaction';
import { PaymentLink } from './PaymentLink';

export class RecurringTransaction extends FluxType implements IRecurringTransaction {
    public obName: string = "RecurringTransaction";

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            uniqueId: this.uniqueId,
            objectType: this.objectType,
            recurringAmount: this.recurringAmount,
            recurringTaxAmount: this.recurringTaxAmount,
            originalTransactionId: this.originalTransactionId,
            accountId: this.accountId,
            productId: this.productId,
            productDumpId: this.productDumpId,
            otplId: this.otplId,
            nextProcessDate: this.nextProcessDate,
            paymentLinks : this.paymentLinks,
            status: this.status,
        };
    }

    id: number;
    metadata: string;
    uniqueId: string;
    recurringAmount: number;
    recurringTaxAmount: number;
    nextProcessDate: Date;
    originalTransactionId: number;
    accountId: number;
    paymentLinks : PaymentLink[]
    productId: number;
    productDumpId: number;
    otplId: number;
    status: any;
    protected objectType: string = "recurring_transaction";

    public constructor(recurringTransaction?: Partial<RecurringTransaction>) {
        super(recurringTransaction, RecurringTransaction);
        Object.assign(this, recurringTransaction)
    }

    public static async createInstanceLazy(acc: Partial<IRecurringTransaction>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IRecurringTransaction>) {
        return await FluxType.instantiateInstance(acc, this)
    }

}
