import { ClientModule } from "../client-module";

export const ON_PLAYER_DEATH_EVENT_METADATA_KEY = Symbol("onPlayerDeath");

export interface IPDEListener {
  methodName: string;
}

export function OnPlayerDeath() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    if (typeof target[key] !== "function") {
      throw new Error("OnPlayerDeath decorator can only be applied to method.");
    }

    if (!(target instanceof ClientModule)) {
      throw new Error(
        "OnPlayerDeath decorator can only be applied inside of ClientModule.",
      );
    }

    const existingListeners: IPDEListener[] =
      Reflect.getOwnMetadata(ON_PLAYER_DEATH_EVENT_METADATA_KEY, target) || [];

    existingListeners.push({
      methodName: key,
    });

    Reflect.defineMetadata(
      ON_PLAYER_DEATH_EVENT_METADATA_KEY,
      existingListeners,
      target,
    );

    return descriptor;
  };
}
