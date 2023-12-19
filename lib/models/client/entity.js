"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const common_1 = require("../common");
const force_type_1 = require("../../enums/force-type");
class ClientEntity extends common_1.Entity {
    applyForceToCenterOfMass(pos, isDirectionRelative = false, isForceRelative = false, forceType = force_type_1.ForceType.EXTERNAL_FORCE) {
        ApplyForceToEntityCenterOfMass(this.handle, forceType, pos.x, pos.y, pos.z, false, isDirectionRelative, isForceRelative, false);
    }
    setHealth(health) {
        // TODO: Recognize if it's ped (male 100-200 | female 0-100)
        SetEntityHealth(this.handle, health);
    }
    setMaxHealth(maxHealth) {
        SetEntityMaxHealth(this.handle, maxHealth);
    }
    isVisible() {
        return IsEntityVisible(this.handle);
    }
    setVisible(visible) {
        SetEntityVisible(this.handle, visible, true);
    }
    setCollision(value) {
        SetEntityCollision(this.handle, value, false);
    }
    setPositionNoOffset(pos, alive = false, ragdollFlag = false) {
        SetEntityCoordsNoOffset(this.handle, pos.x, pos.y, pos.z, alive, !alive, ragdollFlag);
    }
    setPosition(pos, alive = false, ragdollFlag = false, clearArea = true) {
        SetEntityCoords(this.handle, pos.x, pos.y, pos.z, alive, !alive, ragdollFlag, clearArea);
    }
    hasCollisionLoadedAround() {
        return HasCollisionLoadedAroundEntity(this.handle);
    }
    isDead() {
        return IsEntityDead(this.handle);
    }
}
exports.ClientEntity = ClientEntity;
