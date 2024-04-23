"use strict";
// import { assert } from "chai";
// import { ICard } from "../flux_types/ICard";
// import { Account, Address, PaymentMethod } from "../flux_types/index";
// import { Flux, flux } from "../lib";
// import { Card } from "../flux_types/Card";
// describe("Payment Method specific tests", function () {
//     let fluxObj: FluxBrowser
//     let fluxBObj: Flux
//     let paymentMethod: PaymentMethod;
//     this.timeout(50000); // sets a 50-second timeout for all tests in this suite
//     before(async () => {
//         try {
//             fluxObj = await fluxBrowser("PK_ewRVuDFJEe61LwJCwKjwBA==");
//             fluxBObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
//             let add1 : Address = await Address.createInstanceSafe({
//                 id: 1
//             })
//             let acc1: Account = await Account.createInstanceSafe({
//                 id: 1
//             })
//             paymentMethod = await Card.createInstanceSafe({
//                 address: add1,
//                 firstName: "Nick",
//                 lastName: "Kreissler",
//                 accountSession: await acc1.generateAccountSession(),
//                 cardNumber: "1234123412341234",
//                 cvv: "1234",
//                 expMonth: "05",
//                 expYear: "35"
//             });
//         } catch (e: any) {
//             console.log(e)
//         }
//     });
//     it("should have instantiated a flux backend object", () => {
//         assert.isDefined(fluxBObj)
//     })
//     it("should have instantiated a fluxObj", () => {
//         assert.isDefined(fluxObj);
//     });
//     it("should have created a payment method", async () => {
//         assert.isDefined(paymentMethod)
//     });
// });
//# sourceMappingURL=PaymentMethod.spec.js.map