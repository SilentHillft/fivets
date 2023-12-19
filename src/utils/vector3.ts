export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export class Vector3 implements Vector3 {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  add(vector: Vector3): Vector3 {
    return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  subtract(vector: Vector3): Vector3 {
    return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  multiply(scalar: number): Vector3 {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  divide(scalar: number): Vector3 {
    return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
  }

  dot(vector: Vector3): number {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  cross(vector: Vector3): Vector3 {
    return new Vector3(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x,
    );
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize(): Vector3 {
    const len = this.length();

    return new Vector3(this.x / len, this.y / len, this.z / len);
  }

  distance(vector: Vector3, includeZ = true): number {
    return GetDistanceBetweenCoords(this.x, this.y, this.z, vector.x, vector.y, vector.z, includeZ);
  }
}
