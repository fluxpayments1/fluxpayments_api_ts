/// <reference types="node" />
import { SecurityHandlerBase } from '../ajax/security';
import { EmissionData } from '../flux_types/';
import { EventEmitter } from 'events';
export declare enum Subscription {
    ACCOUNT_CREATE = "ACCOUNT.CREATE",
    ACCOUNT_UPDATE = "ACCOUNT.UPDATE",
    ACCOUNT_DELETE = "ACCOUNT.DELETE",
    PRODUCT_CREATE = "PRODUCT.CREATE",
    PRODUCT_UPDATE = "PRODUCT.UPDATE",
    PRODUCT_DELETE = "PRODUCT.DELETE",
    ADDRESS_CREATE = "ADDRESS.CREATE",
    ADDRESS_UPDATE = "ADDRESS.UPDATE",
    ADDRESS_DELETE = "ADDRESS.DELETE",
    PAYMENT_METHOD_CREATE = "PAYMENT_METHOD.CREATE",
    PAYMENT_METHOD_UPDATE = "PAYMENT_METHOD.UPDATE",
    PAYMENT_METHOD_DELETE = "PAYMENT_METHOD.DELETE",
    TRANSACTION_CREATE = "TRANSACTION.CREATE",
    TRANSACTION_UPDATE = "TRANSACTION.UPDATE",
    TRANSACTION_DELETE = "TRANSACTION.DELETE",
    TOKEN_CREATE = "TOKEN.CREATE",
    TOKEN_UPDATE = "TOKEN.UPDATE",
    TOKEN_DELETE = "TOKEN.DELETE"
}
export interface FluxSockets {
    closeSocketAndListeners(): any;
    subscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this>;
    unSubscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this>;
}
export declare class FluxWebsockets extends EventEmitter implements FluxSockets {
    private websocketConnection;
    private static initializationSecHandler;
    private generalSecHandler;
    private expectingConnectionClose;
    constructor();
    subscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this>;
    unSubscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this>;
    closeSocketAndListeners(): Promise<void>;
    static initializeSecurityHandle(pk: string, prk: string, un: string, pw: string): void;
    static initializeWebSecHandle(x: SecurityHandlerBase): void;
    private initializeConnection;
    static getInstance(): Promise<FluxWebsockets>;
}
