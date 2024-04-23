import { RequestBodyBase } from "../RequestBodyBase";
import { Subscription } from "../../../lib/FluxSockets";
export declare class AddSubscriptionRequest extends RequestBodyBase {
    _addedSubscriptions: Subscription[];
    _isAddRequest: Boolean;
    _messageIdentifier: number;
    loadClientData(subs: Subscription | Subscription[], reqType: Boolean, mi: any): void;
}
