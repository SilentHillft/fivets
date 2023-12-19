export declare const ON_NUI_EVENT_METADATA_KEY: unique symbol;
export interface INUIListener {
    methodName: string;
    event: string;
}
export declare function OnNuiEvent(event: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
