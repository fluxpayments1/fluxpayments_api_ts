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
const chai_1 = require("chai");
const Token_1 = require("../flux_types/Token");
const TokenQuery_1 = require("../flux_types/TokenQuery");
const lib_1 = require("../lib");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
describe("Token class tests", function () {
    this.timeout(5000000); // 5-second timeout for each test case
    let token;
    let fluxObj;
    before(() => __awaiter(this, void 0, void 0, function* () {
        fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
    }));
    it("should instantiate a Token", () => __awaiter(this, void 0, void 0, function* () {
        token = yield Token_1.Token.createInstanceSafe({
            payload: "hello world",
            metadata: "first token"
        });
        chai_1.assert.isDefined(token);
    }));
    it("should have the correct payload", () => __awaiter(this, void 0, void 0, function* () {
        chai_1.assert.equal(token.getDecryptedPayload(), "hello world");
    }));
    // Add more test cases for other properties and edge cases
    it("should update a Token", () => __awaiter(this, void 0, void 0, function* () {
        token.metadata = "updated metadata";
        yield token.merge();
        let tokUpdated = yield Token_1.Token.getObjectsById({ id: token.id });
        chai_1.assert.equal(tokUpdated[0].metadata, "updated metadata");
    }));
    it("should refresh a Token", () => __awaiter(this, void 0, void 0, function* () {
        let staleTok = yield Token_1.Token.createInstanceLazy({ id: token.id });
        yield staleTok.refresh();
        chai_1.assert.equal(staleTok.metadata, "updated metadata");
    }));
    // Add more test cases for other manipulation functions
    it("should query Tokens", () => __awaiter(this, void 0, void 0, function* () {
        const tokens = yield Token_1.Token.queryObjects(new TokenQuery_1.TokenQuery({
            id: token.id
        }));
        chai_1.assert.isArray(tokens);
        chai_1.assert.isNotEmpty(tokens);
        chai_1.assert.equal(tokens[0].metadata, "updated metadata");
    }));
    it("should return an empty array for non-existent id", () => __awaiter(this, void 0, void 0, function* () {
        const tokens = yield Token_1.Token.queryObjects(new TokenQuery_1.TokenQuery({
            id: 999999 // non-existent id
        }));
        chai_1.assert.isArray(tokens);
        chai_1.assert.isEmpty(tokens);
    }));
    it("should delete a Token", () => __awaiter(this, void 0, void 0, function* () {
        yield delay(500);
        yield token.delete();
        const tokens = yield Token_1.Token.queryObjects(new TokenQuery_1.TokenQuery({
            id: token.id
        }));
        chai_1.assert.isArray(tokens);
        chai_1.assert.isEmpty(tokens);
    }));
    it("should not find the deleted token", () => __awaiter(this, void 0, void 0, function* () {
        const tokens = yield Token_1.Token.queryObjects(new TokenQuery_1.TokenQuery({
            id: token.id
        }));
        chai_1.assert.isArray(tokens);
        chai_1.assert.isEmpty(tokens);
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        // Cleanup code if needed
    }));
});
//# sourceMappingURL=Token.spec.js.map