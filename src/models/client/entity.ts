import { Entity } from "../common";
import { clamp, Vector3 } from "../../utils";
import { ForceType } from "../../enums/force-type";
import { ChangeMe } from "../../change-me.type";
import { Vector4 } from "../../utils/vector4";
import { TraceFlag, TrafficLightState } from "../../enums";

export class ClientEntity extends Entity {
  public applyForceToCenterOfMass(
    pos: Vector3,
    isDirectionRelative = false,
    isForceRelative = false,
    forceType = ForceType.EXTERNAL_FORCE,
  ) {
    ApplyForceToEntityCenterOfMass(
      this.handle,
      forceType,
      pos.x,
      pos.y,
      pos.z,
      false,
      isDirectionRelative,
      isForceRelative,
      false,
    );
  }

  public attachEntity(
    entity: Entity,
    boneIndex: number,
    pos: Vector3,
    rot: Vector3,
    useSoftPinning = false,
    hasCollision = false,
    rotationOrder: ChangeMe,
  ) {
    // TODO: Check if entity is a ped
    AttachEntityToEntity(
      this.handle,
      entity.handle,
      boneIndex,
      pos.x,
      pos.y,
      pos.z,
      rot.x,
      rot.y,
      rot.z,
      false,
      useSoftPinning,
      hasCollision,
      false,
      rotationOrder,
      true,
    );
  }

  public attachEntityPhysically(
    entity: Entity,
    boneIndex: number,
    boneIndex2: number,
    pos: Vector3,
    pos2: Vector3,
    rot: Vector3,
    breakForce: number,
    teleport: boolean,
    fixedRotation = true,
    hasCollision = false,
  ) {
    // TODO: Check if entity is a ped
    AttachEntityToEntityPhysically(
      this.handle,
      entity.handle,
      boneIndex,
      boneIndex2,
      pos.x,
      pos.y,
      pos.z,
      pos2.x,
      pos2.y,
      pos2.z,
      rot.x,
      rot.y,
      rot.z,
      breakForce,
      fixedRotation,
      false,
      hasCollision,
      teleport,
      2,
    );
  }

  public clearLastDamageEntity() {
    ClearEntityLastDamageEntity(this.handle);
  }

  public detach(dynamic: boolean, collision: boolean) {
    DetachEntity(this.handle, dynamic, collision);
  }

  public haveAnimDirector() {
    return DoesEntityHaveAnimDirector(this.handle);
  }

  public haveDrawable() {
    return DoesEntityHaveDrawable(this.handle);
  }

  public havePhysics() {
    return DoesEntityHavePhysics(this.handle);
  }

  public haveSkeletonData() {
    return DoesEntityHaveSkeletonData(this.handle);
  }

  public get alpha() {
    return GetEntityAlpha(this.handle);
  }

  public getEntityAttachedTo() {
    const src = GetEntityAttachedTo(this.handle);

    if (!src) {
      return null;
    }
    return new ClientEntity(src);

    // TODO: Recognize type of entity and return valid model
  }

  public canBeDamaged() {
    return GetEntityCanBeDamaged(this.handle);
  }

  public getForwardVector() {
    const [x, y, z] = GetEntityForwardVector(this.handle);

    return new Vector3(x, y, z);
  }

  public getHeight(pos: Vector3, atTop: boolean, inWorldCoords: boolean) {
    return GetEntityHeight(
      this.handle,
      pos.x,
      pos.y,
      pos.z,
      atTop,
      inWorldCoords,
    );
  }

  public get heightAboveGround() {
    return GetEntityHeightAboveGround(this.handle);
  }

  public get lodDistance() {
    return GetEntityLodDist(this.handle);
  }

  public get matrix() {
    const [forwardVector, rightVector, upVector, [x, y, z]] = GetEntityMatrix(
      this.handle,
    );

    return [
      new Vector3(forwardVector[0], forwardVector[1], forwardVector[2]),
      new Vector3(rightVector[0], rightVector[1], rightVector[2]),
      new Vector3(upVector[0], upVector[1], upVector[2]),
      new Vector3(x, y, z),
    ];
  }

