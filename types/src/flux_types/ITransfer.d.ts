import { IPaymentLink } from './IPaymentLink';
export interface ITransfer extends IPaymentLink {
    transferDirection?: 'PUSH' | 'PULL';
    transferStatus?: string;
}
