"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const ped_1 = require("./ped");
class Player {
    constructor(handle) {
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    get ped() {
        if (!this._ped) {
            this._ped = new ped_1.Ped(GetPlayerPed(this.handle));
        }
        return this._ped;
    }
    get name() {
        return GetPlayerName(this.handle);
    }
}
exports.Player = Player;
