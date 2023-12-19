import { Entity } from "./entity";
import { EntityBone } from "./entity-bone";
export declare class EntityBoneCollection {
    protected readonly owner: Entity;
    private readonly _collection;
    private _currentIndex;
    constructor(owner: Entity);
    hasBone(name: string): boolean;
    get core(): EntityBone;
}
