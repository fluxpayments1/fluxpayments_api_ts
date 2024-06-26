import { SecurityHandler } from "../../ajax/security/SecurityHandler";
import { RequestBody } from "../../ajax/Requests/RequestBody";
import { ResponseBody } from "../../ajax/Responses/ResponseBody";
import { WebSocket } from 'ws';
import { FluxType } from "../../flux_types/FluxType";
export declare class CMMT {
    private static readonly BASE_URL;
    private static readonly WEBSOCKET_BASE_URL;
    private static isBrowser;
    private static getPath;
    static sendWsCommMessage<U extends RequestBody, V extends ResponseBody>(ws: WebSocket, req: new () => U, res: new () => V, secHandle: SecurityHandler, ...args: any): Promise<any>;
    static initializeBrowserWebsocketConnection(url: any, hdrs: object): Promise<any>;
    static initializeWebSocketConnection<U extends RequestBody, V extends ResponseBody>(url: string, secHandle: SecurityHandler): Promise<any>;
    static fetch<T, U extends RequestBody, V extends ResponseBody>(req: new () => U, res: new () => V, url: string, mtd: string, secHandle: SecurityHandler, ...arg: any): Promise<T>;
    static fetchGeneric<U extends RequestBody, V extends ResponseBody, W extends FluxType>(req: new () => U, res: new (t?: any) => V, type: new (fbo?: any) => W, url: string, mtd: string, secHandle: SecurityHandler, ...arg: any): Promise<W[]>;
}
