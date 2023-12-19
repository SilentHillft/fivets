"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blip = void 0;
const utils_1 = require("../utils");
class Blip {
    constructor(handle) {
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    get position() {
        const [x, y, z] = GetBlipInfoIdCoord(this.handle);
        return new utils_1.Vector3(x, y, z);
    }
    setPosition(pos) {
        SetBlipCoords(this.handle, pos.x, pos.y, pos.z);
    }
    get rotation() {
        return GetBlipRotation(this.handle);
    }
    setRotation(deg) {
        SetBlipRotation(this.handle, deg);
    }
    setScale(val) {
        SetBlipScale(this.handle, val);
    }
    get type() {
        return GetBlipInfoIdType(this.handle);
    }
    get alpha() {
        return GetBlipAlpha(this.handle);
    }
    setAlpha(val) {
        SetBlipAlpha(this.handle, val);
    }
    setPriority(val) {
        SetBlipPriority(this.handle, val);
    }
    setNumberLabel(val) {
        ShowNumberOnBlip(this.handle, val);
    }
    get color() {
        return GetBlipColour(this.handle);
    }
    setColor(color) {
        SetBlipColour(this.handle, color);
    }
    get sprite() {
        return GetBlipSprite(this.handle);
    }
    setSprite(val) {
        SetBlipSprite(this.handle, val);
    }
    setDisplay(val) {
        SetBlipDisplay(this.handle, val);
    }
    setName(name) {
        BeginTextCommandSetBlipName('STRING');
        AddTextComponentSubstringPlayerName(name);
        EndTextCommandSetBlipName(this.handle);
    }
    setNameToPlayerName(player) {
        SetBlipNameToPlayerName(this.handle, player.handle);
    }
    // TODO: Think about better way to do it.
    // public get entity() {
    //     return Entity.fromHandle(GetBlipInfoIdEntityIndex(this.handle));
    // }
    setShowHeadingIndicator(show) {
        ShowHeadingIndicatorOnBlip(this.handle, show);
    }
    setShowRoute(show) {
        SetBlipRoute(this.handle, show);
    }
    setFriendly(val) {
        SetBlipAsFriendly(this.handle, val);
    }
    setFriend(val) {
        SetBlipFriend(this.handle, val);
    }
    setCrew(val) {
        SetBlipCrew(this.handle, val);
    }
    isFlashing() {
        return IsBlipFlashing(this.handle);
    }
    setFlashing(val) {
        SetBlipFlashes(this.handle, val);
    }
    isOnMinimap() {
        return IsBlipOnMinimap(this.handle);
    }
    isShortRange() {
        return IsBlipShortRange(this.handle);
    }
    setShortRange(val) {
        SetBlipAsShortRange(this.handle, val);
    }
    removeNumberLabel() {
        HideNumberOnBlip(this.handle);
    }
    delete() {
        if (this.exists()) {
            RemoveBlip(this.handle);
        }
    }
    exists() {
        return DoesBlipExist(this.handle);
    }
}
exports.Blip = Blip;
