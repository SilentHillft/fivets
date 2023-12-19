export declare const COMMANDS_METADATA_KEY: unique symbol;
export interface ICommand {
    cmd: string;
    methodName: string;
    restricted: boolean;
}
export declare function OnCommand(command: string, restricted?: boolean): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
