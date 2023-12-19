"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blip = void 0;
class Blip {
    constructor(handle) {
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    static addForCoord(pos) {
        return new Blip(AddBlipForCoord(pos.x, pos.y, pos.z));
    }
    static addForArea(pos, width, height) {
        return new Blip(AddBlipForArea(pos.x, pos.y, pos.z, width, height));
    }
    static addForEntity(entity) {
        return new Blip(AddBlipForEntity(entity.handle));
    }
    static addForRadius(pos, radius) {
        return new Blip(AddBlipForRadius(pos.x, pos.y, pos.z, radius));
    }
    exists() {
        return DoesBlipExist(this.handle);
    }
    setName(text) {
        BeginTextCommandSetBlipName('STRING');
        AddTextComponentSubstringPlayerName(text);
        EndTextCommandSetBlipName(this.handle);
    }
    setColor(color) {
        SetBlipColour(this.handle, color);
    }
    setSprite(sprite) {
        SetBlipSprite(this.handle, sprite);
    }
}
exports.Blip = Blip;
