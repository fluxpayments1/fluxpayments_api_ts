export interface IInstallmentTransaction {
    id?: number;
    metadata?: string;
    originalTransactionId?: number;
    installmentsLeft?: number;
    installmentAmount?: number;
    otplId?: number;
    installmentPeriod?: any;
    status?: any;
}
