"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceType = void 0;
/**
 * IMPULSE is instant while a FORCE is continuous.
 *
 * ROTATION_VELOCITY_2 is basically same as ROTATION_VELOCITY, but force will be multiplied by 102.931.
 *
 * Source: https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 */
var ForceType;
(function (ForceType) {
    ForceType[ForceType["INTERNAL_FORCE"] = 0] = "INTERNAL_FORCE";
    ForceType[ForceType["INTERNAL_IMPULSE"] = 1] = "INTERNAL_IMPULSE";
    ForceType[ForceType["EXTERNAL_FORCE"] = 2] = "EXTERNAL_FORCE";
    ForceType[ForceType["EXTERNAL_IMPULSE"] = 3] = "EXTERNAL_IMPULSE";
    ForceType[ForceType["ROTATION_VELOCITY"] = 4] = "ROTATION_VELOCITY";
    ForceType[ForceType["ROTATION_VELOCITY_2"] = 5] = "ROTATION_VELOCITY_2";
})(ForceType || (exports.ForceType = ForceType = {}));
