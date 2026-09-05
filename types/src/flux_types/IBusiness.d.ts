export interface IBusiness {
    id?: number;
    uniqueId?: string;
    metadata?: string;
    businessName: string;
    businessEmail?: string;
    businessPhone?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    /** Buyer's tax identifier (EIN); forwarded to the card networks as Level II buyer tax data. */
    taxId?: string;
}
