import { ClientModule } from "../client-module";
import {ServerModule} from "../server-module";

export const ON_NETWORK_EVENT_METADATA_KEY = Symbol("onNetworkEvent");

export interface INEListener {
    methodName: string;
    event: string;
}

export function OnNetworkEvent(event: string) {
    return function(
        target: any,
        key: string,
        descriptor: PropertyDescriptor,
    ) {
        if (typeof target[key] !== "function") {
            throw new Error("OnNetworkEvent decorator can only be applied to method.");
        }

        if (!(target instanceof ClientModule) && !(target instanceof ServerModule)) {
            throw new Error(
                "OnNetworkEvent decorator can only be applied inside of ClientModule or ServerModule.",
            );
        }

        const existingListeners: INEListener[] =
            Reflect.getOwnMetadata(ON_NETWORK_EVENT_METADATA_KEY, target) || [];

        existingListeners.push({
            methodName: key,
            event,
        });

        Reflect.defineMetadata(
            ON_NETWORK_EVENT_METADATA_KEY,
            existingListeners,
            target,
        );

        return descriptor;
    }
}