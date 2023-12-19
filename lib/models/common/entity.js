"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const enums_1 = require("../../enums");
const utils_1 = require("../../utils");
const force_type_1 = require("../../enums/force-type");
class Entity {
    constructor(handle) {
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    exists() {
        return DoesEntityExist(this.handle);
    }
    delete() {
        DeleteEntity(this.handle);
    }
    get type() {
        return GetEntityType(this.handle);
    }
    get health() {
        return GetEntityHealth(this.handle);
    }
    get maxHealth() {
        if (this.type !== enums_1.EntityType.CHARACTER) {
            return 0;
        }
        return GetEntityMaxHealth(this.handle);
    }
    get position() {
        const [x, y, z] = GetEntityCoords(this.handle);
        return new utils_1.Vector3(x, y, z);
    }
    get heading() {
        return GetEntityHeading(this.handle);
    }
    freezePosition() {
        FreezeEntityPosition(this.handle, true);
    }
    unfreezePosition() {
        FreezeEntityPosition(this.handle, false);
    }
    applyForce(pos, offset, isDirectionRelative = false, isForceRelative = false, forceType = force_type_1.ForceType.EXTERNAL_FORCE) {
        // NOTE: p12 is triggerAudio
        // NOTE: p13 is ScaleByTimeWrap
        ApplyForceToEntity(this.handle, forceType, pos.x, pos.y, pos.z, offset.x, offset.y, offset.z, 0, isDirectionRelative, true, isForceRelative, false, true);
    }
}
exports.Entity = Entity;
