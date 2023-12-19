"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnTick = exports.ON_TICK_METADATA_KEY = void 0;
require("reflect-metadata");
const client_module_1 = require("../client-module");
const server_module_1 = require("../server-module");
exports.ON_TICK_METADATA_KEY = Symbol('tick');
function OnTick() {
    return function (target, key, descriptor) {
        if (!(target instanceof client_module_1.ClientModule) &&
            !(target instanceof server_module_1.ServerModule)) {
            throw new Error("OnCommand decorator can only be applied inside of ClientModule or ServerModule.");
        }
        if (typeof target[key] !== 'function') {
            throw new Error('OnTick decorator can only be applied to method.');
        }
        const existingListeners = Reflect.getOwnMetadata(exports.ON_TICK_METADATA_KEY, target) || [];
        existingListeners.push({
            methodName: key,
        });
        Reflect.defineMetadata(exports.ON_TICK_METADATA_KEY, existingListeners, target);
        return descriptor;
    };
}
exports.OnTick = OnTick;
