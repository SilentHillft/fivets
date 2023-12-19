"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleDoor = void 0;
class VehicleDoor {
    constructor(owner, index) {
        this._owner = owner;
        this._index = index;
    }
    get owner() {
        return this._owner;
    }
    /**
     * Alias for owner() getter
     */
    get vehicle() {
        return this.owner;
    }
    get index() {
        return this._index;
    }
    setIndex(index) {
        this._index = index;
    }
    get angleRatio() {
        return GetVehicleDoorAngleRatio(this.owner.handle, this.index);
    }
    /**
     *
     * @param val
     * @param speed 1 is slow, 3 is medium, 5 is fast (default 1)
     */
    setAngleRatio(val, speed = 1) {
        SetVehicleDoorControl(this.owner.handle, this.index, speed, val);
    }
    setBreakable(val) {
        SetVehicleDoorBreakable(this.owner.handle, this.index, val);
    }
    isOpen() {
        return this.angleRatio > 0;
    }
    isFullyOpen() {
        return IsVehicleDoorFullyOpen(this.owner.handle, this.index);
    }
    isBroken() {
        return IsVehicleDoorDamaged(this.owner.handle, this.index);
    }
    open(loose = false, instantly = false) {
        SetVehicleDoorOpen(this.owner.handle, this.index, loose, instantly);
    }
    close(instantly = false) {
        SetVehicleDoorShut(this.owner.handle, this.index, instantly);
    }
    break(stayInTheWorld = true) {
        SetVehicleDoorBroken(this.owner.handle, this.index, stayInTheWorld);
    }
}
exports.VehicleDoor = VehicleDoor;
