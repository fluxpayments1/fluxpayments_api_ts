import { RequestBodyBase } from "./RequestBodyBase";
export declare class CancelSubscriptionRequest extends RequestBodyBase {
    private _subscriptionId;
    get subscriptionId(): number;
    set subscriptionId(subscriptionId: number);
    loadClientData(subscriptionId: number): void;
}
