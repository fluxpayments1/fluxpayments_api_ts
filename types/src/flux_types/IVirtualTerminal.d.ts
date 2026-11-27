/**
 * One row of the portal's Virtual Terminals table (change ticket #61, 2026-11-26).
 *
 * Read-only: the server builds it from the terminal (backend DAO.VirtualTerminalListing) and
 * nothing here is ever sent back. Every change to a terminal goes through
 * Flux.manageVirtualTerminals. It carries no secret and not the terminal's link.
 */
export interface IVirtualTerminal {
    id?: number;
    name?: string;
    /** ACTIVE | TERMINAL_LOCKED | TERMINAL_PAUSED | TERMINAL_OFF */
    status?: string;
    /** Where the 8-digit sign-in codes are emailed. */
    codeEmail?: string;
    /** "$2,500.00" or "No limit". */
    paymentLimit?: string;
    lastSignInAt?: number;
    createdAt?: number;
}
