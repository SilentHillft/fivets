"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const common_1 = require("../common");
const utils_1 = require("../../utils");
const force_type_1 = require("../../enums/force-type");
const vector4_1 = require("../../utils/vector4");
const enums_1 = require("../../enums");
class ClientEntity extends common_1.Entity {
    applyForceToCenterOfMass(pos, isDirectionRelative = false, isForceRelative = false, forceType = force_type_1.ForceType.EXTERNAL_FORCE) {
        ApplyForceToEntityCenterOfMass(this.handle, forceType, pos.x, pos.y, pos.z, false, isDirectionRelative, isForceRelative, false);
    }
    attachEntity(entity, boneIndex, pos, rot, useSoftPinning = false, hasCollision = false, rotationOrder) {
        // TODO: Check if entity is a ped
        AttachEntityToEntity(this.handle, entity.handle, boneIndex, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, useSoftPinning, hasCollision, false, rotationOrder, true);
    }
    attachEntityPhysically(entity, boneIndex, boneIndex2, pos, pos2, rot, breakForce, teleport, fixedRotation = true, hasCollision = false) {
        // TODO: Check if entity is a ped
        AttachEntityToEntityPhysically(this.handle, entity.handle, boneIndex, boneIndex2, pos.x, pos.y, pos.z, pos2.x, pos2.y, pos2.z, rot.x, rot.y, rot.z, breakForce, fixedRotation, false, hasCollision, teleport, 2);
    }
    clearLastDamageEntity() {
        ClearEntityLastDamageEntity(this.handle);
    }
    detach(dynamic, collision) {
        DetachEntity(this.handle, dynamic, collision);
    }
    haveAnimDirector() {
        return DoesEntityHaveAnimDirector(this.handle);
    }
    haveDrawable() {
        return DoesEntityHaveDrawable(this.handle);
    }
    havePhysics() {
        return DoesEntityHavePhysics(this.handle);
    }
    haveSkeletonData() {
        return DoesEntityHaveSkeletonData(this.handle);
    }
    get alpha() {
        return GetEntityAlpha(this.handle);
    }
    getEntityAttachedTo() {
        const src = GetEntityAttachedTo(this.handle);
        if (!src) {
            return null;
        }
        return new ClientEntity(src);
        // TODO: Recognize type of entity and return valid model
    }
    canBeDamaged() {
        return GetEntityCanBeDamaged(this.handle);
    }
    getForwardVector() {
        const [x, y, z] = GetEntityForwardVector(this.handle);
        return new utils_1.Vector3(x, y, z);
    }
    getHeight(pos, atTop, inWorldCoords) {
        return GetEntityHeight(this.handle, pos.x, pos.y, pos.z, atTop, inWorldCoords);
    }
    get heightAboveGround() {
        return GetEntityHeightAboveGround(this.handle);
    }
    get lodDistance() {
        return GetEntityLodDist(this.handle);
    }
    get matrix() {
        const [forwardVector, rightVector, upVector, [x, y, z]] = GetEntityMatrix(this.handle);
        return [
            new utils_1.Vector3(forwardVector[0], forwardVector[1], forwardVector[2]),
            new utils_1.Vector3(rightVector[0], rightVector[1], rightVector[2]),
            new utils_1.Vector3(upVector[0], upVector[1], upVector[2]),
            new utils_1.Vector3(x, y, z),
        ];
    }
    get headingWithPhysics() {
        return GetEntityPhysicsHeading(this.handle);
    }
    // TODO: Implement this
    getPickup(modelHash) {
        const src = GetEntityPickup(this.handle, modelHash);
    }
    get pitch() {
        return GetEntityPitch(this.handle);
    }
    get proofs() {
        return GetEntityProofs(this.handle);
    }
    isBulletproof() {
        return this.proofs[1];
    }
    isFireproof() {
        return this.proofs[2];
    }
    isExplosionproof() {
        return this.proofs[3];
    }
    isCollisionproof() {
        return this.proofs[4];
    }
    isMeleeproof() {
        return this.proofs[5];
    }
    isSteamproof() {
        return this.proofs[6];
    }
    isDrownproof() {
        return this.proofs[8];
    }
    get quaternion() {
        const [x, y, z, w] = GetEntityQuaternion(this.handle);
        return new vector4_1.Vector4(x, y, z, w);
    }
    get roll() {
        return GetEntityRoll(this.handle);
    }
    getSpeedVector(relative) {
        const [x, y, z] = GetEntitySpeedVector(this.handle, relative);
        return new utils_1.Vector3(x, y, z);
    }
    get submersionLevel() {
        return GetEntitySubmergedLevel(this.handle);
    }
    get uprightValue() {
        return GetEntityUprightValue(this.handle);
    }
    getLastHitMaterialHash() {
        return GetLastMaterialHitByEntity(this.handle);
    }
    hasBeenDamagedByAnyObject() {
        return HasEntityBeenDamagedByAnyObject(this.handle);
    }
    hasBeenDamagedByAnyPed() {
        return HasEntityBeenDamagedByAnyPed(this.handle);
    }
    hasBeenDamagedByAnyVehicle() {
        return HasEntityBeenDamagedByAnyVehicle(this.handle);
    }
    hasBeenDamagedByEntity(entity) {
        return HasEntityBeenDamagedByEntity(this.handle, entity.handle, true);
    }
    hasClearLosToEntity(entity, traceFlags = enums_1.TraceFlag.INTERSECT_OBJECTS |
        enums_1.TraceFlag.INTERSECT_WORLD) {
        return HasEntityClearLosToEntity(this.handle, entity.handle, traceFlags);
    }
    hasCollidedWithAnything() {
        return HasEntityCollidedWithAnything(this.handle);
    }
    isMissionEntity() {
        return IsEntityAMissionEntity(this.handle);
    }
    isPed() {
        return IsEntityAPed(this.handle);
    }
    isVehicle() {
        return IsEntityAVehicle(this.handle);
    }
    isObject() {
        return IsEntityAnObject(this.handle);
    }
    isAtPosition(pos, size) {
        return IsEntityAtCoord(this.handle, pos.x, pos.y, pos.z, size.x, size.y, size.z, false, true, 0);
    }
    isAtEntity(entity, size) {
        return IsEntityAtEntity(this.handle, entity.handle, size.x, size.y, size.z, false, true, 0);
    }
    isAttached() {
        return IsEntityAttached(this.handle);
    }
    isAttachedToAnyObject() {
        return IsEntityAttachedToAnyObject(this.handle);
    }
    isAttachedToAnyPed() {
        return IsEntityAttachedToAnyPed(this.handle);
    }
    isAttachedToAnyVehicle() {
        return IsEntityAttachedToAnyVehicle(this.handle);
    }
    isAttachedToEntity(entity) {
        return IsEntityAttachedToEntity(this.handle, entity.handle);
    }
    isDead() {
        return IsEntityDead(this.handle);
    }
    isInAir() {
        return IsEntityInAir(this.handle);
    }
    isInAngledArea(min, max, width, includeZ = true, debug = false) {
        return IsEntityInAngledArea(this.handle, min.x, min.y, min.z, max.x, max.y, max.z, width, debug, includeZ, 0);
    }
    isInArea(min, max) {
        return IsEntityInArea(this.handle, min.x, min.y, min.z, max.x, max.y, max.z, false, true, 0);
    }
    isInWater() {
        return IsEntityInWater(this.handle);
    }
    // TODO: Figure out what "zone" is.
    isInZone(zone) {
        return IsEntityInZone(this.handle, zone);
    }
    isOccluded() {
        return IsEntityOccluded(this.handle);
    }
    isOnScreen() {
        return IsEntityOnScreen(this.handle);
    }
    isStatic() {
        return IsEntityStatic(this.handle);
    }
    isTouchingEntity(entity) {
        return IsEntityTouchingEntity(this.handle, entity.handle);
    }
    isTouchingModel(modelHash) {
        return IsEntityTouchingModel(this.handle, modelHash);
    }
    isUpright(angle = 0) {
        return IsEntityUpright(this.handle, angle);
    }
    isUpsideDown() {
        return IsEntityUpsidedown(this.handle);
    }
    isVisibleToScript() {
        return IsEntityVisibleToScript(this.handle);
    }
    isWaitingForWorldCollision() {
        return IsEntityWaitingForWorldCollision(this.handle);
    }
    // TODO: Implement anim* types from https://alexguirre.github.io/animations-list/
    playAnimation(animName, animDict, loop, stayInAnim, delta = 0, bitset = 0x4000) {
        PlayEntityAnim(this.handle, animName, animDict, 0, loop, stayInAnim, false, delta, bitset);
    }
    updateAttachments() {
        ProcessEntityAttachments(this.handle);
    }
    resetAlpha() {
        ResetEntityAlpha(this.handle);
    }
    setCanAutoVault(toggle) {
        SetCanAutoVaultOnEntity(this.handle, toggle);
    }
    setCanClimbOnEntity(toggle) {
        SetCanClimbOnEntity(this.handle, toggle);
    }
    setAlpha(alpha, affectSkin) {
        SetEntityAlpha(this.handle, (0, utils_1.clamp)(alpha, 0, 255), affectSkin);
    }
    setAlwaysPrerender(toggle) {
        SetEntityAlwaysPrerender(this.handle, toggle);
    }
    setAngularVelocity(velocity) {
        SetEntityAngularVelocity(this.handle, velocity.x, velocity.y, velocity.z);
    }
    setAnimationDuration(animDict, animName, time) {
        SetEntityAnimCurrentTime(this.handle, animDict, animName, time);
    }
    setAnimationSpeed(animDict, animName, speedMultiplier) {
        SetEntityAnimSpeed(this.handle, animDict, animName, speedMultiplier);
    }
    // TODO: Figure out what is p1 and p2
    setAsMissionEntity(p1, p2) {
        SetEntityAsMissionEntity(this.handle, p1, p2);
    }
    setAsNoLongerNeeded() {
        SetEntityAsNoLongerNeeded(this.handle);
    }
    setCanBeDamaged(toggle) {
        SetEntityCanBeDamaged(this.handle, toggle);
    }
    setCanBeDamagedByRelationshipGroup(group, toggle) {
        SetEntityCanBeDamagedByRelationshipGroup(this.handle, toggle, group);
    }
    setCanBeTargetedWithoutLos(toggle) {
        SetEntityCanBeTargetedWithoutLos(this.handle, toggle);
    }
    setCleanupByEngine(toggle) {
        SetEntityCleanupByEngine(this.handle, toggle);
    }
    setCollision(toggle, keepPhysics = false) {
        SetEntityCollision(this.handle, toggle, keepPhysics);
    }
    setCompletelyDisableCollision(toggle, keepPhysics = false) {
        SetEntityCompletelyDisableCollision(this.handle, toggle, keepPhysics);
    }
    setDecalsDisabled(toggle) {
        SetEntityDecalsDisabled(this.handle, toggle);
    }
    setDynamic(toggle) {
        SetEntityDynamic(this.handle, toggle);
    }
    setHasGravity(toggle) {
        SetEntityHasGravity(this.handle, toggle);
    }
    setHealth(health) {
        SetEntityHealth(this.handle, health);
    }
    setInvincible(toggle) {
        SetEntityInvincible(this.handle, toggle);
    }
    setLights(toggle) {
        SetEntityLights(this.handle, toggle);
    }
    setLoadCollisionFlag(toggle) {
        SetEntityLoadCollisionFlag(this.handle, toggle);
    }
    setLodDistance(distance) {
        SetEntityLodDist(this.handle, distance);
    }
    setMaxHealth(maxHealth) {
        SetEntityMaxHealth(this.handle, maxHealth);
    }
    setMaxSpeed(speed) {
        SetEntityMaxSpeed(this.handle, speed / 3.6);
    }
    setMotionBlur(toggle) {
        SetEntityMotionBlur(this.handle, toggle);
    }
    disableCollisionWithEntity(entity, oneFrameOnly = false) {
        SetEntityNoCollisionEntity(this.handle, entity.handle, oneFrameOnly);
    }
    setDamageOnlyByPlayer(toggle) {
        SetEntityOnlyDamagedByPlayer(this.handle, toggle);
    }
    // TODO: Figure out what groupHash is
    setDamageOnlyByRelationshipGroup(toggle, groupHash) {
        SetEntityOnlyDamagedByRelationshipGroup(this.handle, toggle, groupHash);
    }
    setBulletproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[0] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setFireproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[1] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setExplosionproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[2] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setCollisionproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[3] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setMeleeproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[4] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setSteamproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[5] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setDrownproof(toggle) {
        const proofs = this.proofs.slice(1);
        proofs[7] = toggle;
        SetEntityProofs(this.handle, ...proofs);
    }
    setQuaternion(vector) {
        SetEntityQuaternion(this.handle, vector.x, vector.y, vector.z, vector.w);
    }
    setRecordsCollisions(toggle) {
        SetEntityRecordsCollisions(this.handle, toggle);
    }
    renderScorched(toggle) {
        SetEntityRenderScorched(this.handle, toggle);
    }
    setTrafficLight(state) {
        SetEntityTrafficlightOverride(this.handle, state);
    }
    resetTrafficLight() {
        this.setTrafficLight(enums_1.TrafficLightState.RESET_CHANGES);
    }
    setVisible(visible) {
        SetEntityVisible(this.handle, visible, false);
    }
    wouldBeOccluded(modelHash, vector, p4) {
        return WouldEntityBeOccluded(modelHash, vector.x, vector.y, vector.z, p4);
    }
    setPositionNoOffset(pos, alive = false, ragdollFlag = false) {
        SetEntityCoordsNoOffset(this.handle, pos.x, pos.y, pos.z, alive, !alive, ragdollFlag);
    }
    hasCollisionLoadedAround() {
        return HasCollisionLoadedAroundEntity(this.handle);
    }
}
exports.ClientEntity = ClientEntity;
