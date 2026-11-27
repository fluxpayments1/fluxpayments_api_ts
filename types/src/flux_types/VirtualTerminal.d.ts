import { FluxType } from "./FluxType";
import { IVirtualTerminal } from "./IVirtualTerminal";
/**
 * A row of the portal's Virtual Terminals table (change ticket #61, 2026-11-26).
 *
 * Exists so the standard table (`app-editable-table`, objectType "VirtualTerminal") can list
 * terminals: `getObjects` reaches the backend's `getVirtualTerminalWeb` through `obName`.
 * Read-only - `serialize()` returns only the id, and there is no create, update or delete
 * endpoint behind this type (terminals are managed with Flux.manageVirtualTerminals).
 */
export declare class VirtualTerminal extends FluxType implements IVirtualTerminal {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        objectType: string;
    };
    id: number;
    name?: string;
    status?: string;
    codeEmail?: string;
    paymentLimit?: string;
    lastSignInAt?: number;
    protected objectType: string;
    constructor(data?: Partial<IVirtualTerminal>);
}
