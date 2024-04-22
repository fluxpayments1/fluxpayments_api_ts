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
import { FluxIdentifier } from "./FluxIdentifier";
import _cloneDeep from 'lodash/cloneDeep';
import { IToken } from "./IToken";

export class Token extends FluxTypeBase {

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            payload: this.payload,
            objectType: "token"
        }
    }

    private payload: string
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
        const updated = await Token.updateObjects({
            payload: payload,
            id: this.id,
            uniqueId: this.uniqueId
        })

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



    /**
     * Merges the instance context to the
     * flux system. 
     * 
     * Any updated public fields on the context will
     * be merged to the flux system.
     * 
     * @returns The persisted instance
     */
    public async merge(): Promise<void> {
        let accs: Token[] = await (await FluxTypeBase.getTokenConn()).updateToken(this);
        if (accs.length !== 1) throw new Error("couldn't persist the Token");

        Object.assign(this, accs[0])

    }

    /**
     * Refreshes and synchronizes the current context
     * with the flux system. Will delete any and all changes
     * made to the context.
     */
    public async refresh(): Promise<void> {
        let accs: Token[] = await (await FluxTypeBase.getTokenConn()).getTokenById(this.getId())

        if (accs.length !== 1) throw new Error("couldn't refresh the Token");

        Object.assign(this, accs[0])

    }

    /**
     * Deletes the context from the flux system.
     * If accidentally invoked, please contact us.
     * We can reverse this.
     */
    public async delete(): Promise<void> {
        let rmAcc = await (await FluxTypeBase.getTokenConn()).deleteToken({ id: this.id, uniqueId: this.uniqueId, objectType: this.objectType })
        Object.assign(this, {})
    }

    /**
     * Saves the context to the flux system.
     */
    public async persist(): Promise<void> {
        let accs = await (await FluxTypeBase.getTokenConn()).createToken(this)
        this.setId(accs[0]);
    }

    public constructor(token?: Partial<IToken>) {
        super(token);

        if (token.token) {
            this.id = this.parseToken(token.token)
            delete token.token
        }

        Object.assign(this, token);
    }

    /**
     * Instantiates a new Token and
     * persists the Token to the flux system.
     * 
     * If the Token is already persisted, it will
     * load the context of that Token.
     * 
     * This WILL override any changes you've made to an
     * Token. If you need to make changes, create the
     * instance, update the public fields, then merge() your 
     * changes.
     * 
     * @param acc Token
     * @returns 
     */
    public static async createInstanceSafe(token: Partial<IToken>): Promise<Token> {
        let fi = (await FluxTypeBase.getTokenConn())

        let tok: Token = new Token(token)
        let createdTok = await fi.createTokenInstanceSafe(tok)
        if ((createdTok).length !== 1) throw new Error("error creating token")

        delete token.payload

        return createdTok[0];

    }

    /**
     * Instantiates a new Token and doesn't synchronize its 
     * context with the flux system.
     * 
     * Assumes that the FluxIdentifier has already been persisted in the
     * flux system.
     * 
     * If you have latency sensitive operations and are confident that the object
     * is persisted, use this method.
     * 
     * @param acc 
     * @returns 
     */
    public static createInstanceLazy(tok?: Partial<IToken>): Token {
        let tokRet: Token = new Token(tok)
        return tokRet;
    }

    /**
     * Allows you to query all tokens in your flux system.
     * The more complex your query the more expensive this
     * operation will be. Please be careful with this.
     * 
     * @param acc 
     * @returns 
     */


    /**
     * 
     * Allows you to update a token or set of tokens
     * 
     * @param tok 
     * @returns 
     */
    public static async updateObjects(tok: IToken | IToken[]): Promise<Token[]> {
        let fi = await FluxTypeBase.getTokenConn()

        if (Array.isArray(tok)) {
            let toks = tok.map(e => Token.createInstanceLazy(e))
            return await fi.updateToken(toks)
        }
        return await fi.updateToken(Token.createInstanceLazy(tok))
    }

    /**
     * Allow you to delete or delete a set of tokens.
     * 
     * @param tok 
     * @returns 
     */
    public static async deleteObjects(tok: IToken | IToken[]): Promise<FluxIdentifier[]> {
        let fi = await FluxTypeBase.getTokenConn()
        let toks;
        if (Array.isArray(tok)) {
            toks = tok.map(e => Token.createInstanceLazy(e))
        } else {
            toks = Token.createInstanceLazy(tok)
        }

        return await fi.deleteToken(toks)
    }


    /**
     * Allows you to create or create a set of tokens.
     * 
     * @param tok 
     * @returns 
     */
    public static async createObjects(tok: IToken | IToken[]): Promise<FluxIdentifier[]> {
        let fi = await FluxTypeBase.getTokenConn()

        if (Array.isArray(tok)) {
            let accs = tok.map(e => Token.createInstanceLazy(e))
            return await fi.createToken(accs)
        }
        return await fi.createToken(Token.createInstanceLazy(tok))
    }


    /**
     * Allows you to query or query a set of tokens.
     * 
     * @param tok 
     * @returns 
     */
    public static async getObjectsById(tok: IToken | IToken[]): Promise<Token[]> {
        let fi = await FluxTypeBase.getTokenConn()

        if (Array.isArray(tok)) {
            let toks = tok.map(e => Token.createInstanceLazy(e).getId())
            return await fi.getTokenById(toks)
        }

        return await fi.getTokenById(Token.createInstanceLazy(tok).getId())
    }


}