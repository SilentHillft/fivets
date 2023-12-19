export declare const ON_NETWORK_EVENT_METADATA_KEY: unique symbol;
export interface INEListener {
    methodName: string;
    event: string;
}
export declare function OnNetworkEvent(event: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
