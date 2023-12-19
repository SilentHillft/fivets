import { ClientModule } from "../client-module";
import {ServerModule} from "../server-module";

export const ON_NUI_EVENT_METADATA_KEY = Symbol("onNuiEvent");

export interface INUIListener {
    methodName: string;
    event: string;
}

export function OnNuiEvent(event: string) {
    return function(
        target: any,
        key: string,
        descriptor: PropertyDescriptor,
    ) {
        if (typeof target[key] !== "function") {
            throw new Error("OnNuiEvent decorator can only be applied to method.");
        }

        if (!(target instanceof ClientModule)) {
            throw new Error(
                "OnNuiEvent decorator can only be applied inside of ClientModule.",
            );
        }

        const existingListeners: INUIListener[] =
            Reflect.getOwnMetadata(ON_NUI_EVENT_METADATA_KEY, target) || [];

        existingListeners.push({
            methodName: key,
            event,
        });

        Reflect.defineMetadata(
            ON_NUI_EVENT_METADATA_KEY,
            existingListeners,
            target,
        );

        return descriptor;
    }
}