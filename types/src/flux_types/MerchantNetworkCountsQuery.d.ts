import { BaseQuery } from "./BaseQuery";
import { IMerchantNetworkCountsQuery } from "./IMerchantNetworkCountsQuery";
import { MerchantNetworkCounts } from "./MerchantNetworkCounts";
/**
 * This is an object that is used to query for merchant_network_countss.
 */
export declare class MerchantNetworkCountsQuery extends BaseQuery<MerchantNetworkCounts> {
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        visaDollarAmount: number;
        mastercardDollarAmount: number;
        amexDollarAmount: number;
        discoverDollarAmount: number;
        visaCount: number;
        mastercardCount: number;
        createdAt: number;
        amexCount: number;
        discoverCount: number;
    };
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
    objectType: string;
    constructor(tokQ?: IMerchantNetworkCountsQuery);
    static createQuery(ipq: IMerchantNetworkCountsQuery): MerchantNetworkCountsQuery;
}
