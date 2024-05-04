import { assert } from "chai";
import {  flux } from "fluxpayments/lib";
import { fluxSocket } from "fluxpayments/lib";
import { FluxSockets, Subscription } from "fluxpayments/lib";

export const initializeFluxWebSocket = async () => {
    let fluxWebSocket = await fluxSocket("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
    let enumKeys = Object.keys(Subscription)
    await fluxWebSocket.subscribe(enumKeys.map(e => Subscription[e]), ee => {
        console.log(ee)
    });

    return fluxWebSocket

}


describe("Websocket tests basic", function ()  {
    let fluxWebSocket : FluxSockets
    let createdAccounts : number[] = []
    this.timeout(50000)

    before (async () => {
        await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

        let enumKeys = Object.keys(Subscription)
        fluxWebSocket = await initializeFluxWebSocket()

    })

    it("should load the proper data", () => {
        assert.isDefined(fluxWebSocket)
    })

    after(() => {
        setTimeout(async () => {
            await fluxWebSocket.closeSocketAndListeners()

        }, 1000 * 60 * 5)
    })

})