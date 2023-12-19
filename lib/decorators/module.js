"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
require("reflect-metadata");
const on_tick_1 = require("./on-tick");
const on_player_death_1 = require("./on-player-death");
const on_network_event_1 = require("./on-network-event");
const client_module_1 = require("../client-module");
const server_module_1 = require("../server-module");
const on_server_event_1 = require("./on-server-event");
const on_command_1 = require("./on-command");
const models_1 = require("../models");
const on_client_event_1 = require("./on-client-event");
const on_nui_event_1 = require("./on-nui-event");
const Module = () => {
    return (target, decoratedPropertyName) => {
        const instance = target.prototype;
        const onNetworkEventListeners = Reflect.getOwnMetadata(on_network_event_1.ON_NETWORK_EVENT_METADATA_KEY, instance) || [];
        const onClientEventListeners = Reflect.getOwnMetadata(on_client_event_1.ON_CLIENT_EVENT_METADATA_KEY, instance) || [];
        const onServerEventListeners = Reflect.getOwnMetadata(on_server_event_1.ON_SERVER_EVENT_METADATA_KEY, instance) || [];
        const tickListeners = Reflect.getOwnMetadata(on_tick_1.ON_TICK_METADATA_KEY, instance) || [];
        const commands = Reflect.getOwnMetadata(on_command_1.COMMANDS_METADATA_KEY, instance) || [];
        const nuiListeners = Reflect.getOwnMetadata(on_nui_event_1.ON_NUI_EVENT_METADATA_KEY, instance) || [];
        // Custom events
        const playerDeathListeners = Reflect.getOwnMetadata(on_player_death_1.ON_PLAYER_DEATH_EVENT_METADATA_KEY, instance) ||
            [];
        registerNetworkEvents(onNetworkEventListeners, instance);
        if (instance instanceof client_module_1.ClientModule) {
            registerEvents(onClientEventListeners, instance);
        }
        if (instance instanceof server_module_1.ServerModule) {
            registerEvents(onServerEventListeners, instance);
        }
        registerTickers(tickListeners, instance);
        registerCommands(commands, instance);
        registerNuiListeners(nuiListeners, instance);
        registerPlayerDeathListeners(playerDeathListeners, instance);
        return target;
    };
};
exports.Module = Module;
const registerNetworkEvents = (listeners, target) => {
    for (const listener of listeners) {
        if (typeof target[listener.methodName] === "function") {
            onNet(listener.event, (...args) => {
                target[listener.methodName].apply(target, args);
            });
        }
    }
};
const registerEvents = (listeners, target) => {
    for (const listener of listeners) {
        if (typeof target[listener.methodName] === "function") {
            on(listener.event, (...args) => {
                target[listener.methodName].apply(target, args);
            });
        }
    }
};
const registerTickers = (listeners, target) => {
    for (const listener of listeners) {
        if (typeof target[listener.methodName] === "function") {
            setTick(target[listener.methodName].bind(target));
        }
    }
};
const registerCommands = (commands, target) => {
    for (const command of commands) {
        if (typeof target[command.methodName] === "function") {
            RegisterCommand(command.cmd, (source, args, rawCommand) => {
                let player;
                if (target instanceof server_module_1.ServerModule) {
                    player = source > 0 ? new models_1.ServerPlayer(source) : null;
                }
                else {
                    player = new models_1.ClientPlayer(PlayerId());
                }
                target[command.methodName].apply(target, [player, ...args]);
            }, command.restricted);
        }
    }
};
const registerNuiListeners = (listeners, target) => {
    for (const listener of listeners) {
        if (typeof target[listener.methodName] === "function") {
            RegisterNuiCallbackType(listener.event);
            on(`__cfx_nui:${listener.event}`, (data, cb) => {
                target[listener.methodName].apply(target, [data, cb]);
            });
        }
    }
};
const registerPlayerDeathListeners = (listeners, target) => {
    for (const listener of listeners) {
        if (typeof target[listener.methodName] === "function") {
            let isDead = false;
            let hasBeenDead = false;
            let diedAt;
            setTick(() => {
                const localPlayer = new models_1.ClientPlayer(PlayerId());
                if (!NetworkIsPlayerActive(localPlayer.handle)) {
                    return;
                }
                if (localPlayer.ped.isFatallyInjured() && !isDead) {
                    isDead = true;
                    if (!diedAt) {
                        diedAt = GetGameTimer();
                    }
                    const entitySource = GetPedSourceOfDeath(localPlayer.ped.handle);
                    const [_, killerWeaponHash] = NetworkGetEntityKillerOfPlayer(localPlayer.handle);
                    const killerPed = new models_1.ClientPed(entitySource);
                    console.log(entitySource, killerWeaponHash, localPlayer.handle, killerPed.type);
                    if (killerPed.handle === -1) {
                        target[listener.methodName].apply(target, [localPlayer, null]);
                        emitNet("onPlayerDied", localPlayer, null);
                    }
                    else {
                        target[listener.methodName].apply(target, [localPlayer, killerPed]);
                        emitNet("onPlayerDied", localPlayer, killerPed);
                    }
                    hasBeenDead = true;
                }
                else if (!localPlayer.ped.isFatallyInjured()) {
                    isDead = false;
                    diedAt = null;
                }
                if (!hasBeenDead && diedAt !== null && diedAt > 0) {
                    target[listener.methodName].apply(target, [localPlayer, null]);
                    emitNet("onPlayerWasted", localPlayer, null);
                    hasBeenDead = true;
                }
                else if (hasBeenDead && diedAt !== null && diedAt <= 0) {
                    hasBeenDead = false;
                }
            });
        }
    }
};
