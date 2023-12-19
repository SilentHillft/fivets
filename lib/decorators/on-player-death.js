"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnPlayerDeath = exports.ON_PLAYER_DEATH_EVENT_METADATA_KEY = void 0;
const client_module_1 = require("../client-module");
exports.ON_PLAYER_DEATH_EVENT_METADATA_KEY = Symbol("onPlayerDeath");
function OnPlayerDeath() {
    return function (target, key, descriptor) {
        if (typeof target[key] !== "function") {
            throw new Error("OnPlayerDeath decorator can only be applied to method.");
        }
        if (!(target instanceof client_module_1.ClientModule)) {
            throw new Error("OnPlayerDeath decorator can only be applied inside of ClientModule.");
        }
        const existingListeners = Reflect.getOwnMetadata(exports.ON_PLAYER_DEATH_EVENT_METADATA_KEY, target) || [];
        existingListeners.push({
            methodName: key,
        });
        Reflect.defineMetadata(exports.ON_PLAYER_DEATH_EVENT_METADATA_KEY, existingListeners, target);
        return descriptor;
    };
}
exports.OnPlayerDeath = OnPlayerDeath;
