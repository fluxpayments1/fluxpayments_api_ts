import { RequestBodyBase } from "./RequestBodyBase";
/**
 * One call of manageVirtualTerminalsWeb (change ticket fluxpayments1/flux_container#61): the
 * portal's management of a business's virtual terminals.
 *
 * `action` = list | get | create | update | unlock | clearCardPause | endSessions | newLink |
 * turnOff | turnOn | delete. `terminalId` names the terminal for every action but list and
 * create. On update a field left undefined is left as it is; `noLimit: true` removes the
 * single-payment limit.
 */
export interface ManageVirtualTerminalsOpts {
    action: string;
    terminalId?: number;
    name?: string;
    /** Where the terminal's 8-digit sign-in codes are emailed. */
    codeEmail?: string;
    /**
     * The terminal's password as typed. It is sent ONLY as `passwordB64` (base64 of its UTF-8
     * bytes): the portal's request sanitizer escapes `& < > '` across the whole body, and a
     * password that contains one of those would otherwise be stored as a different password.
     */
    password?: string;
    singlePaymentLimit?: number | string;
    noLimit?: boolean;
    sendReceiptDefault?: boolean;
}
/** Base64 of the UTF-8 bytes of `s`, in a browser or in Node. */
export declare function utf8Base64(s: string): string;
/**
 * Body of manageVirtualTerminalsWeb. Only the keys the caller supplied are sent. The password
 * never goes out in plain form, and this class never logs it.
 */
export declare class ManageVirtualTerminalsRequest extends RequestBodyBase {
    private opts;
    constructor();
    loadClientData(opts?: ManageVirtualTerminalsOpts): this;
    getRequestAsString(): string;
}
