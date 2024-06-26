import { assert } from "chai";
import { Token } from "fluxpayments/flux_types";
import { TokenQuery } from "fluxpayments/flux_types";
import { Flux, flux } from "fluxpayments/lib";
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("Token class tests", function () {
    this.timeout(5000000); // 5-second timeout for each test case

    let token: Token;
    let fluxObj: Flux<any>;
    before(async () => {
        fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
    });

    it("should instantiate a Token", async () => {

        token = await Token.createInstanceSafe({
            payload: "hello world",
            metadata: "first token"
        });
        assert.isDefined(token);
    });

    it("should have the correct payload", async () => {

        assert.equal(token.getDecryptedPayload(), "hello world");
    });

    // Add more test cases for other properties and edge cases

    it("should update a Token", async () => {

        token.metadata = "updated metadata"
        await token.merge()

        let tokUpdated = await Token.getObjectsById({ id: token.id })
        assert.equal(tokUpdated[0].metadata, "updated metadata")

    });

    it("should refresh a Token", async () => {

        let staleTok = await Token.createInstanceLazy({ id: token.id })
        await staleTok.refresh()

        assert.equal(staleTok.metadata, "updated metadata")


    });

    // Add more test cases for other manipulation functions

    it("should query Tokens", async () => {
        const tokens = await Token.queryObjects<Token, TokenQuery>(new TokenQuery({
            id: token.id
        }));
        assert.isArray(tokens);
        assert.isNotEmpty(tokens);
        assert.equal(tokens[0].metadata, "updated metadata");
    });
    it("should return an empty array for non-existent id", async () => {
        const tokens = await Token.queryObjects(new TokenQuery({
            id: 999999 // non-existent id
        }));
        assert.isArray(tokens);
        assert.isEmpty(tokens);
    });

    it("should delete a Token", async () => {
        await delay(500)

        await token.delete();

        const tokens = await Token.queryObjects(new TokenQuery({
            id: token.id
        }));

        assert.isArray(tokens);
        assert.isEmpty(tokens);
    });

    it("should not find the deleted token", async () => {
        const tokens = await Token.queryObjects(new TokenQuery({
            id: token.id
        }));
        assert.isArray(tokens);
        assert.isEmpty(tokens);
    });

    after(async () => {
        // Cleanup code if needed
    });

})

