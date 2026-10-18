/**
 * Manages persistent session data across requests
 * Separates session-level state (persistent) from request-level state (ephemeral)
 */

import { AuthCache } from './AuthCache';

export class SessionStorage {
    private static readonly KEYS = {
        AUTH_KEY_PRIV: 'XAUTH_KEY_PRIV',
        AUTH_KEY_PUB: 'XAUTH_KEY_PUB',
        PUB_KEY: 'PUB_KEY',
        AUTH_TOKEN: 'XAUTH_TOKEN', // Store the serialized auth token
        TWO_FA_PRESENT: '2FA',
        // The membership (MAC id) the login last selected as current. Lives beside the
        // credential trio because it describes THIS session; clearSession() iterates KEYS,
        // so it is wiped on logout with the rest.
        SELECTED_MAC: 'XSELECTED_MAC'
    };

    /**
     * Save session credentials (persistent across requests)
     */
    static saveSessionCredentials(
        clientDecryptionKey: string,
        serverEncryptionKey: string,
        clientEncryptionKey: string
    ): void {
        if (typeof localStorage === 'undefined') return;
        
        localStorage.setItem(this.KEYS.AUTH_KEY_PRIV, clientDecryptionKey);
        localStorage.setItem(this.KEYS.AUTH_KEY_PUB, serverEncryptionKey);
        localStorage.setItem(this.KEYS.PUB_KEY, clientEncryptionKey);
    }

    /**
     * Get session credentials
     */
    static getSessionCredentials(): {
        clientDecryptionKey: string | null;
        serverEncryptionKey: string | null;
        clientEncryptionKey: string | null;
    } {
        if (typeof localStorage === 'undefined') {
            return {
                clientDecryptionKey: null,
                serverEncryptionKey: null,
                clientEncryptionKey: null
            };
        }

        return {
            clientDecryptionKey: localStorage.getItem(this.KEYS.AUTH_KEY_PRIV),
            serverEncryptionKey: localStorage.getItem(this.KEYS.AUTH_KEY_PUB),
            clientEncryptionKey: localStorage.getItem(this.KEYS.PUB_KEY)
        };
    }

    /**
     * Save the auth token (the session state)
     */
    static saveAuthToken(authToken: any): void {
        if (typeof localStorage === 'undefined') return;
        localStorage.setItem(this.KEYS.AUTH_TOKEN, JSON.stringify(authToken));
    }

    /**
     * Get the auth token (the session state)
     */
    static getAuthToken(): any | null {
        if (typeof localStorage === 'undefined') return null;
        
        const token = localStorage.getItem(this.KEYS.AUTH_TOKEN);
        return token ? JSON.parse(token) : null;
    }

    /**
     * Check if we have valid session credentials
     */
    static hasValidSession(): boolean {
        const creds = this.getSessionCredentials();
        return !!(creds.clientDecryptionKey && creds.serverEncryptionKey && creds.clientEncryptionKey);
    }

    /**
     * Clear all session data (logout)
     * This clears both localStorage and in-memory auth cache
     */
    static clearSession(): void {
        if (typeof localStorage === 'undefined') return;
        
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        
        // Also clear in-memory auth cache
        AuthCache.clearCache();
    }

    /**
     * The MAC id of the membership currently selected for this login, or null.
     * A client-side convenience for the portal's merchant switcher only — the
     * server resolves the current membership from the SESSION it holds and never
     * trusts this value.
     */
    static getSelectedMembership(): number | null {
        if (typeof localStorage === 'undefined') return null;
        const raw = localStorage.getItem(this.KEYS.SELECTED_MAC);
        if (raw === null || raw === '') return null;
        const n = Number(raw);
        return Number.isFinite(n) ? n : null;
    }

    /**
     * Remember the selected membership (pass null to forget it).
     */
    static setSelectedMembership(macId: number | null): void {
        if (typeof localStorage === 'undefined') return;
        if (macId === null || macId === undefined) {
            localStorage.removeItem(this.KEYS.SELECTED_MAC);
        } else {
            localStorage.setItem(this.KEYS.SELECTED_MAC, String(macId));
        }
    }

    /**
     * Mark 2FA as present
     */
    static set2FAPresent(): void {
        if (typeof localStorage === 'undefined') return;
        localStorage.setItem(this.KEYS.TWO_FA_PRESENT, 'PRESENT');
    }

    /**
     * Check if 2FA is present
     */
    static is2FAPresent(): boolean {
        if (typeof localStorage === 'undefined') return false;
        return localStorage.getItem(this.KEYS.TWO_FA_PRESENT) === 'PRESENT';
    }
}

