import 'reflect-metadata'
import {ClientModule} from "../client-module";
import {ServerModule} from "../server-module";

export const ON_TICK_METADATA_KEY = Symbol('tick')

export interface ITicker {
    methodName: string;
}

export function OnTick() {
    return function(
        target: any,
        key: string,
        descriptor: PropertyDescriptor,
    ) {
        if (
            !(target instanceof ClientModule) &&
            !(target instanceof ServerModule)
        ) {
            throw new Error(
                "OnCommand decorator can only be applied inside of ClientModule or ServerModule.",
            );
        }

        if(typeof target[key] !== 'function') {
            throw new Error('OnTick decorator can only be applied to method.')
        }

        const existingListeners: ITicker[] = Reflect.getOwnMetadata(ON_TICK_METADATA_KEY, target) || [];

        existingListeners.push({
            methodName: key,
        });

        Reflect.defineMetadata(ON_TICK_METADATA_KEY, existingListeners, target);

        return descriptor;
    }
}