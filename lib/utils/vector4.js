"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4 = void 0;
class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    add(vector) {
        return new Vector4(this.x + vector.x, this.y + vector.y, this.z + vector.z, this.w + vector.w);
    }
    subtract(vector) {
        return new Vector4(this.x - vector.x, this.y - vector.y, this.z - vector.z, this.w - vector.w);
    }
    multiply(scalar) {
        return new Vector4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    normalize() {
        let len = this.length();
        if (len > 0) {
            return this.multiply(1 / len);
        }
        else {
            throw new Error("Vector length is zero, cannot normalize.");
        }
    }
    dot(vector) {
        return (this.x * vector.x +
            this.y * vector.y +
            this.z * vector.z +
            this.w * vector.w);
    }
    distance(vector, includeZ = true) {
        return GetDistanceBetweenCoords(this.x, this.y, this.z, vector.x, vector.y, vector.z, includeZ);
    }
}
exports.Vector4 = Vector4;
