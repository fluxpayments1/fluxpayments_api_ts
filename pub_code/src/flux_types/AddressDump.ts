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

import { DumpId } from "./DumpId";
import { FluxBaseObject } from "./FluxBaseObject";
import { IAddress } from "./IAddress";


export class AddressDump extends FluxBaseObject {
    protected objectType: string = "address_dump";
    public serialize() {
        throw new Error("Method not implemented.");
    }
    public delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public merge(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public persist(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public refresh(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public dumpId: DumpId
    public metadata: string;
    public streetAddress: string;
    public country: string;
    public zipCode: string;
    public addressState: string;
    public city: string;

    public getInterface(): IAddress {
        return {
            id: this.dumpId.refId,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            streetAddress: this.streetAddress,
            country: this.country,
            zipCode: this.zipCode,
            addressState: this.addressState,
            city: this.city
        } as IAddress
    }

    public constructor(addDump?: any) {
        super(addDump);
        Object.assign(this, addDump)
    }


}