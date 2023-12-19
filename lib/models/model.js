"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const hashes_1 = require("../hashes");
const utils_1 = require("../utils");
const game_1 = require("../game");
class Model {
    constructor(hash) {
        if (typeof hash === 'string') {
            this._hash = game_1.Game.generateHash(hash);
        }
        else {
            this._hash = hash;
        }
    }
    get hash() {
        return this._hash;
    }
    isValid() {
        return IsModelValid(this.hash);
    }
    isInCDImage() {
        return IsModelInCdimage(this.hash);
    }
    isLoaded() {
        return HasModelLoaded(this.hash);
    }
    isCollisionLoaded() {
        return HasCollisionForModelLoaded(this.hash);
    }
    isBicycle() {
        return IsThisModelABicycle(this.hash);
    }
    isBike() {
        return IsThisModelABike(this.hash);
    }
    isBoat() {
        return IsThisModelABoat(this.hash);
    }
    isCar() {
        return IsThisModelACar(this.hash);
    }
    isCargobob() {
        return (this.hash === hashes_1.VehicleHash.Cargobob ||
            this.hash === hashes_1.VehicleHash.Cargobob2 ||
            this.hash === hashes_1.VehicleHash.Cargobob3 ||
            this.hash === hashes_1.VehicleHash.Cargobob4);
    }
    isHelicopter() {
        return IsThisModelAHeli(this.hash);
    }
    isPed() {
        return IsModelAPed(this.hash);
    }
    isPlane() {
        return IsThisModelAPlane(this.hash);
    }
    IsProp() {
        return this.isValid() && !this.isPed() && !this.isVehicle() && !IsWeaponValid(this.hash);
    }
    isQuadbike() {
        return IsThisModelAQuadbike(this.hash);
    }
    isTrain() {
        return IsThisModelATrain(this.hash);
    }
    isVehicle() {
        return IsModelAVehicle(this.hash);
    }
    get dimensions() {
        const [min, max] = GetModelDimensions(this.hash);
        const right = new utils_1.Vector3(min[0], min[1], min[2]);
        const left = new utils_1.Vector3(max[0], max[1], max[2]);
        return left.substract(right);
    }
}
exports.Model = Model;
