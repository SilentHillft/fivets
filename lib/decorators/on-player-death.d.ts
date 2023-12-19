export declare const ON_PLAYER_DEATH_EVENT_METADATA_KEY: unique symbol;
export interface IPDEListener {
    methodName: string;
}
export declare function OnPlayerDeath(): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
