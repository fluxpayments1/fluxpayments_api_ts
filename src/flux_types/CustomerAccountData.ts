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

import { CustomerAddressData } from './CustomerAddressData';
import { CustomerSensitiveData } from './CustomerSensitiveData';
import { FluxType } from './FluxType';
import { ICustomerAccountData } from './ICustomerAccountData';

export class CustomerAccountData extends FluxType implements ICustomerAccountData {
    public getDispName(): string {
        return this.email
    }
    public obName: string = "CustomerAccountData";

    id: number;
    email: string;
    streetAddress: string;
    activeStatus: boolean = true;
    customerAddressData: CustomerAddressData[];
    customerSensitiveData: CustomerSensitiveData[];
    defaultShippingAddressId: number;
    defaultPaymentMethodId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    uniqueid: string;
    defaultShippingAddress: CustomerAddressData;
    defaultPaymentMethod: CustomerSensitiveData;
    metadata: string;
    objectType: string = "customer_account_data";

    constructor(c?: Partial<CustomerAccountData>) {
        super(c, CustomerAccountData);
        Object.assign(this, c);
    }
    accountSession: string;

    public serialize() {
        return {
            id: this.id,
            email: this.email,
            streetAddress: this.streetAddress,
            activeStatus: this.activeStatus,
            customerAddressData: this.customerAddressData,
            customerSensitiveData: this.customerSensitiveData,
            defaultShippingAddressId: this.defaultShippingAddressId,
            defaultPaymentMethodId: this.defaultPaymentMethodId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            defaultShippingAddress: this.defaultShippingAddress,
            defaultPaymentMethod: this.defaultPaymentMethod,
            uniqueid: this.uniqueid,
            firstName: this.firstName,
            lastName: this.lastName,
            objectType: this.objectType,
            phoneNumber: this.phoneNumber,
            accountSession: this.accountSession,
            metadata: this.metadata,
        };
    }

}
