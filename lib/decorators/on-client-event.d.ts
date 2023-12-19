type ClientEvent = "CEventName" | "entityDamaged" | "gameEventTriggered" | "mumbleConnected" | "mumbleDisconnected" | "onClientResourceStart" | "onClientResourceStop" | "onResourceStart" | "onResourceStarting" | "onResourceStop" | "populationPedCreating";
export declare const ON_CLIENT_EVENT_METADATA_KEY: unique symbol;
export interface ICEListener {
    methodName: string;
    event: string;
}
export declare function OnClientEvent(event: ClientEvent): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export {};
