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
const AccountQuery_1 = require("../flux_types/AccountQuery");
const Address_1 = require("../flux_types/Address");
const AddressQuery_1 = require("../flux_types/AddressQuery");
const index_1 = require("../flux_types/index");
const index_2 = require("../lib/index");
const A_Websocket_spec_1 = require("./A_Websocket.spec");
describe("Account specific tests", function () {
    let fluxObj, acc, acc2, adds, adds2;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    let fluxWebsocket;
    before(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxObj = yield (0, index_2.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            fluxWebsocket = yield (0, A_Websocket_spec_1.initializeFluxWebSocket)();
            acc = yield index_1.Account.createInstanceSafe({
                accountUserType: index_1.AccountUserType.CUSTOMER,
                uniqueId: "FIRSTACCOUNT"
            });
            acc2 = yield index_1.Account.createInstanceSafe({
                accountUserType: index_1.AccountUserType.CUSTOMER,
                uniqueId: "SECONDACCOUNT"
            });
            yield acc.addAddress(yield Address_1.Address.createInstanceSafe({
                uniqueId: "FIRSTADDRESS",
                streetAddress: "18548 ROCOCO ROAD"
            }));
            yield acc.addAddress([yield Address_1.Address.createInstanceSafe({
                    uniqueId: "SECONDADDRESS",
                    streetAddress: "IDK"
                })]);
            yield acc2.addAddress(yield Address_1.Address.createInstanceSafe({
                uniqueId: "THIRDADDRESS",
                streetAddress: "18549 ROCOCO ROAD"
            }));
            yield acc2.addAddress([yield Address_1.Address.createInstanceSafe({
                    uniqueId: "FOURTHADDRESS",
                    streetAddress: "IDK 2"
                })]);
        }
        catch (e) {
            console.log(e);
        }
    }));
    it("should have instantiated a fluxObj", () => {
        chai_1.assert.isDefined(fluxObj);
    });
    it("should have created 2 addresses and added them to the first account", () => __awaiter(this, void 0, void 0, function* () {
        adds = (yield acc.getAddressses()).sort((a, b) => a.id - b.id);
        chai_1.assert.lengthOf(adds, 2);
        chai_1.assert.equal(adds[0].uniqueId, "FIRSTADDRESS");
        chai_1.assert.equal(adds[1].uniqueId, "SECONDADDRESS");
    }));
    it("should have created 2 addresses and added them to the second account", () => __awaiter(this, void 0, void 0, function* () {
        adds2 = (yield acc2.getAddressses()).sort((a, b) => a.id - b.id);
        chai_1.assert.lengthOf(adds2, 2);
        chai_1.assert.equal(adds2[0].uniqueId, "THIRDADDRESS");
        chai_1.assert.equal(adds2[1].uniqueId, "FOURTHADDRESS"); // Corrected typo here from "ROURTHADDRESS" to "FOURTHADDRESS"
    }));
    it("should not allow you to add the same address twice", () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield acc.addAddress([yield Address_1.Address.createInstanceSafe({
                    uniqueId: "SECONDADDRESS",
                    streetAddress: "IDK"
                })]);
        }
        catch (e) {
            console.log(e.message);
        }
        chai_1.assert.lengthOf(yield acc.getAddressses(), 2);
    }));
    it("should merge changes correctly, refresh objects correctly, and make correct use of load lazy", () => __awaiter(this, void 0, void 0, function* () {
        let account = yield index_1.Account.createInstanceLazy({
            uniqueId: "FIRSTACCOUNT",
        });
        yield account.refresh();
        chai_1.assert.isDefined(account.id);
        account.lastName = "TEST";
        yield account.merge();
        account = yield index_1.Account.createInstanceLazy({
            uniqueId: "FIRSTACCOUNT",
        });
        yield account.refresh();
        chai_1.assert.equal(account.lastName, "TEST");
    }));
    it("should manage addresses correctly and refresh the first acc correctly", () => __awaiter(this, void 0, void 0, function* () {
        yield acc.refresh();
        chai_1.assert.equal(acc.lastName, "TEST");
        yield acc.removeAddress(adds);
        let newAdds = yield acc.getAddressses();
        chai_1.assert.lengthOf(newAdds, 0);
        let newAdds2 = yield acc2.getAddressses();
        chai_1.assert.lengthOf(newAdds2, 2);
        yield acc2.removeAddress(newAdds2);
        newAdds2 = yield acc2.getAddressses();
        chai_1.assert.lengthOf(newAdds2, 0);
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        let allAddresses = adds.concat(adds2);
        let removalPromises = allAddresses.map(e => e.delete());
        yield Promise.all(removalPromises);
        yield acc.delete();
        yield acc2.delete();
        let addSearch = yield fluxObj.getObjects(AddressQuery_1.AddressQuery.createQuery({}), Address_1.Address);
        let accSearch = yield fluxObj.getObjects(AccountQuery_1.AccountQuery.createQuery({}), index_1.Account);
        it("should clean up resources properly", () => {
            chai_1.assert.lengthOf(accSearch, 0);
            chai_1.assert.lengthOf(addSearch, 0);
        });
        fluxWebsocket.closeSocketAndListeners();
    }));
});
//# sourceMappingURL=Account.spec.js.map