"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedBoneCollection = void 0;
const entity_1 = require("../entity");
const ped_bone_1 = require("./ped-bone");
const enums_1 = require("../../enums");
class PedBoneCollection extends entity_1.EntityBoneCollection {
    constructor(owner) {
        super(owner);
    }
    get core() {
        return new ped_bone_1.PedBone(this.owner, enums_1.Bone.NONE);
    }
    get lastDamage() {
        let outBone = 0;
        const [result, out] = GetPedLastDamageBone(this.owner.handle, outBone);
        if (result) {
            return this[out];
        }
    }
    clearLastDamaged() {
        ClearPedLastDamageBone(this.owner.handle);
    }
}
exports.PedBoneCollection = PedBoneCollection;
