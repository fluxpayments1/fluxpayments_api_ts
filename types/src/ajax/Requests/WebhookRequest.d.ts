import { RequestBodyBase } from "./RequestBodyBase";
/**
 * One body for every webhook call (createWebhookEndpointWeb, getWebhookDeliveriesWeb, ...).
 * `CMMT.fetch` builds the request with no constructor args and hands the Flux method's
 * extra argument to `loadClientData`, so the body object arrives there. Only keys the
 * caller actually set are sent (undefined is dropped, never sent as null).
 */
export declare class WebhookRequest extends RequestBodyBase {
    private payload;
    constructor();
    loadClientData(body?: {
        [key: string]: unknown;
    }): void;
    getRequestAsString(): string;
}
