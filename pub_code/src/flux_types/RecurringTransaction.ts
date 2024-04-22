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

import { FluxBaseObject } from "./FluxBaseObject";
import _cloneDeep from 'lodash/cloneDeep';

export class RecurringTransaction extends FluxBaseObject {

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            uniqueId: this.uniqueId,
            objectType: this.objectType,
            recurringAmount: this.recurringAmount,
            recurringTaxAmount: this.recurringTaxAmount,
            originalTransactionId: this.originalTransactionId,
            productId: this.productId,
            productDumpId: this.productDumpId,
            otplId: this.otplId,
            status: this.status,
        };
    }

    id: number;
    metadata: string;
    uniqueId: string;
    recurringAmount: number;
    recurringTaxAmount: number;
    originalTransactionId: number;
    productId: number;
    productDumpId: number;
    otplId: number;
    status: any;
    protected objectType: string = "recurring_transaction";

    public constructor(recurringTransaction?: Partial<RecurringTransaction>) {
        super(recurringTransaction);
        Object.assign(this, recurringTransaction)
    }

    public async refresh(ftb?: FluxTokenBackend): Promise<void> {
        let accs: RecurringTransaction[] = await (ftb || await FluxBaseObject.getTokenConn()).getRecurringTransactionById(this.id);

        if (accs.length !== 1) throw new Error("couldn't refresh the RecurringTransaction");

        Object.assign(this, accs[0]);
    }

    public async merge(ftb?: FluxTokenBackend): Promise<void> {
        let accs: RecurringTransaction[] = await (ftb || await FluxBaseObject.getTokenConn()).updateRecurringTransaction(this);

        if (accs.length !== 1) throw new Error("couldn't persist the RecurringTransaction");

        Object.assign(this, accs[0]);
    }

    public async delete(ftb?: FluxTokenBackend): Promise<void> {
        await (ftb || await FluxBaseObject.getTokenConn()).deleteRecurringTransaction({ id: this.id, objectType: this.objectType });
        Object.assign(this, {});
    }

    public async persist(ftb?: FluxTokenBackend): Promise<void> {
        let accs = await (ftb || await FluxBaseObject.getTokenConn()).createRecurringTransaction(this);
        if (accs.length !== 1) throw new Error("couldn't persist the RecurringTransaction");
        this.id = accs[0].id;
    }


    // Additional static or instance methods can be added here as needed, similar to the Token class.
}
