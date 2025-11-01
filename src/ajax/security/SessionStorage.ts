/**
 * Manages persistent session data across requests
 * Separates session-level state (persistent) from request-level state (ephemeral)
 */
export class SessionStorage {
    private static readonly KEYS = {
        AUTH_KEY_PRIV: 'XAUTH_KEY_PRIV',
        AUTH_KEY_PUB: 'XAUTH_KEY_PUB',
        PUB_KEY: 'PUB_KEY',
        AUTH_TOKEN: 'XAUTH_TOKEN', // Store the serialized auth token
        TWO_FA_PRESENT: '2FA'
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
     */
    static clearSession(): void {
        if (typeof localStorage === 'undefined') return;
        
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
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

