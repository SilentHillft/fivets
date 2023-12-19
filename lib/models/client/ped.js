"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPed = void 0;
const entity_1 = require("./entity");
// TODO: Extends also with common Ped
class ClientPed extends entity_1.ClientEntity {
    isInAnyVehicle() {
        return IsPedInAnyVehicle(this.handle, false);
    }
    isFatallyInjured() {
        return IsPedFatallyInjured(this.handle);
    }
    clearTasks() {
        ClearPedTasksImmediately(this.handle);
    }
    removeAllWeapons() {
        RemoveAllPedWeapons(this.handle, false);
    }
}
exports.ClientPed = ClientPed;
