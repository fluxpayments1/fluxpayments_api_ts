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

import Cookies from 'js-cookie';

import _cloneDeep from 'lodash/cloneDeep';
import { FluxType } from './FluxType';
import { ICustomerWallet } from './ICustomerWallet';
import { ICustomerSensitiveData } from './ICustomerSensitiveData';
import { BankAccount } from './BankAccount';
import { SecurityHandlerBase } from '../ajax/security';
import { Card } from './Card';


export class CustomerSensitiveData extends FluxType implements ICustomerSensitiveData {
    public obName: string = "CustomerSensitiveData";

    public getDispName(): string {
        return this.lastFour
    }


    public serialize() {
        return {
            id: this.id,
            lastFour: this.lastFour,
            token: this.token,
            email: this.email,
            accountType: this.accountType,
            type: this.type,
            isAuthorized: this.isAuthorized,
            encryptedAESKey: this.encryptedAESKey,
            encryptedPayload: this.encryptedPayload,
            accountSession: this.accountSession,
            firstName: this.firstName,
            lastName: this.lastName,
            nonce: this.nonce,
            shippingAddressId: this.shippingAddressId,
            objectType: this.objectType,
            oneTimeUseToken: this.oneTimeUseToken,
            transactionId: this.transactionId
        }
    }

    lastFour: string;
    token: string;
    email: string;
    accountType: string;
    type: string;
    isAuthorized: boolean;
    encryptedAESKey: string;
    shippingAddressId: number;
    approvalStatus: string;
    accountSession?: string;
    bankName: string;
    oneTimeUseToken: string;
    encryptedPayload: string;
    nonce: string;
    firstName: string;
    country: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    transactionId: number;
    objectType: string = "customer_sensitive_data";


    public constructor(c?: Partial<ICustomerSensitiveData>) {
        super(c, CustomerSensitiveData)
        Object.assign(this, c)
    }

    public static async createInstanceLazy(acc: Partial<ICustomerSensitiveData>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<ICustomerSensitiveData>) {
        return await FluxType.instantiateInstance(acc, this)
    }

    /**
     * This is how we keep our API's out of PCI scope.....
     * 
     * Everything is encrypted with the Data Transmissio Public Key
     * 
     * Only our tokenizer can decrypt the payload with the Data Transmissio Private Key
     * 
     * 
     * 
     * @param bankAccount 
     */
    public async loadSensitiveData(bankAccount: BankAccount) {
        this.lastFour = bankAccount.lastFour
        this.accountType = bankAccount.accountType
        this.type = "BANK_ACCOUNT"
        this.bankName = bankAccount.bankName
        this.firstName = bankAccount.firstName
        this.lastName = bankAccount.lastName
        this.oneTimeUseToken = bankAccount.oneTimeUseToken

        let nonce = SecurityHandlerBase.generateNonce()
        let aesKey = SecurityHandlerBase.genAesKey()

        let encryptedPayload = await SecurityHandlerBase.encryptAESBrowser(aesKey, nonce, JSON.stringify(bankAccount.serialize()));
        this.encryptedPayload = encryptedPayload
        
        this.nonce = nonce

        if (!localStorage.getItem("X-Pub-Enc-Key")) {
            throw new Error("No public encryption key found - data transmission key not found")
        }

        let encryptedAESKey = await SecurityHandlerBase.encryptRsaBrowser(localStorage.getItem("X-Pub-Enc-Key"), aesKey)
        this.encryptedAESKey = encryptedAESKey
        

        delete bankAccount.accountNumber
        delete bankAccount.routingNumber

    }

    public async loadSensitiveDataCard(card: Card) {
        this.lastFour = card.lastFour
        this.accountType = card.cardBrand
        this.type = "CREDIT_CARD"
        this.firstName = card.firstName
        this.lastName = card.lastName
        this.lastFour = card.lastFour

        let nonce = SecurityHandlerBase.generateNonce()
        let aesKey = SecurityHandlerBase.genAesKey()

        let encryptedPayload = await SecurityHandlerBase.encryptAESBrowser(aesKey, nonce, JSON.stringify(card.serialize()));
        this.encryptedPayload = encryptedPayload
        
        this.nonce = nonce

        if (!localStorage.getItem("X-Pub-Enc-Key")) {
            throw new Error("No public encryption key found - data transmission key not found")
        }

        let encryptedAESKey = await SecurityHandlerBase.encryptRsaBrowser(localStorage.getItem("X-Pub-Enc-Key"), aesKey)
        this.encryptedAESKey = encryptedAESKey
        

        delete card.cardNumber
        delete card.cvv
        delete card.expiryDate

    }
}