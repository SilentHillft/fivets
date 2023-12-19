"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedBone = void 0;
const entity_1 = require("../entity");
class PedBone extends entity_1.EntityBone {
    constructor(owner, boneId) {
        super(owner, GetPedBoneIndex(owner.handle, +boneId));
    }
}
exports.PedBone = PedBone;
