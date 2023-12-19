import { Vehicle } from "./vehicle";
import { VehicleDoorIndex } from "../../enums";
export declare class VehicleDoor {
    private _owner;
    private _index;
    constructor(owner: Vehicle, index: VehicleDoorIndex);
    get owner(): Vehicle;
    /**
     * Alias for owner() getter
     */
    get vehicle(): Vehicle;
    get index(): VehicleDoorIndex;
    setIndex(index: VehicleDoorIndex): void;
    get angleRatio(): number;
    /**
     *
     * @param val
     * @param speed 1 is slow, 3 is medium, 5 is fast (default 1)
     */
    setAngleRatio(val: number, speed?: number): void;
    setBreakable(val: boolean): void;
    isOpen(): boolean;
    isFullyOpen(): boolean;
    isBroken(): boolean;
    open(loose?: boolean, instantly?: boolean): void;
    close(instantly?: boolean): void;
    break(stayInTheWorld?: boolean): void;
}
