/// <reference types="node" />
import { SecurityHandlerBase } from '../ajax/security';
import { EmissionData } from '../flux_types/';
import { EventEmitter } from 'events';
export declare enum Subscription {
    ACCOUNT_CREATE = "account.CREATE",
    ACCOUNT_UPDATE = "account.UPDATE",
    ACCOUNT_DELETE = "account.DELETE",
    PRODUCT_CREATE = "product.CREATE",
    PRODUCT_UPDATE = "product.UPDATE",
    PRODUCT_DELETE = "product.DELETE",
    ADDRESS_CREATE = "address.CREATE",
    ADDRESS_UPDATE = "address.UPDATE",
    ADDRESS_DELETE = "address.DELETE",
    PAYMENT_METHOD_CREATE = "payment_method.CREATE",
    PAYMENT_METHOD_UPDATE = "payment_method.UPDATE",
    PAYMENT_METHOD_DELETE = "payment_method.DELETE",
    TRANSACTION_CREATE = "transaction.CREATE",
    TRANSACTION_UPDATE = "transaction.UPDATE",
    TRANSACTION_DELETE = "transaction.DELETE",
    TOKEN_CREATE = "token.CREATE",
    TOKEN_UPDATE = "token.UPDATE",
    TOKEN_DELETE = "token.DELETE",
    PAYMENT_VALIDATION = "payment_method.VALIDATION"
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
