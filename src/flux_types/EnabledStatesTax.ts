import { FluxType } from './FluxType';

export class EnabledStatesTax extends FluxType {
    obName: string = "EnabledStatesTax";

    getDispName(): string {
        return this.email
    }

    public serialize() {
        return {
            id: this.id,
            activeStatus: this.activeStatus,
            uniqueid: this.uniqueid,
            version: this.version,
            email: this.email,
            metadata: this.metadata,
            enabled: this.enabled,
            objectType: this.objectType,
            stateCode: this.stateCode,
        };
    }

    id: number;
    activeStatus: any;
    uniqueid: string;
    version: number;
    email: string;
    metadata: string;
    enabled: any;
    stateCode: string;
    protected objectType: string = "enabled_states_tax";

    public constructor(enabledStatesTax?: Partial<EnabledStatesTax>) {
        super(enabledStatesTax, EnabledStatesTax);
        Object.assign(this, enabledStatesTax)
    }

}
