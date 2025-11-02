import { PaymentLink } from './PaymentLink';
import { IReusableLink } from './IReusableLink';
export declare class ReusableLink extends PaymentLink implements IReusableLink {
    obName: string;
    constructor(reusableLink?: Partial<ReusableLink>);
    static createInstanceLazy(rl: Partial<IReusableLink>): Promise<ReusableLink>;
    static createInstanceSafe(rl: Partial<IReusableLink>): Promise<ReusableLink>;
}
