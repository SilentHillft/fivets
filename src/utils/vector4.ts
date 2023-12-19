import {Vector3} from "./vector3";

export interface Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

export class Vector4 implements Vector4 {
  constructor(
    public x = 0,
    public y = 0,
    public z = 0,
    public w = 0,
  ) {}

  add(vector: Vector4): Vector4 {
    return new Vector4(
      this.x + vector.x,
      this.y + vector.y,
      this.z + vector.z,
      this.w + vector.w,
    );
  }

  subtract(vector: Vector4): Vector4 {
    return new Vector4(
      this.x - vector.x,
      this.y - vector.y,
      this.z - vector.z,
      this.w - vector.w,
    );
  }

  multiply(scalar: number): Vector4 {
    return new Vector4(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar,
      this.w * scalar,
    );
  }

  length(): number {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }

  normalize(): Vector4 {
    let len = this.length();
    if (len > 0) {
      return this.multiply(1 / len);
    } else {
      throw new Error("Vector length is zero, cannot normalize.");
    }
  }

  dot(vector: Vector4): number {
    return (
      this.x * vector.x +
      this.y * vector.y +
      this.z * vector.z +
      this.w * vector.w
    );
  }

  distance(vector: Vector3, includeZ = true): number {
    return GetDistanceBetweenCoords(this.x, this.y, this.z, vector.x, vector.y, vector.z, includeZ);
  }
}
