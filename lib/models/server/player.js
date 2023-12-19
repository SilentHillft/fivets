"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlayer = void 0;
class ServerPlayer {
    constructor(handle) {
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    get character() {
        return null;
    }
    getLicenseByType(type) {
        return GetPlayerIdentifierByType(this.handle.toString(), type);
    }
    get name() {
        return GetPlayerName(this.handle);
    }
}
exports.ServerPlayer = ServerPlayer;
