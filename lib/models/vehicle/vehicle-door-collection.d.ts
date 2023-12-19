import { VehicleDoorIndex } from "../../enums";
import { VehicleDoor } from "./vehicle-door";
import { Vehicle } from "./vehicle";
export declare class VehicleDoorCollection {
    private _owner;
    private readonly _vehicleDoors;
    constructor(owner: Vehicle);
    get owner(): Vehicle;
    getDoor(index: VehicleDoorIndex): VehicleDoor;
    getAllDoors(): VehicleDoor[];
    openAllDoors(loose?: boolean, instantly?: boolean): void;
    closeAllDoors(instantly?: boolean): void;
    breakAllDoors(stayInTheWorld?: boolean): void;
    hasDoor(index: VehicleDoorIndex): boolean;
}
