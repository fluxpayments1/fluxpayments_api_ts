import { BaseQuery } from "./BaseQuery";
import { IDailyReportQuery } from "./IDailyReportQuery";
import { DailyReport } from "./DailyReport";
export declare class DailyReportQuery extends BaseQuery<DailyReport> implements IDailyReportQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        reportType: string;
        reportDateStart: string;
        reportDateEnd: string;
        status: string;
        reportName: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    reportType?: string;
    reportDateStart?: string;
    reportName?: string;
    reportDateEnd?: string;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(query?: IDailyReportQuery);
    static createQuery(q: IDailyReportQuery): DailyReportQuery;
}
