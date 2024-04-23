"use strict";
/*
 * Copyright (c) [Year] [Your Name or Your Company's Name]
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMMT = void 0;
const AjaxRequestHandle_1 = require("./AjaxRequestHandle");
const axios_1 = require("axios");
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const ws_1 = require("ws");
const https = __importStar(require("https"));
const env = __importStar(require("../../env.json"));
class CMMT {
    static getPath(arg) {
        return CMMT.BASE_URL.concat(arg).concat(this.isBrowser ? "Web" : "");
    }
    static sendWsCommMessage(ws, req, res, secHandle, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            args = (0, cloneDeep_1.default)(args);
            let messageIdentifier = Math.floor(Math.random() * Math.pow(2, 53));
            let arh = new AjaxRequestHandle_1.AjaxRequestHandle(req, res, secHandle);
            arh.request.loadClientData(...args, messageIdentifier);
            let reqStr = yield arh.securityHandler.encodeRequest(arh.request.getRequestAsString());
            // Return a new promise
            return new Promise((resolve, reject) => {
                // Send the message over WebSocket
                // Message event handler
                const messageHandler = (stream) => __awaiter(this, void 0, void 0, function* () {
                    let jsonStream = JSON.parse(stream.toString());
                    if (jsonStream.messageIdentifier === messageIdentifier) {
                        // This is our message; decode and resolve
                        let decResponse = yield arh.securityHandler.decodeResponse(stream.toString());
                        resolve(arh.response.setResponseJSON(decResponse).getClientReturnValue());
                        // Clean up by removing this event listener
                        ws.off('message', messageHandler);
                    }
                });
                // Attach the message event handler
                ws.on('message', messageHandler);
                ws.send(reqStr, (err) => {
                    if (err)
                        reject(new Error(err.message)); // If error during sending, reject the promise
                });
            });
        });
    }
    static initializeWebSocketConnection(url, secHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            const arh = new AjaxRequestHandle_1.AjaxRequestHandle(undefined, undefined, secHandle);
            arh.path = url;
            const hdrs = yield arh.securityHandler.createHeaders();
            const headersObject = Object.fromEntries(hdrs.entries());
            const ws = new ws_1.WebSocket(`${CMMT.WEBSOCKET_BASE_URL}${url}`, { headers: headersObject });
            return new Promise((resolve, reject) => {
                const onOpenHandler = (stream) => {
                    ws.off('open', onOpenHandler); // remove listener after it's used
                    resolve(ws);
                };
                const onErrorHandler = (err) => {
                    if (ws.readyState === ws_1.WebSocket.CONNECTING) {
                        ws.off('error', onErrorHandler); // remove listener
                        ws.close();
                        reject(new Error('WebSocket failed to open: ' + err.message));
                    }
                };
                const onCloseHandler = () => {
                    ws.off('close', onCloseHandler); // remove listener
                    ws.close();
                };
                ws.on('open', onOpenHandler);
                ws.on('error', onErrorHandler);
                ws.on('close', onCloseHandler);
            });
        });
    }
    static fetch(req, res, url, mtd, secHandle, ...arg) {
        arg = (0, cloneDeep_1.default)(arg);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let arh = new AjaxRequestHandle_1.AjaxRequestHandle(req, res, secHandle);
                arh.request.loadClientData(...arg);
                arh.method = mtd;
                arh.path = url;
                let hdrs = yield arh.securityHandler.createHeaders();
                let config = {
                    url: CMMT.getPath(arh.path),
                    method: arh.method,
                    headers: Object.assign(Object.assign({}, Object.fromEntries(hdrs.entries())), { 'Content-Type': 'application/json' }),
                    data: yield arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs),
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    }),
                    timeout: 100000
                };
                let axios = new axios_1.Axios(config);
                let axiosResponse = yield axios.request(config);
                if (axiosResponse.status === 200) {
                    let decodedResponse = yield arh.securityHandler.decodeResponse(axiosResponse.data, axiosResponse.headers);
                    let retVal = arh.response.setResponseJSON(decodedResponse);
                    resolve(retVal.getClientReturnValue());
                }
                else {
                    throw new Error(axiosResponse.data);
                }
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static fetchGeneric(req, res, type, url, mtd, secHandle, ...arg) {
        arg = (0, cloneDeep_1.default)(arg);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let arh = new AjaxRequestHandle_1.AjaxRequestHandle(req, res, secHandle, type);
                arh.request.loadClientData(...arg);
                arh.method = mtd;
                arh.path = url;
                let hdrs = yield arh.securityHandler.createHeaders();
                let config = {
                    url: CMMT.getPath(arh.path),
                    method: arh.method,
                    headers: Object.assign(Object.assign({}, Object.fromEntries(hdrs.entries())), { 'Content-Type': 'application/json' }),
                    data: yield arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs),
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    }),
                    timeout: 100000
                };
                let axios = new axios_1.Axios(config);
                let axiosResponse = yield axios.request(config);
                if (axiosResponse.status === 200) {
                    let decodedResponse = yield arh.securityHandler.decodeResponse(axiosResponse.data, axiosResponse.headers);
                    let retVal = arh.response.setResponseJSON(decodedResponse);
                    resolve(retVal.getClientReturnValue());
                }
                else {
                    throw new Error(axiosResponse.data);
                }
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.CMMT = CMMT;
CMMT.BASE_URL = env.API_CONNECTION_ENDPOINT;
CMMT.WEBSOCKET_BASE_URL = env.WEBSOCKET_CONNECTION_ENDPOINT;
CMMT.isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
//# sourceMappingURL=CMMT.js.map