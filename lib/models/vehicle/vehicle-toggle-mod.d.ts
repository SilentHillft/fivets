import { Vehicle } from "./vehicle";
import { VehicleToggleModType } from "../../enums";
export declare class VehicleToggleMod {
    private _owner;
    private _modType;
    constructor(owner: Vehicle, modType: VehicleToggleModType);
    get owner(): Vehicle;
    get modType(): VehicleToggleModType;
    isInstalled(): boolean;
    setIsInstalled(val: boolean): void;
    get localizedModTypeName(): string;
    remove(): void;
}
