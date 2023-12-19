"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
class ClientModule {
    constructor() {
        if (typeof PlayerId !== 'function') {
            throw new Error('ClientModule can be only used in client-side scripts.');
        }
    }
}
exports.ClientModule = ClientModule;
