import {Vector3} from "../../utils";
import {ClientEntity} from "./entity";
import {BlipColor, BlipSprite} from "../../enums";

export class Blip {
    protected _handle: number;

    constructor(handle: number) {
        this._handle = handle;
    }

    public get handle() {
        return this._handle;
    }

    static addForCoord(pos: Vector3) {
        return new Blip(AddBlipForCoord(pos.x, pos.y, pos.z));
    }

    static addForArea(pos: Vector3, width: number, height: number) {
        return new Blip(AddBlipForArea(pos.x, pos.y, pos.z, width, height));
    }

    static addForEntity(entity: ClientEntity) {
        return new Blip(AddBlipForEntity(entity.handle));
    }

    static addForRadius(pos: Vector3, radius: number) {
        return new Blip(AddBlipForRadius(pos.x, pos.y, pos.z, radius));
    }

    exists() {
        return DoesBlipExist(this.handle);
    }

    setName(text: string) {
        BeginTextCommandSetBlipName('STRING');
        AddTextComponentSubstringPlayerName(text);
        EndTextCommandSetBlipName(this.handle);
    }

    setColor(color: BlipColor) {
        SetBlipColour(this.handle, color);
    }

    setSprite(sprite: BlipSprite) {
        SetBlipSprite(this.handle, sprite);
    }
}