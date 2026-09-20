import { ResponseBodyBase } from "./ResponseBodyBase";
/** One row of the review queue — enough to triage, and nothing more. */
export interface MerchantApplicationSummary {
    applicationId: number;
    status: string;
    organizationName: string | null;
    dbaName: string | null;
    contactEmail: string | null;
    businessState: string | null;
    monthlyMaximum: number | null;
    /** LINKED | SKIPPED | NOT_STARTED */
    bankStatus: string | null;
    signed: boolean;
    submittedAt: string | null;
    reviewedAt: string | null;
    reviewedBy: string | null;
    documentsReceived: number;
    documentsRequired: number;
    owners: number;
}
/**
 * The full application on a "get" or a "decide".
 *
 * <p>Deliberately loose. The server builds this map field by field precisely so
 * that nothing is serialized by reflection — the row carries an encrypted SSN,
 * an encrypted bank account number and a Plaid access token, none of which are
 * in here. Restating all forty-odd fields as a strict interface would only
 * drift from the server; the portal reads the keys it needs and the server
 * comment is the contract.
 */
export type MerchantApplicationDetail = {
    [key: string]: any;
};
export interface ReviewMerchantApplicationsResult {
    applications: MerchantApplicationSummary[];
    application: MerchantApplicationDetail;
    /** The underwriting packet, base64 PDF. Only on a "packet" action. */
    packetBase64: string | null;
    /** Set when an application was deleted, so the page can drop the row. */
    deletedApplicationId: number | null;
    packetFileName: string | null;
    packetDocumentsEmbedded: number | null;
    /** Files on the application that could NOT be placed inside the PDF. */
    packetDocumentsNotEmbedded: number | null;
    /**
     * Which acknowledgement an "approve" is waiting on, as a STABLE CODE —
     * never a message to match. Null when the approve needed no confirmation.
     *
     * Every `errorMsg` is rewritten by the server's error translator before it
     * reaches here, so branching on wording silently stops working the first
     * time the model rewords it. The status is 200 because on a non-2xx the
     * transport throws the raw body instead of decoding it; nothing was
     * created either way.
     */
    confirmRequired: 'ROUNDING' | 'P12_UNVERIFIED' | null;
    /** The question to show, verbatim. */
    confirmMessage: string | null;
}
export declare class ReviewMerchantApplicationsResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ReviewMerchantApplicationsResponse;
    getClientReturnValue(): ReviewMerchantApplicationsResult;
}
