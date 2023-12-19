"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPlayer = void 0;
const ped_1 = require("./ped");
const utils_1 = require("../../utils");
const game_1 = require("../../game");
class ClientPlayer {
    constructor(handle) {
        this._spawnLock = false;
        this._handle = handle;
    }
    get handle() {
        return this._handle;
    }
    get ped() {
        if (!this._ped) {
            this._ped = new ped_1.ClientPed(GetPlayerPed(this.handle));
        }
        return this._ped;
    }
    get name() {
        return GetPlayerName(this._handle);
    }
    setControl(value) {
        SetPlayerControl(this.handle, value, 0);
    }
    setInvincible(value) {
        SetPlayerInvincible(this.handle, value);
    }
    unfreeze() {
        this.setControl(true);
        if (!this.ped.isVisible()) {
            this.ped.setVisible(true);
        }
        if (!this.ped.isInAnyVehicle()) {
            this.ped.setCollision(true);
        }
        this.ped.unfreezePosition();
        this.setInvincible(false);
    }
    freeze() {
        this.setControl(false);
        if (this.ped.isVisible()) {
            this.ped.setVisible(false);
        }
        this.ped.setCollision(false);
        this.ped.freezePosition();
        this.setInvincible(true);
        if (!this.ped.isFatallyInjured()) {
            this.ped.clearTasks();
        }
    }
    async setModel(model = "mp_m_freemode_01", defaultCompVariation = false) {
        if (!IsModelValid(model)) {
            return;
        }
        const hash = game_1.Game.generateHash(model);
        await game_1.Game.loadModel(hash);
        SetPlayerModel(this.ped.handle, hash);
        if (defaultCompVariation) {
            SetPedDefaultComponentVariation(this.ped.handle);
        }
        SetModelAsNoLongerNeeded(hash);
    }
    networkResurrect(pos, heading) {
        NetworkResurrectLocalPlayer(pos.x, pos.y, pos.z, heading, true, true);
    }
    clearWantedLevel() {
        ClearPlayerWantedLevel(this.handle);
    }
    async spawn(pos, heading, model) {
        if (this._spawnLock) {
            return;
        }
        this._spawnLock = true;
        DoScreenFadeOut(500);
        while (IsScreenFadingOut()) {
            await (0, utils_1.sleep)(0);
        }
        this.freeze();
        await this.setModel(model, true);
        RequestCollisionAtCoord(pos.x, pos.y, pos.z);
        this.ped.setPosition(pos, false);
        this.networkResurrect(pos, heading);
        this.ped.clearTasks();
        this.ped.removeAllWeapons();
        this.clearWantedLevel();
        const time = GetGameTimer();
        while (!this.ped.hasCollisionLoadedAround() &&
            GetGameTimer() - time < 5000) {
            await (0, utils_1.sleep)(0);
        }
        ShutdownLoadingScreen();
        if (IsScreenFadedOut()) {
            DoScreenFadeIn(500);
            while (!IsScreenFadedIn()) {
                await (0, utils_1.sleep)(0);
            }
        }
        this.unfreeze();
        emit("playerSpawned", this, pos, heading, model);
        this._spawnLock = false;
    }
    giveWeapon(weaponName, ammo, isHidden = true, inHand = false) {
        GiveWeaponToPed(this.ped.handle, game_1.Game.generateHash(weaponName), ammo, isHidden, inHand);
    }
}
exports.ClientPlayer = ClientPlayer;
