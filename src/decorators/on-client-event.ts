import { ClientModule } from "../client-module";

type ClientEvent =
    | "CEventName"
    | "entityDamaged"
    | "gameEventTriggered"
    | "mumbleConnected"
    | "mumbleDisconnected"
    | "onClientResourceStart"
    | "onClientResourceStop"
    | "onResourceStart"
    | "onResourceStarting"
    | "onResourceStop"
    | "populationPedCreating";

export const ON_CLIENT_EVENT_METADATA_KEY = Symbol("onClientEvent");

export interface ICEListener {
  methodName: string;
  event: string;
}

export function OnClientEvent(event: ClientEvent) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    if (typeof target[key] !== "function") {
      throw new Error("OnClientEvent decorator can only be applied to method.");
    }

    if (!(target instanceof ClientModule)) {
      throw new Error(
          "OnClientEvent decorator can only be applied inside of ClientModule.",
      );
    }

    const existingListeners: ICEListener[] =
        Reflect.getOwnMetadata(ON_CLIENT_EVENT_METADATA_KEY, target) || [];

    existingListeners.push({
      methodName: key,
      event,
    });

    Reflect.defineMetadata(
        ON_CLIENT_EVENT_METADATA_KEY,
        existingListeners,
        target,
    );

    return descriptor;
  };
}
