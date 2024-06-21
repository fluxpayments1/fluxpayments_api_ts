import { FluxIdentifier, Address, AccountQuery, AccountUserType, FluxType } from "fluxpayments/flux_types";
import { describe, it, before } from "mocha";
import { assert } from "chai";
import { Account } from "fluxpayments/flux_types";
import { IAccount } from "fluxpayments/flux_types";
import { Flux, flux } from "fluxpayments/lib/";
import { initializeFluxWebSocket } from "./Websocket.spec";
import { FluxSockets } from "fluxpayments/lib";
let fluxWebSocket: FluxSockets

describe("Flux Account CRUD Tests", function () {
    let fluxObj: Flux<any>;
    let updatedAccount: Account[];
    before(async () => {
        try {
            fluxWebSocket = await initializeFluxWebSocket()
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


    it("should return a fluxIdentifier when the getId method is called", async () => {
        let f: FluxIdentifier = (await Account.createInstanceLazy(account)).getId()
        assert.equal(f.uniqueId, "FIRSTACCOUNT")
    })

    it("should initialize the Flux object", function () {
        assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });

    it("should create an account in the flux system with a unique id", async () => {
        let accountIdentifier: FluxIdentifier[];

        try {
            accountIdentifier = await (Account.createObjects(new Account(account)));
        } catch (e: any) {
            console.error(e.message);
        }


        assert.exists(accountIdentifier)
        assert.exists(accountIdentifier[0].uniqueId)
        assert.exists(accountIdentifier[0].id)
    })

    it("should be able to update the account name to something different", async () => {
        let reloadAccount
        try {
            updatedAccount = await Account.updateObjects(new Account({ ...account, firstName: "John" }))
            reloadAccount = await Account.getObjectsById(updatedAccount[0].getId())
        } catch (e: any) {
            console.error(e.message);
        }

        assert.exists(updatedAccount)
        assert.exists(updatedAccount[0])
        assert.equal(updatedAccount[0].firstName, "John")
    })

    it("should return a fluxIdentifier when we call getId on the updated account", () => {
        let f: FluxIdentifier = updatedAccount[0].getId()
        assert.equal(f.uniqueId, "FIRSTACCOUNT")
    })

    it("should have delete the newly created account", async () => {
        try {
            await updatedAccount[0].delete()
        } catch(e: any) {
            console.error(e.message);
        }

        let x = await Account.queryObjects(new AccountQuery({}))
        assert.lengthOf(x, 1);

    })
})

describe("Pagination and additional functionalities tests for Account", function () {
    this.timeout(500000);

    let searchedAccountsPage0: boolean = false;
    let searchedAccountsPage1: Account[];
    let searchedAccountsPage2: Account[];
    let searchedAccountsPage3: Account[];
    let orderedAccountsByEmail: Account[];
    let orderbyInvalidColumnForAccountShouldFail: boolean = false;
    let accounts: Account[] = [];

    async function createRandomAccount(): Promise<Account> {
        const accountEmails = ["test@example.com", "admin@mydomain.com", "user@domain.org"];
        const firstNames = ["John", "Jane", "Doe"];
        const lastNames = ["Smith", "Doe", "Brown"];
        const accountTypes = [AccountUserType.CUSTOMER, AccountUserType.GUEST_CUSTOMER];
        
        return new Account({
            uniqueId: Math.random().toString(36).substring(2),
            metadata: Math.random().toString(36).substring(2),
            accountEmail: accountEmails[Math.floor(Math.random() * accountEmails.length)],
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            accountUserType: accountTypes[Math.floor(Math.random() * accountTypes.length)],
        });
    }
    let accIdSearch3Results : Account[]
    before(async () => {
        let fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

        while (accounts.length < 53) {
            try {
                let acc = await createRandomAccount();
                let accountIds = await Account.createObjects(acc);
                accounts.push(acc)
            } catch (e: any) {}
        }

        try {
            await Account.queryObjects(new AccountQuery({
                pagination: {
                    pageNumber: 0,
                    itemsPerPage: 50
                }
            }));
        } catch (e: any) {
            searchedAccountsPage0 = true;
            console.log(e.message);
        }

        searchedAccountsPage1 = await Account.queryObjects(new AccountQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            }
        }));

        searchedAccountsPage2 = await  Account.queryObjects(new AccountQuery({
            pagination: {
                pageNumber: 2,
                itemsPerPage: 50
            }
        }));

        searchedAccountsPage3 = await  Account.queryObjects(new AccountQuery({
            pagination: {
                pageNumber: 3,
                itemsPerPage: 50
            }
        }));

        orderedAccountsByEmail = await  Account.queryObjects(new AccountQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 100
            },
            additionalSearchOptions : [
                {
                    column: "accountEmail",
                    order: "ASCENDING"
                }
            ]
        }));

        try {
            await  Account.queryObjects(new AccountQuery({
                pagination: {
                    pageNumber: 1,
                    itemsPerPage: 50
                },
                additionalSearchOptions: [
                    {
                        column: "invalidColumn",
                        order: "ASCENDING"
                    }
                ]
            }));
        } catch (e: any) {
            console.log(e.message);
            orderbyInvalidColumnForAccountShouldFail = true;
        }

        let accIds = searchedAccountsPage2.map(e => e.getId());

        accIdSearch3Results = await Account.getObjectsById(accIds);

        await Account.deleteObjects(accounts.map(e => e.getId()).filter(e => e.id !== 1));




    });

    it("should have created 53 accounts", () => {
        assert.lengthOf(accounts, 53);
    });

    it("should have errored out on a zero page", () => {
        assert.isTrue(searchedAccountsPage0);
    });

    it("should have returned 50 accounts for page 1 search, 3 for page 2, and 0 for page 3", () => {
        assert.lengthOf(searchedAccountsPage1, 50);
        assert.lengthOf(searchedAccountsPage2, 4);
        assert.lengthOf(searchedAccountsPage3, 0);
    });

    it("should have sorted accounts by email", () => {
        let concatenatedArr = searchedAccountsPage1.concat(searchedAccountsPage2);
        let sortedArr = concatenatedArr.sort((a, b) => a.accountEmail.localeCompare(b.accountEmail)).filter(e => e.id === 1);
        sortedArr.forEach((e, i) => {
            if (i < 50) {
                assert.isTrue(e.accountEmail === orderedAccountsByEmail[i].accountEmail);
            }
        });
    });

    it("should error out if ordered on invalid account column", () => {
        assert.isTrue(orderbyInvalidColumnForAccountShouldFail);
    });

    it("should have searched by id and obtained three results", () => {
        assert.lengthOf(accIdSearch3Results, 4)
    })

    after(async () => {
        fluxWebSocket.closeSocketAndListeners()
    })

});
