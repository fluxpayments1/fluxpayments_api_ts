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
import _cloneDeep from 'lodash/cloneDeep';
import { FluxType } from './FluxType';
import { IToken } from './IToken';

export class Token extends FluxType implements IToken {
    public obName: string = "Token";

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            payload: this.payload,
            objectType: "token"
        }
    }

    payload: string
    token: string
    currency: string;
    id: number;
    uniqueId: string;
    metadata: string;
    protected objectType: string = "token";

    /**
     * Get the decrypted payload
     * 
     * @returns The encrypted payload, be careful with this
     * It return the raw decrypted payload.
     * 
     */
    getDecryptedPayload() {
        return this.payload
    }

    async setDecryptedPayload(payload: string) {

        let t : Token = new Token({
            id: this.id,
            uniqueId: this.uniqueId
        })

        t.payload = payload

        const updated = await FluxType.updateObjects<Token>(t)

        if (updated && updated.length === 1) {
            this.payload = payload
        } else {
            throw new Error("couldn't update token successfully");
        }



    }

    /**
     * @returns The token associated with the
     */
    public getToken(): string {
        const idString = this.id.toString();
        const desiredLength = 25;

        if (idString.length >= desiredLength) {
            return idString;
        }

        const leadingZeros = '0'.repeat(desiredLength - idString.length);
        return "T" + leadingZeros + idString;
    }

    public parseToken(tokenString: string): number {
        // Remove 'T' characters
        let trimmedTokenString = tokenString.replace(/T/g, '');

        // Remove leading zeros
        trimmedTokenString = trimmedTokenString.replace(/^0+/, '');

        // Parse the remaining string as an integer
        const parsedId = parseInt(trimmedTokenString, 10);

        return isNaN(parsedId) ? 0 : parsedId;
    }




    public constructor(token?: Partial<IToken>) {
        super(token, Token);

        if (!token) return;

        if (token.token) {
            this.id = this.parseToken(token.token)
            delete token.token
        }

        Object.assign(this, token);
    }

    public static async createInstanceLazy(acc: Partial<IToken>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IToken>) {
        return await FluxType.instantiateInstance(acc, this)
    }

}