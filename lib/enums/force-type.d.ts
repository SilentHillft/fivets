/**
 * IMPULSE is instant while a FORCE is continuous.
 *
 * ROTATION_VELOCITY_2 is basically same as ROTATION_VELOCITY, but force will be multiplied by 102.931.
 *
 * Source: https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 */
export declare enum ForceType {
    INTERNAL_FORCE = 0,
    INTERNAL_IMPULSE = 1,
    EXTERNAL_FORCE = 2,
    EXTERNAL_IMPULSE = 3,
    ROTATION_VELOCITY = 4,
    ROTATION_VELOCITY_2 = 5
}
