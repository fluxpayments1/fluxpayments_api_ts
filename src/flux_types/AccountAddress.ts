import { IAccountAddress } from "./IAccountAddress";
import { FluxTypeFactory } from "./FluxTypeFactory";
import Address from "./Address";

export class AccountAddress extends FluxTypeFactory {
    public serialize() {
        return {
            uniqueId: this.uniqueId,
            id :this.id,
            metadata: this.metadata,  
            accountId: this.accountId,
            accountUniqueId: this.accountUniqueId,
            addressId: this.addressId,
            addressUniqueId: this.addressUniqueId,
            address: this.address,
            objectType: "account_address"
        }    
    }

    uniqueId: string; 
    id : number;
    metadata: string;  
    accountId: number;
    accountUniqueId: string;
    addressId: number;
    addressUniqueId: string;
    address: Address
    protected objectType: string = "account_address"

    public constructor(add?: Partial<IAccountAddress>) {
        super(add)
        Object.assign(this, add);
    }

    public async merge(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async persist(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async refresh(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}
