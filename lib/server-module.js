"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerModule = void 0;
class ServerModule {
    constructor() {
        if (typeof GetHostId !== 'function') {
            throw new Error('ServerModule can be only used in server-side scripts.');
        }
    }
}
exports.ServerModule = ServerModule;
