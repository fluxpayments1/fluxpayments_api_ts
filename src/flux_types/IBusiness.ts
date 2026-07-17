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
}
