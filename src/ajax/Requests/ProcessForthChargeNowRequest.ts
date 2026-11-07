import { RequestBodyBase } from "./RequestBodyBase";

export class ProcessForthChargeNowRequest extends RequestBodyBase {
    private chargeId?: number;

    constructor() {
        super();
    }

    public loadClientData(chargeId?: number): void {
        this.chargeId = chargeId;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ chargeId: this.chargeId });
    }
}
