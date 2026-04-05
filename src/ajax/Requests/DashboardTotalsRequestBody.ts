import { RequestBodyBase } from "./RequestBodyBase";

export class DashboardTotalsRequestBody extends RequestBodyBase {
    public loadClientData(): void {
        // No request data needed — merchant ID comes from auth
    }
}
