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

import { BaseQuery } from "./BaseQuery";
import { IToken } from "./IToken";

export class TokenQuery extends BaseQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            token: this.token
        }
    }
    token: string;
    metadata: string;
    id: number;
    uniqueId?: number;
    protected objectType: string = "token";
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

    constructor(tokQ?: IToken) {
        super();
        Object.assign(this, tokQ);

        if (tokQ.token) {
            this.id = this.parseToken(tokQ.token)
            delete tokQ.token
        }


    }


    public static createQuery(ipq: IToken) {
        return new TokenQuery(ipq)
    }
}
