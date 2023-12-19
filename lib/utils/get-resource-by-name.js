"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceByName = void 0;
const getResourceByName = (name) => {
    // @ts-ignore
    return global.exports?.[name];
};
exports.getResourceByName = getResourceByName;
