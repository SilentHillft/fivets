import { Vector3 } from "../utils";
export declare class Model {
    private _hash;
    constructor(hash: number | string);
    get hash(): number;
    isValid(): boolean;
    isInCDImage(): boolean;
    isLoaded(): boolean;
    isCollisionLoaded(): boolean;
    isBicycle(): boolean;
    isBike(): boolean;
    isBoat(): boolean;
    isCar(): boolean;
    isCargobob(): boolean;
    isHelicopter(): boolean;
    isPed(): boolean;
    isPlane(): boolean;
    IsProp(): boolean;
    isQuadbike(): boolean;
    isTrain(): boolean;
    isVehicle(): boolean;
    get dimensions(): Vector3;
}
