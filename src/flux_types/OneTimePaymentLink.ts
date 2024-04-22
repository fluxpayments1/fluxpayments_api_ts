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

export class OneTimePaymentLink extends FluxTypeBase {

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            uniqueId: this.uniqueId,
            liveStatus: this.liveStatus,
            removeOnSuccess: this.removeOnSuccess,
            paymentLink: this.paymentLink,
            accountId: this.accountId,
        };
    }

    id: number;
    metadata: string;
    uniqueId: string;
    liveStatus: any;
    removeOnSuccess: any;
    paymentLink: string;
    accountId: number;
    protected objectType: string = "one_time_payment_link";

    public constructor(oneTimePaymentLink?: Partial<OneTimePaymentLink>) {
        super(oneTimePaymentLink);
        Object.assign(this, oneTimePaymentLink)
    }

    public async refresh(ftb?: FluxTokenBackend): Promise<void> {
        let accs: OneTimePaymentLink[] = await (ftb || await FluxTypeBase.getTokenConn()).getOneTimePaymentLinkById(this.id);

        if (accs.length !== 1) throw new Error("couldn't refresh the OneTimePaymentLink");

        Object.assign(this, accs[0]);
    }

    public async merge(ftb?: FluxTokenBackend): Promise<void> {
        let accs: OneTimePaymentLink[] = await (ftb || await FluxTypeBase.getTokenConn()).updateOneTimePaymentLink(this);

        if (accs.length !== 1) throw new Error("couldn't persist the OneTimePaymentLink");

        Object.assign(this, accs[0]);
    }

    public async delete(ftb?: FluxTokenBackend): Promise<void> {
        await (ftb || await FluxTypeBase.getTokenConn()).deleteOneTimePaymentLink({ id: this.id, objectType: this.objectType });
        Object.assign(this, {});
    }

    public async persist(ftb?: FluxTokenBackend): Promise<void> {
        let accs = await (ftb || await FluxTypeBase.getTokenConn()).createOneTimePaymentLink(this);
        if (accs.length !== 1) throw new Error("couldn't persist the OneTimePaymentLink");
        this.id = accs[0].id;
    }

    // Additional static or instance methods can be added here as needed, similar to the Token class.
}
