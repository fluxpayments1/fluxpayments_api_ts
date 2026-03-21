export interface IDailyReportQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    reportType?: string;
    reportDateStart?: string;
    reportDateEnd?: string;
    status?: string;
    activeStatus?: boolean;
    reportName?: string;
    metadata?: string;
}
