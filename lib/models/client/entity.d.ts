import { Entity } from '../common';
import { Vector3 } from "../../utils";
import { ForceType } from "../../enums/force-type";
export declare class ClientEntity extends Entity {
    applyForceToCenterOfMass(pos: Vector3, isDirectionRelative?: boolean, isForceRelative?: boolean, forceType?: ForceType): void;
    setHealth(health: number): void;
    setMaxHealth(maxHealth: number): void;
    isVisible(): boolean;
    setVisible(visible: boolean): void;
    setCollision(value: boolean): void;
    setPositionNoOffset(pos: Vector3, alive?: boolean, ragdollFlag?: boolean): void;
    setPosition(pos: Vector3, alive?: boolean, ragdollFlag?: boolean, clearArea?: boolean): void;
    hasCollisionLoadedAround(): boolean;
    isDead(): boolean;
}
