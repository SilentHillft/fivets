import { Ped } from "./ped";
export declare class Player {
    private _handle;
    private ped;
    private safeMode;
    constructor(handle: number);
    get handle(): number;
    get name(): string;
    get character(): Ped;
    get inSafeMode(): boolean;
    set inSafeMode(val: boolean);
    getLicenseByType(type: "license" | "xbl" | "live" | "fivem" | "license2"): string;
}
