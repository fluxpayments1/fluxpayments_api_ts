/**
 * The Virtual Terminals table's query. The server lists every terminal of the signed-in
 * business and ignores filters, so nothing is needed here; the id is kept for symmetry
 * with the other queries.
 */
export interface IVirtualTerminalQuery {
    id?: number;
}
