import {ClientPlayer} from "./models";

export class ClientModule {
  private _players: ClientPlayer[];

  constructor() {
    if(typeof PlayerId !== 'function') {
      throw new Error('ClientModule can be only used in client-side scripts.')
    }
  }
}
