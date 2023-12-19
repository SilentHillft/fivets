import { ClientPed } from "./ped";
import { sleep, Vector3 } from "../../utils";
import { Game } from "../../game";
import {Weapon} from "../../types/weapon";

export class ClientPlayer {
  protected _ped: ClientPed;
  protected _spawnLock = false;
  protected _handle: number;

  constructor(handle: number) {
    this._handle = handle;
  }

  public get handle() {
    return this._handle;
  }

  public get ped() {
    if (!this._ped) {
      this._ped = new ClientPed(GetPlayerPed(this.handle));
    }

    return this._ped;
  }

  public get name() {
    return GetPlayerName(this._handle);
  }

  public nearestPlayer() {
    const src = GetNearestPlayerToEntity(this.ped.handle);

    if(!src) {
      return null;
    }

    return new ClientPlayer(src);
  }

  public getNearestPlayerOnTeam(team: number) {
    const src = GetNearestPlayerToEntityOnTeam(this.ped.handle, team);

    if(!src) {
      return null;
    }

    return new ClientPlayer(src);
  }

  public setControl(value: boolean) {
    SetPlayerControl(this.handle, value, 0);
  }

  public setInvincible(value: boolean) {
    SetPlayerInvincible(this.handle, value);
  }

  public unfreeze() {
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

  public freeze() {
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

  public async setModel(
    model: string = "mp_m_freemode_01",
    defaultCompVariation = false,
  ) {
    if (!IsModelValid(model)) {
      return;
    }

    const hash = Game.generateHash(model);
    await Game.loadModel(hash);
    SetPlayerModel(this.ped.handle, hash);
    if (defaultCompVariation) {
      SetPedDefaultComponentVariation(this.ped.handle);
    }
    SetModelAsNoLongerNeeded(hash);
  }

  public networkResurrect(pos: Vector3, heading: number) {
    NetworkResurrectLocalPlayer(pos.x, pos.y, pos.z, heading, true, true);
  }

  public clearWantedLevel() {
    ClearPlayerWantedLevel(this.handle);
  }

  public async spawn(pos: Vector3, heading: number, model?: string) {
    if (this._spawnLock) {
      return;
    }

    this._spawnLock = true;

    DoScreenFadeOut(500);

    while (IsScreenFadingOut()) {
      await sleep(0);
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

    while (
      !this.ped.hasCollisionLoadedAround() &&
      GetGameTimer() - time < 5000
    ) {
      await sleep(0);
    }

    ShutdownLoadingScreen();

    if (IsScreenFadedOut()) {
      DoScreenFadeIn(500);

      while (!IsScreenFadedIn()) {
        await sleep(0);
      }
    }

    this.unfreeze();
    emit("playerSpawned", this, pos, heading, model);

    this._spawnLock = false;
  }

  public giveWeapon(weaponName: Weapon, ammo: number, isHidden = true, inHand = false) {
    GiveWeaponToPed(this.ped.handle, Game.generateHash(weaponName), ammo, isHidden, inHand)
  }
}
