import { FluxType } from "./";
export declare class InstallmentTransaction extends FluxType {
    obName: string;
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        originalTransactionId: number;
        installmentsLeft: number;
        installmentAmount: number;
        otplId: number;
        installmentPeriod: any;
        status: any;
    };
    id: number;
    metadata: string;
    originalTransactionId: number;
    installmentsLeft: number;
    installmentAmount: number;
    otplId: number;
    installmentPeriod: any;
    status: any;
    protected objectType: string;
    constructor(installmentTransaction?: Partial<InstallmentTransaction>);
}
