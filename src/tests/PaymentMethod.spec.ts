import { assert } from "chai";
import { ICard } from "../flux_types/ICard";
import { Account, Address, PaymentMethod } from "../flux_types/index";
import { Flux, flux, fluxBrowser } from "../lib";
import { Card } from "../flux_types/Card";
import { MerchantEndpointsSecurityHandle } from "../ajax/security";
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle";



describe("Payment Method specific tests", function () {
    let fluxObj: Flux<GeneralSecurityHandle>
    let fluxBObj: Flux<MerchantEndpointsSecurityHandle>
    let paymentMethod: PaymentMethod;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite

    before(async () => {
        try {
            fluxBObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

            let add1 : Address = await Address.createInstanceSafe({
                id: 1
            })

            let acc1: Account = await Account.createInstanceSafe({
                id: 1
            })

            let accSession = await acc1.generateAccountSession()


            fluxObj = await fluxBrowser("PK_ewRVuDFJEe61LwJCwKjwBA==");

            paymentMethod = await Card.createInstanceSafe({
                address: add1,
                firstName: "Nick",
                lastName: "Kreissler",
                accountSession: accSession,
                cardNumber: "1234123412341234",
                cvv: "1234",
                expMonth: "05",
                expYear: "35"
            });
   
        } catch (e: any) {
            console.log(e)
        }

    });

    it("should have instantiated a flux backend object", () => {
        assert.isDefined(fluxBObj)
    })

    it("should have instantiated a fluxObj", () => {
        assert.isDefined(fluxObj);
    });

    it("should have created a payment method", async () => {
        assert.isDefined(paymentMethod)
    });

});
