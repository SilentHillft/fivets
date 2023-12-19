"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleMod = void 0;
class VehicleMod {
    constructor(owner, modType) {
        this._owner = owner;
        this._modType = modType;
    }
    get owner() {
        return this._owner;
    }
    get modType() {
        return this._modType;
    }
    get index() {
        return GetVehicleMod(this.owner.handle, this.modType);
    }
    setIndex(idx) {
        SetVehicleMod(this.owner.handle, this.modType, idx, this.variation);
    }
    get variation() {
        return GetVehicleModVariation(this.owner.handle, this.modType);
    }
    setVariation(val) {
        SetVehicleMod(this.owner.handle, this.modType, this.index, val);
    }
    get modCount() {
        return GetNumVehicleMods(this.owner.handle, this.modType);
    }
    remove() {
        RemoveVehicleMod(this.owner.handle, this.modType);
    }
}
exports.VehicleMod = VehicleMod;
