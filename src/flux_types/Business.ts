import { FluxType } from './FluxType';
import { IBusiness } from './IBusiness';

/**
 * An independent business (many-to-many with customer Accounts via the
 * AccountBusiness join). One business can attach to many customers; a
 * PaymentLink/Invoice can optionally reference one via `businessId` so the
 * business name renders in the BILL TO block.
 */
export class Business extends FluxType implements IBusiness {
    obName: string = "Business";

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            createdAt: this.createdAt,
            activeStatus: this.activeStatus,
            businessName: this.businessName,
            businessEmail: this.businessEmail,
            businessPhone: this.businessPhone,
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            city: this.city,
            state: this.state,
            postalCode: this.postalCode,
            country: this.country,
            // MUST stay in serialize() or the portal silently cannot save it.
            taxId: this.taxId
        };
    }

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
    protected objectType: string = "business";

    getDispName(): string {
        return this.businessName || "";
    }

    public constructor(business?: Partial<Business>) {
        super(business, Business);
        Object.assign(this, business);
    }

    public static async createInstanceLazy(data: Partial<IBusiness>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IBusiness>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
