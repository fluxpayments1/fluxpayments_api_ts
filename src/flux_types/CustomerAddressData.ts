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

import { FluxType } from './FluxType';
import { ICustomerAddressData } from './ICustomerAddressData';

export class CustomerAddressData extends FluxType implements ICustomerAddressData {
    public getDispName(): string {
        return this.streetAddress
    }
    public obName: string = "CustomerAddressData";

    id: number;
    email: string;
    streetAddress: string;
    activeStatus: boolean = true;
    country: string;
    zipcode: string;
    addressState: string;
    city: string;
    uniqueid: string;
    makeDefault: boolean;
    metadata: string;
    objectType: string = "customer_address_data";

    constructor(c?: Partial<CustomerAddressData>) {
        super(c, CustomerAddressData);
        Object.assign(this, c);
    }
    accountSession: string;

    public serialize() {
        return {
            id: this.id,
            email: this.email,
            streetAddress: this.streetAddress,
            activeStatus: this.activeStatus,
            country: this.country,
            makeDefault: this.makeDefault,
            zipcode: this.zipcode,
            addressState: this.addressState,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            city: this.city,
            uniqueid: this.uniqueid,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

}
