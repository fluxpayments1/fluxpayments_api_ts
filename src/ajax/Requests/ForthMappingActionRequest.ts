import { RequestBodyBase } from "./RequestBodyBase";

export class ForthMappingActionRequest extends RequestBodyBase {
    private mappingId?: number;
    private paused?: boolean;

    constructor() {
        super();
    }

    public loadClientData(mappingId?: number, paused?: boolean): void {
        this.mappingId = mappingId;
        this.paused = paused;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ mappingId: this.mappingId, paused: this.paused });
    }
}
