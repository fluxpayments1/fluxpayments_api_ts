import { ResponseBodyBase } from "./ResponseBodyBase";

export class DashboardTotalsResponseBody extends ResponseBodyBase {
    _weekToDate: any;
    _monthToDate: any;
    _yearToDate: any;
    _dailyTotals: any[];

    public getClientReturnValue(): any {
        return {
            weekToDate: this._weekToDate,
            monthToDate: this._monthToDate,
            yearToDate: this._yearToDate,
            dailyTotals: this._dailyTotals,
        };
    }
}
