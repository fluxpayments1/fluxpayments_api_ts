import { RequestBodyBase } from "./RequestBodyBase";

/**
 * One body for every webhook call (createWebhookEndpointWeb, getWebhookDeliveriesWeb, ...).
 * `CMMT.fetch` builds the request with no constructor args and hands the Flux method's
 * extra argument to `loadClientData`, so the body object arrives there. Only keys the
 * caller actually set are sent (undefined is dropped, never sent as null).
 */
export class WebhookRequest extends RequestBodyBase {
    private payload: { [key: string]: unknown } = {};

    constructor() {
        super();
    }

    public loadClientData(body?: { [key: string]: unknown }): void {
        const out: { [key: string]: unknown } = {};
        if (body) {
            for (const k of Object.keys(body)) {
                if (body[k] !== undefined) out[k] = body[k];
            }
        }
        this.payload = out;
    }

    public getRequestAsString(): string {
        return JSON.stringify(this.payload);
    }
}
