"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityBone = void 0;
const utils_1 = require("../../utils");
class EntityBone {
    constructor(owner, boneIndex, boneName) {
        this._owner = owner;
        this._index =
            boneIndex ?? GetEntityBoneIndexByName(this.owner.handle, boneName);
    }
    get index() {
        return this._index;
    }
    get owner() {
        return this._owner;
    }
    get position() {
        const [x, y, z] = GetWorldPositionOfEntityBone(this.owner.handle, this.index);
        return new utils_1.Vector3(x, y, z);
    }
    isValid() {
        return this.owner.exists() && this.index !== -1;
    }
}
exports.EntityBone = EntityBone;
