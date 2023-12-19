import { EntityBoneCollection } from "../entity";
import { Ped } from "./ped";
import { PedBone } from "./ped-bone";
export declare class PedBoneCollection extends EntityBoneCollection {
    constructor(owner: Ped);
    get core(): PedBone;
    get lastDamage(): any;
    clearLastDamaged(): void;
}
