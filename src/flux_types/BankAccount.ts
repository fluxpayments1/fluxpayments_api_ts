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
import { IBankAccount } from "./IBankAccount";
import { SecurityHandlerBase, SensitiveClientDataSecurityHandle } from "../ajax/security";
import { SecurityHandler } from "../ajax/security";
import { Flux, fluxBrowser } from "../lib";
import { CustomerSensitiveData } from "./CustomerSensitiveData";
import Cookies from 'js-cookie';
export class BankAccount extends FluxType implements IBankAccount {
    public obName: string = "BankAccount";
    public objectType: string = "bank_account";


    public serialize() {
        return {
            objectType: this.objectType,
            lastFour: this.lastFour,
            accountNumber: this.accountNumber,
            oneTimeUseToken: this.oneTimeUseToken,
            routingNumber: this.routingNumber,
            bankName: this.bankName,
        }
    }
    public constructor(c: Partial<IBankAccount>) {
        super(c, BankAccount)
        Object.assign(this, c)
    }
    lastFour: string;
    oneTimeUseToken: string;
    bankName: string;
    routingNumber: string;
    bankBrand: string;
    accountNumber: string;
    accountType: string;
    accountSession: string;
    metadata: string;
    firstName: string;
    lastName: string;

    public static parseCustomerSensitiveData(csd: CustomerSensitiveData) : BankAccount {
        let ba = new BankAccount({
            lastFour: csd.lastFour,
            bankName: csd.bankName,
            accountType: csd.accountType,
            oneTimeUseToken: csd.oneTimeUseToken,
            id: csd.id,
            firstName: csd.firstName,
            lastName: csd.lastName
        })
        return ba
    }

    public async validateBankAccount() {
        //Here we need to create a customer sensitive data object and submit a request
        //to the backend to validate the bank account


        let sensitiveData = new CustomerSensitiveData()


        let xPubEncKey = localStorage.getItem('X-Pub-Enc-Key')

        let f: Flux<SecurityHandler> = await fluxBrowser()


        let secH: SecurityHandler = f.securityHandle

        let aesKey = SecurityHandlerBase.genAesKey()
        let aesNonce = SecurityHandlerBase.generateNonce();


        let encAesKey = await SecurityHandlerBase.encryptRsaBrowser(xPubEncKey, aesKey)

        let encSensitiveData = await SecurityHandlerBase.encryptAESBrowser(aesKey, aesNonce, JSON.stringify(sensitiveData))


        sensitiveData.encryptedAESKey = encAesKey
        sensitiveData.nonce = aesNonce
        sensitiveData.encryptedPayload = encSensitiveData
        sensitiveData.lastFour = this.lastFour
        sensitiveData.accountType = this.accountType
        sensitiveData.type = "BANK_ACCOUNT"




        let secHandle = undefined
        if (this.accountSession) {
            secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, this.accountSession)
        } else {
            throw new Error("must have an account session");
        }


        await f.validateAndCreatePaymentMethod(sensitiveData, secHandle)

    }

    public getDispName(): string {
        return this.lastFour
    }

}