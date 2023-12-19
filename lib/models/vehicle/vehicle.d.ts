import { Entity } from "../entity";
import { Ped } from "../ped";
import { RadioStation, VehicleClass, VehicleLandingGearState, VehicleLockStatus, VehicleRoofState, VehicleSeat } from "../../enums";
import { Vector3 } from "../../utils";
import { VehicleDoorCollection } from "./vehicle-door-collection";
import { VehicleModCollection } from "./vehicle-mod-collection";
export declare class Vehicle extends Entity {
    private _doors;
    private _mods;
    static getClassDisplayName(vehicleClass: VehicleClass): string;
    constructor(handle: number);
    exists(): boolean;
    get displayName(): string;
    get classDisplayName(): number;
    get plateNumber(): string;
    setPlateNumber(number: string): void;
    get classType(): number;
    get bodyHealth(): number;
    setBodyHealth(val: number): void;
    get engineHealth(): number;
    setEngineHealth(val: number): void;
    get fuelTankHealth(): number;
    setFuelTankHealth(val: number): void;
    get fuelLevel(): number;
    setFuelLevel(val: number): void;
    get oilLevel(): number;
    setOilLevel(val: number): void;
    get gravity(): number;
    setGravity(val: number): void;
    isEngineRunning(): boolean;
    setEngineRunning(val: boolean, instantly?: boolean): void;
    isEngineStarting(): boolean;
    setEngineStarting(val: boolean): void;
    isRadioEnabled(): boolean;
    setRadioEnabled(val: boolean): void;
    setRadioStation(val: RadioStation): void;
    get speed(): number;
    setSpeed(val: number): void;
    get wheelSpeed(): number;
    get acceleration(): number;
    get currentRPM(): number;
    setCurrentRPM(val: number): void;
    get highGear(): number;
    setHighGear(val: number): void;
    get currentGear(): number;
    get steeringAngle(): number;
    setSteeringAngle(val: number): void;
    get steeringScale(): number;
    setSteeringScale(val: number): void;
    isAlarmSet(): void;
    setAlarmSet(val: boolean): void;
    isAlarmSounding(): boolean;
    get alarmTimeLeft(): number;
    setAlarmTimeLeft(val: number): void;
    startAlarm(): void;
    isSirenActive(): boolean;
    setSirenActive(val: boolean): void;
    setSirenMuted(val: boolean): void;
    isWanted(): boolean;
    setWanted(val: boolean): void;
    setProvidesCover(val: boolean): void;
    setMoneyDropOnExplosion(val: boolean): void;
    wasPreviouslyOwnedByPlayer(): boolean;
    setPreviouslyOwnedByPlayer(val: boolean): void;
    needsToBeHotwired(): boolean;
    setNeedsToBeHotwired(val: boolean): void;
    getLightsState(): [boolean, any, any];
    areLightsOn(): boolean;
    setLightsOn(val: boolean): void;
    areHighBeamsOn(): boolean;
    setHighBeamsOn(val: boolean): void;
    isInteriorLightOn(): boolean;
    setInteriorLightOn(val: boolean): void;
    isSearchlightOn(): boolean;
    setSearchlightOn(val: boolean): void;
    isTaxiLightOn(): boolean;
    setTaxiLightOn(val: boolean): void;
    isIndicatorLightOn(pos: "left" | "right" | "both"): boolean;
    setIndicatorLightOn(pos: "left" | "right", val: boolean): void;
    isHandbrakeOn(): boolean;
    setHandbrake(val: boolean): void;
    setBrakeLights(val: boolean): void;
    setLightMultiplier(val: number): void;
    setVisibleDamageEnabled(val: boolean): void;
    /**
     * If vehicle is strong, it will not take any crash damage, but will take damage from bullets or explosions.
     * @param val
     */
    setStrong(val: boolean): void;
    setCanBreak(val: boolean): void;
    isDamaged(): boolean;
    isDriveable(): boolean;
    setDriveable(val: boolean): void;
    isEngineOnFire(): boolean;
    hasRoof(): boolean;
    isHeadlightBroken(pos: "left" | "right"): boolean;
    isBumperBrokenOff(pos: "front" | "rear"): boolean;
    /**
     * If strong, axles won't bend.
     * @param val
     */
    setStrongAxles(val: boolean): void;
    setEngineDegradation(val: boolean): void;
    setEnginePowerMultiplier(val: number): void;
    setEngineTorqueMultiplier(val: number): void;
    get landingGearState(): VehicleLandingGearState;
    setLandingGearState(val: VehicleLandingGearState): void;
    get roofState(): VehicleRoofState;
    setRoofState(val: VehicleRoofState): void;
    get lockStatus(): VehicleLockStatus;
    setLockStatus(val: VehicleLockStatus): void;
    get maxBraking(): number;
    get maxTraction(): number;
    isOnAllWheels(): boolean;
    isStopped(): boolean;
    isStoppedAtTrafficLights(): boolean;
    isStolen(): boolean;
    setStolen(val: boolean): void;
    isConvertible(): boolean;
    setBurnout(val: boolean): void;
    isInBurnout(): boolean;
    getPedOnSeat(seat: VehicleSeat): Ped;
    isSeatFree(seat: VehicleSeat): boolean;
    get driver(): Ped;
    get occupants(): Ped[];
    getPassengerCapacity(): number;
    getPassengerCount(): number;
    get passengers(): Ped[];
    get doors(): VehicleDoorCollection;
    get mods(): VehicleModCollection;
    extraExists(extra: number): boolean;
    isExtraOn(extra: number): boolean;
    toggleExtra(extra: number, val: boolean): void;
    get dirtLevel(): number;
    /**
     *
     * @param val A number between 0.0 and 15.00
     */
    setDirtLevel(val: number): void;
    wash(): void;
    placeOnGround(): void;
    repair(): void;
    explode(): void;
    explodeNetworked(): void;
    canTiresBurst(): boolean;
    setCanTiresBurst(val: boolean): void;
    setCanWheelBreak(val: boolean): void;
    setCanDeformWheels(val: boolean): void;
    hasBombBay(): boolean;
    openBombBay(): void;
    closeBombBay(): void;
    setHeliYawPitchRollMultiplier(val: number): void;
    setTowingCraneRaisedAmount(val: number): void;
    get towedVehicle(): Vehicle;
    towVehicle(vehicle: Vehicle, rear: boolean, hookOffset?: Vector3): void;
    detachVehicle(): void;
    detachTowedVehicle(): void;
    deform(pos: Vector3, damageAmount: number, radius: number): void;
    setRespotTimer(time: number): void;
}