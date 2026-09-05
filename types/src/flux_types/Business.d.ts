import { FluxType } from './FluxType';
import { IBusiness } from './IBusiness';
/**
 * An independent business (many-to-many with customer Accounts via the
 * AccountBusiness join). One business can attach to many customers; a
 * PaymentLink/Invoice can optionally reference one via `businessId` so the
 * business name renders in the BILL TO block.
 */
export declare class Business extends FluxType implements IBusiness {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        createdAt: number;
        activeStatus: boolean;
        businessName: string;
        businessEmail: string;
        businessPhone: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        taxId: string;
    };
    id: number;
    uniqueId: string;
    metadata: string;
    createdAt: number;
    activeStatus: boolean;
    businessName: string;
    businessEmail: string;
    businessPhone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    /**
     * The buyer's government tax identifier (US EIN in practice). Optional and
     * merchant-entered. When an invoice/payment link is billed to this
     * business the value is snapshotted onto the link at creation time and
     * forwarded to the card networks as buyer tax data (Level II), the
     * buyer-side counterpart to the merchant's own tax id.
     */
    taxId: string;
    protected objectType: string;
    getDispName(): string;
    constructor(business?: Partial<Business>);
    static createInstanceLazy(data: Partial<IBusiness>): Promise<Business>;
    static createInstanceSafe(data: Partial<IBusiness>): Promise<Business>;
}
