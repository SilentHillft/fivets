/**
 * IMPULSE is instant while a FORCE is continuous.
 *
 * ROTATION_VELOCITY_2 is basically same as ROTATION_VELOCITY, but force will be multiplied by 102.931.
 *
 * Source: https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 */
export enum ForceType {
    INTERNAL_FORCE,
    INTERNAL_IMPULSE,
    EXTERNAL_FORCE,
    EXTERNAL_IMPULSE,
    ROTATION_VELOCITY,
    ROTATION_VELOCITY_2,
}