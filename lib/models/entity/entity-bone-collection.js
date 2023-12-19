"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityBoneCollection = void 0;
const entity_bone_1 = require("./entity-bone");
class EntityBoneCollection {
    constructor(owner) {
        this._currentIndex = -1;
        this.owner = owner;
    }
    hasBone(name) {
        return GetEntityBoneIndexByName(this.owner.handle, name) !== -1;
    }
    get core() {
        return new entity_bone_1.EntityBone(this.owner, -1);
    }
}
exports.EntityBoneCollection = EntityBoneCollection;
