type ServerEvent = "entityCreated" | "entityCreating" | "entityRemoved" | "onResourceListRefresh" | "onResourceStart" | "onResourceStarting" | "onResourceStop" | "onServerResourceStart" | "onServerResourceStop" | "playerConnecting" | "playerEnteredScope" | "playerJoining" | "playerLeftScope" | "ptFxEvent" | "removeAllWeaponsEvent" | "startProjectileEvent" | "weaponDamageEvent";
export declare const ON_SERVER_EVENT_METADATA_KEY: unique symbol;
export interface ISEListener {
    methodName: string;
    event: string;
}
export declare function OnServerEvent(event: ServerEvent): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export {};
