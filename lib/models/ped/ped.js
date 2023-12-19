"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ped = void 0;
const entity_1 = require("../entity");
const utils_1 = require("../../utils");
const ped_bone_collection_1 = require("./ped-bone-collection");
const enums_1 = require("../../enums");
const vehicle_1 = require("../vehicle");
class Ped extends entity_1.Entity {
    constructor(handle) {
        super(handle);
        this.speechModifierNames = [
            "SPEECH_PARAMS_STANDARD",
            "SPEECH_PARAMS_ALLOW_REPEAT",
            "SPEECH_PARAMS_BEAT",
            "SPEECH_PARAMS_FORCE",
            "SPEECH_PARAMS_FORCE_FRONTEND",
            "SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND",
            "SPEECH_PARAMS_FORCE_NORMAL",
            "SPEECH_PARAMS_FORCE_NORMAL_CLEAR",
            "SPEECH_PARAMS_FORCE_NORMAL_CRITICAL",
            "SPEECH_PARAMS_FORCE_SHOUTED",
            "SPEECH_PARAMS_FORCE_SHOUTED_CLEAR",
            "SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY",
            "SPEECH_PARAMS_MEGAPHONE",
            "SPEECH_PARAMS_HELI",
            "SPEECH_PARAMS_FORCE_MEGAPHONE",
            "SPEECH_PARAMS_FORCE_HELI",
            "SPEECH_PARAMS_INTERRUPT",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_INTERRUPT_NO_FORCE",
            "SPEECH_PARAMS_INTERRUPT_FRONTEND",
            "SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND",
            "SPEECH_PARAMS_ADD_BLIP",
            "SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT",
            "SPEECH_PARAMS_ADD_BLIP_FORCE",
            "SPEECH_PARAMS_ADD_BLIP_SHOUTED",
            "SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE",
            "SPEECH_PARAMS_ADD_BLIP_INTERRUPT",
            "SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_SHOUTED",
            "SPEECH_PARAMS_SHOUTED_CLEAR",
            "SPEECH_PARAMS_SHOUTED_CRITICAL",
        ];
    }
    get health() {
        return super.health - 100;
    }
    setHealth(val) {
        val = val + 100;
        super.setHealth(val);
    }
    get maxHealth() {
        return super.maxHealth - 100;
    }
    setMaxHealth(val) {
        val = val + 100;
        super.setMaxHealth(val);
    }
    get currentVehicle() {
        const veh = new vehicle_1.Vehicle(GetVehiclePedIsIn(this.handle, false));
        if (!veh.exists()) {
            return null;
        }
        return veh;
    }
    get lastVehicle() {
        const veh = new vehicle_1.Vehicle(GetVehiclePedIsIn(this.handle, true));
        if (!veh.exists()) {
            return null;
        }
        return veh;
    }
    get vehicleTryingToEnter() {
        const veh = new vehicle_1.Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
        if (!veh.exists()) {
            return null;
        }
        return veh;
    }
    isJumpingOutOfVehicle() {
        return IsPedJumpingOutOfVehicle(this.handle);
    }
    setStayInVehicleWhenJacked(val) {
        SetPedStayInVehicleWhenJacked(this.handle, val);
    }
    setMaxDrivingSpeed(val) {
        SetDriveTaskMaxCruiseSpeed(this.handle, val);
    }
    isHuman() {
        return IsPedHuman(this.handle);
    }
    setIsEnemy(val) {
        SetPedAsEnemy(this.handle, val);
    }
    setPriorityTargetForEnemies(val) {
        SetEntityIsTargetPriority(this.handle, val, 0);
    }
    isPlayer() {
        return IsPedAPlayer(this.handle);
    }
    isCuffed() {
        return IsPedCuffed(this.handle);
    }
    isWearingHelmet() {
        return IsPedWearingHelmet(this.handle);
    }
    isRagdoll() {
        return IsPedRagdoll(this.handle);
    }
    isIdle() {
        return (!this.isInjured() &&
            !this.isRagdoll() &&
            !this.isInAir() &&
            !this.isOnFire() &&
            !this.isDucking() &&
            !this.isGettingIntoVehicle() &&
            !this.isInCombat() &&
            !this.isInMeleeCombat() &&
            (!this.isInAnyVehicle() || this.isSittingInAnyVehicle()));
    }
    isProne() {
        return IsPedProne(this.handle);
    }
    isDucking() {
        return IsPedDucking(this.handle);
    }
    isGettingUp() {
        return IsPedGettingUp(this.handle);
    }
    isClimbing() {
        return IsPedClimbing(this.handle);
    }
    isJumping() {
        return IsPedJumping(this.handle);
    }
    isFalling() {
        return IsPedFalling(this.handle);
    }
    isStopped() {
        return IsPedStopped(this.handle);
    }
    isWalking() {
        return IsPedWalking(this.handle);
    }
    isRunning() {
        return IsPedRunning(this.handle);
    }
    isSprinting() {
        return IsPedSprinting(this.handle);
    }
    isDiving() {
        return IsPedDiving(this.handle);
    }
    isParachuteFreeFalling() {
        return IsPedInParachuteFreeFall(this.handle);
    }
    isSwimming() {
        return IsPedSwimming(this.handle);
    }
    isSwimmingUnderWater() {
        return IsPedSwimmingUnderWater(this.handle);
    }
    isVaulting() {
        return IsPedVaulting(this.handle);
    }
    isOnBike() {
        return IsPedOnAnyBike(this.handle);
    }
    isOnFoot() {
        return IsPedOnFoot(this.handle);
    }
    // NOTE: Maybe it refers to "submarine"?
    isInSub() {
        return IsPedInAnySub(this.handle);
    }
    isInTaxi() {
        return IsPedInAnyTaxi(this.handle);
    }
    isInTrain() {
        return IsPedInAnyTrain(this.handle);
    }
    isInHeli() {
        return IsPedInAnyHeli(this.handle);
    }
    isInPlane() {
        return IsPedInAnyPlane(this.handle);
    }
    isInFlyingVehicle() {
        return IsPedInFlyingVehicle(this.handle);
    }
    isInBoat() {
        return IsPedInAnyBoat(this.handle);
    }
    isInPoliceVehicle() {
        return IsPedInAnyPoliceVehicle(this.handle);
    }
    isJacking() {
        return IsPedJacking(this.handle);
    }
    isBeingJacked() {
        return IsPedBeingJacked(this.handle);
    }
    isGettingIntoVehicle() {
        return IsPedGettingIntoAVehicle(this.handle);
    }
    isTryingToEnterLockedVehicle() {
        return IsPedTryingToEnterALockedVehicle(this.handle);
    }
    isInjured() {
        return IsPedInjured(this.handle);
    }
    isFleeing() {
        return IsPedFleeing(this.handle);
    }
    isInCombat() {
        return IsPedInCombat(this.handle, PlayerPedId());
    }
    isInMeleeCombat() {
        return IsPedInMeleeCombat(this.handle);
    }
    isInStealthMode() {
        return GetPedStealthMovement(this.handle);
    }
    isAmbientSpeechPlaying() {
        return IsAmbientSpeechPlaying(this.handle);
    }
    isScriptedSpeechPlaying() {
        return IsScriptedSpeechPlaying(this.handle);
    }
    isAnySpeechPlaying() {
        return IsAnySpeechPlaying(this.handle);
    }
    isAmbientSpeechEnabled() {
        return !IsAmbientSpeechDisabled(this.handle);
    }
    setPainAudioEnabled(val) {
        DisablePedPainAudio(this.handle, !val);
    }
    isPlantingBomb() {
        return IsPedPlantingBomb(this.handle);
    }
    isShooting() {
        return IsPedShooting(this.handle);
    }
    isReloading() {
        return IsPedReloading(this.handle);
    }
    isDoingDriveby() {
        return IsPedDoingDriveby(this.handle);
    }
    isGoingIntoCover() {
        return IsPedGoingIntoCover(this.handle);
    }
    isBeingStunned() {
        return IsPedBeingStunned(this.handle, 0);
    }
    isBeingStealthKilled() {
        return IsPedBeingStealthKilled(this.handle);
    }
    isPerformingStealthKill() {
        return IsPedPerformingStealthKill(this.handle);
    }
    isAimingFromCover() {
        return IsPedAimingFromCover(this.handle);
    }
    isInCover(expectUseWeapon = false) {
        return IsPedInCover(this.handle, expectUseWeapon);
    }
    isInCoverFacingLeft() {
        return IsPedInCoverFacingLeft(this.handle);
    }
    setFiringPattern(val) {
        SetPedFiringPattern(this.handle, val);
    }
    setWeaponsDropOnDeath(val) {
        SetPedDropsWeaponsWhenDead(this.handle, val);
    }
    setDrivingSpeed(val) {
        SetDriveTaskCruiseSpeed(this.handle, val);
    }
    setDrivingStyle(style) {
        SetDriveTaskDrivingStyle(this.handle, +style);
    }
    isInAnyVehicle() {
        return IsPedInAnyVehicle(this.handle, false);
    }
    isInVehicle(vehicle) {
        return IsPedInVehicle(this.handle, vehicle.handle, false);
    }
    isSittingInAnyVehicle() {
        return IsPedSittingInAnyVehicle(this.handle);
    }
    isSittingInVehicle(vehicle) {
        return IsPedSittingInVehicle(this.handle, vehicle.handle);
    }
    placeIntoVehicle(vehicle, seat) {
        SetPedIntoVehicle(this.handle, vehicle.handle, +seat);
    }
    isInCombatAgainst(target) {
        return IsPedInCombat(this.handle, target.handle);
    }
    getJacker() {
        return new Ped(GetPedsJacker(this.handle));
    }
    getJackTarget() {
        return new Ped(GetJackTarget(this.handle));
    }
    getMeleeTarget() {
        return new Ped(GetMeleeTargetForPed(this.handle));
    }
    // TODO: Implementation
    // public getKiller() {
    //   return Entity.fromHandle(GetPedSourceOfDeath(this.handle));
    // }
    kill() {
        this.setHealth(-1);
    }
    resurrect() {
        const maxHealth = this.health;
        const isCollisionEnabled = this.isCollisionEnabled();
        ResurrectPed(this.handle);
        this.setMaxHealth(maxHealth);
        this.setHealth(maxHealth);
        this.setCollisionEnabled(isCollisionEnabled);
        this.clearTasks();
    }
    clearTasks() {
        ClearPedTasksImmediately(this.handle);
    }
    resetVisibleDamage() {
        ResetPedVisibleDamage(this.handle);
    }
    clearBloodDamage() {
        ClearPedBloodDamage(this.handle);
    }
    // TODO: Add RelationshipGroup??
    isInAnyGroup() {
        return IsPedInGroup(this.handle);
    }
    setPersistentGroup(val) {
        SetPedNeverLeavesGroup(this.handle, val);
    }
    leaveGroup() {
        RemovePedFromGroup(this.handle);
    }
    playAmbientSpeech(speechName, voiceName = "", modifier = enums_1.SpeechModifier.Standard) {
        if (+modifier >= 0 && +modifier < this.speechModifierNames.length) {
            if (voiceName === "") {
                PlayAmbientSpeech1(this.handle, speechName, this.speechModifierNames[+modifier]);
            }
            else {
                PlayAmbientSpeechWithVoice(this.handle, speechName, voiceName, this.speechModifierNames[+modifier], false);
            }
        }
        else {
            throw new RangeError("modifier");
        }
    }
    applyDamage(val) {
        ApplyDamageToPed(this.handle, val, true);
    }
    hasBeenDamagedByWeapon(weapon) {
        return HasPedBeenDamagedByWeapon(this.handle, +weapon, 0);
    }
    hasBeenDamagedByAnyWeapon() {
        return HasPedBeenDamagedByWeapon(this.handle, 0, 2);
    }
    hasBeenDamagedByAnyMeleeWeapon() {
        return HasPedBeenDamagedByWeapon(this.handle, 0, 1);
    }
    clearLastWeaponDamage() {
        ClearPedLastWeaponDamage(this.handle);
    }
    getBones() {
        if (this.pedBones === null) {
            this.pedBones = new ped_bone_collection_1.PedBoneCollection(this);
        }
        return this.pedBones;
    }
    giveWeapon(weapon, ammo = 999, isHidden = false, equipNow = true) {
        GiveWeaponToPed(this.handle, weapon, ammo, isHidden, equipNow);
    }
    removeWeapon(weapon) {
        RemoveWeaponFromPed(this.handle, weapon);
    }
    removeAllWeapons() {
        RemoveAllPedWeapons(this.handle, true);
    }
    getLastWeaponImpactPosition() {
        // TODO: Figure out what does it returns, assumption may be wrong.
        const [found, [x, y, z]] = GetPedLastWeaponImpactCoord(this.handle);
        if (!found) {
            return null;
        }
        return new utils_1.Vector3(x, y, z);
    }
    canRagdoll() {
        return CanPedRagdoll(this.handle);
    }
    setCanRagdoll(val) {
        return SetPedCanRagdoll(this.handle, val);
    }
    ragdoll(duration = -1, ragdollType = enums_1.RagdollType.Normal) {
        if (!this.canRagdoll()) {
            throw new Error("This ped can't do ragdolls.");
        }
        SetPedToRagdoll(this.handle, duration, duration, +ragdollType, false, false, false);
    }
    cancelRagdoll() {
        if (!this.canRagdoll()) {
            throw new Error("This ped can't do ragdolls.");
        }
        ResetPedRagdollTimer(this.handle);
        SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
    }
    giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
        GivePedHelmet(this.handle, !canBeRemovedByPed, +helmetType, textureIndex);
    }
    removeHelmet(instantly) {
        RemovePedHelmet(this.handle, instantly);
    }
    openParachute() {
        ForcePedToOpenParachute(this.handle);
    }
    getConfigFlag(flagId) {
        GetPedConfigFlag(this.handle, flagId, true);
    }
    setConfigFlag(flagId, val) {
        SetPedConfigFlag(this.handle, flagId, val);
    }
    resetConfigFlag(flagId) {
        SetPedResetFlag(this.handle, flagId, true);
    }
    clone(headingYaw) {
        // TODO: Implement...
        // return new Ped(ClonePed(this.handle, headingYaw, false, false))
    }
    exists(ped = null) {
        if (ped === null) {
            return super.exists() && GetEntityType(this.handle) === 1;
        }
        return ped.exists();
    }
}
exports.Ped = Ped;
