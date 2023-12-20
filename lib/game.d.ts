import { ServerPlayer } from "./models";
export declare class Game {
    static generateHash(input: string): number;
    static loadModel(modelHash: number): Promise<void>;
    static isEntity(handle: number): boolean;
    static getEntityFromStateBagName(bagName: string): void;
    static getServerPlayers(): ServerPlayer[];
}
