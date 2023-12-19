import { ClientEntity } from "./entity";
export declare class ClientPed extends ClientEntity {
    isInAnyVehicle(): boolean;
    isFatallyInjured(): boolean;
    clearTasks(): void;
    removeAllWeapons(): void;
}
