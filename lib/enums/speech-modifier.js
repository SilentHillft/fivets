"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechModifier = void 0;
var SpeechModifier;
(function (SpeechModifier) {
    SpeechModifier[SpeechModifier["Standard"] = 0] = "Standard";
    SpeechModifier[SpeechModifier["AllowRepeat"] = 1] = "AllowRepeat";
    SpeechModifier[SpeechModifier["Beat"] = 2] = "Beat";
    SpeechModifier[SpeechModifier["Force"] = 3] = "Force";
    SpeechModifier[SpeechModifier["ForceFrontend"] = 4] = "ForceFrontend";
    SpeechModifier[SpeechModifier["ForceNoRepeatFrontend"] = 5] = "ForceNoRepeatFrontend";
    SpeechModifier[SpeechModifier["ForceNormal"] = 6] = "ForceNormal";
    SpeechModifier[SpeechModifier["ForceNormalClear"] = 7] = "ForceNormalClear";
    SpeechModifier[SpeechModifier["ForceNormalCritical"] = 8] = "ForceNormalCritical";
    SpeechModifier[SpeechModifier["ForceShouted"] = 9] = "ForceShouted";
    SpeechModifier[SpeechModifier["ForceShoutedClear"] = 10] = "ForceShoutedClear";
    SpeechModifier[SpeechModifier["ForceShoutedCritical"] = 11] = "ForceShoutedCritical";
    SpeechModifier[SpeechModifier["ForcePreloadOnly"] = 12] = "ForcePreloadOnly";
    SpeechModifier[SpeechModifier["Megaphone"] = 13] = "Megaphone";
    SpeechModifier[SpeechModifier["Helicopter"] = 14] = "Helicopter";
    SpeechModifier[SpeechModifier["ForceMegaphone"] = 15] = "ForceMegaphone";
    SpeechModifier[SpeechModifier["ForceHelicopter"] = 16] = "ForceHelicopter";
    SpeechModifier[SpeechModifier["Interrupt"] = 17] = "Interrupt";
    SpeechModifier[SpeechModifier["InterruptShouted"] = 18] = "InterruptShouted";
    SpeechModifier[SpeechModifier["InterruptShoutedClear"] = 19] = "InterruptShoutedClear";
    SpeechModifier[SpeechModifier["InterruptShoutedCritical"] = 20] = "InterruptShoutedCritical";
    SpeechModifier[SpeechModifier["InterruptNoForce"] = 21] = "InterruptNoForce";
    SpeechModifier[SpeechModifier["InterruptFrontend"] = 22] = "InterruptFrontend";
    SpeechModifier[SpeechModifier["InterruptNoForceFrontend"] = 23] = "InterruptNoForceFrontend";
    SpeechModifier[SpeechModifier["AddBlip"] = 24] = "AddBlip";
    SpeechModifier[SpeechModifier["AddBlipAllowRepeat"] = 25] = "AddBlipAllowRepeat";
    SpeechModifier[SpeechModifier["AddBlipForce"] = 26] = "AddBlipForce";
    SpeechModifier[SpeechModifier["AddBlipShouted"] = 27] = "AddBlipShouted";
    SpeechModifier[SpeechModifier["AddBlipShoutedForce"] = 28] = "AddBlipShoutedForce";
    SpeechModifier[SpeechModifier["AddBlipInterrupt"] = 29] = "AddBlipInterrupt";
    SpeechModifier[SpeechModifier["AddBlipInterruptForce"] = 30] = "AddBlipInterruptForce";
    SpeechModifier[SpeechModifier["ForcePreloadOnlyShouted"] = 31] = "ForcePreloadOnlyShouted";
    SpeechModifier[SpeechModifier["ForcePreloadOnlyShoutedClear"] = 32] = "ForcePreloadOnlyShoutedClear";
    SpeechModifier[SpeechModifier["ForcePreloadOnlyShoutedCritical"] = 33] = "ForcePreloadOnlyShoutedCritical";
    SpeechModifier[SpeechModifier["Shouted"] = 34] = "Shouted";
    SpeechModifier[SpeechModifier["ShoutedClear"] = 35] = "ShoutedClear";
    SpeechModifier[SpeechModifier["ShoutedCritical"] = 36] = "ShoutedCritical";
})(SpeechModifier || (exports.SpeechModifier = SpeechModifier = {}));
