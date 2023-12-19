export class ServerModule {
  constructor() {
    if(typeof GetHostId !== 'function') {
      throw new Error('ServerModule can be only used in server-side scripts.')
    }
  }
}


