import { FluxIdentifier, Address, AccountQuery, AccountAddress, AccountAddressQuery, AccountUserType, FluxType } from "../flux_types";
import { Flux, flux } from "../lib";
import { describe, it, before } from "mocha";
import { assert } from "chai";
import { create } from "domain";
import { Account } from "../flux_types/Account";
import { AddressQuery } from "../flux_types/AddressQuery";
import { IAccount } from "../flux_types/IAccount";

describe("Flux AccountAddress CRUD Tests", function () {
    let fluxObj: Flux<any>;
    let updatedAccount: Account[];

    before(async () => {
        try {
            fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        } catch (e: any) {
            console.error(e.message);
        }
    })

    this.timeout(50000); // sets a 50-second timeout for all tests in this suite


    const account: IAccount = {
        uniqueId: "FIRSTACCOUNT",
        accountUserType: AccountUserType.CUSTOMER,
        firstName: "Nick",
        lastName: "Kreissler"
    };

    const secondAccount: IAccount = {
        uniqueId: "SECONDACCOUNT",
        accountUserType: AccountUserType.CUSTOMER,
        firstName: "Nick",
        lastName: "Kreissler"
    }


    it("should return a fluxIdentifier when the getId method is called", async () => {
        let f: FluxIdentifier = (await Account.createInstanceLazy(account)).getId()
        assert.equal(f.uniqueId, "FIRSTACCOUNT")

        f = (await Account.createInstanceLazy(secondAccount)).getId();
        assert.equal(f.uniqueId, "SECONDACCOUNT")
    })

    it("should initialize the Flux object", function () {
        assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });

    it("should create an account in the flux system with a unique id", async () => {
        let accountIdentifier: FluxIdentifier[];
        let secondAccountIdentifier : FluxIdentifier[];

        try {
            accountIdentifier = await fluxObj.createObjectGeneric(await Account.createInstanceLazy(account));
            secondAccountIdentifier = await fluxObj.createObjectGeneric(await Account.createInstanceLazy(secondAccount))
        } catch (e: any) {
            console.error(e.message);
            assert.fail(e.message)
        }


        assert.exists(accountIdentifier)
        assert.exists(accountIdentifier[0].uniqueId)
        assert.exists(accountIdentifier[0].id)
    })

    let addressIdentifier: FluxIdentifier[]
    let secondAddressIdentifier: FluxIdentifier[]
    it("should be able to attach an address to the newly created accounts", async () => {
        let accountAddressIdentifier : FluxIdentifier[];
        let secondAccountAddressIdentifier : FluxIdentifier[];
        try {
            addressIdentifier = await fluxObj.createObjectGeneric(new Address({
                streetAddress: "18548 Rococo road",
                zipCode: "34610"
            }))

            secondAddressIdentifier = await fluxObj.createObjectGeneric(new Address({
                streetAddress: "609 Division",
                zipCode: "61011"
            }))

            accountAddressIdentifier = await fluxObj.createObjectGeneric(new AccountAddress({
                accountUniqueId : account.uniqueId,
                addressId : addressIdentifier[0].id
            }))

            secondAccountAddressIdentifier = await fluxObj.createObjectGeneric(new AccountAddress({
                accountUniqueId: secondAccount.uniqueId,
                addressId: secondAddressIdentifier[0].id
            }))

            assert.isDefined(accountAddressIdentifier)
            assert.isDefined(secondAccountAddressIdentifier)

            assert.lengthOf(accountAddressIdentifier, 1)
            assert.lengthOf(secondAccountAddressIdentifier, 1)


        } catch (e: any) {
            console.log(e)
            assert.fail(e.message)
        }
    })

    it("should be able to update the addresses attached to the accounts", async () => {
        try {
            await fluxObj.updateObjects(new Address({...addressIdentifier[0], addressState: "Texas"}))
        } catch (e : any) {
            console.log(e.message)
            assert.fail(e.message)
        }
    })


    let accountAddresses: AccountAddress[];
    let secondAccountAddresses: AccountAddress[];
    it("should be able to query and find the updated address but also have the addresses separated by account", async () => {
        try {
            accountAddresses = await fluxObj.getObjects(new AccountAddressQuery({
                accountUniqueId: account.uniqueId
            }))

            assert.isDefined(accountAddresses)
            assert.lengthOf(accountAddresses, 1)
            assert.equal(accountAddresses[0].accountUniqueId, account.uniqueId)

            secondAccountAddresses = await FluxType.queryObjects(new AccountAddressQuery({
                accountUniqueId: secondAccount.uniqueId
            }))

            assert.isDefined(secondAccountAddresses)
            assert.lengthOf(secondAccountAddresses, 1)
            assert.equal(secondAccountAddresses[0].accountUniqueId, secondAccount.uniqueId)
            assert.equal(secondAccountAddresses[0].addressId, secondAddressIdentifier[0].id)
        } catch (e : any) {
            console.log(e.message)
            assert.fail(e.message)
        }
    })

    it("should delete account addresses without removing addresses, it should also clean up the addresses and accounts after the check", async () => {
        try {
            try {
                await AccountAddress.deleteObjects(accountAddresses[0].getId())
                await AccountAddress.deleteObjects(secondAccountAddresses[0].getId())
            } catch(e: any) {
                console.error(e.message);
                assert.fail(e.message)
            }

            let fa = await Account.createInstanceSafe(account)
            let sa = await Account.createInstanceSafe(secondAccount)
    
            assert.lengthOf(await AccountAddress.queryObjects(new AccountAddressQuery({})), 0);
            let addresses : Address[]
            try {
                addresses = await AccountAddress.queryObjects(new AddressQuery ({}))
            } catch (e: any) {
                console.log(e.message)
                assert.fail(e.message)
            }
    
            assert.exists(addresses)
            assert.lengthOf(addresses, 3)
    
            let deletedAdds = await Address.deleteObjects(addresses.map(e => e.getId()).filter(e => e.id !== 1))
    
            assert.exists(deletedAdds)
            assert.lengthOf(deletedAdds, 2)
            let deletedAccs = await Account.deleteObjects([(await Account.createInstanceLazy(account)).getId(), (await Account.createInstanceLazy(secondAccount)).getId()]);

            assert.exists(deletedAccs);
            assert.lengthOf(deletedAccs, 2)

        } catch (e: any) {
            console.log(e.message)
            assert.fail(e.message)
        }


    })
})