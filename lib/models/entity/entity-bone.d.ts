import { Entity } from "./entity";
import { Vector3 } from "../../utils";
export declare class EntityBone {
    protected readonly _owner: Entity;
    protected readonly _index: number;
    constructor(owner: Entity, boneIndex?: number, boneName?: string);
    get index(): number;
    get owner(): Entity;
    get position(): Vector3;
    isValid(): boolean;
}
