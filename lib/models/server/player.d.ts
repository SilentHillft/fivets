import { PlayerLicenseType } from "../../types/player-license-type";
export declare class ServerPlayer {
    protected _handle: number;
    constructor(handle: number);
    get handle(): number;
    get character(): any;
    getLicenseByType(type: PlayerLicenseType): string;
    get name(): string;
}
