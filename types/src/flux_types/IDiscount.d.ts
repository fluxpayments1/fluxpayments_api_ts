export interface IDiscount {
    id?: number;
    uniqueId?: string;
    metadata?: string;
    name: string;
    amount: number;
    discountType: 'PERCENTAGE' | 'AMOUNT';
}
