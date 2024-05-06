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

import { SecurityHandler } from "../../ajax/security/SecurityHandler";
import { AjaxRequestHandle } from "./AjaxRequestHandle";
import { RequestBody } from "../../ajax/Requests/RequestBody";
import { ResponseBody } from "../../ajax/Responses/ResponseBody";
import { AxiosRequestConfig, Axios, HttpStatusCode } from "axios";
import cloneDeep from 'lodash/cloneDeep';
import { WebSocket } from 'ws'
import * as https from 'https'

import * as env from '../../env.json';
import { FluxType } from "../../flux_types/FluxType";
export class CMMT {
    private static readonly BASE_URL: string = env.API_CONNECTION_ENDPOINT_PROD
    private static readonly WEBSOCKET_BASE_URL: string = env.WEBSOCKET_CONNECTION_ENDPOINT_PROD
    private static isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    private static getPath(arg): string {
        return CMMT.BASE_URL.concat(arg).concat(this.isBrowser ? "Web" : "");
    }

    public static async sendWsCommMessage<U extends RequestBody, V extends ResponseBody>(
        ws: WebSocket,
        req: new () => U,
        res: new () => V,
        secHandle: SecurityHandler,
        ...args: any
    ): Promise<any> {

        args = cloneDeep(args);
        let messageIdentifier = Math.floor(Math.random() * Math.pow(2, 53));
        let arh = new AjaxRequestHandle(req, res, secHandle);
        arh.request.loadClientData(...args, messageIdentifier);
        let reqStr = await arh.securityHandler.encodeRequest(arh.request.getRequestAsString());

        // Return a new promise
        return new Promise<any>((resolve, reject) => {
            // Send the message over WebSocket


            // Message event handler
            const messageHandler = async (stream: any) => {
                let jsonStream = JSON.parse(stream.toString());
                if (jsonStream.messageIdentifier === messageIdentifier) {
                    // This is our message; decode and resolve
                    let decResponse = await arh.securityHandler.decodeResponse(stream.toString());
                    resolve(arh.response.setResponseJSON(decResponse).getClientReturnValue());

                    // Clean up by removing this event listener
                    ws.off('message', messageHandler);
                }
            };
            // Attach the message event handler
            ws.on('message', messageHandler);


            ws.send(reqStr, (err) => {
                if (err) reject(new Error(err.message)); // If error during sending, reject the promise
            });

        });
    }

    public static async initializeBrowserWebsocketConnection(url, hdrs: object) : Promise<any> {

        console.log("in browser")
        console.log(hdrs)
        try {
            const wsUrl = `${CMMT.WEBSOCKET_BASE_URL}${url}`;
            const ws = new window.WebSocket(wsUrl, "protocol");
    
            let conn = await new Promise((resolve, reject) => {
                ws.addEventListener('open', () => {
                    resolve(ws);
                }, { once: true });
    
                ws.addEventListener('error', (event) => {
                    if (ws.readyState === window.WebSocket.CONNECTING) {
                        ws.close();
                        reject(new Error('WebSocket failed to open: ' + event));
                    }
                }, { once: true });
    
                ws.addEventListener('close', () => {
                    ws.close();
                }, { once: true });
            });
    
            if (conn instanceof window.WebSocket) {
                conn.send(JSON.stringify(hdrs));
            }
        } catch (e) {
            console.log("caught", e)
        }
        


    }

