import 'reflect-metadata';
export declare const ON_TICK_METADATA_KEY: unique symbol;
export interface ITicker {
    methodName: string;
}
export declare function OnTick(): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
