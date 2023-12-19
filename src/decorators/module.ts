import "reflect-metadata";
import { ITicker, ON_TICK_METADATA_KEY } from "./on-tick";
import {
  IPDEListener,
  ON_PLAYER_DEATH_EVENT_METADATA_KEY,
} from "./on-player-death";
import { INEListener, ON_NETWORK_EVENT_METADATA_KEY } from "./on-network-event";
import { ClientModule } from "../client-module";
import { ServerModule } from "../server-module";
import { ISEListener, ON_SERVER_EVENT_METADATA_KEY } from "./on-server-event";
import { COMMANDS_METADATA_KEY, ICommand } from "./on-command";
import { ClientPed, ClientPlayer, ServerPlayer } from "../models";
import { ICEListener, ON_CLIENT_EVENT_METADATA_KEY } from "./on-client-event";
import { INUIListener, ON_NUI_EVENT_METADATA_KEY } from "./on-nui-event";

export const Module = (): ClassDecorator => {
  return (target: any, decoratedPropertyName?: string) => {
    const instance = (<any>target).prototype;

    const onNetworkEventListeners: INEListener[] =
      Reflect.getOwnMetadata(ON_NETWORK_EVENT_METADATA_KEY, instance) || [];
    const onClientEventListeners: ICEListener[] =
      Reflect.getOwnMetadata(ON_CLIENT_EVENT_METADATA_KEY, instance) || [];
    const onServerEventListeners: ISEListener[] =
      Reflect.getOwnMetadata(ON_SERVER_EVENT_METADATA_KEY, instance) || [];
    const tickListeners: ITicker[] =
      Reflect.getOwnMetadata(ON_TICK_METADATA_KEY, instance) || [];
    const commands: ICommand[] =
      Reflect.getOwnMetadata(COMMANDS_METADATA_KEY, instance) || [];
    const nuiListeners: INUIListener[] =
      Reflect.getOwnMetadata(ON_NUI_EVENT_METADATA_KEY, instance) || [];

    // Custom events
    const playerDeathListeners: IPDEListener[] =
      Reflect.getOwnMetadata(ON_PLAYER_DEATH_EVENT_METADATA_KEY, instance) ||
      [];

    registerNetworkEvents(onNetworkEventListeners, instance);
    if (instance instanceof ClientModule) {
      registerEvents(onClientEventListeners, instance);
    }
    if (instance instanceof ServerModule) {
      registerEvents(onServerEventListeners, instance);
    }
    registerTickers(tickListeners, instance);
    registerCommands(commands, instance);
    registerNuiListeners(nuiListeners, instance);

    registerPlayerDeathListeners(playerDeathListeners, instance);

    return target;
  };
};

const registerNetworkEvents = (listeners: INEListener[], target: any) => {
  for (const listener of listeners) {
    if (typeof target[listener.methodName] === "function") {
      onNet(listener.event, (...args) => {
        target[listener.methodName].apply(target, args);
      });
    }
  }
};

const registerEvents = (
  listeners: ICEListener[] | ISEListener[],
  target: any,
) => {
  for (const listener of listeners) {
    if (typeof target[listener.methodName] === "function") {
      on(listener.event, (...args) => {
        target[listener.methodName].apply(target, args);
      });
    }
  }
};

const registerTickers = (listeners: ITicker[], target: any) => {
  for (const listener of listeners) {
    if (typeof target[listener.methodName] === "function") {
      setTick(target[listener.methodName].bind(target));
    }
  }
};

const registerCommands = (commands: ICommand[], target: any) => {
  for (const command of commands) {
    if (typeof target[command.methodName] === "function") {
      RegisterCommand(
        command.cmd,
        (source: number, args: string[], rawCommand: string) => {
          let player: ServerPlayer | ClientPlayer | null;
          if (target instanceof ServerModule) {
            player = source > 0 ? new ServerPlayer(source) : null;
          } else {
            player = new ClientPlayer(PlayerId());
          }

          target[command.methodName].apply(target, [player, ...args]);
        },
        command.restricted,
      );
    }
  }
};

const registerNuiListeners = (listeners: INUIListener[], target: any) => {
  for (const listener of listeners) {
    if (typeof target[listener.methodName] === "function") {
      RegisterNuiCallbackType(listener.event);
      on(`__cfx_nui:${listener.event}`, (data, cb) => {
        target[listener.methodName].apply(target, [data, cb]);
      })
    }
  }
};

const registerPlayerDeathListeners = (
  listeners: IPDEListener[],
  target: any,
) => {
  for (const listener of listeners) {
    if (typeof target[listener.methodName] === "function") {
      let isDead = false;
      let hasBeenDead = false;
      let diedAt: number;

      setTick(() => {
        const localPlayer = new ClientPlayer(PlayerId());

        if (!NetworkIsPlayerActive(localPlayer.handle)) {
          return;
        }

        if (localPlayer.ped.isFatallyInjured() && !isDead) {
          isDead = true;
          if (!diedAt) {
            diedAt = GetGameTimer();
          }

          const entitySource = GetPedSourceOfDeath(localPlayer.ped.handle);
          const [_, killerWeaponHash] = NetworkGetEntityKillerOfPlayer(
            localPlayer.handle,
          );
          const killerPed = new ClientPed(entitySource);

          console.log(
            entitySource,
            killerWeaponHash,
            localPlayer.handle,
            killerPed.type,
          );
          if (killerPed.handle === -1) {
            target[listener.methodName].apply(target, [localPlayer, null]);
            emitNet("onPlayerDied", localPlayer, null);
          } else {
            target[listener.methodName].apply(target, [localPlayer, killerPed]);
            emitNet("onPlayerDied", localPlayer, killerPed);
          }
          hasBeenDead = true;
        } else if (!localPlayer.ped.isFatallyInjured()) {
          isDead = false;
          diedAt = null;
        }

        if (!hasBeenDead && diedAt !== null && diedAt > 0) {
          target[listener.methodName].apply(target, [localPlayer, null]);
          emitNet("onPlayerWasted", localPlayer, null);

          hasBeenDead = true;
        } else if (hasBeenDead && diedAt !== null && diedAt <= 0) {
          hasBeenDead = false;
        }
      });
    }
  }
};
