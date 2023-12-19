import { ClientEntity } from "./entity";

// TODO: Extends also with common Ped
export class ClientPed extends ClientEntity {
    public isInAnyVehicle() {
        return IsPedInAnyVehicle(this.handle, false);
    }

    public isFatallyInjured() {
        return IsPedFatallyInjured(this.handle);
    }

    public clearTasks() {
        ClearPedTasksImmediately(this.handle);
    }

    public removeAllWeapons() {
        RemoveAllPedWeapons(this.handle, false);
    }
}
