import { FluxType } from './FluxType';
import { IInstallmentTransaction } from './IInstallmentTransaction';
export declare class InstallmentTransaction extends FluxType implements IInstallmentTransaction {
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
    static createInstanceLazy(acc: Partial<IInstallmentTransaction>): Promise<InstallmentTransaction>;
    static createInstanceSafe(acc: Partial<IInstallmentTransaction>): Promise<InstallmentTransaction>;
}
