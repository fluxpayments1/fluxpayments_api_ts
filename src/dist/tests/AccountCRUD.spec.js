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
const flux_types_1 = require("../flux_types");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const Account_1 = require("../flux_types/Account");
const lib_1 = require("../lib/");
const A_Websocket_spec_1 = require("./A_Websocket.spec");
let fluxWebSocket;
(0, mocha_1.describe)("Flux Account CRUD Tests", function () {
    let fluxObj;
    let updatedAccount;
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxWebSocket = yield (0, A_Websocket_spec_1.initializeFluxWebSocket)();
            fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        }
        catch (e) {
            console.error(e.message);
        }
    }));
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    const account = {
        uniqueId: "FIRSTACCOUNT",
        accountUserType: flux_types_1.AccountUserType.CUSTOMER,
        firstName: "Nick",
        lastName: "Kreissler"
    };
    (0, mocha_1.it)("should return a fluxIdentifier when the getId method is called", () => __awaiter(this, void 0, void 0, function* () {
        let f = (yield Account_1.Account.createInstanceLazy(account)).getId();
        chai_1.assert.equal(f.uniqueId, "FIRSTACCOUNT");
    }));
    (0, mocha_1.it)("should initialize the Flux object", function () {
        chai_1.assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });
    (0, mocha_1.it)("should create an account in the flux system with a unique id", () => __awaiter(this, void 0, void 0, function* () {
        let accountIdentifier;
        try {
            accountIdentifier = yield (Account_1.Account.createObjects(new Account_1.Account(account)));
        }
        catch (e) {
            console.error(e.message);
        }
        chai_1.assert.exists(accountIdentifier);
        chai_1.assert.exists(accountIdentifier[0].uniqueId);
        chai_1.assert.exists(accountIdentifier[0].id);
    }));
    (0, mocha_1.it)("should be able to update the account name to something different", () => __awaiter(this, void 0, void 0, function* () {
        try {
            updatedAccount = yield Account_1.Account.createObjectsSafe(new Account_1.Account(Object.assign(Object.assign({}, account), { firstName: "John" })));
        }
        catch (e) {
            console.error(e.message);
        }
        chai_1.assert.exists(updatedAccount);
        chai_1.assert.exists(updatedAccount[0]);
        chai_1.assert.equal(updatedAccount[0].firstName, "John");
    }));
    (0, mocha_1.it)("should return a fluxIdentifier when we call getId on the updated account", () => {
        let f = updatedAccount[0].getId();
        chai_1.assert.equal(f.uniqueId, "FIRSTACCOUNT");
    });
    (0, mocha_1.it)("should have delete the newly created account", () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield updatedAccount[0].delete();
        }
        catch (e) {
            console.error(e.message);
        }
        chai_1.assert.lengthOf(yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({}), Account_1.Account), 1);
    }));
});
(0, mocha_1.describe)("Pagination and additional functionalities tests for Account", function () {
    this.timeout(500000);
    let searchedAccountsPage0 = false;
    let searchedAccountsPage1;
    let searchedAccountsPage2;
    let searchedAccountsPage3;
    let orderedAccountsByEmail;
    let orderbyInvalidColumnForAccountShouldFail = false;
    let accounts = [];
    function createRandomAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const accountEmails = ["test@example.com", "admin@mydomain.com", "user@domain.org"];
            const firstNames = ["John", "Jane", "Doe"];
            const lastNames = ["Smith", "Doe", "Brown"];
            const accountTypes = [flux_types_1.AccountUserType.CUSTOMER, flux_types_1.AccountUserType.GUEST_CUSTOMER];
            return new Account_1.Account({
                uniqueId: Math.random().toString(36).substring(2),
                metadata: Math.random().toString(36).substring(2),
                accountEmail: accountEmails[Math.floor(Math.random() * accountEmails.length)],
                firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
                lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
                accountUserType: accountTypes[Math.floor(Math.random() * accountTypes.length)],
            });
        });
    }
    let accIdSearch3Results;
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        let fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        while (accounts.length < 53) {
            try {
                let acc = yield createRandomAccount();
                let accountIds = yield Account_1.Account.createObjects(acc);
                accounts.push(acc);
            }
            catch (e) { }
        }
        try {
            yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({
                pagination: {
                    pageNumber: 0,
                    itemsPerPage: 50
                }
            }), Account_1.Account);
        }
        catch (e) {
            searchedAccountsPage0 = true;
            console.log(e.message);
        }
        searchedAccountsPage1 = yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            }
        }), Account_1.Account);
        searchedAccountsPage2 = yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({
            pagination: {
                pageNumber: 2,
                itemsPerPage: 50
            }
        }), Account_1.Account);
        searchedAccountsPage3 = yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({
            pagination: {
                pageNumber: 3,
                itemsPerPage: 50
            }
        }), Account_1.Account);
        orderedAccountsByEmail = yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 100
            },
            additionalSearchOptions: [
                {
                    column: "accountEmail",
                    order: "ASCENDING"
                }
            ]
        }), Account_1.Account);
        try {
            yield Account_1.Account.queryObjects(new flux_types_1.AccountQuery({
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
            }), Account_1.Account);
        }
        catch (e) {
            console.log(e.message);
            orderbyInvalidColumnForAccountShouldFail = true;
        }
        let accIds = searchedAccountsPage2.map(e => e.getId());
        accIdSearch3Results = yield flux_types_1.FluxType.getObjectsById(accIds, Account_1.Account);
        yield Account_1.Account.deleteObjects(accounts.map(e => e.getId()).filter(e => e.id !== 1));
    }));
    (0, mocha_1.it)("should have created 53 accounts", () => {
        chai_1.assert.lengthOf(accounts, 53);
    });
    (0, mocha_1.it)("should have errored out on a zero page", () => {
        chai_1.assert.isTrue(searchedAccountsPage0);
    });
    (0, mocha_1.it)("should have returned 50 accounts for page 1 search, 3 for page 2, and 0 for page 3", () => {
        chai_1.assert.lengthOf(searchedAccountsPage1, 50);
        chai_1.assert.lengthOf(searchedAccountsPage2, 4);
        chai_1.assert.lengthOf(searchedAccountsPage3, 0);
    });
    (0, mocha_1.it)("should have sorted accounts by email", () => {
        let concatenatedArr = searchedAccountsPage1.concat(searchedAccountsPage2);
        let sortedArr = concatenatedArr.sort((a, b) => a.accountEmail.localeCompare(b.accountEmail)).filter(e => e.id === 1);
        sortedArr.forEach((e, i) => {
            if (i < 50) {
                chai_1.assert.isTrue(e.accountEmail === orderedAccountsByEmail[i].accountEmail);
            }
        });
    });
    (0, mocha_1.it)("should error out if ordered on invalid account column", () => {
        chai_1.assert.isTrue(orderbyInvalidColumnForAccountShouldFail);
    });
    (0, mocha_1.it)("should have searched by id and obtained three results", () => {
        chai_1.assert.lengthOf(accIdSearch3Results, 4);
    });
    after(() => __awaiter(this, void 0, void 0, function* () {
        fluxWebSocket.closeSocketAndListeners();
    }));
});
//# sourceMappingURL=AccountCRUD.spec.js.map