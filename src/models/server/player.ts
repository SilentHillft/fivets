import {PlayerLicenseType} from "../../types/player-license-type";

export class ServerPlayer {
  protected _handle: number;

  constructor(handle: number) {
    this._handle = handle;
  }

  public get handle() {
    return this._handle;
  }

  public get character() {
    return null;
  }

  public getLicenseByType(type: PlayerLicenseType) {
    return GetPlayerIdentifierByType(this.handle.toString(), type);
  }

  public get name() {
    return GetPlayerName(this.handle);
  }
}
