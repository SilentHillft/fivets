import {EntityType, PopulationType} from "../../enums";
import { Vector3 } from "../../utils";
import { ForceType } from "../../enums/force-type";

export class Entity {
  private _handle: number;

  constructor(handle: number) {
    this._handle = handle;
  }

  public get handle() {
    return this._handle;
  }

  public exists() {
    return DoesEntityExist(this.handle);
  }

  public delete() {
    if(this.exists()) {
      DeleteEntity(this.handle);
    }
  }

  public get type(): EntityType {
    return GetEntityType(this.handle);
  }

  public get health() {
    return GetEntityHealth(this.handle);
  }

  public get maxHealth() {
    if (this.type !== EntityType.CHARACTER) {
      return 0;
    }

    return GetEntityMaxHealth(this.handle);
  }

  public get position(): Vector3 {
    const [x, y, z] = GetEntityCoords(this.handle);
    return new Vector3(x, y, z);
  }

  public get rotation() {
    const [x, y, z] = GetEntityRotation(this.handle);
    return new Vector3(x, y, z);
  }

  public get rotationVelocity() {
    const [x, y, z] = GetEntityRotationVelocity(this.handle);
    return new Vector3(x, y, z);
  }

  public get heading() {
    return GetEntityHeading(this.handle);
  }

  public get modelHash() {
    return GetEntityModel(this.handle)
  }

  public get populationType(): PopulationType {
    return GetEntityPopulationType(this.handle);
  }

  public get speed() {
    return GetEntitySpeed(this.handle) * 3.6;
  }

  public get velocity() {
    const [x, y, z] = GetEntityVelocity(this.handle);

    return new Vector3(x, y, z);
  }

  public isVisible() {
    return IsEntityVisible(this.handle);
  }

  public freezePosition() {
    FreezeEntityPosition(this.handle, true);
  }

  public unfreezePosition() {
    FreezeEntityPosition(this.handle, false);
  }

  public applyForce(
    pos: Vector3,
    offset: Vector3,
    isDirectionRelative = false,
    isForceRelative = false,
    forceType = ForceType.EXTERNAL_FORCE,
  ) {
      // NOTE: p12 is triggerAudio
      // NOTE: p13 is ScaleByTimeWrap
      ApplyForceToEntity(
          this.handle,
          forceType,
          pos.x,
          pos.y,
          pos.z,
          offset.x,
          offset.y,
          offset.z,
          0,
          isDirectionRelative,
          true,
          isForceRelative,
          false,
          true,
      );
  }
}
