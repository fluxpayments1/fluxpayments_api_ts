import type { TimerHandle } from './timerHandle';
type SetImmediateFunction = (handler: () => void, ...args: any[]) => TimerHandle;
type ClearImmediateFunction = (handle: TimerHandle) => void;
interface ImmediateProvider {
    setImmediate: SetImmediateFunction;
    clearImmediate: ClearImmediateFunction;
    delegate: {
        setImmediate: SetImmediateFunction;
        clearImmediate: ClearImmediateFunction;
    } | undefined;
}
export declare const immediateProvider: ImmediateProvider;
export {};
