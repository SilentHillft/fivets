import { ServerModule } from "../server-module";

type ServerEvent =
  | "entityCreated"
  | "entityCreating"
  | "entityRemoved"
  | "onResourceListRefresh"
  | "onResourceStart"
  | "onResourceStarting"
  | "onResourceStop"
  | "onServerResourceStart"
  | "onServerResourceStop"
  | "playerConnecting"
  | "playerEnteredScope"
  | "playerJoining"
  | "playerLeftScope"
  | "ptFxEvent"
  | "removeAllWeaponsEvent"
  | "startProjectileEvent"
  | "weaponDamageEvent";

export const ON_SERVER_EVENT_METADATA_KEY = Symbol("onServerEvent");

export interface ISEListener {
  methodName: string;
  event: string;
}

export function OnServerEvent(event: ServerEvent) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    if (typeof target[key] !== "function") {
      throw new Error("OnServerEvent decorator can only be applied to method.");
    }

    if (!(target instanceof ServerModule)) {
      throw new Error(
        "OnServerEvent decorator can only be applied inside of ServerModule.",
      );
    }

    const existingListeners: ISEListener[] =
      Reflect.getOwnMetadata(ON_SERVER_EVENT_METADATA_KEY, target) || [];

    existingListeners.push({
      methodName: key,
      event,
    });

    Reflect.defineMetadata(
      ON_SERVER_EVENT_METADATA_KEY,
      existingListeners,
      target,
    );

    return descriptor;
  };
}
