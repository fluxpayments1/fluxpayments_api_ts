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

import { FluxType } from "./FluxType";

export class MulticastEmissionDataId {
    uuid: string;
    sequenceNumber: number;

    constructor(uuid?: string, sequenceNumber?: number) {
        this.uuid = uuid || '';
        this.sequenceNumber = sequenceNumber || 0;
    }

    // If you want to add methods and logic similar to your Java class, you can do it here.
}

export class EmissionData {
    private static readonly DEFAULT_MESSAGE_IDENTIFIER: number = -1;

    messageIdentifier: number = EmissionData.DEFAULT_MESSAGE_IDENTIFIER;
    objectId?: number;
    id: MulticastEmissionDataId;
    merchantId?: number;
    notifyType?: string;
    resyncRequired?: boolean;
    notifyObjectType?: string;
    associatedData: string


    constructor(obj) {
        Object.assign(this, obj);
    }

    getFluxType(): any {
        if (!this.associatedData) return undefined
        return this.associatedData

    }

    // Considering you also want a method to convert the instance to JSON:
    toJSON(): string {
        return JSON.stringify(this);
    }

    // You can continue to add methods and logic similar to your Java class if needed.
}
