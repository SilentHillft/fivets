"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnServerEvent = exports.ON_SERVER_EVENT_METADATA_KEY = void 0;
const server_module_1 = require("../server-module");
exports.ON_SERVER_EVENT_METADATA_KEY = Symbol("onServerEvent");
function OnServerEvent(event) {
    return function (target, key, descriptor) {
        if (typeof target[key] !== "function") {
            throw new Error("OnServerEvent decorator can only be applied to method.");
        }
        if (!(target instanceof server_module_1.ServerModule)) {
            throw new Error("OnServerEvent decorator can only be applied inside of ServerModule.");
        }
        const existingListeners = Reflect.getOwnMetadata(exports.ON_SERVER_EVENT_METADATA_KEY, target) || [];
        existingListeners.push({
            methodName: key,
            event,
        });
        Reflect.defineMetadata(exports.ON_SERVER_EVENT_METADATA_KEY, existingListeners, target);
        return descriptor;
    };
}
exports.OnServerEvent = OnServerEvent;
