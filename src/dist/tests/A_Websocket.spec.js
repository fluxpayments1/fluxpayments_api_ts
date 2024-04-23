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
exports.initializeFluxWebSocket = void 0;
const chai_1 = require("chai");
const lib_1 = require("../lib/");
const FluxEntry_1 = require("../lib/FluxEntry");
const FluxSockets_1 = require("../lib/FluxSockets");
const initializeFluxWebSocket = () => __awaiter(void 0, void 0, void 0, function* () {
    let fluxWebSocket = yield (0, FluxEntry_1.fluxSocket)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
    let enumKeys = Object.keys(FluxSockets_1.Subscription);
    yield fluxWebSocket.subscribe(enumKeys.map(e => FluxSockets_1.Subscription[e]), ee => {
    });
    return fluxWebSocket;
});
exports.initializeFluxWebSocket = initializeFluxWebSocket;
describe("Websocket tests basic", function () {
    let fluxWebSocket;
    let createdAccounts = [];
    this.timeout(50000);
    before(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        let enumKeys = Object.keys(FluxSockets_1.Subscription);
        fluxWebSocket = yield (0, exports.initializeFluxWebSocket)();
    }));
    it("should load the proper data", () => {
        chai_1.assert.isDefined(fluxWebSocket);
    });
    after(() => {
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            yield fluxWebSocket.closeSocketAndListeners();
        }), 1000 * 60 * 5);
    });
});
//# sourceMappingURL=A_Websocket.spec.js.map