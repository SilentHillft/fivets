import { Ped } from "./ped";
export declare class Player {
    private _handle;
    protected _ped: Ped;
    constructor(handle: number);
    get handle(): number;
    get ped(): Ped;
    get name(): string;
}
