import { ResponseBodyBase } from "./ResponseBodyBase";
/** A registered webhook endpoint. Never carries the signing secret. */
export interface WebhookEndpointView {
    id: number;
    url: string;
    description: string | null;
    events: string[];
    status: 'ACTIVE' | 'DOWN' | 'DISABLED';
    disabledReason: string | null;
    consecutiveFailures: number;
    lastAttemptAt: string | null;
    lastSuccessAt: string | null;
    downSince: string | null;
    previousSecretValidUntil: string | null;
    createdAt: string | null;
}
/** One delivery in an endpoint's log. `lastReply` is receiver-controlled text: render as text only. */
export interface WebhookDeliveryView {
    id: number;
    eventId: string | null;
    eventType: string;
    kind: 'EVENT' | 'PING' | 'TEST';
    origin: string;
    status: 'PENDING' | 'SENDING' | 'DELIVERED' | 'FAILED' | 'EXPIRED';
    attempts: number;
    lastOutcome: string | null;
    lastStatusCode: number | null;
    nextAttemptAt: string | null;
    deliveredAt: string | null;
    createdAt: string | null;
    lastAttemptAt: string | null;
    lastDurationMs: number | null;
    lastReply: string | null;
}
export interface WebhookResult {
    endpoint?: WebhookEndpointView;
    endpoints?: WebhookEndpointView[];
    /** Present only on create and rotate - shown once. */
    secret?: string;
    deliveries?: WebhookDeliveryView[];
    events?: any[];
    event?: any;
    queued?: number;
    deliveryId?: number;
    note?: string;
    hasMore?: boolean;
    eventTypes?: string[];
}
/** Explicit whitelist: a key the backend adds is dropped until it is named here. */
export declare class WebhookResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): WebhookResponse;
    getClientReturnValue(): WebhookResult;
}
