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

import { FluxTypeBase } from "./FluxBaseObject";
import _cloneDeep from 'lodash/cloneDeep';

export class InstallmentTransaction extends FluxTypeBase {

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            originalTransactionId: this.originalTransactionId,
            installmentsLeft: this.installmentsLeft,
            installmentAmount: this.installmentAmount,
            otplId: this.otplId,
            installmentPeriod: this.installmentPeriod,
            status: this.status,
        };
    }

    id: number;
    metadata: string;
    originalTransactionId: number;
    installmentsLeft: number;
    installmentAmount: number;
    otplId: number;
    installmentPeriod: any;
    status: any;
    protected objectType: string = "installment_transaction";

    public constructor(installmentTransaction?: Partial<InstallmentTransaction>) {
        super(installmentTransaction);
        Object.assign(this, installmentTransaction)
    }

    public async refresh(): Promise<void> {
        let accs: InstallmentTransaction[] = await (await FluxTypeBase.getTokenConn()).getInstallmentTransactionById(this.id);

        if (accs.length !== 1) throw new Error("couldn't refresh the InstallmentTransaction");

        Object.assign(this, accs[0]);
    }

    public async merge(): Promise<void> {
        let accs: InstallmentTransaction[] = await (await FluxTypeBase.getTokenConn()).updateInstallmentTransaction(this);

        if (accs.length !== 1) throw new Error("couldn't persist the InstallmentTransaction");

        Object.assign(this, accs[0]);
    }

    public async delete(): Promise<void> {
        await (await FluxTypeBase.getTokenConn()).deleteInstallmentTransaction({ id: this.id, objectType: this.objectType });
        Object.assign(this, {});
    }

    public async persist(): Promise<void> {
        let accs = await (await FluxTypeBase.getTokenConn()).createInstallmentTransaction(this);
        if (accs.length !== 1) throw new Error("couldn't persist the InstallmentTransaction");
        this.id = accs[0].id;
    }

    // Additional static or instance methods can be added here as needed, similar to the Token class.
}
