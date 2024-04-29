import { TimestampProvider } from '../types';
interface DateTimestampProvider extends TimestampProvider {
    delegate: TimestampProvider | undefined;
}
export declare const dateTimestampProvider: DateTimestampProvider;
export {};
