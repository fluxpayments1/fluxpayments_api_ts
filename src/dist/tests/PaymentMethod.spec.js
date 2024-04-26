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
const index_1 = require("../flux_types/index");
const lib_1 = require("../lib");
const Card_1 = require("../flux_types/Card");
describe("Payment Method specific tests", function () {
    let fluxObj;
    let fluxBObj;
    let paymentMethod;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    before(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxBObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            let add1 = yield index_1.Address.createInstanceSafe({
                id: 1
            });
            let acc1 = yield index_1.Account.createInstanceSafe({
                id: 1
            });
            let accSession = yield acc1.generateAccountSession();
            fluxObj = yield (0, lib_1.fluxBrowser)("PK_ewRVuDFJEe61LwJCwKjwBA==");
            paymentMethod = yield Card_1.Card.createInstanceSafe({
                address: add1,
                firstName: "Nick",
                lastName: "Kreissler",
                accountSession: accSession,
                cardNumber: "1234123412341234",
                cvv: "1234",
                expMonth: "05",
                expYear: "35"
            });
        }
        catch (e) {
            console.log(e);
        }
    }));
    it("should have instantiated a flux backend object", () => {
        chai_1.assert.isDefined(fluxBObj);
    });
    it("should have instantiated a fluxObj", () => {
        chai_1.assert.isDefined(fluxObj);
    });
    it("should have created a payment method", () => __awaiter(this, void 0, void 0, function* () {
        chai_1.assert.isDefined(paymentMethod);
    }));
});
//# sourceMappingURL=PaymentMethod.spec.js.map