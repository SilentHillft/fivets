import { ClientModule } from "../client-module";
import { ServerModule } from "../server-module";

export const COMMANDS_METADATA_KEY = Symbol("commands");

export interface ICommand {
  cmd: string;
  methodName: string;
  restricted: boolean;
}

export function OnCommand(command: string, restricted = false) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    if (
      !(target instanceof ClientModule) &&
      !(target instanceof ServerModule)
    ) {
      throw new Error(
        "OnCommand decorator can only be applied inside of ClientModule or ServerModule.",
      );
    }

    const existingCommands: ICommand[] =
      Reflect.getOwnMetadata(COMMANDS_METADATA_KEY, target) || [];

    existingCommands.push({
      methodName: key,
      cmd: command,
      restricted,
    });

    Reflect.defineMetadata(COMMANDS_METADATA_KEY, existingCommands, target);

    return descriptor;
  };
}
