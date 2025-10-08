import { FluxType } from './FluxType';
import { IQuickBooksAuthUrl } from './IQuickBooksAuthUrl';
export declare class QuickBooksAuthUrl extends FluxType implements IQuickBooksAuthUrl {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        authUrl: string;
        state: string;
        objectType: string;
    };
    id: number;
    authUrl: string;
    state: string;
    protected objectType: string;
    constructor(quickBooksAuthUrl?: Partial<QuickBooksAuthUrl>);
}
