import { FluxType } from './FluxType';
import { ICustomerWallet } from './ICustomerWallet';
export declare class CustomerWallet extends FluxType implements ICustomerWallet {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        publicAddress: string;
        chain: string;
        objectType: string;
    };
    publicAddress: string;
    chain: string;
    id: number;
    uniqueId: string;
    metadata: string;
    protected objectType: string;
    constructor(wallet?: Partial<ICustomerWallet>);
    static createInstanceLazy(acc: Partial<ICustomerWallet>): Promise<CustomerWallet>;
    static createInstanceSafe(acc: Partial<ICustomerWallet>): Promise<CustomerWallet>;
}
