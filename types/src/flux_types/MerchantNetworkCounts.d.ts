import { FluxType } from './FluxType';
export declare class MerchantNetworkCounts extends FluxType {
    obName: string;
    getDispName(): string;
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
    protected objectType: string;
    constructor(merchantNetworkCounts?: Partial<MerchantNetworkCounts>);
}
