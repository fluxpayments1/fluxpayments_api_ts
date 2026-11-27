import { BaseQuery } from "./BaseQuery";
import { VirtualTerminal } from "./VirtualTerminal";
import { IVirtualTerminalQuery } from "./IVirtualTerminalQuery";

/**
 * Query for the portal's Virtual Terminals table (change ticket #61, 2026-11-26). The server
 * lists every terminal of the signed-in business; the query only carries the table's paging
 * and sort, which BaseQuery adds.
 */
export class VirtualTerminalQuery extends BaseQuery<VirtualTerminal> implements IVirtualTerminalQuery {
    public serialize() {
        return {
            id: this.id,
            objectType: this.objectType,
        };
    }

    id?: number;
    objectType: string = "virtual_terminal";

    constructor(query?: IVirtualTerminalQuery) {
        super(VirtualTerminal);
        Object.assign(this, query);
    }

    public static createQuery(q: IVirtualTerminalQuery) {
        return new VirtualTerminalQuery(q);
    }
}
