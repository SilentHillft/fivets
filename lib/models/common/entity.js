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
    get networkId() {
        return NetworkGetNetworkIdFromEntity(this.handle);
    }
    get ownerHandle() {
        return NetworkGetEntityOwner(this.handle);
    }
    exists() {
        return DoesEntityExist(this.handle);
    }
    delete() {
        if (this.exists()) {
            DeleteEntity(this.handle);
        }
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
    get rotation() {
        const [x, y, z] = GetEntityRotation(this.handle);
        return new utils_1.Vector3(x, y, z);
    }
    get rotationVelocity() {
        const [x, y, z] = GetEntityRotationVelocity(this.handle);
        return new utils_1.Vector3(x, y, z);
    }
    get heading() {
        return GetEntityHeading(this.handle);
    }
    get modelHash() {
        return GetEntityModel(this.handle);
    }
    get populationType() {
        return GetEntityPopulationType(this.handle);
    }
    get speed() {
        return GetEntitySpeed(this.handle) * 3.6;
    }
    get velocity() {
        const [x, y, z] = GetEntityVelocity(this.handle);
        return new utils_1.Vector3(x, y, z);
    }
    isVisible() {
        return IsEntityVisible(this.handle);
    }
    isPositionFrozen() {
        return IsEntityPositionFrozen(this.handle);
    }
    freezePosition() {
        FreezeEntityPosition(this.handle, true);
    }
    unfreezePosition() {
        FreezeEntityPosition(this.handle, false);
    }
    setRotation(pitch, roll, yaw, rotationOrder) {
        SetEntityRotation(this.handle, pitch, roll, yaw, rotationOrder, false);
    }
    setPosition(pos, alive = false, ragdollFlag = false, clearArea = true) {
        SetEntityCoords(this.handle, pos.x, pos.y, pos.z, alive, !alive, ragdollFlag, clearArea);
    }
    setVelocity(vector) {
        SetEntityVelocity(this.handle, vector.x, vector.y, vector.z);
    }
    applyForce(pos, offset, isDirectionRelative = false, isForceRelative = false, forceType = force_type_1.ForceType.EXTERNAL_FORCE) {
        // NOTE: p12 is triggerAudio
        // NOTE: p13 is ScaleByTimeWrap
        ApplyForceToEntity(this.handle, forceType, pos.x, pos.y, pos.z, offset.x, offset.y, offset.z, 0, isDirectionRelative, true, isForceRelative, false, true);
    }
    isCollisionEnabled() {
        return !GetEntityCollisionDisabled(this.handle);
    }
}
exports.Entity = Entity;
