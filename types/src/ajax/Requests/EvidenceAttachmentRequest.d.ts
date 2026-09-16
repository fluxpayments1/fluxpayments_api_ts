import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Two-step merchant evidence upload — presign, then confirm
 * (docs/chargeback-evidence/DESIGN.md 7.4, 7.4.1).
 *
 * Two steps because these files get forwarded to an acquirer, which makes them
 * the one part of the evidence packet that leaves the platform as arbitrary
 * merchant-supplied bytes. The platform's usual one-step `@FluxDocument` upload
 * validates the file EXTENSION and never inspects the bytes.
 *
 *   presign  -> validates the claimed name + size, returns { uploadUrl, uploadKey }
 *   (browser PUTs the file to uploadUrl)
 *   confirm  -> server reads what landed, SNIFFS the real type from the magic
 *               bytes, enforces the real size, hashes it, and copies it into the
 *               evidence store. A type/extension mismatch is a REJECTION.
 *
 * `sizeBytes` is the browser's claim and is never trusted — it only lets an
 * oversized upload be refused before it is attempted.
 */
export interface EvidenceAttachmentParams {
    action: "presign" | "confirm";
    transactionId: number;
    disputeId?: number;
    fileName: string;
    label?: string;
    sizeBytes?: number;
    /** confirm only: the key returned by presign. */
    uploadKey?: string;
}
export declare class EvidenceAttachmentRequest extends RequestBodyBase {
    private action;
    private transactionId;
    private disputeId?;
    private fileName;
    private label?;
    private sizeBytes?;
    private uploadKey?;
    constructor();
    loadClientData(params: EvidenceAttachmentParams): void;
    getRequestAsString(): string;
}
