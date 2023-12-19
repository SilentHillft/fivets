"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = async (time) => new Promise((resolve) => setTimeout(resolve, time));
exports.delay = delay;
