"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCommand = exports.COMMANDS_METADATA_KEY = void 0;
const client_module_1 = require("../client-module");
const server_module_1 = require("../server-module");
exports.COMMANDS_METADATA_KEY = Symbol("commands");
function OnCommand(command, restricted = false) {
    return function (target, key, descriptor) {
        if (!(target instanceof client_module_1.ClientModule) &&
            !(target instanceof server_module_1.ServerModule)) {
            throw new Error("OnCommand decorator can only be applied inside of ClientModule or ServerModule.");
        }
        const existingCommands = Reflect.getOwnMetadata(exports.COMMANDS_METADATA_KEY, target) || [];
        existingCommands.push({
            methodName: key,
            cmd: command,
            restricted,
        });
        Reflect.defineMetadata(exports.COMMANDS_METADATA_KEY, existingCommands, target);
        return descriptor;
    };
}
exports.OnCommand = OnCommand;
