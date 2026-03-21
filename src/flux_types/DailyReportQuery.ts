import { BaseQuery } from "./BaseQuery";
import { IDailyReportQuery } from "./IDailyReportQuery";
import { DailyReport } from "./DailyReport";

export class DailyReportQuery extends BaseQuery<DailyReport> implements IDailyReportQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            reportType: this.reportType,
            reportDateStart: this.reportDateStart,
            reportDateEnd: this.reportDateEnd,
            status: this.status,
            reportName: this.reportName,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

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
    objectType: string = "daily_report";

    constructor(query?: IDailyReportQuery) {
        super(DailyReport);
        Object.assign(this, query);
    }

    public static createQuery(q: IDailyReportQuery) {
        return new DailyReportQuery(q);
    }
}
