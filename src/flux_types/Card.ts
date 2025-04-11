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

import { SecurityHandler } from "../ajax/security/SecurityHandler";
import { SensitiveClientDataSecurityHandle } from "../ajax/security/SensitiveClientDataSecurityHandle";
import { Flux } from "../lib/Flux";
import { Address } from "./Address";
import { BaseQuery } from "./BaseQuery";
import { CustomerSensitiveData } from "./CustomerSensitiveData";
import { FluxType } from "./FluxType";
import { ICard } from "./ICard";
import { IPaymentMethodQuery } from "./IPaymentMethodQuery";
import { PaymentMethod } from "./PaymentMethod";


export class Card extends FluxType implements ICard {
    public obName: string = "Card";
    public objectType: string = "card";

    public constructor (c : Partial<ICard>) {
        super(c, Card)
        Object.assign(this, c)
    }
    accountSession: string;
    expiryDate: string;
    address: Address;
    cardNumber: string;
    cvv: string;
    cardBrand: string;
    lastFour: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    uniqueId: string;
    metadata: string;
    firstName: string;
    lastName: string;
    id: number;
    payType: string;
    oneTimeUseToken: string;

    public serialize() {
        return {
            objectType: this.objectType,
            lastFour: this.lastFour,
            cardBrand: this.cardBrand,
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            expiryDate: this.expiryDate,
            oneTimeUseToken: this.oneTimeUseToken,
            cardNumber: this.cardNumber,
            cvv: this.cvv,
            firstName: this.firstName,
            lastName: this.lastName,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
        }
    }
    public getDispName(): string {
        return this.lastFour
    }

    public static async createInstanceLazy(acc: Partial<ICard>) {
        return await PaymentMethod.instantiateLazyInstance(acc, this)
    }



    public static parseCustomerSensitiveData(csd: CustomerSensitiveData) : Card {
        let card = new Card({
            lastFour: csd.lastFour,
            cardBrand: csd.accountType,
            firstName: csd.firstName,
            lastName: csd.lastName,
            oneTimeUseToken: csd.oneTimeUseToken,
        })
        return card
    }




}