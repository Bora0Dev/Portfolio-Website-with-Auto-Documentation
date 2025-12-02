/**
 * @fileoverview A collection of utility functions for game development.
 * @author bora0dev
 * @version 1.0.0
 */

/**
 * Calculates the distance between two points in 2D space.
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} The distance between the two points.
 * @example
 * const dist = calculateDistance(0, 0, 3, 4); // Returns 5
 */
export function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum allowed value.
 * @param {number} max - The maximum allowed value.
 * @returns {number} The clamped value.
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Represents a 2D Vector.
 * @class
 */
export class Vector2 {
    /**
     * Creates a new Vector2.
     * @param {number} x - The x component.
     * @param {number} y - The y component.
     */
    constructor(x = 0, y = 0) {
        /** @type {number} */
        this.x = x;
        /** @type {number} */
        this.y = y;
    }

    /**
     * Adds another vector to this one.
     * @param {Vector2} other - The vector to add.
     * @returns {Vector2} A new Vector2 representing the sum.
     */
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    /**
     * Normalizes the vector.
     * @returns {Vector2} A new normalized Vector2.
     */
    normalize() {
        const len = Math.sqrt(this.x * this.x + this.y * this.y);
        if (len === 0) return new Vector2(0, 0);
        return new Vector2(this.x / len, this.y / len);
    }
}