  public get headingWithPhysics() {
    return GetEntityPhysicsHeading(this.handle);
  }

  // TODO: Implement this
  public getPickup(modelHash: ChangeMe) {
    const src = GetEntityPickup(this.handle, modelHash);
  }

  public get pitch() {
    return GetEntityPitch(this.handle);
  }

  public get proofs(): [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
  ] {
    return GetEntityProofs(this.handle);
  }

  public isBulletproof() {
    return this.proofs[1];
  }

  public isFireproof() {
    return this.proofs[2];
  }

  public isExplosionproof() {
    return this.proofs[3];
  }

  public isCollisionproof() {
    return this.proofs[4];
  }

  public isMeleeproof() {
    return this.proofs[5];
  }

  public isSteamproof() {
    return this.proofs[6];
  }

  public isDrownproof() {
    return this.proofs[8];
  }

  public get quaternion() {
    const [x, y, z, w] = GetEntityQuaternion(this.handle);

    return new Vector4(x, y, z, w);
  }

  public get roll() {
    return GetEntityRoll(this.handle);
  }

  public getSpeedVector(relative: boolean) {
    const [x, y, z] = GetEntitySpeedVector(this.handle, relative);

    return new Vector3(x, y, z);
  }

  public get submersionLevel() {
    return GetEntitySubmergedLevel(this.handle);
  }

  public get uprightValue() {
    return GetEntityUprightValue(this.handle);
  }

  // NOTE: Seems to always return 0 for Ped
  public getLastHitMaterialHash() {
    return GetLastMaterialHitByEntity(this.handle);
  }

  public hasBeenDamagedByAnyObject() {
    return HasEntityBeenDamagedByAnyObject(this.handle);
  }

  public hasBeenDamagedByAnyPed() {
    return HasEntityBeenDamagedByAnyPed(this.handle);
  }

  public hasBeenDamagedByAnyVehicle() {
    return HasEntityBeenDamagedByAnyVehicle(this.handle);
  }

  public hasBeenDamagedByEntity(entity: Entity) {
    return HasEntityBeenDamagedByEntity(this.handle, entity.handle, true);
  }

  public hasClearLosToEntity(
    entity: Entity,
    traceFlags: TraceFlag = TraceFlag.INTERSECT_OBJECTS |
      TraceFlag.INTERSECT_WORLD,
  ) {
    return HasEntityClearLosToEntity(this.handle, entity.handle, traceFlags);
  }

  public hasCollidedWithAnything() {
    return HasEntityCollidedWithAnything(this.handle);
  }

  public isMissionEntity() {
    return IsEntityAMissionEntity(this.handle);
  }

  public isPed() {
    return IsEntityAPed(this.handle);
  }

  public isVehicle() {
    return IsEntityAVehicle(this.handle);
  }

  public isObject() {
    return IsEntityAnObject(this.handle);
  }

  public isAtPosition(pos: Vector3, size: Vector3) {
    return IsEntityAtCoord(
      this.handle,
      pos.x,
      pos.y,
      pos.z,
      size.x,
      size.y,
      size.z,
      false,
      true,
      0,
    );
  }

  public isAtEntity(entity: Entity, size: Vector3) {
    return IsEntityAtEntity(
      this.handle,
      entity.handle,
      size.x,
      size.y,
      size.z,
      false,
      true,
      0,
    );
  }

  public isAttached() {
    return IsEntityAttached(this.handle);
  }

  public isAttachedToAnyObject() {
    return IsEntityAttachedToAnyObject(this.handle);
  }

  public isAttachedToAnyPed() {
    return IsEntityAttachedToAnyPed(this.handle);
  }

  public isAttachedToAnyVehicle() {
    return IsEntityAttachedToAnyVehicle(this.handle);
  }

  public isAttachedToEntity(entity: Entity) {
    return IsEntityAttachedToEntity(this.handle, entity.handle);
  }

  public isDead() {
    return IsEntityDead(this.handle);
  }

  public isInAir() {
    return IsEntityInAir(this.handle);
  }

