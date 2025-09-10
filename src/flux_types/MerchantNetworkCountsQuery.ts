import { BaseQuery } from "./BaseQuery";
import { IMerchantNetworkCountsQuery } from "./IMerchantNetworkCountsQuery";
import { MerchantNetworkCounts } from "./MerchantNetworkCounts";

/**
 * This is an object that is used to query for merchant_network_countss.
 */
export class MerchantNetworkCountsQuery extends BaseQuery<MerchantNetworkCounts> {
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
            createdAt: this.createdAt,
            amexCount: this.amexCount,
            discoverCount: this.discoverCount,
        }
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
    objectType: string = "merchant_network_counts";

    public constructor(tokQ?: IMerchantNetworkCountsQuery){
        super(MerchantNetworkCounts);
        Object.assign(this, tokQ);
    }


    public static createQuery(ipq:  IMerchantNetworkCountsQuery) {
        return new MerchantNetworkCountsQuery(ipq);
    }
}
