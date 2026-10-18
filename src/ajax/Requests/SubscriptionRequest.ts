import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Body for getSubscriptionDetail / manageSubscription. Only keys the caller set are sent
 * (undefined is dropped, never sent as null).
 */
export class SubscriptionRequest extends RequestBodyBase {
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
