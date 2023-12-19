import { Vehicle } from "./vehicle";
import { VehicleColor, VehicleModType, VehicleNeonLight, VehicleNumberPlateStyle, VehicleNumberPlateType, VehiclePaintType, VehicleToggleModType, VehicleWheelType, VehicleWindowTint } from "../../enums";
import { VehicleMod } from "./vehicle-mod";
import { VehicleToggleMod } from "./vehicle-toggle-mod";
export declare class VehicleModCollection {
    private _owner;
    private readonly _vehicleMods;
    private readonly _vehicleToggleMods;
    constructor(owner: Vehicle);
    get owner(): Vehicle;
    hasVehicleMod(type: VehicleModType): boolean;
    getMod(type: VehicleModType): VehicleMod;
    getToggleMod(type: VehicleToggleModType): VehicleToggleMod;
    getAllMods(): VehicleMod[];
    get wheelType(): VehicleWheelType;
    setWheelType(type: VehicleWheelType): void;
    installModKit(): void;
    get livery(): number;
    setLivery(val: number): void;
    get liveryCount(): number;
    get windowTint(): VehicleWindowTint;
    setWindowTint(tint: VehicleWindowTint): void;
    get primaryColor(): VehicleColor;
    setPrimaryColor(color: VehicleColor): void;
    get secondaryColor(): VehicleColor;
    setSecondaryColor(color: VehicleColor): void;
    get rimColor(): number;
    setRimColor(color: VehicleColor): void;
    get pearlescentColor(): number;
    setPearlescentColor(color: VehicleColor): void;
    setInteriorColor(color: VehicleColor): void;
    setDashboardColor(color: VehicleColor): void;
    setModColor(index: 1 | 2, paintType: VehiclePaintType, color: VehicleColor): void;
    get colorCombination(): number;
    setColorCombination(val: number): void;
    get colorCombinationCount(): number;
    get tireSmokeColor(): {
        r: number;
        g: number;
        b: number;
    };
    setTireSmokeColor(color: {
        r: number;
        g: number;
        b: number;
    }): void;
    get neonLightsColor(): {
        r: number;
        g: number;
        b: number;
    };
    setNeonLightColor(color: {
        r: number;
        g: number;
        b: number;
    }): void;
    isNeonLightOn(light: VehicleNeonLight): boolean;
    setNeonLightOn(light: VehicleNeonLight, val: boolean): void;
    hasNeonLight(light: VehicleNeonLight): boolean;
    hasAllNeonLights(): boolean;
    /**
     *
     * @param strict If strict is enabled, then it'll return false when vehicle doesn't have every neon light.
     */
    areAllNeonLightOn(strict?: boolean): boolean;
    get customPrimaryColor(): {
        r: number;
        g: number;
        b: number;
    };
    setCustomPrimaryColor(color: {
        r: number;
        g: number;
        b: number;
    }): void;
    get customSecondaryColor(): {
        r: number;
        g: number;
        b: number;
    };
    setCustomSecondaryColor(color: {
        r: number;
        g: number;
        b: number;
    }): void;
    isPrimaryColorCustom(): boolean;
    isSecondaryColorCustom(): boolean;
    clearCustomColor(type: 'primary' | 'secondary'): void;
    get numberPlateStyle(): VehicleNumberPlateStyle;
    setNumberPlateStyle(style: VehicleNumberPlateStyle): void;
    get numberPlateType(): VehicleNumberPlateType;
    get plateNumber(): string;
    setPlateNumber(text: string): void;
}
