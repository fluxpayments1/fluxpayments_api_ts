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
import { AxiosRequestConfig, Axios, HttpStatusCode, AxiosHeaders } from "axios";
import cloneDeep from 'lodash/cloneDeep';
import { WebSocket, WebSocketServer } from 'ws'
import * as https from 'https'

import * as env from '../../env.json';
import { IFlux } from "../../lib/IFlux";

export class CMMT {

    /**
     * Extra headers attached to EVERY request (all three transport paths).
     * Used for the partner act-as-merchant header: the portal sets it once and
     * every subsequent call carries it. The backend honors it only for
     * allowlisted partner MACs (WebsiteSecurityHandle.applyPartnerActAs).
     */
    private static globalHeaders: { [name: string]: string } = {};

    /** Set (value) or clear (null/undefined) a header sent on every request. */
    public static setGlobalHeader(name: string, value: string | null | undefined): void {
        if (value === null || value === undefined || value === '') {
            delete CMMT.globalHeaders[name];
        } else {
            CMMT.globalHeaders[name] = value;
        }
    }
    private static readonly BASE_URL: string = env.API_CONNECTION_ENDPOINT_PROD
    private static readonly AI_BASE_URL: string = env.AI_CONNECTION_ENDPOINT_PROD
    private static readonly WEBSOCKET_BASE_URL: string = env.WEBSOCKET_CONNECTION_ENDPOINT_PROD
    private static isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    private static getPath(arg): string {

        if (window && (window as any).isReactNative) {
            return CMMT.BASE_URL.concat(arg).concat("ReactNative");
        }


        return CMMT.BASE_URL.concat(arg).concat(this.isBrowser ? "Web" : "");
    }

    private static getAIPath(arg): string {
        // AI endpoints don't use the "Web" suffix
        return CMMT.AI_BASE_URL.concat(arg);
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

        if (typeof window !== 'undefined') {
            ws.send(reqStr);
            return new Promise<any>((resolve, reject) => {
                const messageHandler = async (stream: any) => {
                    let jsonStream = JSON.parse(stream.data.toString());
                    if (jsonStream.messageIdentifier === messageIdentifier) {
                        let decResponse = await arh.securityHandler.decodeResponse(stream.data.toString());
                        ws.removeEventListener('message', messageHandler);

                        resolve(arh.response.setResponseJSON(decResponse).getClientReturnValue());
                    }
                };
                ws.addEventListener('message', messageHandler);
            });
        } else {
            return new Promise<any>((resolve, reject) => {
                // Send the message over WebSocket
    
    
                // Message event handler
                const messageHandler = async (stream: any) => {
                    let jsonStream = JSON.parse(stream.toString());
                    if (jsonStream.messageIdentifier === messageIdentifier) {
                        let decResponse = await arh.securityHandler.decodeResponse(stream.toString());
                        resolve(arh.response.setResponseJSON(decResponse).getClientReturnValue());
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
    }

    public static async initializeBrowserWebsocketConnection(url, hdrs: object) : Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const wsUrl = `${CMMT.WEBSOCKET_BASE_URL}${url}`;
                const ws = new window.WebSocket(wsUrl);
                
                ws.onopen = () => {
                    ws.send(JSON.stringify(hdrs))
                    resolve(ws);
                }

                ws.onerror = e => {
                    reject(e)
                }

    
                
            } catch (e) {
                console.log("caught", e)
                reject(e)
            }
            
        })
    }

    public static async initializeWebSocketConnection<U extends RequestBody, V extends ResponseBody>(
        url: string,
        secHandle: SecurityHandler
    ): Promise<any> {
        const arh = new AjaxRequestHandle(undefined, undefined, secHandle);
        arh.path = url;
        const hdrs = await arh.securityHandler.createHeaders(true);
        //encode the request
        const headersObject = Object.fromEntries(hdrs.entries());

        if (typeof window !== 'undefined') {
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
                    withCredentials: true,
                    headers: {
                        ...Object.fromEntries(hdrs.entries()),
                        ...CMMT.globalHeaders,
                        'Content-Type': 'application/json',
                    },
                    data: await arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs),
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    }),
                    timeout: 150000
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

