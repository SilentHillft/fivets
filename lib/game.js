"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const utils_1 = require("./utils");
const models_1 = require("./models");
class Game {
    static generateHash(input) {
        if (typeof input === "undefined") {
            return 0;
        }
        return GetHashKey(input);
    }
    static async loadModel(modelHash) {
        return new Promise(async (resolve) => {
            RequestModel(modelHash);
            while (!HasModelLoaded(modelHash)) {
                RequestModel(modelHash);
                await (0, utils_1.sleep)(0);
            }
            resolve();
        });
    }
    static isEntity(handle) {
        return IsAnEntity(handle);
    }
    static getEntityFromStateBagName(bagName) {
        const entitySrc = GetEntityFromStateBagName(bagName);
        // TODO: Implement recognition of entity type and return valid model (Ped, Vehicle, etc.)
    }
    static getServerPlayers() {
        const players = [];
        const count = GetNumPlayerIndices();
        for (let i = 0; i < count; i++) {
            const playerSrc = +GetPlayerFromIndex(i);
            players.push(new models_1.ServerPlayer(playerSrc));
        }
        return players;
    }
}
exports.Game = Game;
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
