import type { TimerHandle } from './timerHandle';
type SetTimeoutFunction = (handler: () => void, timeout?: number, ...args: any[]) => TimerHandle;
type ClearTimeoutFunction = (handle: TimerHandle) => void;
interface TimeoutProvider {
    setTimeout: SetTimeoutFunction;
    clearTimeout: ClearTimeoutFunction;
    delegate: {
        setTimeout: SetTimeoutFunction;
        clearTimeout: ClearTimeoutFunction;
    } | undefined;
}
export declare const timeoutProvider: TimeoutProvider;
export {};
