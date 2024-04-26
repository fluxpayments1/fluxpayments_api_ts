"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const FluxType_1 = require("./FluxType");
class Token extends FluxType_1.FluxType {
    serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            payload: this.payload,
            objectType: "token"
        };
    }
    /**
     * Get the decrypted payload
     *
     * @returns The encrypted payload, be careful with this
     * It return the raw decrypted payload.
     *
     */
    getDecryptedPayload() {
        return this.payload;
    }
    setDecryptedPayload(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let t = new Token({
                id: this.id,
                uniqueId: this.uniqueId
            });
            t.payload = payload;
            const updated = yield FluxType_1.FluxType.updateObjects(t);
            if (updated && updated.length === 1) {
                this.payload = payload;
            }
            else {
                throw new Error("couldn't update token successfully");
            }
        });
    }
    /**
     * @returns The token associated with the
     */
    getToken() {
        const idString = this.id.toString();
        const desiredLength = 25;
        if (idString.length >= desiredLength) {
            return idString;
        }
        const leadingZeros = '0'.repeat(desiredLength - idString.length);
        return "T" + leadingZeros + idString;
    }
    parseToken(tokenString) {
        // Remove 'T' characters
        let trimmedTokenString = tokenString.replace(/T/g, '');
        // Remove leading zeros
        trimmedTokenString = trimmedTokenString.replace(/^0+/, '');
        // Parse the remaining string as an integer
        const parsedId = parseInt(trimmedTokenString, 10);
        return isNaN(parsedId) ? 0 : parsedId;
    }
    constructor(token) {
        super(token, Token);
        this.obName = "Token";
        this.objectType = "token";
        if (!token)
            return;
        if (token.token) {
            this.id = this.parseToken(token.token);
            delete token.token;
        }
        Object.assign(this, token);
    }
    static createInstanceLazy(acc) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FluxType_1.FluxType.instantiateLazyInstance(acc, this);
        });
    }
    static createInstanceSafe(acc) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FluxType_1.FluxType.instantiateInstance(acc, this);
        });
    }
}
exports.Token = Token;
//# sourceMappingURL=Token.js.map