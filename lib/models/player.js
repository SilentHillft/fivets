"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const ped_1 = require("./ped");
class Player {
    constructor(handle) {
        this._handle = handle;
        this.safeMode = false;
    }
    get handle() {
        return this._handle;
    }
    get name() {
        return GetPlayerName(this.handle);
    }
    get character() {
        const charHandle = GetPlayerPed(this.handle);
        if (typeof this.ped === "undefined" || charHandle !== this.ped.handle) {
            this.ped = new ped_1.Ped(charHandle);
        }
        return this.ped;
    }
    get inSafeMode() {
        return this.safeMode;
    }
    set inSafeMode(val) {
        NetworkSetFriendlyFireOption(val);
        SetCanAttackFriendly(this.character.handle, val, val);
        this.safeMode = val;
    }
    getLicenseByType(type) {
        return GetPlayerIdentifierByType(this.handle.toString(), type);
    }
}
exports.Player = Player;
