/**
 * In-memory cache for authenticated Flux instances
 * Prevents redundant authorization calls within the same page session
 */
import { FluxTokenBackend } from "../../lib/FluxTokenBackend";
import { SecurityHandlerBase } from "./SecurityHandlerBase";
export declare class AuthCache {
    private static authenticatedInstance;
    private static authPromise;
    /**
     * Get cached authenticated instance or trigger new authorization
     * Returns the same instance for all calls within the same page session
     */
    static getOrCreateAuthenticatedInstance<T extends SecurityHandlerBase>(authFunction: () => Promise<FluxTokenBackend<T>>): Promise<FluxTokenBackend<T>>;
    /**
     * Check if we have a cached authenticated instance
     */
    static hasCachedInstance(): boolean;
    /**
     * Get cached instance without triggering authorization
     */
    static getCachedInstance<T extends SecurityHandlerBase>(): FluxTokenBackend<T> | null;
    /**
     * Clear cached instance (call on logout or auth error)
     */
    static clearCache(): void;
    /**
     * Force re-authorization on next request (e.g., after session expired)
     */
    static invalidate(): void;
}
