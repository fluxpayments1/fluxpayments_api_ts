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
export function utf8Base64(s: string): string {
    if (typeof TextEncoder !== "undefined" && typeof btoa === "function") {
        const bytes = new TextEncoder().encode(s);
        let bin = "";
        for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
        return btoa(bin);
    }
    return Buffer.from(s, "utf-8").toString("base64");
}

/**
 * Body of manageVirtualTerminalsWeb. Only the keys the caller supplied are sent. The password
 * never goes out in plain form, and this class never logs it.
 */
export class ManageVirtualTerminalsRequest extends RequestBodyBase {
    private opts: ManageVirtualTerminalsOpts = { action: "list" };

    constructor() { super(); }

    public loadClientData(opts?: ManageVirtualTerminalsOpts) {
        this.opts = opts || { action: "list" };
        return this;
    }

    public getRequestAsString(): string {
        const o = this.opts || { action: "list" };
        const body: any = { action: o.action || "list" };
        if (o.terminalId !== undefined && o.terminalId !== null) body.terminalId = o.terminalId;
        if (o.name !== undefined && o.name !== null) body.name = o.name;
        if (o.codeEmail !== undefined && o.codeEmail !== null) body.codeEmail = o.codeEmail;
        if (typeof o.password === "string" && o.password.length > 0) body.passwordB64 = utf8Base64(o.password);
        if (o.singlePaymentLimit !== undefined && o.singlePaymentLimit !== null && o.singlePaymentLimit !== "") {
            body.singlePaymentLimit = o.singlePaymentLimit;
        }
        if (o.noLimit === true) body.noLimit = true;
        if (typeof o.sendReceiptDefault === "boolean") body.sendReceiptDefault = o.sendReceiptDefault;
        return JSON.stringify(body);
    }
}
