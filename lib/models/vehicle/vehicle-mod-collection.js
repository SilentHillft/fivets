"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleModCollection = void 0;
const enums_1 = require("../../enums");
const vehicle_mod_1 = require("./vehicle-mod");
const vehicle_toggle_mod_1 = require("./vehicle-toggle-mod");
const utils_1 = require("../../utils");
class VehicleModCollection {
    constructor(owner) {
        this._vehicleMods = new Map();
        this._vehicleToggleMods = new Map();
        this._owner = owner;
    }
    get owner() {
        return this._owner;
    }
    hasVehicleMod(type) {
        return GetNumVehicleMods(this.owner.handle, type) >= 1;
    }
    getMod(type) {
        if (!this._vehicleMods.has(type)) {
            this._vehicleMods.set(type, new vehicle_mod_1.VehicleMod(this.owner, type));
        }
        return this._vehicleMods.get(type);
    }
    getToggleMod(type) {
        if (!this._vehicleToggleMods.has(type)) {
            this._vehicleToggleMods.set(type, new vehicle_toggle_mod_1.VehicleToggleMod(this.owner, type));
        }
        return this._vehicleToggleMods.get(type);
    }
    getAllMods() {
        return Object.keys(enums_1.VehicleModType)
            .filter((key) => !isNaN(+key))
            .map((key) => {
            const index = +key;
            if (this.hasVehicleMod(index)) {
                return this.getMod(index);
            }
            return null;
        })
            .filter((mod) => !!mod);
    }
    get wheelType() {
        return GetVehicleWheelType(this.owner.handle);
    }
    setWheelType(type) {
        SetVehicleWheelType(this.owner.handle, type);
    }
    installModKit() {
        SetVehicleModKit(this.owner.handle, 0);
    }
    get livery() {
        const modCount = this.getMod(enums_1.VehicleModType.Livery).modCount;
        if (modCount > 0) {
            return this.getMod(enums_1.VehicleModType.Livery).index;
        }
        return GetVehicleLivery(this.owner.handle);
    }
    setLivery(val) {
        if (this.getMod(enums_1.VehicleModType.Livery).modCount > 0) {
            this.getMod(enums_1.VehicleModType.Livery).setIndex(val);
        }
        else {
            SetVehicleLivery(this.owner.handle, val);
        }
    }
    get liveryCount() {
        const modCount = this.getMod(enums_1.VehicleModType.Livery).modCount;
        if (modCount > 0) {
            return modCount;
        }
        return GetVehicleLiveryCount(this.owner.handle);
    }
    get windowTint() {
        return GetVehicleWindowTint(this.owner.handle);
    }
    setWindowTint(tint) {
        SetVehicleWindowTint(this.owner.handle, tint);
    }
    get primaryColor() {
        return GetVehicleColours(this.owner.handle)[0];
    }
    setPrimaryColor(color) {
        SetVehicleColours(this.owner.handle, color, this.secondaryColor);
    }
    get secondaryColor() {
        return GetVehicleColours(this.owner.handle)[1];
    }
    setSecondaryColor(color) {
        SetVehicleColours(this.owner.handle, this.primaryColor, color);
    }
    get rimColor() {
        return GetVehicleExtraColours(this.owner.handle)[1];
    }
    setRimColor(color) {
        SetVehicleExtraColours(this.owner.handle, this.pearlescentColor, color);
    }
    get pearlescentColor() {
        return GetVehicleExtraColours(this.owner.handle)[0];
    }
    setPearlescentColor(color) {
        SetVehicleExtraColours(this.owner.handle, color, this.rimColor);
    }
    setInteriorColor(color) {
        SetVehicleInteriorColor(this.owner.handle, color);
    }
    setDashboardColor(color) {
        SetVehicleDashboardColor(this.owner.handle, color);
    }
    setModColor(index, paintType, color) {
        if (index === 1) {
            SetVehicleModColor_1(this.owner.handle, paintType, color, 0);
        }
        else {
            SetVehicleModColor_2(this.owner.handle, paintType, color);
        }
    }
    get colorCombination() {
        return GetVehicleColourCombination(this.owner.handle);
    }
    setColorCombination(val) {
        SetVehicleColourCombination(this.owner.handle, val);
    }
    get colorCombinationCount() {
        return GetNumberOfVehicleColours(this.owner.handle);
    }
    get tireSmokeColor() {
        const [r, g, b] = GetVehicleTyreSmokeColor(this.owner.handle);
        return { r, g, b };
    }
    setTireSmokeColor(color) {
        let { r, g, b } = color;
        r = (0, utils_1.clamp)(r, 0, 255);
        g = (0, utils_1.clamp)(g, 0, 255);
        b = (0, utils_1.clamp)(b, 0, 255);
        SetVehicleTyreSmokeColor(this.owner.handle, r, g, b);
    }
    get neonLightsColor() {
        const [r, g, b] = GetVehicleNeonLightsColour(this.owner.handle);
        return { r, g, b };
    }
    setNeonLightColor(color) {
        let { r, g, b } = color;
        r = (0, utils_1.clamp)(r, 0, 255);
        g = (0, utils_1.clamp)(g, 0, 255);
        b = (0, utils_1.clamp)(b, 0, 255);
        SetVehicleNeonLightsColour(this.owner.handle, r, g, b);
    }
    isNeonLightOn(light) {
        return IsVehicleNeonLightEnabled(this.owner.handle, light);
    }
    setNeonLightOn(light, val) {
        SetVehicleNeonLightEnabled(this.owner.handle, light, val);
    }
    hasNeonLight(light) {
        switch (light) {
            case enums_1.VehicleNeonLight.Left:
                return this.owner.bones.hasBone("neon_l");
            case enums_1.VehicleNeonLight.Right:
                return this.owner.bones.hasBone("neon_r");
            case enums_1.VehicleNeonLight.Front:
                return this.owner.bones.hasBone("neon_f");
            case enums_1.VehicleNeonLight.Back:
                return this.owner.bones.hasBone("neon_b");
            default:
                return false;
        }
    }
    hasAllNeonLights() {
        return Object.keys(enums_1.VehicleNeonLight)
            .filter((key) => !isNaN(+key))
            .some((light) => !this.hasNeonLight(+light));
    }
    /**
     *
     * @param strict If strict is enabled, then it'll return false when vehicle doesn't have every neon light.
     */
    areAllNeonLightOn(strict = true) {
        if (!this.hasAllNeonLights() && strict) {
            return false;
        }
        return Object.keys(enums_1.VehicleNeonLight)
            .filter((key) => !isNaN(+key))
            .filter((light) => this.hasNeonLight(+light))
            .every((light) => this.isNeonLightOn(+light));
    }
    get customPrimaryColor() {
        const [r, g, b] = GetVehicleCustomPrimaryColour(this.owner.handle);
        return { r, g, b };
    }
    setCustomPrimaryColor(color) {
        let { r, g, b } = color;
        r = (0, utils_1.clamp)(r, 0, 255);
        g = (0, utils_1.clamp)(g, 0, 255);
        b = (0, utils_1.clamp)(b, 0, 255);
        SetVehicleCustomPrimaryColour(this.owner.handle, r, g, b);
    }
    get customSecondaryColor() {
        const [r, g, b] = GetVehicleCustomSecondaryColour(this.owner.handle);
        return { r, g, b };
    }
    setCustomSecondaryColor(color) {
        let { r, g, b } = color;
        r = (0, utils_1.clamp)(r, 0, 255);
        g = (0, utils_1.clamp)(g, 0, 255);
        b = (0, utils_1.clamp)(b, 0, 255);
        SetVehicleCustomSecondaryColour(this.owner.handle, r, g, b);
    }
    isPrimaryColorCustom() {
        return GetIsVehiclePrimaryColourCustom(this.owner.handle);
    }
    isSecondaryColorCustom() {
        return GetIsVehicleSecondaryColourCustom(this.owner.handle);
    }
    clearCustomColor(type) {
        if (type === 'primary') {
            ClearVehicleCustomPrimaryColour(this.owner.handle);
        }
        else {
            ClearVehicleCustomSecondaryColour(this.owner.handle);
        }
    }
    get numberPlateStyle() {
        return GetVehicleNumberPlateTextIndex(this.owner.handle);
    }
    setNumberPlateStyle(style) {
        SetVehicleNumberPlateTextIndex(this.owner.handle, style);
    }
    get numberPlateType() {
        return GetVehiclePlateType(this.owner.handle);
    }
    get plateNumber() {
        return GetVehicleNumberPlateText(this.owner.handle);
    }
    setPlateNumber(text) {
        SetVehicleNumberPlateText(this.owner.handle, text);
    }
}
exports.VehicleModCollection = VehicleModCollection;
