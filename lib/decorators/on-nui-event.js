"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnNuiEvent = exports.ON_NUI_EVENT_METADATA_KEY = void 0;
const client_module_1 = require("../client-module");
exports.ON_NUI_EVENT_METADATA_KEY = Symbol("onNuiEvent");
function OnNuiEvent(event) {
    return function (target, key, descriptor) {
        if (typeof target[key] !== "function") {
            throw new Error("OnNuiEvent decorator can only be applied to method.");
        }
        if (!(target instanceof client_module_1.ClientModule)) {
            throw new Error("OnNuiEvent decorator can only be applied inside of ClientModule.");
        }
        const existingListeners = Reflect.getOwnMetadata(exports.ON_NUI_EVENT_METADATA_KEY, target) || [];
        existingListeners.push({
            methodName: key,
            event,
        });
        Reflect.defineMetadata(exports.ON_NUI_EVENT_METADATA_KEY, existingListeners, target);
        return descriptor;
    };
}
exports.OnNuiEvent = OnNuiEvent;
