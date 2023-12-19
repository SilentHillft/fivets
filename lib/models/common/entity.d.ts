import { EntityType } from "../../enums";
import { Vector3 } from "../../utils";
import { ForceType } from "../../enums/force-type";
export declare class Entity {
    private _handle;
    constructor(handle: number);
    get handle(): number;
    exists(): boolean;
    delete(): void;
    get type(): EntityType;
    get health(): number;
    get maxHealth(): number;
    get position(): Vector3;
    get heading(): number;
    freezePosition(): void;
    unfreezePosition(): void;
    applyForce(pos: Vector3, offset: Vector3, isDirectionRelative?: boolean, isForceRelative?: boolean, forceType?: ForceType): void;
}
