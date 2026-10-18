import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Shared body for the two membership endpoints (listMemberships -> listMembershipsWeb,
 * selectMembership -> selectMembershipWeb). Both are PERMISSION-LESS server-side and
 * scoped to the session's login, never to anything in the body.
 *
 * listMemberships sends `{}` — the server lists the caller's OWN memberships, so a
 * body value would be a request to widen visibility.
 * selectMembership sends `{ macId }` — which of MY memberships to make current. The
 * server re-validates (active + belongs to this login) on every call; this is a
 * selection among the caller's own MACs, never impersonation.
 */
export declare class MembershipRequest extends RequestBodyBase {
    private macId?;
    constructor();
    loadClientData(macId?: number): this;
    getRequestAsString(): string;
}
