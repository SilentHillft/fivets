import { EntityBone } from "../entity";
import { Ped } from "./ped";
import { Bone } from "../../enums";
export declare class PedBone extends EntityBone {
    constructor(owner: Ped, boneId: Bone);
}
