import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Body for getSubscriptionDetail / manageSubscription. Only keys the caller set are sent
 * (undefined is dropped, never sent as null).
 */
export declare class SubscriptionRequest extends RequestBodyBase {
    private payload;
    constructor();
    loadClientData(body?: {
        [key: string]: unknown;
    }): void;
    getRequestAsString(): string;
}
