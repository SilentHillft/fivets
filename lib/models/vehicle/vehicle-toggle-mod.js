"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleToggleMod = void 0;
class VehicleToggleMod {
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
    isInstalled() {
        return IsToggleModOn(this.owner.handle, this.modType);
    }
    setIsInstalled(val) {
        ToggleVehicleMod(this.owner.handle, this.modType, val);
    }
    get localizedModTypeName() {
        return GetModSlotName(this.owner.handle, this.modType);
    }
    remove() {
        RemoveVehicleMod(this.owner.handle, this.modType);
    }
}
exports.VehicleToggleMod = VehicleToggleMod;
