"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
const entity_1 = require("../entity");
const ped_1 = require("../ped");
const enums_1 = require("../../enums");
const utils_1 = require("../../utils");
const utils_2 = require("../../utils");
const game_1 = require("../../game");
const vehicle_door_collection_1 = require("./vehicle-door-collection");
const vehicle_mod_collection_1 = require("./vehicle-mod-collection");
class Vehicle extends entity_1.Entity {
    // private _wheels: VehicleWheelCollection;
    // private _windows: VehicleWindowCollection;
    static getClassDisplayName(vehicleClass) {
        return `VEH_CLASS_${vehicleClass}`;
    }
    constructor(handle) {
        super(handle);
    }
    exists() {
        return super.exists() && GetEntityType(this.handle) === 2;
    }
    get displayName() {
        return GetDisplayNameFromVehicleModel(this.model.hash);
    }
    get classDisplayName() {
        return GetVehicleClassFromName(this.model.hash);
    }
    get plateNumber() {
        return GetVehicleNumberPlateText(this.handle);
    }
    setPlateNumber(number) {
        SetVehicleNumberPlateText(this.handle, number.substring(0, 8));
    }
    get classType() {
        return GetVehicleClass(this.handle);
    }
    get bodyHealth() {
        return GetVehicleBodyHealth(this.handle);
    }
    setBodyHealth(val) {
        SetVehicleBodyHealth(this.handle, val);
    }
    get engineHealth() {
        return GetVehicleEngineHealth(this.handle);
    }
    setEngineHealth(val) {
        SetVehicleEngineHealth(this.handle, val);
    }
    get fuelTankHealth() {
        return GetVehicleFuelLevel(this.handle);
    }
    setFuelTankHealth(val) {
        SetVehiclePetrolTankHealth(this.handle, val);
    }
    get fuelLevel() {
        return GetVehicleFuelLevel(this.handle);
    }
    setFuelLevel(val) {
        SetVehicleFuelLevel(this.handle, val);
    }
    get oilLevel() {
        return GetVehicleOilLevel(this.handle);
    }
    setOilLevel(val) {
        SetVehicleOilLevel(this.handle, val);
    }
    get gravity() {
        return GetVehicleGravityAmount(this.handle);
    }
    setGravity(val) {
        SetVehicleGravityAmount(this.handle, val);
    }
    isEngineRunning() {
        return GetIsVehicleEngineRunning(this.handle);
    }
    setEngineRunning(val, instantly = true) {
        SetVehicleEngineOn(this.handle, val, instantly, true);
    }
    isEngineStarting() {
        return IsVehicleEngineStarting(this.handle);
    }
    setEngineStarting(val) {
        if ((this.isEngineStarting() || this.isEngineRunning()) && val) {
            return;
        }
        SetVehicleEngineOn(this.handle, val, !val, true);
    }
    isRadioEnabled() {
        if (game_1.Game.playerPed.isInVehicle(this)) {
            return IsPlayerVehicleRadioEnabled();
        }
        return false;
    }
    setRadioEnabled(val) {
        SetVehicleRadioEnabled(this.handle, val);
    }
    setRadioStation(val) {
        this.setRadioEnabled(true);
        SetVehRadioStation(this.handle, val);
    }
    get speed() {
        return GetEntitySpeed(this.handle) * 3.6;
    }
    setSpeed(val) {
        if (this.model.isTrain()) {
            SetTrainSpeed(this.handle, val / 3.6);
            SetTrainCruiseSpeed(this.handle, val / 3.6);
        }
        else {
            SetVehicleForwardSpeed(this.handle, val / 3.6);
        }
    }
    get wheelSpeed() {
        return GetVehicleDashboardSpeed(this.handle);
    }
    get acceleration() {
        return GetVehicleCurrentAcceleration(this.handle);
    }
    get currentRPM() {
        return GetVehicleCurrentRpm(this.handle);
    }
    setCurrentRPM(val) {
        SetVehicleCurrentRpm(this.handle, val);
    }
    get highGear() {
        return GetVehicleHighGear(this.handle);
    }
    setHighGear(val) {
        SetVehicleHighGear(this.handle, val);
    }
    get currentGear() {
        return GetVehicleCurrentGear(this.handle);
    }
    get steeringAngle() {
        return GetVehicleSteeringAngle(this.handle);
    }
    setSteeringAngle(val) {
        SetVehicleSteeringAngle(this.handle, val);
    }
    get steeringScale() {
        return GetVehicleSteeringScale(this.handle);
    }
    setSteeringScale(val) {
        SetVehicleSteeringScale(this.handle, val);
    }
    isAlarmSet() {
        IsVehicleAlarmSet(this.handle);
    }
    setAlarmSet(val) {
        SetVehicleAlarm(this.handle, val);
    }
    isAlarmSounding() {
        return IsVehicleAlarmActivated(this.handle);
    }
    get alarmTimeLeft() {
        return GetVehicleAlarmTimeLeft(this.handle);
    }
    setAlarmTimeLeft(val) {
        SetVehicleAlarmTimeLeft(this.handle, val);
    }
    startAlarm() {
        StartVehicleAlarm(this.handle);
    }
    isSirenActive() {
        return IsVehicleSirenOn(this.handle);
    }
    setSirenActive(val) {
        SetVehicleSiren(this.handle, val);
    }
    setSirenMuted(val) {
        DisableVehicleImpactExplosionActivation(this.handle, val);
    }
    isWanted() {
        return IsVehicleWanted(this.handle);
    }
    setWanted(val) {
        SetVehicleIsWanted(this.handle, val);
    }
    setProvidesCover(val) {
        SetVehicleProvidesCover(this.handle, val);
    }
    setMoneyDropOnExplosion(val) {
        SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, val);
    }
    wasPreviouslyOwnedByPlayer() {
        return IsVehiclePreviouslyOwnedByPlayer(this.handle);
    }
    setPreviouslyOwnedByPlayer(val) {
        SetVehicleHasBeenOwnedByPlayer(this.handle, val);
    }
    needsToBeHotwired() {
        return IsVehicleNeedsToBeHotwired(this.handle);
    }
    setNeedsToBeHotwired(val) {
        SetVehicleNeedsToBeHotwired(this.handle, val);
    }
    getLightsState() {
        return GetVehicleLightsState(this.handle);
    }
    areLightsOn() {
        return this.getLightsState()[0];
    }
    setLightsOn(val) {
        SetVehicleLights(this.handle, val ? 3 : 4);
    }
    areHighBeamsOn() {
        return !!this.getLightsState()[1];
    }
    setHighBeamsOn(val) {
        SetVehicleFullbeam(this.handle, val);
    }
    isInteriorLightOn() {
        return IsVehicleInteriorLightOn(this.handle);
    }
    setInteriorLightOn(val) {
        SetVehicleInteriorlight(this.handle, val);
    }
    isSearchlightOn() {
        return IsVehicleSearchlightOn(this.handle);
    }
    setSearchlightOn(val) {
        SetVehicleSearchlight(this.handle, val, false);
    }
    isTaxiLightOn() {
        return IsTaxiLightOn(this.handle);
    }
    setTaxiLightOn(val) {
        SetTaxiLights(this.handle, val);
    }
    isIndicatorLightOn(pos) {
        const indicatorState = GetVehicleIndicatorLights(this.handle);
        if (indicatorState === 3) {
            return true;
        }
        if (pos === "left") {
            return indicatorState === 1;
        }
        else if (pos === "right") {
            return indicatorState === 2;
        }
        else {
            return indicatorState === 3;
        }
    }
    setIndicatorLightOn(pos, val) {
        SetVehicleIndicatorLights(this.handle, pos === "right" ? 0 : 1, val);
    }
    isHandbrakeOn() {
        return GetVehicleHandbrake(this.handle);
    }
    setHandbrake(val) {
        SetVehicleHandbrake(this.handle, val);
    }
    setBrakeLights(val) {
        SetVehicleBrakeLights(this.handle, val);
    }
    setLightMultiplier(val) {
        SetVehicleLightMultiplier(this.handle, val);
    }
    setVisibleDamageEnabled(val) {
        SetVehicleCanBeVisiblyDamaged(this.handle, val);
    }
    /**
     * If vehicle is strong, it will not take any crash damage, but will take damage from bullets or explosions.
     * @param val
     */
    setStrong(val) {
        SetVehicleStrong(this.handle, val);
    }
    setCanBreak(val) {
        SetVehicleCanBreak(this.handle, val);
    }
    isDamaged() {
        return IsVehicleDamaged(this.handle);
    }
    isDriveable() {
        return IsVehicleDriveable(this.handle, false);
    }
    setDriveable(val) {
        // TODO: Verify if val should be inverted.
        SetVehicleUndriveable(this.handle, !val);
    }
    isEngineOnFire() {
        return IsVehicleEngineOnFire(this.handle);
    }
    hasRoof() {
        return DoesVehicleHaveRoof(this.handle);
    }
    isHeadlightBroken(pos) {
        if (pos === "left") {
            return GetIsLeftVehicleHeadlightDamaged(this.handle);
        }
        return GetIsRightVehicleHeadlightDamaged(this.handle);
    }
    isBumperBrokenOff(pos) {
        return IsVehicleBumperBrokenOff(this.handle, pos === "front");
    }
    /**
     * If strong, axles won't bend.
     * @param val
     */
    setStrongAxles(val) {
        SetVehicleHasStrongAxles(this.handle, val);
    }
    setEngineDegradation(val) {
        SetVehicleEngineCanDegrade(this.handle, val);
    }
    setEnginePowerMultiplier(val) {
        SetVehicleEnginePowerMultiplier(this.handle, val);
    }
    setEngineTorqueMultiplier(val) {
        SetVehicleEngineTorqueMultiplier(this.handle, val);
    }
    get landingGearState() {
        return GetLandingGearState(this.handle);
    }
    setLandingGearState(val) {
        SetVehicleLandingGear(this.handle, val);
    }
    get roofState() {
        return GetConvertibleRoofState(this.handle);
    }
    setRoofState(val) {
        switch (val) {
            case enums_1.VehicleRoofState.Closed:
                RaiseConvertibleRoof(this.handle, true);
                RaiseConvertibleRoof(this.handle, false);
                break;
            case enums_1.VehicleRoofState.Closing:
                RaiseConvertibleRoof(this.handle, false);
            case enums_1.VehicleRoofState.Opened:
                LowerConvertibleRoof(this.handle, true);
                LowerConvertibleRoof(this.handle, false);
                break;
            case enums_1.VehicleRoofState.Opening:
                LowerConvertibleRoof(this.handle, false);
                break;
        }
    }
    get lockStatus() {
        return GetVehicleDoorLockStatus(this.handle);
    }
    setLockStatus(val) {
        SetVehicleDoorsLocked(this.handle, val);
    }
    get maxBraking() {
        return GetVehicleMaxBraking(this.handle);
    }
    get maxTraction() {
        return GetVehicleMaxTraction(this.handle);
    }
    isOnAllWheels() {
        return IsVehicleOnAllWheels(this.handle);
    }
    isStopped() {
        return IsVehicleStopped(this.handle);
    }
    isStoppedAtTrafficLights() {
        return IsVehicleStoppedAtTrafficLights(this.handle);
    }
    isStolen() {
        return IsVehicleStolen(this.handle);
    }
    setStolen(val) {
        SetVehicleIsStolen(this.handle, val);
    }
    isConvertible() {
        return IsVehicleAConvertible(this.handle, false);
    }
    setBurnout(val) {
        SetVehicleBurnout(this.handle, val);
    }
    isInBurnout() {
        return IsVehicleInBurnout(this.handle);
    }
    getPedOnSeat(seat) {
        return new ped_1.Ped(GetPedInVehicleSeat(this.handle, seat));
    }
    isSeatFree(seat) {
        return IsVehicleSeatFree(this.handle, seat);
    }
    get driver() {
        return this.getPedOnSeat(enums_1.VehicleSeat.Driver);
    }
    get occupants() {
        if (!this.driver.exists()) {
            return this.passengers;
        }
        return [this.driver, ...this.passengers];
    }
    getPassengerCapacity() {
        return GetVehicleMaxNumberOfPassengers(this.handle);
    }
    getPassengerCount() {
        return GetVehicleNumberOfPassengers(this.handle);
    }
    get passengers() {
        const passengersCount = this.getPassengerCount();
        if (passengersCount === 0) {
            return [];
        }
        const passengers = [];
        for (let i = 0; i < this.getPassengerCapacity(); i++) {
            if (!this.isSeatFree(i)) {
                passengers.push(this.getPedOnSeat(i));
                if (passengers.length === passengersCount) {
                    break;
                }
            }
        }
        return passengers;
    }
    get doors() {
        if (!this._doors) {
            this._doors = new vehicle_door_collection_1.VehicleDoorCollection(this);
        }
        return this._doors;
    }
    get mods() {
        if (!this._mods) {
            this._mods = new vehicle_mod_collection_1.VehicleModCollection(this);
        }
        return this._mods;
    }
    // TODO: Implementation
    // public get wheels() {
    //   if (!this._wheels) {
    //     this._wheels = new VehicleWheelCollection(this);
    //   }
    //
    //   return this._wheels;
    // }
    //
    // public get windows() {
    //   if (!this._windows) {
    //     this._windows = new VehicleWindowCollection(this);
    //   }
    //
    //   return this._windows;
    // }
    extraExists(extra) {
        return DoesExtraExist(this.handle, extra);
    }
    isExtraOn(extra) {
        return (this.extraExists(extra) && IsVehicleExtraTurnedOn(this.handle, extra));
    }
    toggleExtra(extra, val) {
        if (this.extraExists(extra)) {
            SetVehicleExtra(this.handle, extra, !val);
        }
    }
    get dirtLevel() {
        return GetVehicleDirtLevel(this.handle);
    }
    /**
     *
     * @param val A number between 0.0 and 15.00
     */
    setDirtLevel(val) {
        SetVehicleDirtLevel(this.handle, (0, utils_1.clamp)(val, 0, 15));
    }
    wash() {
        this.setDirtLevel(0);
    }
    placeOnGround() {
        SetVehicleOnGroundProperly(this.handle);
    }
    repair() {
        SetVehicleFixed(this.handle);
    }
    explode() {
        ExplodeVehicle(this.handle, true, false);
    }
    explodeNetworked() {
        NetworkExplodeVehicle(this.handle, true, false, false);
    }
    canTiresBurst() {
        return GetVehicleTyresCanBurst(this.handle);
    }
    setCanTiresBurst(val) {
        SetVehicleTyresCanBurst(this.handle, val);
    }
    setCanWheelBreak(val) {
        SetVehicleWheelsCanBreak(this.handle, val);
    }
    setCanDeformWheels(val) {
        SetVehicleCanDeformWheels(this.handle, val);
    }
    hasBombBay() {
        return (this.bones.hasBone("door_hatch_1") && this.bones.hasBone("door_hatch_r"));
    }
    openBombBay() {
        if (this.hasBombBay()) {
            OpenBombBayDoors(this.handle);
        }
    }
    closeBombBay() {
        if (this.hasBombBay()) {
            CloseBombBayDoors(this.handle);
        }
    }
    setHeliYawPitchRollMultiplier(val) {
        if (this.model.isHelicopter()) {
            SetHelicopterRollPitchYawMult(this.handle, (0, utils_1.clamp)(val, 0, 1));
        }
    }
    setTowingCraneRaisedAmount(val) {
        SetTowTruckCraneHeight(this.handle, val);
    }
    get towedVehicle() {
        return new Vehicle(GetEntityAttachedToTowTruck(this.handle));
    }
    towVehicle(vehicle, rear, hookOffset = new utils_2.Vector3(0, 0, 0)) {
        AttachVehicleToTowTruck(this.handle, vehicle.handle, rear, hookOffset.x, hookOffset.y, hookOffset.z);
    }
    detachVehicle() {
        DetachVehicleFromAnyTowTruck(this.handle);
    }
    detachTowedVehicle() {
        const towedVehicle = this.towedVehicle;
        if (towedVehicle.exists()) {
            DetachVehicleFromTowTruck(this.handle, towedVehicle.handle);
        }
    }
    deform(pos, damageAmount, radius) {
        SetVehicleDamage(this.handle, pos.x, pos.y, pos.z, damageAmount, radius, false);
    }
    setRespotTimer(time) {
        SetNetworkVehicleRespotTimer(this.networkId, time);
    }
}
exports.Vehicle = Vehicle;
