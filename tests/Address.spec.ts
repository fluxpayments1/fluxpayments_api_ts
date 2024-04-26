import { assert } from "chai";
import { Address } from "fluxpayments/flux_types";
import { AddressQuery } from "fluxpayments/flux_types";
import { Flux } from "fluxpayments/lib";
import { flux } from "fluxpayments/lib";

describe("Address specific tests", function () {
    let fluxObj: Flux<any>, add : Address, add2 : Address;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite

    before(async () => {
        try {
            fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

            add = await Address.createInstanceSafe({
                uniqueId: "FIRSTADDRESS"
            });
            add2 = await Address.createInstanceSafe({
                uniqueId: "SECONDADDRESS"
            });     
        } catch (e: any) {
            console.log(e.message)
        }

    });

    it("should have instantiated a fluxObj", () => {
        assert.isDefined(fluxObj);
    });

    it("should merge changes correctly, refresh objects correctly, and make correct use of load lazy", async () => {
        let address = await Address.createInstanceLazy({
            uniqueId: "FIRSTADDRESS",
        })

        await address.refresh()

        assert.isDefined(address.id)

        address.city = "TEST"

        await address.merge();

        address = await Address.createInstanceLazy({
            uniqueId: "FIRSTADDRESS",
        })

        await address.refresh()

        assert.equal(address.city, "TEST")

    })

    it("should manage addresses correctly and refresh the first add correctly", async () => {
        await add.refresh()

        assert.equal(add.city, "TEST")




    });

    after(async () => {

        await add.delete();
        await add2.delete();

        let addSearch = await Address.queryObjects(new AddressQuery({}));

        it("should clean up resources properly", () => {
            assert.lengthOf(addSearch, 0);
        })

    });
});
