import { RequestBodyBase } from "./RequestBodyBase";

export class GetForthStatusRequest extends RequestBodyBase {
    private page?: number;
    private pageSize?: number;

    constructor() { super(); }

    public loadClientData(page?: number, pageSize?: number): void {
        this.page = page;
        this.pageSize = pageSize;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ page: this.page, pageSize: this.pageSize });
    }
}
