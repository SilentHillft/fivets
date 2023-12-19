import { Vector3 } from "../../utils";
import { ClientEntity } from "./entity";
import { BlipColor, BlipSprite } from "../../enums";
export declare class Blip {
    protected _handle: number;
    constructor(handle: number);
    get handle(): number;
    static addForCoord(pos: Vector3): Blip;
    static addForArea(pos: Vector3, width: number, height: number): Blip;
    static addForEntity(entity: ClientEntity): Blip;
    static addForRadius(pos: Vector3, radius: number): Blip;
    exists(): boolean;
    setName(text: string): void;
    setColor(color: BlipColor): void;
    setSprite(sprite: BlipSprite): void;
}
