"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleDoorCollection = void 0;
const enums_1 = require("../../enums");
const vehicle_door_1 = require("./vehicle-door");
class VehicleDoorCollection {
    constructor(owner) {
        this._vehicleDoors = new Map();
        this._owner = owner;
    }
    get owner() {
        return this._owner;
    }
    getDoor(index) {
        if (!this._vehicleDoors.has(index)) {
            this._vehicleDoors.set(index, new vehicle_door_1.VehicleDoor(this.owner, index));
        }
        return this._vehicleDoors.get(index);
    }
    getAllDoors() {
        return Object.keys(enums_1.VehicleDoorIndex)
            .filter((key) => !isNaN(+key))
            .map((key) => {
            const index = +key;
            if (this.hasDoor(index)) {
                return this.getDoor(index);
            }
            return null;
        })
            .filter((door) => !!door);
    }
    openAllDoors(loose, instantly) {
        for (const door of this.getAllDoors()) {
            door.open(loose, instantly);
        }
    }
    closeAllDoors(instantly) {
        for (const door of this.getAllDoors()) {
            door.close(instantly);
        }
    }
    breakAllDoors(stayInTheWorld) {
        for (const door of this.getAllDoors()) {
            door.break(stayInTheWorld);
        }
    }
    hasDoor(index) {
        switch (index) {
            case enums_1.VehicleDoorIndex.FrontLeftDoor:
                return this.owner.bones.hasBone('door_dside_f');
            case enums_1.VehicleDoorIndex.FrontRightDoor:
                return this.owner.bones.hasBone('door_pside_f');
            case enums_1.VehicleDoorIndex.BackLeftDoor:
                return this.owner.bones.hasBone('door_dside_r');
            case enums_1.VehicleDoorIndex.BackRightDoor:
                return this.owner.bones.hasBone('door_pside_r');
            case enums_1.VehicleDoorIndex.Hood:
                return this.owner.bones.hasBone('bonnet');
            case enums_1.VehicleDoorIndex.Trunk:
                return this.owner.bones.hasBone('boot');
            default:
                return false;
        }
    }
}
exports.VehicleDoorCollection = VehicleDoorCollection;
