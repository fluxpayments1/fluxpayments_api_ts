export interface IDailyReport {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    reportType?: string;
    reportDateStart?: string;
    reportDateEnd?: string;
    status?: string;
    s3KeyCsv?: string;
    s3KeyPdf?: string;
    reportSummary?: string;
    errorMessage?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}
