"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleLockStatus = void 0;
var VehicleLockStatus;
(function (VehicleLockStatus) {
    VehicleLockStatus[VehicleLockStatus["None"] = 0] = "None";
    VehicleLockStatus[VehicleLockStatus["Unlocked"] = 1] = "Unlocked";
    VehicleLockStatus[VehicleLockStatus["Locked"] = 2] = "Locked";
    VehicleLockStatus[VehicleLockStatus["LockedForPlayer"] = 3] = "LockedForPlayer";
    VehicleLockStatus[VehicleLockStatus["StickPlayerInside"] = 4] = "StickPlayerInside";
    VehicleLockStatus[VehicleLockStatus["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
    VehicleLockStatus[VehicleLockStatus["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
    VehicleLockStatus[VehicleLockStatus["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
})(VehicleLockStatus || (exports.VehicleLockStatus = VehicleLockStatus = {}));