  public isInAngledArea(
    min: Vector3,
    max: Vector3,
    width: number,
    includeZ: boolean = true,
    debug = false,
  ) {
    return IsEntityInAngledArea(
      this.handle,
      min.x,
      min.y,
      min.z,
      max.x,
      max.y,
      max.z,
      width,
      debug,
      includeZ,
      0,
    );
  }

  public isInArea(min: Vector3, max: Vector3) {
    return IsEntityInArea(
      this.handle,
      min.x,
      min.y,
      min.z,
      max.x,
      max.y,
      max.z,
      false,
      true,
      0,
    );
  }

  public isInWater() {
    return IsEntityInWater(this.handle);
  }

  // TODO: Figure out what "zone" is.
  public isInZone(zone: string) {
    return IsEntityInZone(this.handle, zone);
  }

  public isOccluded() {
    return IsEntityOccluded(this.handle);
  }

  public isOnScreen() {
    return IsEntityOnScreen(this.handle);
  }

  public isStatic() {
    return IsEntityStatic(this.handle);
  }

  public isTouchingEntity(entity: Entity) {
    return IsEntityTouchingEntity(this.handle, entity.handle);
  }

  public isTouchingModel(modelHash: number) {
    return IsEntityTouchingModel(this.handle, modelHash);
  }

  public isUpright(angle: number = 0) {
    return IsEntityUpright(this.handle, angle);
  }

  public isUpsideDown() {
    return IsEntityUpsidedown(this.handle);
  }

  public isVisibleToScript() {
    return IsEntityVisibleToScript(this.handle);
  }

  public isWaitingForWorldCollision() {
    return IsEntityWaitingForWorldCollision(this.handle);
  }

  // TODO: Implement anim* types from https://alexguirre.github.io/animations-list/
  public playAnimation(
    animName: string,
    animDict: string,
    loop: boolean,
    stayInAnim: boolean,
    delta = 0,
    bitset = 0x4000,
  ) {
    PlayEntityAnim(
      this.handle,
      animName,
      animDict,
      0,
      loop,
      stayInAnim,
      false,
      delta,
      bitset,
    );
  }

  public updateAttachments() {
    ProcessEntityAttachments(this.handle);
  }

  public resetAlpha() {
    ResetEntityAlpha(this.handle);
  }

  public setCanAutoVault(toggle: boolean) {
    SetCanAutoVaultOnEntity(this.handle, toggle);
  }

  public setCanClimbOnEntity(toggle: boolean) {
    SetCanClimbOnEntity(this.handle, toggle);
  }

  public setAlpha(alpha: number, affectSkin: boolean) {
    SetEntityAlpha(this.handle, clamp(alpha, 0, 255), affectSkin);
  }

  public setAlwaysPrerender(toggle: boolean) {
    SetEntityAlwaysPrerender(this.handle, toggle);
  }

  public setAngularVelocity(velocity: Vector3) {
    SetEntityAngularVelocity(this.handle, velocity.x, velocity.y, velocity.z);
  }

  public setAnimationDuration(
    animDict: string,
    animName: string,
    time: number,
  ) {
    SetEntityAnimCurrentTime(this.handle, animDict, animName, time);
  }

  public setAnimationSpeed(
    animDict: string,
    animName: string,
    speedMultiplier: number,
  ) {
    SetEntityAnimSpeed(this.handle, animDict, animName, speedMultiplier);
  }

  // TODO: Figure out what is p1 and p2
  public setAsMissionEntity(p1: boolean, p2: boolean) {
    SetEntityAsMissionEntity(this.handle, p1, p2);
  }

  public setAsNoLongerNeeded() {
    SetEntityAsNoLongerNeeded(this.handle);
  }

  public setCanBeDamaged(toggle: boolean) {
    SetEntityCanBeDamaged(this.handle, toggle);
  }

  public setCanBeDamagedByRelationshipGroup(group: number, toggle: boolean) {
    SetEntityCanBeDamagedByRelationshipGroup(this.handle, toggle, group);
  }

  public setCanBeTargetedWithoutLos(toggle: boolean) {
    SetEntityCanBeTargetedWithoutLos(this.handle, toggle);
  }

