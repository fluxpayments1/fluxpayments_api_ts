import { FluxType } from './FluxType';
import { IQuickBooksIntegrationInformation } from './IQuickBooksIntegrationInformation';

export class QuickBooksIntegrationInformation extends FluxType implements IQuickBooksIntegrationInformation {
    obName: string = "QuickBooksIntegrationInformation";

    getDispName(): string {
        return `QuickBooks Integration #${this.id}`;
    }

    public serialize() {
        return {
            id: this.id,
            merchantId: this.merchantId,
            accessToken: this.accessToken,
            refreshToken: this.refreshToken,
            realmId: this.realmId,
            qbCustomerId: this.qbCustomerId,
            qbItemSale: this.qbItemSale,
            qbItemRefund: this.qbItemRefund,
            qbItemChargeback: this.qbItemChargeback,
            qbItemAdjustment: this.qbItemAdjustment,
            qbItemAuthFee: this.qbItemAuthFee,
            qbItemProcessingFee: this.qbItemProcessingFee,
            qbExpenseAccountId: this.qbExpenseAccountId,
            qbIncomeAccountId: this.qbIncomeAccountId,
            qbIncomeItemId: this.qbIncomeItemId,
            qbBankAccountId: this.qbBankAccountId,
            qbTaxLiabilityAccountId: this.qbTaxLiabilityAccountId,
            qbTaxItemId: this.qbTaxItemId,
            activeStatus: this.activeStatus,
            objectType: this.objectType
        };
    }

    id: number;
    merchantId: number;
    accessToken: string;
    refreshToken: string;
    realmId: string;
    qbCustomerId: string;
    qbItemSale: string;
    qbItemRefund: string;
    qbItemChargeback: string;
    qbItemAdjustment: string;
    qbItemAuthFee: string;
    qbItemProcessingFee: string;
    qbExpenseAccountId: string;
    qbIncomeAccountId: string;
    qbIncomeItemId: string;
    qbBankAccountId: string;
    qbTaxLiabilityAccountId: string;
    qbTaxItemId: string;
    activeStatus: boolean;
    protected objectType: string = "quickbooks_info";

    public constructor(qbInfo?: Partial<QuickBooksIntegrationInformation>) {
        super(qbInfo, QuickBooksIntegrationInformation);
        Object.assign(this, qbInfo);
    }
}

