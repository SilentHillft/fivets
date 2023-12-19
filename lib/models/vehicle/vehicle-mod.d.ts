import { Vehicle } from "./vehicle";
import { VehicleModType } from "../../enums";
export declare class VehicleMod {
    private _owner;
    private _modType;
    constructor(owner: Vehicle, modType: VehicleModType);
    get owner(): Vehicle;
    get modType(): VehicleModType;
    get index(): number;
    setIndex(idx: number): void;
    get variation(): boolean;
    setVariation(val: boolean): void;
    get modCount(): number;
    remove(): void;
}
