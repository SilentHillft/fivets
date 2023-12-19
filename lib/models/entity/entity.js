"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const utils_1 = require("../../utils");
const utils_2 = require("../../utils");
const entity_bone_collection_1 = require("./entity-bone-collection");
const enums_1 = require("../../enums");
const blip_1 = require("../blip");
const model_1 = require("../model");
const game_1 = require("../../game");
class Entity {
    // TODO: This is causing circular dependency
    // public static fromHandle(handle: number) {
    //   switch (GetEntityType(handle)) {
    //     case 1:
    //       return new Ped(handle);
    //     case 2:
    //       return new Vehicle(handle);
    //     // case 3:
    //     //   return new Prop(handle);
    //   }
    //
    //   return null;
    // }
    constructor(handle) {
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    get networkId() {
        return NetworkGetNetworkIdFromEntity(this.handle);
    }
    get health() {
        return GetEntityHealth(this.handle);
    }
    set health(val) {
        this.setHealth(val);
    }
    setHealth(val) {
        SetEntityHealth(this.handle, val);
    }
    get maxHealth() {
        return GetEntityMaxHealth(this.handle);
    }
    set maxHealth(val) {
        this.setMaxHealth(val);
    }
    setMaxHealth(val) {
        SetEntityMaxHealth(this.handle, val);
    }
    isAlive() {
        return !IsEntityDead(this.handle);
    }
    get model() {
        return new model_1.Model(GetEntityModel(this.handle));
    }
    get position() {
        const [x, y, z] = GetEntityCoords(this.handle, false);
        return new utils_2.Vector3(x, y, z);
    }
    setPosition(pos) {
        SetEntityCoords(this.handle, pos.x, pos.y, pos.z, false, false, false, true);
    }
    setPositionWithoutOffset(pos) {
        SetEntityCoordsNoOffset(this.handle, pos.x, pos.y, pos.z, true, true, true);
    }
    get rotation() {
        const [x, y, z] = GetEntityRotation(this.handle, 2);
        return new utils_2.Vector3(x, y, z);
    }
    setRotation(vec) {
        SetEntityRotation(this.handle, vec.x, vec.y, vec.z, 2, true);
    }
    get heading() {
        return GetEntityHeading(this.handle);
    }
    setHeading(yaw) {
        SetEntityHeading(this.handle, yaw);
    }
    freezePosition() {
        FreezeEntityPosition(this.handle, true);
    }
    unfreezePosition() {
        FreezeEntityPosition(this.handle, false);
    }
    get velocity() {
        const [x, y, z] = GetEntityVelocity(this.handle);
        return new utils_2.Vector3(x, y, z);
    }
    setVelocity(vec) {
        SetEntityVelocity(this.handle, vec.x, vec.y, vec.z);
    }
    get rotationVelocity() {
        const [x, y, z] = GetEntityRotationVelocity(this.handle);
        return new utils_2.Vector3(x, y, z);
    }
    setMaxSpeed(val) {
        SetEntityMaxSpeed(this.handle, val / 3.6);
    }
    setHasGravity(val) {
        SetEntityHasGravity(this.handle, val);
    }
    get altitude() {
        return GetEntityHeightAboveGround(this.handle);
    }
    get submersionLevel() {
        return GetEntitySubmergedLevel(this.handle);
    }
    get lodDistance() {
        return GetEntityLodDist(this.handle);
    }
    setLODDistance(val) {
        return SetEntityLodDist(this.handle, val);
    }
    isVisible() {
        return IsEntityVisible(this.handle);
    }
    setVisibility(val) {
        SetEntityVisible(this.handle, val, false);
    }
    isOccluded() {
        return IsEntityOccluded(this.handle);
    }
    isOnScreen() {
        return IsEntityOnScreen(this.handle);
    }
    isUpright() {
        return IsEntityUpright(this.handle, 0);
    }
    isUpsideDown() {
        return IsEntityUpsidedown(this.handle);
    }
    isInAir() {
        return IsEntityInAir(this.handle);
    }
    isInWater() {
        return IsEntityInWater(this.handle);
    }
    isPersistent() {
        return IsEntityAMissionEntity(this.handle);
    }
    setPersistent(val) {
        if (val) {
            SetEntityAsMissionEntity(this.handle, true, false);
        }
        else {
            this.markAsNoLongerNeeded();
        }
    }
    isOnFire() {
        return IsEntityOnFire(this.handle);
    }
    setInvincible(val) {
        SetEntityInvincible(this.handle, val);
    }
    setOnlyDamageByPlayer(val) {
        SetEntityOnlyDamagedByPlayer(this.handle, val);
    }
    get opacity() {
        return GetEntityAlpha(this.handle);
    }
    setOpacity(val) {
        SetEntityAlpha(this.handle, (0, utils_1.clamp)(val, 0, 255), false);
    }
    resetOpacity() {
        ResetEntityAlpha(this.handle);
    }
    hasCollided() {
        return HasEntityCollidedWithAnything(this.handle);
    }
    isCollisionEnabled() {
        return !GetEntityCollisionDisabled(this.handle);
    }
    setCollisionEnabled(val) {
        return SetEntityCollision(this.handle, val, false);
    }
    setRecordingCollisions(val) {
        SetEntityRecordsCollisions(this.handle, val);
    }
    get bones() {
        if (!this._bones) {
            this._bones = new entity_bone_collection_1.EntityBoneCollection(this);
        }
        return this._bones;
    }
    getAttachedBlip() {
        const blipHandle = GetBlipFromEntity(this.handle);
        if (DoesBlipExist(blipHandle)) {
            return new blip_1.Blip(blipHandle);
        }
        return null;
    }
    attachBlip() {
        return new blip_1.Blip(AddBlipForEntity(this.handle));
    }
    setNoCollision(entity, val) {
        SetEntityNoCollisionEntity(this.handle, entity.handle, val);
    }
    hasClearLosToEntity(entity, traceType = 17) {
        return HasEntityClearLosToEntity(this.handle, entity.handle, traceType);
    }
    hasClearLosToEntityInFront(entity) {
        return HasEntityClearLosToEntityInFront(this.handle, entity.handle);
    }
    hasBeenDamagedBy(entity) {
        return HasEntityBeenDamagedByEntity(this.handle, entity.handle, true);
    }
    hasBeenDamagedByWeapon(weapon) {
        return HasEntityBeenDamagedByWeapon(this.handle, +weapon, 0);
    }
    hasBeenDamagedByAnyWeapon() {
        return HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
    }
    hasBeenDamagedByAnyMeleeWeapon() {
        return HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
    }
    clearLastWeaponDamage() {
        ClearEntityLastWeaponDamage(this.handle);
    }
    isInArea(min, max) {
        return IsEntityInArea(this.handle, min.x, min.y, min.z, max.x, max.y, max.z, false, false, 0);
    }
    isInAngledArea(origin, edge, angle) {
        return IsEntityInAngledArea(this.handle, origin.x, origin.y, origin.z, edge.x, edge.y, edge.z, angle, false, true, 0);
    }
    isInRangeOf(pos, range) {
        const v = this.position.substract(pos);
        return v.dotProduct(v) < range * range;
    }
    isNearEntity(entity, bounds) {
        return IsEntityAtEntity(this.handle, entity.handle, bounds.x, bounds.y, bounds.z, false, true, 0);
    }
    isTouching(entity) {
        return IsEntityTouchingEntity(this.handle, entity.handle);
    }
    isTouchingModel(model) {
        return IsEntityTouchingModel(this.handle, model.hash);
    }
    getOffsetPosition(offset) {
        const [x, y, z] = GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z);
        return new utils_2.Vector3(x, y, z);
    }
    getPositionOffset(worldPos) {
        const [x, y, z] = GetOffsetFromEntityGivenWorldCoords(this.handle, worldPos.x, worldPos.y, worldPos.z);
        return new utils_2.Vector3(x, y, z);
    }
    attachTo(entity, pos, rot) {
        AttachEntityToEntity(this.handle, entity.handle, -1, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, false, false, false, 2, true);
    }
    attachToBone(entityBone, pos, rot) {
        // TODO: Implement boneIndex
        AttachEntityToEntity(this.handle, entityBone.owner.handle, -1, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, false, false, false, 2, true);
    }
    detach() {
        DetachEntity(this.handle, true, true);
    }
    isAttached() {
        return IsEntityAttached(this.handle);
    }
    isAttachedTo(entity) {
        return IsEntityAttachedToEntity(this.handle, entity.handle);
    }
    applyForce(dir, rot, relative = false, forceType = enums_1.ForceType.MaxForceRot2) {
        ApplyForceToEntity(this.handle, +forceType, dir.x, dir.y, dir.z, rot.x, rot.y, rot.z, 0, relative, true, true, false, true);
    }
    removeAllParticleEffects() {
        RemoveParticleFxFromEntity(this.handle);
    }
    exists() {
        return DoesEntityExist(this.handle);
    }
    delete() {
        if (this.handle !== game_1.Game.playerPed.handle) {
            SetEntityAsMissionEntity(this.handle, false, true);
            DeleteEntity(this.handle);
        }
    }
    markAsNoLongerNeeded() {
        SetEntityAsMissionEntity(this.handle, false, true);
        SetEntityAsNoLongerNeeded(this.handle);
    }
}
exports.Entity = Entity;
