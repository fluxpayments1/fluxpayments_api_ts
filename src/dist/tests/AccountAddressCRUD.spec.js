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
const lib_1 = require("../lib");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const Account_1 = require("../flux_types/Account");
const AddressQuery_1 = require("../flux_types/AddressQuery");
(0, mocha_1.describe)("Flux AccountAddress CRUD Tests", function () {
    let fluxObj;
    let updatedAccount;
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        try {
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
    const secondAccount = {
        uniqueId: "SECONDACCOUNT",
        accountUserType: flux_types_1.AccountUserType.CUSTOMER,
        firstName: "Nick",
        lastName: "Kreissler"
    };
    (0, mocha_1.it)("should return a fluxIdentifier when the getId method is called", () => __awaiter(this, void 0, void 0, function* () {
        let f = (yield Account_1.Account.createInstanceLazy(account)).getId();
        chai_1.assert.equal(f.uniqueId, "FIRSTACCOUNT");
        f = (yield Account_1.Account.createInstanceLazy(secondAccount)).getId();
        chai_1.assert.equal(f.uniqueId, "SECONDACCOUNT");
    }));
    (0, mocha_1.it)("should initialize the Flux object", function () {
        chai_1.assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });
    (0, mocha_1.it)("should create an account in the flux system with a unique id", () => __awaiter(this, void 0, void 0, function* () {
        let accountIdentifier;
        let secondAccountIdentifier;
        try {
            accountIdentifier = yield fluxObj.createObjectGeneric(yield Account_1.Account.createInstanceLazy(account));
            secondAccountIdentifier = yield fluxObj.createObjectGeneric(yield Account_1.Account.createInstanceLazy(secondAccount));
        }
        catch (e) {
            console.error(e.message);
            chai_1.assert.fail(e.message);
        }
        chai_1.assert.exists(accountIdentifier);
        chai_1.assert.exists(accountIdentifier[0].uniqueId);
        chai_1.assert.exists(accountIdentifier[0].id);
    }));
    let addressIdentifier;
    let secondAddressIdentifier;
    (0, mocha_1.it)("should be able to attach an address to the newly created accounts", () => __awaiter(this, void 0, void 0, function* () {
        let accountAddressIdentifier;
        let secondAccountAddressIdentifier;
        try {
            addressIdentifier = yield fluxObj.createObjectGeneric(new flux_types_1.Address({
                streetAddress: "18548 Rococo road",
                zipCode: "34610"
            }));
            secondAddressIdentifier = yield fluxObj.createObjectGeneric(new flux_types_1.Address({
                streetAddress: "609 Division",
                zipCode: "61011"
            }));
            accountAddressIdentifier = yield fluxObj.createObjectGeneric(new flux_types_1.AccountAddress({
                accountUniqueId: account.uniqueId,
                addressId: addressIdentifier[0].id
            }));
            secondAccountAddressIdentifier = yield fluxObj.createObjectGeneric(new flux_types_1.AccountAddress({
                accountUniqueId: secondAccount.uniqueId,
                addressId: secondAddressIdentifier[0].id
            }));
            chai_1.assert.isDefined(accountAddressIdentifier);
            chai_1.assert.isDefined(secondAccountAddressIdentifier);
            chai_1.assert.lengthOf(accountAddressIdentifier, 1);
            chai_1.assert.lengthOf(secondAccountAddressIdentifier, 1);
        }
        catch (e) {
            console.log(e);
            chai_1.assert.fail(e.message);
        }
    }));
    (0, mocha_1.it)("should be able to update the addresses attached to the accounts", () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield fluxObj.updateObjects(new flux_types_1.Address(Object.assign(Object.assign({}, addressIdentifier[0]), { addressState: "Texas" })));
        }
        catch (e) {
            console.log(e.message);
            chai_1.assert.fail(e.message);
        }
    }));
    let accountAddresses;
    let secondAccountAddresses;
    (0, mocha_1.it)("should be able to query and find the updated address but also have the addresses separated by account", () => __awaiter(this, void 0, void 0, function* () {
        try {
            accountAddresses = yield fluxObj.getObjects(new flux_types_1.AccountAddressQuery({
                accountUniqueId: account.uniqueId
            }));
            chai_1.assert.isDefined(accountAddresses);
            chai_1.assert.lengthOf(accountAddresses, 1);
            chai_1.assert.equal(accountAddresses[0].accountUniqueId, account.uniqueId);
            secondAccountAddresses = yield flux_types_1.FluxType.queryObjects(new flux_types_1.AccountAddressQuery({
                accountUniqueId: secondAccount.uniqueId
            }));
            chai_1.assert.isDefined(secondAccountAddresses);
            chai_1.assert.lengthOf(secondAccountAddresses, 1);
            chai_1.assert.equal(secondAccountAddresses[0].accountUniqueId, secondAccount.uniqueId);
            chai_1.assert.equal(secondAccountAddresses[0].addressId, secondAddressIdentifier[0].id);
        }
        catch (e) {
            console.log(e.message);
            chai_1.assert.fail(e.message);
        }
    }));
    (0, mocha_1.it)("should delete account addresses without removing addresses, it should also clean up the addresses and accounts after the check", () => __awaiter(this, void 0, void 0, function* () {
        try {
            try {
                yield flux_types_1.AccountAddress.deleteObjects(accountAddresses[0].getId());
                yield flux_types_1.AccountAddress.deleteObjects(secondAccountAddresses[0].getId());
            }
            catch (e) {
                console.error(e.message);
                chai_1.assert.fail(e.message);
            }
            let fa = yield Account_1.Account.createInstanceSafe(account);
            let sa = yield Account_1.Account.createInstanceSafe(secondAccount);
            chai_1.assert.lengthOf(yield flux_types_1.AccountAddress.queryObjects(new flux_types_1.AccountAddressQuery({})), 0);
            let addresses;
            try {
                addresses = yield flux_types_1.AccountAddress.queryObjects(new AddressQuery_1.AddressQuery({}));
            }
            catch (e) {
                console.log(e.message);
                chai_1.assert.fail(e.message);
            }
            chai_1.assert.exists(addresses);
            chai_1.assert.lengthOf(addresses, 3);
            let deletedAdds = yield flux_types_1.Address.deleteObjects(addresses.map(e => e.getId()).filter(e => e.id !== 1));
            chai_1.assert.exists(deletedAdds);
            chai_1.assert.lengthOf(deletedAdds, 2);
            let deletedAccs = yield Account_1.Account.deleteObjects([(yield Account_1.Account.createInstanceLazy(account)).getId(), (yield Account_1.Account.createInstanceLazy(secondAccount)).getId()]);
            chai_1.assert.exists(deletedAccs);
            chai_1.assert.lengthOf(deletedAccs, 2);
        }
        catch (e) {
            console.log(e.message);
            chai_1.assert.fail(e.message);
        }
    }));
});
//# sourceMappingURL=AccountAddressCRUD.spec.js.map