    public static async initializeWebSocketConnection<U extends RequestBody, V extends ResponseBody>(
        url: string,
        secHandle: SecurityHandler
    ): Promise<any> {
        const arh = new AjaxRequestHandle(undefined, undefined, secHandle);
        arh.path = url;
        const hdrs = await arh.securityHandler.createHeaders();
        const headersObject = Object.fromEntries(hdrs.entries());

        if (typeof window !== 'undefined') {
            console.log("in browser")
            return await CMMT.initializeBrowserWebsocketConnection(url, headersObject);
        }

        let obj;
        if (env.MODE === "DEV") {
            const agent = new https.Agent({
                rejectUnauthorized: false
            });
            obj = { headers: headersObject, agent:agent }
        } else {
            obj = { headers: headersObject }
        }

        const ws: WebSocket = new WebSocket(
            `${CMMT.WEBSOCKET_BASE_URL}${url}`,
            obj
        );

        return new Promise((resolve, reject) => {
            const onOpenHandler = (stream: any) => {
                ws.off('open', onOpenHandler);  // remove listener after it's used
                resolve(ws);
            };

            const onErrorHandler = (err: Error) => {
                console.log(err)
                if (ws.readyState === WebSocket.CONNECTING) {
                    ws.off('error', onErrorHandler);  // remove listener
                    ws.close()
                    reject(new Error('WebSocket failed to open: ' + err.message));
                }
            };

            const onCloseHandler = () => {
                ws.off('close', onCloseHandler);  // remove listener
                ws.close();
            };

            ws.on('open', onOpenHandler);
            ws.on('error', onErrorHandler);
            ws.on('close', onCloseHandler);
        });
    }


    public static fetch<T, U extends RequestBody, V extends ResponseBody>(
        req: new () => U,
        res: new () => V,
        url: string,
        mtd: string,
        secHandle: SecurityHandler,
        ...arg: any
    ): Promise<T> {
        arg = cloneDeep(arg);
        return new Promise<T>(async (resolve, reject) => {
            try {
                let arh = new AjaxRequestHandle(req, res, secHandle);
                arh.request.loadClientData(...arg);
                arh.method = mtd;
                arh.path = url;

                let hdrs = await arh.securityHandler.createHeaders();
                let config: AxiosRequestConfig<string> = {
                    url: CMMT.getPath(arh.path),
                    method: arh.method,
                    headers: {
                        ...Object.fromEntries(hdrs.entries()),
                        'Content-Type': 'application/json'
                    },
                    data: await arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs),
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    }),
                    timeout: 100000
                };

                let axios = new Axios(config)

                let axiosResponse = await axios.request<string, any>(config);

                if (axiosResponse.status === 200) {
                    let decodedResponse = await arh.securityHandler.decodeResponse(axiosResponse.data as string, axiosResponse.headers);
                    let retVal = arh.response.setResponseJSON(decodedResponse);
                    resolve(retVal.getClientReturnValue());
                } else {
                    throw new Error(axiosResponse.data);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    public static fetchGeneric<U extends RequestBody, V extends ResponseBody, W extends FluxType>(
        req: new () => U,
        res: new (t?: any) => V,
        type: new (fbo?: any) => W,
        url: string,
        mtd: string,
        secHandle: SecurityHandler,
        ...arg: any
    ): Promise<W[]> {
        arg = cloneDeep(arg);
        return new Promise<W[]>(async (resolve, reject) => {
            try {
                let arh = new AjaxRequestHandle(req, res, secHandle, type);
                arh.request.loadClientData(...arg);
                arh.method = mtd;
                arh.path = url;

                let hdrs = await arh.securityHandler.createHeaders();
                let config: AxiosRequestConfig<string> = {
                    url: CMMT.getPath(arh.path),
                    method: arh.method,
                    headers: {
                        ...Object.fromEntries(hdrs.entries()),
                        'Content-Type': 'application/json'
                    },
                    data: await arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs),
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    }),
                    timeout: 100000
                };

                let axios = new Axios(config)

                let axiosResponse = await axios.request<string, any>(config);

                if (axiosResponse.status === 200) {
                    let decodedResponse = await arh.securityHandler.decodeResponse(axiosResponse.data as string, axiosResponse.headers);
                    let retVal = arh.response.setResponseJSON(decodedResponse);
                    resolve(retVal.getClientReturnValue());
                } else {
                    throw new Error(axiosResponse.data);
                }
            } catch (error) {
                reject(error);
            }
        });
    }




}

