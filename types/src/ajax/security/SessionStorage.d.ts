/**
 * Manages persistent session data across requests
 * Separates session-level state (persistent) from request-level state (ephemeral)
 */
export declare class SessionStorage {
    private static readonly KEYS;
    /**
     * Save session credentials (persistent across requests)
     */
    static saveSessionCredentials(clientDecryptionKey: string, serverEncryptionKey: string, clientEncryptionKey: string): void;
    /**
     * Get session credentials
     */
    static getSessionCredentials(): {
        clientDecryptionKey: string | null;
        serverEncryptionKey: string | null;
        clientEncryptionKey: string | null;
    };
    /**
     * Save the auth token (the session state)
     */
    static saveAuthToken(authToken: any): void;
    /**
     * Get the auth token (the session state)
     */
    static getAuthToken(): any | null;
    /**
     * Check if we have valid session credentials
     */
    static hasValidSession(): boolean;
    /**
     * Clear all session data (logout)
     * This clears both localStorage and in-memory auth cache
     */
    static clearSession(): void;
    /**
     * The MAC id of the membership currently selected for this login, or null.
     * A client-side convenience for the portal's merchant switcher only — the
     * server resolves the current membership from the SESSION it holds and never
     * trusts this value.
     */
    static getSelectedMembership(): number | null;
    /**
     * Remember the selected membership (pass null to forget it).
     */
    static setSelectedMembership(macId: number | null): void;
    /**
     * Mark 2FA as present
     */
    static set2FAPresent(): void;
    /**
     * Check if 2FA is present
     */
    static is2FAPresent(): boolean;
}
