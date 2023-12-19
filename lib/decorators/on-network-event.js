"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnNetworkEvent = exports.ON_NETWORK_EVENT_METADATA_KEY = void 0;
const client_module_1 = require("../client-module");
const server_module_1 = require("../server-module");
exports.ON_NETWORK_EVENT_METADATA_KEY = Symbol("onNetworkEvent");
function OnNetworkEvent(event) {
    return function (target, key, descriptor) {
        if (typeof target[key] !== "function") {
            throw new Error("OnNetworkEvent decorator can only be applied to method.");
        }
        if (!(target instanceof client_module_1.ClientModule) && !(target instanceof server_module_1.ServerModule)) {
            throw new Error("OnNetworkEvent decorator can only be applied inside of ClientModule or ServerModule.");
        }
        const existingListeners = Reflect.getOwnMetadata(exports.ON_NETWORK_EVENT_METADATA_KEY, target) || [];
        existingListeners.push({
            methodName: key,
            event,
        });
        Reflect.defineMetadata(exports.ON_NETWORK_EVENT_METADATA_KEY, existingListeners, target);
        return descriptor;
    };
}
exports.OnNetworkEvent = OnNetworkEvent;