  public setCleanupByEngine(toggle: boolean) {
    SetEntityCleanupByEngine(this.handle, toggle);
  }

  public setCollision(toggle: boolean, keepPhysics: boolean = false) {
    SetEntityCollision(this.handle, toggle, keepPhysics);
  }

  public setCompletelyDisableCollision(
    toggle: boolean,
    keepPhysics: boolean = false,
  ) {
    SetEntityCompletelyDisableCollision(this.handle, toggle, keepPhysics);
  }

  public setDecalsDisabled(toggle: boolean) {
    SetEntityDecalsDisabled(this.handle, toggle);
  }

  public setDynamic(toggle: boolean) {
    SetEntityDynamic(this.handle, toggle);
  }

  public setHasGravity(toggle: boolean) {
    SetEntityHasGravity(this.handle, toggle);
  }

  public setHealth(health: number) {
    SetEntityHealth(this.handle, health);
  }

  public setInvincible(toggle: boolean) {
    SetEntityInvincible(this.handle, toggle);
  }

  public setLights(toggle: boolean) {
    SetEntityLights(this.handle, toggle);
  }

  public setLoadCollisionFlag(toggle: boolean) {
    SetEntityLoadCollisionFlag(this.handle, toggle);
  }

  public setLodDistance(distance: number) {
    SetEntityLodDist(this.handle, distance);
  }

  public setMaxHealth(maxHealth: number) {
    SetEntityMaxHealth(this.handle, maxHealth);
  }

  public setMaxSpeed(speed: number) {
    SetEntityMaxSpeed(this.handle, speed / 3.6);
  }

  public setMotionBlur(toggle: boolean) {
    SetEntityMotionBlur(this.handle, toggle);
  }

  public disableCollisionWithEntity(
    entity: Entity,
    oneFrameOnly = false,
  ) {
    SetEntityNoCollisionEntity(this.handle, entity.handle, oneFrameOnly);
  }

  public setDamageOnlyByPlayer(toggle: boolean) {
    SetEntityOnlyDamagedByPlayer(this.handle, toggle);
  }

  // TODO: Figure out what groupHash is
  public setDamageOnlyByRelationshipGroup(
    toggle: boolean,
    groupHash: string | number,
  ) {
    SetEntityOnlyDamagedByRelationshipGroup(this.handle, toggle, groupHash);
  }

  public setBulletproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[0] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setFireproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[1] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setExplosionproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[2] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setCollisionproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[3] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setMeleeproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[4] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setSteamproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[5] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setDrownproof(toggle: boolean) {
    const proofs = this.proofs.slice(1) as [
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
    ];
    proofs[7] = toggle;

    SetEntityProofs(this.handle, ...proofs);
  }

  public setQuaternion(vector: Vector4) {
    SetEntityQuaternion(this.handle, vector.x, vector.y, vector.z, vector.w);
  }

  public setRecordsCollisions(toggle: boolean) {
    SetEntityRecordsCollisions(this.handle, toggle);
  }

  public renderScorched(toggle: boolean) {
    SetEntityRenderScorched(this.handle, toggle);
  }

  public setTrafficLight(state: TrafficLightState) {
    SetEntityTrafficlightOverride(this.handle, state);
  }

  public resetTrafficLight() {
    this.setTrafficLight(TrafficLightState.RESET_CHANGES);
  }

  public setVisible(visible: boolean) {
    SetEntityVisible(this.handle, visible, false);
  }

  public wouldBeOccluded(modelHash: number, vector: Vector3, p4: boolean) {
    return WouldEntityBeOccluded(modelHash, vector.x, vector.y, vector.z, p4);
  }

  public setPositionNoOffset(pos: Vector3, alive = false, ragdollFlag = false) {
    SetEntityCoordsNoOffset(
      this.handle,
      pos.x,
      pos.y,
      pos.z,
      alive,
      !alive,
      ragdollFlag,
    );
  }

  public hasCollisionLoadedAround() {
    return HasCollisionLoadedAroundEntity(this.handle);
  }
}
