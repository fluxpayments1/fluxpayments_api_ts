import { FluxType } from './FluxType';
import _cloneDeep from 'lodash/cloneDeep';

export class MerchantNetworkCounts extends FluxType {
    obName: string = "MerchantNetworkCounts"

    getDispName(): string {
        return this.id.toString()
    }

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            visaDollarAmount: this.visaDollarAmount,
            mastercardDollarAmount: this.mastercardDollarAmount,
            amexDollarAmount: this.amexDollarAmount,
            discoverDollarAmount: this.discoverDollarAmount,
            visaCount: this.visaCount,
            mastercardCount: this.mastercardCount,
            amexCount: this.amexCount,
            discoverCount: this.discoverCount,
        };
    }

    id: number;
    metadata: string;
    visaDollarAmount: number;
    mastercardDollarAmount: number;
    amexDollarAmount: number;
    discoverDollarAmount: number;
    visaCount: number;
    mastercardCount: number;
    amexCount: number;
    discoverCount: number;
    protected objectType: string = "merchant_network_counts";

    public constructor(merchantNetworkCounts?: Partial<MerchantNetworkCounts>) {
        super(merchantNetworkCounts, MerchantNetworkCounts);
        Object.assign(this, merchantNetworkCounts)
    }

}
