import { Vector3 } from "./vector3";
export interface Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
export declare class Vector4 implements Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    add(vector: Vector4): Vector4;
    subtract(vector: Vector4): Vector4;
    multiply(scalar: number): Vector4;
    length(): number;
    normalize(): Vector4;
    dot(vector: Vector4): number;
    distance(vector: Vector3, includeZ?: boolean): number;
}
