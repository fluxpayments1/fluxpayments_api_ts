import { SecurityHandler } from "../../ajax/security/SecurityHandler";
import { RequestBody } from "../../ajax/Requests/RequestBody";
import { ResponseBody } from "../../ajax/Responses/ResponseBody";
import { WebSocket } from 'ws';
import { IFlux } from "../../lib/IFlux";
export declare class CMMT {
    /**
     * Extra headers attached to EVERY request (all three transport paths).
     * Used for the partner act-as-merchant header: the portal sets it once and
     * every subsequent call carries it. The backend honors it only for
     * allowlisted partner MACs (WebsiteSecurityHandle.applyPartnerActAs).
     */
    private static globalHeaders;
    /** Set (value) or clear (null/undefined) a header sent on every request. */
    static setGlobalHeader(name: string, value: string | null | undefined): void;
    private static readonly BASE_URL;
    private static readonly AI_BASE_URL;
    private static readonly WEBSOCKET_BASE_URL;
    private static isBrowser;
    private static getPath;
    private static getAIPath;
    static sendWsCommMessage<U extends RequestBody, V extends ResponseBody>(ws: WebSocket, req: new () => U, res: new () => V, secHandle: SecurityHandler, ...args: any): Promise<any>;
    static initializeBrowserWebsocketConnection(url: any, hdrs: object): Promise<any>;
    static initializeWebSocketConnection<U extends RequestBody, V extends ResponseBody>(url: string, secHandle: SecurityHandler): Promise<any>;
    static fetch<T, U extends RequestBody, V extends ResponseBody>(req: new () => U, res: new () => V, url: string, mtd: string, secHandle: SecurityHandler, ...arg: any): Promise<T>;
    static fetchGeneric<U extends RequestBody, V extends ResponseBody, W extends IFlux>(req: new () => U, res: new (t?: any) => V, type: new (fbo?: any) => W, url: string, mtd: string, secHandle: SecurityHandler, ...arg: any): Promise<W[]>;
    static fetchStreaming<U extends RequestBody, V extends ResponseBody>(req: new () => U, res: new () => V, url: string, mtd: string, secHandle: SecurityHandler, onChunk: (chunk: any, done: boolean) => void, ...arg: any): Promise<void>;
    private static processAndEmitChunk;
}