    public static fetchGeneric<U extends RequestBody, V extends ResponseBody, W extends IFlux>(
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
                    withCredentials: true,
                    headers: {
                        ...Object.fromEntries(hdrs.entries()),
                        ...CMMT.globalHeaders,
                        'Content-Type': 'application/json',
                    },
                    data: await arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs),
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    }),
                    timeout: 150000
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

    public static async fetchStreaming<U extends RequestBody, V extends ResponseBody>(
        req: new () => U,
        res: new () => V,
        url: string,
        mtd: string,
        secHandle: SecurityHandler,
        onChunk: (chunk: any, done: boolean) => void,
        ...arg: any
    ): Promise<void> {
        arg = cloneDeep(arg);

        try {
            let arh = new AjaxRequestHandle(req, res, secHandle);
            arh.request.loadClientData(...arg);
            arh.method = mtd;
            arh.path = url;

            let hdrs = await arh.securityHandler.createHeaders();
            const requestData = await arh.securityHandler.encodeRequest(arh.request.getRequestAsString(), hdrs);

            // Use native fetch API for streaming support
            const fetchOptions: RequestInit = {
                method: arh.method,
                credentials: 'include',
                headers: {
                    ...Object.fromEntries(hdrs.entries()),
                        ...CMMT.globalHeaders,
                    'Content-Type': 'application/json',
                },
                body: requestData
            };

            const response = await fetch(env.AI_CONNECTION_ENDPOINT_PROD + arh.path, fetchOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }


            // Get the response headers for decryption
            const responseHeaders: Record<string, string> = {};
            response.headers.forEach((value, key) => {
                responseHeaders[key] = value;
            });


            // Process the streaming response
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            if (!reader) {
                throw new Error('Response body is not readable');
            }

            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    // Process any remaining data in buffer
                    if (buffer.trim()) {
                        await this.processAndEmitChunk(buffer, arh, res, responseHeaders, onChunk);
                    }
                    break;
                }


                // Decode the chunk and add to buffer
                buffer += decoder.decode(value, { stream: true });

                // Process complete messages (delimited by \n)
                let newlineIndex;
                while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
                    let chunk = buffer.substring(0, newlineIndex).trim();
                    buffer = buffer.substring(newlineIndex + 1);

                    // Only process non-empty chunks that look like JSON
                    if (chunk && chunk.startsWith('data:{')) {
                        await this.processAndEmitChunk(chunk.substring(5), arh, res, responseHeaders, onChunk);
                    }
                }
            }
        } catch (error) {
            console.error('Streaming error:', error);
            throw error;
        }
    }

    private static async processAndEmitChunk<U extends RequestBody, V extends ResponseBody>(
        encryptedChunk: string,
        arh: AjaxRequestHandle<U, V, SecurityHandler>,
        resConstructor: new () => V,
        responseHeaders: Record<string, string>,
        onChunk: (chunk: any, done: boolean) => void
    ): Promise<void> {
        try {
            //turn responseHeaders to map (case-insensitive)
            const responseHeadersMap: AxiosHeaders = new AxiosHeaders();
            for (const [key, value] of Object.entries(responseHeaders)) {
                responseHeadersMap.set(key, value);
            }

            // Decrypt the chunk immediately
            const decodedResponse = await arh.securityHandler.decodeResponse(encryptedChunk, responseHeadersMap);
            
            // Parse the decrypted response and create a response object
            const responseObj = new resConstructor();
            responseObj.setResponseJSON(decodedResponse);
            // Get the client return value and pass it to the callback
            const clientValue = responseObj.getClientReturnValue();
            onChunk(clientValue, false);
        } catch (error) {
            console.error('Error processing chunk:', error);
            // Continue processing other chunks even if one fails
        }
    }




}

