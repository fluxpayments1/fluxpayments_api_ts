import { BaseQuery } from "./BaseQuery";
import { VirtualTerminal } from "./VirtualTerminal";
import { IVirtualTerminalQuery } from "./IVirtualTerminalQuery";
/**
 * Query for the portal's Virtual Terminals table (change ticket #61, 2026-11-26). The server
 * lists every terminal of the signed-in business; the query only carries the table's paging
 * and sort, which BaseQuery adds.
 */
export declare class VirtualTerminalQuery extends BaseQuery<VirtualTerminal> implements IVirtualTerminalQuery {
    serialize(): {
        id: number;
        objectType: string;
    };
    id?: number;
    objectType: string;
    constructor(query?: IVirtualTerminalQuery);
    static createQuery(q: IVirtualTerminalQuery): VirtualTerminalQuery;
}
