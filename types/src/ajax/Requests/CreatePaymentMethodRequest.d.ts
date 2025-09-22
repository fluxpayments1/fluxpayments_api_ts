import { RequestBodyBase } from "./RequestBodyBase";
export declare class CreatePaymentMethodRequest extends RequestBodyBase {
    private _cardNumber;
    private _expiryDate;
    private _cvv;
    private _cardholderName;
    private _billingAddress;
    get cardNumber(): string;
    set cardNumber(cardNumber: string);
    get expiryDate(): string;
    set expiryDate(expiryDate: string);
    get cvv(): string;
    set cvv(cvv: string);
    get cardholderName(): string;
    set cardholderName(cardholderName: string);
    get billingAddress(): string;
    set billingAddress(billingAddress: string);
    loadClientData(cardNumber: string, expiryDate: string, cvv: string, cardholderName: string, billingAddress: string): void;
}
