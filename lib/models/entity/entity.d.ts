import { Vector3 } from "../../utils";
import { WeaponHash } from "../../hashes";
import { EntityBoneCollection } from "./entity-bone-collection";
import { EntityBone } from "./entity-bone";
import { ForceType } from "../../enums";
import { Blip } from "../blip";
import { Model } from "../model";
export declare class Entity {
    protected _handle: number;
    protected _bones: EntityBoneCollection;
    constructor(handle: number);
    get handle(): number;
    get networkId(): number;
    get health(): number;
    set health(val: number);
    setHealth(val: number): void;
    get maxHealth(): number;
    set maxHealth(val: number);
    setMaxHealth(val: number): void;
    isAlive(): boolean;
    get model(): Model;
    get position(): Vector3;
    setPosition(pos: Vector3): void;
    setPositionWithoutOffset(pos: Vector3): void;
    get rotation(): Vector3;
    setRotation(vec: Vector3): void;
    get heading(): number;
    setHeading(yaw: number): void;
    freezePosition(): void;
    unfreezePosition(): void;
    get velocity(): Vector3;
    setVelocity(vec: Vector3): void;
    get rotationVelocity(): Vector3;
    setMaxSpeed(val: number): void;
    setHasGravity(val: boolean): void;
    get altitude(): number;
    get submersionLevel(): number;
    get lodDistance(): number;
    setLODDistance(val: number): void;
    isVisible(): boolean;
    setVisibility(val: boolean): void;
    isOccluded(): boolean;
    isOnScreen(): boolean;
    isUpright(): boolean;
    isUpsideDown(): boolean;
    isInAir(): boolean;
    isInWater(): boolean;
    isPersistent(): boolean;
    setPersistent(val: boolean): void;
    isOnFire(): boolean;
    setInvincible(val: boolean): void;
    setOnlyDamageByPlayer(val: boolean): void;
    get opacity(): number;
    setOpacity(val: number): void;
    resetOpacity(): void;
    hasCollided(): boolean;
    isCollisionEnabled(): boolean;
    setCollisionEnabled(val: boolean): void;
    setRecordingCollisions(val: boolean): void;
    get bones(): EntityBoneCollection;
    getAttachedBlip(): Blip;
    attachBlip(): Blip;
    setNoCollision(entity: Entity, val: boolean): void;
    hasClearLosToEntity(entity: Entity, traceType?: number): boolean;
    hasClearLosToEntityInFront(entity: Entity): boolean;
    hasBeenDamagedBy(entity: Entity): boolean;
    hasBeenDamagedByWeapon(weapon: WeaponHash): boolean;
    hasBeenDamagedByAnyWeapon(): boolean;
    hasBeenDamagedByAnyMeleeWeapon(): boolean;
    clearLastWeaponDamage(): void;
    isInArea(min: Vector3, max: Vector3): boolean;
    isInAngledArea(origin: Vector3, edge: Vector3, angle: number): boolean;
    isInRangeOf(pos: Vector3, range: number): boolean;
    isNearEntity(entity: Entity, bounds: Vector3): boolean;
    isTouching(entity: Entity): boolean;
    isTouchingModel(model: Model): boolean;
    getOffsetPosition(offset: Vector3): Vector3;
    getPositionOffset(worldPos: Vector3): Vector3;
    attachTo(entity: Entity, pos: Vector3, rot: Vector3): void;
    attachToBone(entityBone: EntityBone, pos: Vector3, rot: Vector3): void;
    detach(): void;
    isAttached(): boolean;
    isAttachedTo(entity: Entity): boolean;
    applyForce(dir: Vector3, rot: Vector3, relative?: boolean, forceType?: ForceType): void;
    removeAllParticleEffects(): void;
    exists(): boolean;
    delete(): void;
    markAsNoLongerNeeded(): void;
}
