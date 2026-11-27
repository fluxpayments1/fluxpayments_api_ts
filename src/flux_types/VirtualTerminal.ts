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
export class VirtualTerminal extends FluxType implements IVirtualTerminal {
    public obName: string = "VirtualTerminal";

    public getDispName(): string {
        return this.name || ("Terminal " + this.id);
    }

    public serialize() {
        return {
            id: this.id,
            objectType: this.objectType
        };
    }

    public id: number;
    public name?: string;
    public status?: string;
    public codeEmail?: string;
    public paymentLimit?: string;
    public lastSignInAt?: number;
    // createdAt is declared on FluxType (epoch millis), which this row fills.
    protected objectType: string = "virtual_terminal";

    constructor(data?: Partial<IVirtualTerminal>) {
        super(data, VirtualTerminal);
        Object.assign(this, data);
    }
}
