import { FluxType } from "./FluxType";
import { IDailyReport } from "./IDailyReport";

export class DailyReport extends FluxType implements IDailyReport {
    public obName: string = "DailyReport";

    public getDispName(): string {
        return this.reportType + " Report - " + (this.reportDateStart || this.id);
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            reportName: this.reportName,
            reportType: this.reportType,
            reportDateStart: this.reportDateStart,
            reportDateEnd: this.reportDateEnd,
            status: this.status,
            s3KeyCsv: this.s3KeyCsv,
            s3KeyPdf: this.s3KeyPdf,
            reportSummary: this.reportSummary,
            errorMessage: this.errorMessage,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public reportName?: string;
    public reportType?: string;
    public reportDateStart?: string;
    public reportDateEnd?: string;
    public status?: string;
    public s3KeyCsv?: string;
    public s3KeyPdf?: string;
    public reportSummary?: string;
    public errorMessage?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "daily_report";

    constructor(data?: Partial<IDailyReport>) {
        super(data, DailyReport);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IDailyReport>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IDailyReport>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
