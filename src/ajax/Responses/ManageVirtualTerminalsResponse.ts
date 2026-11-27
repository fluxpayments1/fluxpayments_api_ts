import { ResponseBodyBase } from "./ResponseBodyBase";

/** One virtual terminal as the portal shows it. The password and session tokens never leave the server. */
export interface VirtualTerminalRow {
    id: number;
    name: string;
    /** ACTIVE | DISABLED */
    status: string;
    /** The terminal's link (`.../terminal#<key>`). Whoever holds it can try to sign in. */
    url: string | null;
    codeEmail: string | null;
    /** Largest single payment the terminal may take; null = no limit. */
    singlePaymentLimit: number | null;
    sendReceiptDefault: boolean;
    locked: boolean;
    lockedAt: number | null;
    /** sign_in_failures | merchant */
    lockReason: string | null;
    failedAttempts: number;
    /** New cards are paused after too many declines (the decline brake). */
    cardsPaused: boolean;
    createdAt: number | null;
    lastSignInAt: number | null;
    lastSignInIp: string | null;
    passwordChangedAt: number | null;
}

/** One line of a terminal's history, newest first. */
export interface VirtualTerminalAuditRow {
    at: number | null;
    action: string;
    detail: string | null;
    actorMacId: number | null;
    actingAs: boolean;
    ip: string | null;
}

/** One order taken on the terminal, newest first. */
export interface VirtualTerminalOrderRow {
    paymentLinkId: number;
    createdAt: number | null;
    total: number | null;
    /** PAID | CANCELLED | NOT_PAID */
    status: string;
    transactionId: number | null;
    customerName: string | null;
    cardBrand: string | null;
    lastFour: string | null;
}

export interface ManageVirtualTerminalsResult {
    /** false = refused: `message` says why, in words for the person. */
    ok: boolean;
    reason: string | null;
    message: string | null;
    terminals: VirtualTerminalRow[];
    terminal: VirtualTerminalRow | null;
    history: VirtualTerminalAuditRow[];
    orders: VirtualTerminalOrderRow[];
    canCreate: boolean;
    canUpdate: boolean;
    canDelete: boolean;
    maxTerminals: number;
}

export class ManageVirtualTerminalsResponse extends ResponseBodyBase {
    private result: ManageVirtualTerminalsResult = {
        ok: false, reason: null, message: null, terminals: [], terminal: null, history: [], orders: [],
        canCreate: false, canUpdate: false, canDelete: false, maxTerminals: 0,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ManageVirtualTerminalsResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            ok: p.ok === true,
            reason: p.reason != null ? String(p.reason) : null,
            message: p.message != null ? String(p.message) : null,
            terminals: Array.isArray(p.terminals) ? p.terminals : [],
            terminal: p.terminal && typeof p.terminal === "object" ? p.terminal : null,
            history: Array.isArray(p.history) ? p.history : [],
            orders: Array.isArray(p.orders) ? p.orders : [],
            canCreate: p.canCreate === true,
            canUpdate: p.canUpdate === true,
            canDelete: p.canDelete === true,
            maxTerminals: typeof p.maxTerminals === "number" ? p.maxTerminals : 0,
        };
        return this;
    }

    public getClientReturnValue(): ManageVirtualTerminalsResult {
        return this.result;
    }
}
