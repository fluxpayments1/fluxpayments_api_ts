import { assert } from "chai";
import { AccountQuery } from "../flux_types/AccountQuery";
import { Address } from "../flux_types/Address";
import { AddressQuery } from "../flux_types/AddressQuery";
import { Account, AccountUserType, IAccount } from "../flux_types/index";
import { Flux } from "../lib/Flux";
import { flux } from "../lib/index";
import { FluxSockets } from "../lib/FluxSockets";
import { initializeFluxWebSocket } from "./A_Websocket.spec";



describe("Account specific tests", function () {
    let fluxObj: Flux<any>, acc : Account, acc2 : Account, adds : Address[], adds2 : Address[];
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    let fluxWebsocket : FluxSockets;
    before(async () => {
        try {
            fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            fluxWebsocket = await initializeFluxWebSocket()
            acc = await Account.createInstanceSafe({
                accountUserType: AccountUserType.CUSTOMER,
                uniqueId: "FIRSTACCOUNT"
            });
            acc2 = await Account.createInstanceSafe({
                accountUserType: AccountUserType.CUSTOMER,
                uniqueId: "SECONDACCOUNT"
            });
    
            await acc.addAddress(await Address.createInstanceSafe({
                uniqueId: "FIRSTADDRESS",
                streetAddress: "18548 ROCOCO ROAD"
            }));
            await acc.addAddress([await Address.createInstanceSafe({
                uniqueId: "SECONDADDRESS",
                streetAddress: "IDK"
            })]);
            await acc2.addAddress(await Address.createInstanceSafe({
                uniqueId: "THIRDADDRESS",
                streetAddress: "18549 ROCOCO ROAD"
            }));
            await acc2.addAddress([await Address.createInstanceSafe({
                uniqueId: "FOURTHADDRESS",
                streetAddress: "IDK 2"
            })]);       
        } catch (e: any) {
            console.log(e)
        }

    });

    it("should have instantiated a fluxObj", () => {
        assert.isDefined(fluxObj);
    });

    it("should have created 2 addresses and added them to the first account", async () => {
        adds = (await acc.getAddressses()).sort((a, b) => a.id - b.id);
        assert.lengthOf(adds, 2);
        assert.equal(adds[0].uniqueId, "FIRSTADDRESS");
        assert.equal(adds[1].uniqueId, "SECONDADDRESS");
    });

    it("should have created 2 addresses and added them to the second account", async () => {
        adds2 = (await acc2.getAddressses()).sort((a, b) => a.id - b.id);
        assert.lengthOf(adds2, 2);
        assert.equal(adds2[0].uniqueId, "THIRDADDRESS");
        assert.equal(adds2[1].uniqueId, "FOURTHADDRESS");  // Corrected typo here from "ROURTHADDRESS" to "FOURTHADDRESS"
    });

    it("should not allow you to add the same address twice", async () => {
        
        try {
            await acc.addAddress([await Address.createInstanceSafe({
                uniqueId: "SECONDADDRESS",
                streetAddress: "IDK"
            })]);
        } catch(e: any) {
            console.log(e.message)
        }

        assert.lengthOf(await acc.getAddressses(), 2)


    })

    it("should merge changes correctly, refresh objects correctly, and make correct use of load lazy", async () => {
        let account = await Account.createInstanceLazy({
            uniqueId: "FIRSTACCOUNT",
        })

        await account.refresh()

        assert.isDefined(account.id)

        account.lastName = "TEST"

        await account.merge();

        account = await Account.createInstanceLazy({
            uniqueId: "FIRSTACCOUNT",
        })

        await account.refresh()

        assert.equal(account.lastName, "TEST")

    })

    it("should manage addresses correctly and refresh the first acc correctly", async () => {
        await acc.refresh()

        assert.equal(acc.lastName, "TEST")

        await acc.removeAddress(adds);
        let newAdds = await acc.getAddressses();
        assert.lengthOf(newAdds, 0);

        let newAdds2 = await acc2.getAddressses();
        assert.lengthOf(newAdds2, 2);

        await acc2.removeAddress(newAdds2);
        newAdds2 = await acc2.getAddressses();
        assert.lengthOf(newAdds2, 0);
    });

    after(async () => {
        let allAddresses = adds.concat(adds2);
        let removalPromises = allAddresses.map(e => e.delete());
        await Promise.all(removalPromises);

        await acc.delete();
        await acc2.delete();

        let addSearch = await fluxObj.getObjects(AddressQuery.createQuery({}));

        let accSearch = await fluxObj.getObjects(AccountQuery.createQuery({}));

        it("should clean up resources properly", () => {
            assert.lengthOf(accSearch, 0);
            assert.lengthOf(addSearch, 0);
        })

        fluxWebsocket.closeSocketAndListeners()

    });
});
