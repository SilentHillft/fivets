export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
export declare class Vector3 implements Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    add(vector: Vector3): Vector3;
    subtract(vector: Vector3): Vector3;
    multiply(scalar: number): Vector3;
    divide(scalar: number): Vector3;
    dot(vector: Vector3): number;
    cross(vector: Vector3): Vector3;
    length(): number;
    normalize(): Vector3;
    distance(vector: Vector3, includeZ?: boolean): number;
}
