/**
 * In-memory cache for authenticated Flux instances
 * Prevents redundant authorization calls within the same page session
 */

import { FluxTokenBackend } from "../../lib/FluxTokenBackend";
import { SecurityHandlerBase } from "./SecurityHandlerBase";

export class AuthCache {
    private static authenticatedInstance: FluxTokenBackend<any> | null = null;
    private static authPromise: Promise<FluxTokenBackend<any>> | null = null;

    /**
     * Get cached authenticated instance or trigger new authorization
     * Returns the same instance for all calls within the same page session
     */
    static async getOrCreateAuthenticatedInstance<T extends SecurityHandlerBase>(
        authFunction: () => Promise<FluxTokenBackend<T>>
    ): Promise<FluxTokenBackend<T>> {
        // Return cached instance if available
        if (this.authenticatedInstance) {
            return this.authenticatedInstance as FluxTokenBackend<T>;
        }

        // If authorization is in progress, wait for it
        if (this.authPromise) {
            return this.authPromise as Promise<FluxTokenBackend<T>>;
        }

        // Start new authorization
        this.authPromise = authFunction();

        try {
            this.authenticatedInstance = await this.authPromise;
            return this.authenticatedInstance as FluxTokenBackend<T>;
        } finally {
            // Clear the promise so we can distinguish between "in progress" and "completed"
            this.authPromise = null;
        }
    }

    /**
     * Check if we have a cached authenticated instance
     */
    static hasCachedInstance(): boolean {
        return this.authenticatedInstance !== null;
    }

    /**
     * Get cached instance without triggering authorization
     */
    static getCachedInstance<T extends SecurityHandlerBase>(): FluxTokenBackend<T> | null {
        return this.authenticatedInstance as FluxTokenBackend<T> | null;
    }

    /**
     * Clear cached instance (call on logout or auth error)
     */
    static clearCache(): void {
        this.authenticatedInstance = null;
        this.authPromise = null;
    }

    /**
     * Force re-authorization on next request (e.g., after session expired)
     */
    static invalidate(): void {
        this.clearCache();
    }
}

// Clear cache when page unloads (browser only)
if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
        AuthCache.clearCache();
    });
}

