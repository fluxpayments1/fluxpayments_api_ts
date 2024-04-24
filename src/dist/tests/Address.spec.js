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
const Address_1 = require("../flux_types/Address");
const AddressQuery_1 = require("../flux_types/AddressQuery");
const index_1 = require("../lib/index");
describe("Address specific tests", function () {
    let fluxObj, add, add2;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    before(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxObj = yield (0, index_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            add = yield Address_1.Address.createInstanceSafe({
                uniqueId: "FIRSTADDRESS"
            });
            add2 = yield Address_1.Address.createInstanceSafe({
                uniqueId: "SECONDADDRESS"
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }));
    it("should have instantiated a fluxObj", () => {
        chai_1.assert.isDefined(fluxObj);
    });
    it("should merge changes correctly, refresh objects correctly, and make correct use of load lazy", () => __awaiter(this, void 0, void 0, function* () {
        let address = yield Address_1.Address.createInstanceLazy({
            uniqueId: "FIRSTADDRESS",
        });
        yield address.refresh();
        chai_1.assert.isDefined(address.id);
        address.city = "TEST";
        yield address.merge();
        address = yield Address_1.Address.createInstanceLazy({
            uniqueId: "FIRSTADDRESS",
        });
        yield address.refresh();
        chai_1.assert.equal(address.city, "TEST");
    }));
    it("should manage addresses correctly and refresh the first add correctly", () => __awaiter(this, void 0, void 0, function* () {
        yield add.refresh();
        chai_1.assert.equal(add.city, "TEST");
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield add.delete();
        yield add2.delete();
        let addSearch = yield Address_1.Address.queryObjects(new AddressQuery_1.AddressQuery({}));
        it("should clean up resources properly", () => {
            chai_1.assert.lengthOf(addSearch, 0);
        });
    }));
});
//# sourceMappingURL=Address.spec.js.map