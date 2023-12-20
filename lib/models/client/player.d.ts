import { ClientPed } from "./ped";
import { Vector3 } from "../../utils";
import { Weapon } from "../../types/weapon";
export declare class ClientPlayer {
    protected _ped: ClientPed;
    protected _spawnLock: boolean;
    protected _handle: number;
    constructor(handle: number);
    get handle(): number;
    get ped(): ClientPed;
    get name(): string;
    nearestPlayer(): ClientPlayer;
    getNearestPlayerOnTeam(team: number): ClientPlayer;
    setControl(value: boolean): void;
    setInvincible(value: boolean): void;
    unfreeze(): void;
    freeze(): void;
    setModel(model?: string, defaultCompVariation?: boolean): Promise<void>;
    networkResurrect(pos: Vector3, heading: number): void;
    clearWantedLevel(): void;
    spawn(pos: Vector3, heading: number, model?: string): Promise<void>;
    giveWeapon(weaponName: Weapon, ammo: number, isHidden?: boolean, inHand?: boolean): void;
    get stamina(): number;
    get maxStamina(): number;
    setStamina(stamina: number): void;
    setMaxStamina(stamina: number): void;
    resetStamina(): void;
    restoreStamina(percentage: number): void;
}
