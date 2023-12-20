import {sleep} from "./utils";
import {ServerPlayer} from "./models";

export class Game {
  public static generateHash(input: string) {
    if (typeof input === "undefined") {
      return 0;
    }

    return GetHashKey(input);
  }

  public static async loadModel(modelHash: number) {
      return new Promise<void>(async (resolve) => {
          RequestModel(modelHash);
          while(!HasModelLoaded(modelHash)) {
              RequestModel(modelHash);
              await sleep(0)
          }

          resolve();
      })
  }

  public static isEntity(handle: number) {
      return IsAnEntity(handle);
  }

  public static getEntityFromStateBagName(bagName: string) {
      const entitySrc = GetEntityFromStateBagName(bagName);

      // TODO: Implement recognition of entity type and return valid model (Ped, Vehicle, etc.)
  }

  public static getServerPlayers() {
      const players: ServerPlayer[] = [];
      const count = GetNumPlayerIndices();

      for(let i = 0; i < count; i++) {
          const playerSrc = +GetPlayerFromIndex(i);
          players.push(new ServerPlayer(playerSrc));
      }

      return players;
  }
}

// import {Player} from "./models";
//
// export abstract class Game {
//   protected static cachedPlayer: Player;
//
//   public static get player() {
//     const handle = PlayerId();
//     if (typeof this.cachedPlayer === "undefined") {
//       this.cachedPlayer = new Player(handle);
//     }
//
//     return this.cachedPlayer;
//   }
//
//   public static get playerPed() {
//     return this.player.character;
//   }
//
//   public static generateHash(input: string) {
//     if (typeof input === "undefined") {
//       return 0;
//     }
//
//     return GetHashKey(input);
//   }
//
//   public static getNearbyVehicles(radius: number) {
//     const localPed = this.playerPed;
//
//     const vehicles = (GetGamePool("CVehicle") as number[])
//       .map((vehicleSource) => new Vehicle(vehicleSource))
//       .filter((veh) => veh.exists())
//       .filter((veh) => {
//         const distance = GetDistanceBetweenCoords(
//           localPed.position.x,
//           localPed.position.y,
//           localPed.position.z,
//           veh.position.x,
//           veh.position.y,
//           veh.position.z,
//           true,
//         );
//
//         return distance <= radius;
//       });
//
//     return vehicles;
//   }
// }
