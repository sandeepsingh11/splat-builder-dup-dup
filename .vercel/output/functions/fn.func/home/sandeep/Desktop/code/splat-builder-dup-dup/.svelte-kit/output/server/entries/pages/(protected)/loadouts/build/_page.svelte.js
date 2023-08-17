import { c as create_ssr_component, e as each, v as validate_component, d as escape, b as add_attribute } from "../../../../../chunks/index2.js";
import { S as SearchSelect, a as SkillBubble, E as EffectStat } from "../../../../../chunks/EffectStat.js";
const version = 210;
const weapons = {
  "0": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 22,
        ReduceStartFrame: 6,
        ValueMax: 380,
        ValueMin: 190
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponAccType: "Fast",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.782,
        GoStraightToBrakeStateFrame: 2,
        SpawnSpeed: 2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.62,
        DepthScaleMaxBreakFree: 2.62,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 3.75,
        DistanceNear: 2,
        WidthHalfFar: 1.82,
        WidthHalfMiddle: 2.28,
        WidthHalfNear: 2.57
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.38,
        WidthHalfNearest: 1.932
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 6,
        SpawnNearestLength: 1.15,
        SpawnNum: 1.4,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 8e-3,
        InkRecoverStop: 15,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 18,
        MoveSpeed: 0.08,
        PostDelayFrame: 2,
        RepeatFrame: 5,
        ShotGuideFrame: 6,
        SquidShotShorteningFrame: 2,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.02,
        Stand_DegBiasMax: 0.4,
        Stand_DegBiasMin: 0.04,
        Stand_DegSwerve: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Short_00"
  },
  "10": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.8945,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.62,
        DepthScaleMaxBreakFree: 2.62,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.77,
        WidthHalfMiddle: 2.11,
        WidthHalfNear: 2.11
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.4835,
        WidthHalfNearest: 2.0769
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          3
        ],
        SpawnBetweenLength: 9.5,
        SpawnNearestLength: 1.2,
        SpawnNum: 1.4,
        SplitNum: 7
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 43e-4,
        InkRecoverStop: 15,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 15,
        MoveSpeed: 0.072,
        PostDelayFrame: 2,
        RepeatFrame: 5,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 2,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.02,
        Stand_DegBiasMax: 0.4,
        Stand_DegBiasMin: 0.04,
        Stand_DegSwerve: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_First_00"
  },
  "11": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.8945,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.62,
        DepthScaleMaxBreakFree: 2.62,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.77,
        WidthHalfMiddle: 2.11,
        WidthHalfNear: 2.11
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.4835,
        WidthHalfNearest: 2.0769
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          3
        ],
        SpawnBetweenLength: 9.5,
        SpawnNearestLength: 1.2,
        SpawnNum: 1.4,
        SplitNum: 7
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 43e-4,
        InkRecoverStop: 15,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 15,
        MoveSpeed: 0.072,
        PostDelayFrame: 2,
        RepeatFrame: 5,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 2,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.02,
        Stand_DegBiasMax: 0.4,
        Stand_DegBiasMin: 0.04,
        Stand_DegSwerve: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_First_01"
  },
  "20": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 20,
        ReduceStartFrame: 4,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.5815,
        GoStraightToBrakeStateFrame: 2,
        SpawnSpeed: 3.92
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.77,
        WidthHalfMiddle: 2.19,
        WidthHalfNear: 2.19
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.472,
        WidthHalfNearest: 2.0608
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 9.5,
        SpawnNearestLength: 1.15,
        SpawnNum: 1.5,
        SplitNum: 6
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 8e-3,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 0,
        MoveSpeed: 0.072,
        PostDelayFrame: 3,
        RepeatFrame: 5,
        ShotGuideFrame: 4,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 0
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Precision_00"
  },
  "30": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 240,
        ValueMin: 120
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.8945,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.5,
        DepthScaleMaxBreakFree: 2.5,
        DepthScaleMin: 1.25,
        DepthScaleMinBreakFree: 1.07,
        DistanceFar: 15,
        DistanceMiddle: 4.2,
        DistanceNear: 2.1,
        WidthHalfFar: 1.99,
        WidthHalfMiddle: 2.08,
        WidthHalfNear: 2.24
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.52,
        WidthHalfNearest: 1.932
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 12.5,
        SpawnNearestLength: 1.3,
        SpawnNum: 1,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 55e-4,
        InkRecoverStop: 15,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 16,
        MoveSpeed: 0.072,
        PostDelayFrame: 2,
        RepeatFrame: 4,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 2,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMax: 0.5,
        Stand_DegBiasMin: 0.06,
        Stand_DegSwerve: 13
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Blaze_00"
  },
  "31": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 240,
        ValueMin: 120
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.8945,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.5,
        DepthScaleMaxBreakFree: 2.5,
        DepthScaleMin: 1.25,
        DepthScaleMinBreakFree: 1.07,
        DistanceFar: 15,
        DistanceMiddle: 4.2,
        DistanceNear: 2.1,
        WidthHalfFar: 1.99,
        WidthHalfMiddle: 2.08,
        WidthHalfNear: 2.24
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.52,
        WidthHalfNearest: 1.932
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 12.5,
        SpawnNearestLength: 1.3,
        SpawnNum: 1,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 55e-4,
        InkRecoverStop: 15,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 16,
        MoveSpeed: 0.072,
        PostDelayFrame: 2,
        RepeatFrame: 4,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 2,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMax: 0.5,
        Stand_DegBiasMin: 0.06,
        Stand_DegSwerve: 13
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Blaze_01"
  },
  "40": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 40,
        ReduceStartFrame: 8,
        ValueMax: 360,
        ValueMin: 180
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.4495,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.472,
        WidthHalfNearest: 2.0608
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 9.2,
        SpawnNearestLength: 1.2,
        SpawnNum: 1.5,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 92e-4,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MoveSpeed: 0.072,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.015,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 6
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate"
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Normal_00"
  },
  "41": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 40,
        ReduceStartFrame: 8,
        ValueMax: 360,
        ValueMin: 180
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.4495,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.472,
        WidthHalfNearest: 2.0608
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 9.2,
        SpawnNearestLength: 1.2,
        SpawnNum: 1.5,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 92e-4,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MoveSpeed: 0.072,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.015,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 6
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate"
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Normal_01"
  },
  "45": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 40,
        ReduceStartFrame: 8,
        ValueMax: 360,
        ValueMin: 180
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.4495,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.472,
        WidthHalfNearest: 2.0608
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 9.2,
        SpawnNearestLength: 1.2,
        SpawnNum: 1.5,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 92e-4,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MoveSpeed: 0.072,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.015,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 6
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate"
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Normal_H"
  },
  "50": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 27,
        ReduceStartFrame: 11,
        ValueMax: 520,
        ValueMin: 300
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeAirResist: 0.02,
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.8472,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 2.25,
        WidthHalfMiddle: 2.11,
        WidthHalfNear: 2.11
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.495,
        WidthHalfNearest: 2.16775
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          2
        ],
        SpawnBetweenLength: 5.5,
        SpawnNearestLength: 1.3,
        SpawnNum: 2.4,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.013,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MoveSpeed: 0.06,
        PostDelayFrame: 3,
        RepeatFrame: 9,
        ShotGuideFrame: 11,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.015,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMin: 0.02,
        Stand_DegSwerve: 6
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Gravity_00"
  },
  "60": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.4495,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.334,
        WidthHalfNearest: 1.97432
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          5
        ],
        SpawnBetweenLength: 11,
        SpawnNearestLength: 1,
        SpawnNum: 1.4,
        SplitNum: 11
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 8e-3,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MoveSpeed: 0.084,
        PostDelayFrame: 3,
        RepeatFrame: 5,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 6
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_QuickMiddle_00"
  },
  "70": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 23,
        ReduceStartFrame: 7,
        ValueMax: 420,
        ValueMin: 210
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        Overwrite_MoveVelRt_Shot_High: -1,
        Overwrite_MoveVelRt_Shot_Mid: -1
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.2698,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 3.833333
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.4375,
        WidthHalfNearest: 2.0125
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 8.8,
        SpawnNearestLength: 0.8,
        SpawnNum: 2,
        SplitNum: 6
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.02,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 6,
        MoveSpeed: 0.055,
        RepeatFrame: 8,
        ShotGuideFrame: 7,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 2.7
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Expert_00"
  },
  "71": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 23,
        ReduceStartFrame: 7,
        ValueMax: 420,
        ValueMin: 210
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        Overwrite_MoveVelRt_Shot_High: -1,
        Overwrite_MoveVelRt_Shot_Mid: -1
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.2698,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 3.833333
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.4375,
        WidthHalfNearest: 2.0125
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 8.8,
        SpawnNearestLength: 0.8,
        SpawnNum: 2,
        SplitNum: 6
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.02,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 6,
        MoveSpeed: 0.055,
        RepeatFrame: 8,
        ShotGuideFrame: 7,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 2.7
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Expert_01"
  },
  "80": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 25,
        ReduceStartFrame: 9,
        ValueMax: 620,
        ValueMin: 350
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.377,
        GoStraightToBrakeStateFrame: 5,
        SpawnSpeed: 2.45
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 2.25,
        WidthHalfMiddle: 2.57,
        WidthHalfNear: 2.57
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.5525,
        WidthHalfNearest: 2.1735
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 6,
        SpawnNearestLength: 1.3,
        SpawnNum: 3.4,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.025,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 11.3511,
        MoveSpeed: 0.04,
        RepeatFrame: 12,
        ShotGuideFrame: 9,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.02,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.04,
        Stand_DegSwerve: 4
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Heavy_00"
  },
  "90": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 25,
        ReduceStartFrame: 9,
        ValueMax: 320,
        ValueMin: 160
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.232,
        GoStraightToBrakeStateFrame: 5,
        SpawnSpeed: 3.36
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.88,
        WidthHalfMiddle: 2.12,
        WidthHalfNear: 2.12
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.38,
        WidthHalfNearest: 1.932
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 10,
        SpawnNearestLength: 1,
        SpawnNum: 3,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.016,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.06,
        PostDelayFrame: 4,
        RepeatFrame: 8,
        ShotGuideFrame: 9,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.015,
        Stand_DegBiasMin: 0.02,
        Stand_DegSwerve: 2.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Long_00"
  },
  "100": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 26,
        ReduceStartFrame: 10,
        ValueMax: 240,
        ValueMin: 120
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Mid"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.2698,
        GoStraightToBrakeStateFrame: 5,
        SpawnSpeed: 2.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 2.04,
        WidthHalfMiddle: 2.3,
        WidthHalfNear: 2.3
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.334,
        WidthHalfNearest: 1.97432
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          5
        ],
        SpawnBetweenLength: 11,
        SpawnNearestLength: 1,
        SpawnNum: 1.4,
        SplitNum: 11
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 96e-4,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MoveSpeed: 0.072,
        PostDelayFrame: 3,
        RepeatFrame: 6,
        ShotGuideFrame: 10,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0.02,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMax: 0.25,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 6
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_QuickLong_00"
  },
  "200": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 700,
            Distance: 1
          },
          {
            Damage: 500,
            Distance: 3.57
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 3.2
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        BurstFrame: 11,
        SplashDropPaintShotColHitRadius: 2.3,
        SplashRoundAxisXArray: [
          -90,
          -45,
          0,
          45
        ],
        SplashRoundAxisYArray: [
          0,
          30,
          60,
          90,
          120
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        }
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 1250,
        ValueMin: 1250
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 0.8484,
        GoStraightToBrakeStateFrame: 7,
        SpawnSpeed: 0.87
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.56,
        WidthHalfNearest: 2.496
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 1.5,
        SpawnNearestLength: 1,
        SpawnNum: 6,
        SplitNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          FirstDistance: 1.8,
          VelocityMinusYRate: 0.4
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 0.5,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.4
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.07,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 20,
          FallPeriodSecondFrame: 35,
          FallPeriodSecondTargetSpeed: 0.04
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.075,
        InkRecoverStop: 55,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.05,
        PostDelayFrame: 4,
        PostDelayFrame_Blaster: 26,
        PreDelayFrame_HumanShot: 10,
        PreDelayFrame_SquidShot: 15,
        RepeatFrame: 40,
        ShotGuideFrame: 11,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_Short_00"
  },
  "201": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 700,
            Distance: 1
          },
          {
            Damage: 500,
            Distance: 3.57
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 3.2
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        BurstFrame: 11,
        SplashDropPaintShotColHitRadius: 2.3,
        SplashRoundAxisXArray: [
          -90,
          -45,
          0,
          45
        ],
        SplashRoundAxisYArray: [
          0,
          30,
          60,
          90,
          120
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        }
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 1250,
        ValueMin: 1250
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 0.8484,
        GoStraightToBrakeStateFrame: 7,
        SpawnSpeed: 0.87
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.56,
        WidthHalfNearest: 2.496
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 1.5,
        SpawnNearestLength: 1,
        SpawnNum: 6,
        SplitNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          FirstDistance: 1.8,
          VelocityMinusYRate: 0.4
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 0.5,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.4
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.07,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 20,
          FallPeriodSecondFrame: 35,
          FallPeriodSecondTargetSpeed: 0.04
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.075,
        InkRecoverStop: 55,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.05,
        PostDelayFrame: 4,
        PostDelayFrame_Blaster: 26,
        PreDelayFrame_HumanShot: 10,
        PreDelayFrame_SquidShot: 15,
        RepeatFrame: 40,
        ShotGuideFrame: 11,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_Short_01"
  },
  "210": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 700,
            Distance: 0.94
          },
          {
            Damage: 500,
            Distance: 3.3
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 3.3
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        SplashDropPaintShotColHitRadius: 2.5,
        SplashRoundAxisXArray: [
          -90,
          -45,
          0,
          45
        ],
        SplashRoundAxisYArray: [
          0,
          30,
          60,
          90,
          120
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        }
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 1250,
        ValueMin: 1250
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 0.9131,
        GoStraightToBrakeStateFrame: 9,
        SpawnSpeed: 0.945
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.62,
        WidthHalfNearest: 2.43
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 1.5,
        SpawnNearestLength: 0.5,
        SpawnNum: 7,
        SplitNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          FirstDistance: 1.8,
          VelocityMinusYRate: 0.4
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 0.5,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.4
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.07,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 20,
          FallPeriodSecondFrame: 35,
          FallPeriodSecondTargetSpeed: 0.04
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.1,
        InkRecoverStop: 60,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 10,
        MoveSpeed: 0.045,
        PostDelayFrame: 4,
        PreDelayFrame_HumanShot: 10,
        PreDelayFrame_SquidShot: 15,
        RepeatFrame: 50,
        ShotGuideFrame: 13,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_Middle_00"
  },
  "220": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 700,
            Distance: 1
          },
          {
            Damage: 500,
            Distance: 3.5
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 3.5
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        BurstFrame: 15,
        SplashDropPaintRadius: 3,
        SplashDropPaintShotColHitRadius: 2.25,
        SplashRoundAxisXArray: [
          -90,
          -45,
          0,
          45
        ],
        SplashRoundAxisYArray: [
          0,
          30,
          60,
          90,
          120
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        }
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 1250,
        ValueMin: 1250
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.0073,
        GoStraightToBrakeStateFrame: 11,
        SpawnSpeed: 1.08
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.56,
        WidthHalfNearest: 2.184
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 1.9,
        SpawnNearestLength: 1,
        SpawnNum: 9,
        SplitNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          DistanceXZRate: 0,
          FirstDistance: 2.5,
          VelocityMinusYRate: 0.45
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 1,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.3
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 30,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondFrame: 30,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.11,
        InkRecoverStop: 70,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.04,
        PostDelayFrame: 4,
        PostDelayFrame_Blaster: 30,
        PreDelayFrame_HumanShot: 10,
        PreDelayFrame_SquidShot: 15,
        RepeatFrame: 60,
        ShotGuideFrame: 15,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__PlayerGearSkillParam_MainEffectiveRangeUp: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_Long_00"
  },
  "230": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 300,
            Distance: 1
          },
          {
            Damage: 300,
            Distance: 4
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 4
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        BurstFrame: 12,
        MoveLength: 2.4,
        NoOccurRoundYOver90RoundXPlus: true,
        SplashDropPaintRadius: 2.5,
        SplashDropPaintShotColHitRadius: 2.2,
        SplashPaintRadius: 1.8,
        SplashPaintShotColHitRadius: 1.6,
        SplashRoundAxisXArray: [
          0,
          0,
          0,
          -90
        ],
        SplashRoundAxisYArray: [
          0,
          45,
          90,
          135,
          0
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        },
        WallHitPaintRadius: 1.8
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 600,
        ValueMin: 600
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 0.92715,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 0.935
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 2.1,
        WidthHalf: 1.284,
        WidthHalfNearest: 1.7976
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 3.2,
        SpawnNearestLength: 0.5,
        SpawnNum: 3,
        SplitNum: 2
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          DistanceXZRate: 0,
          FirstDistance: 2.5,
          VelocityMinusYRate: 0.45
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 1,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.3
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 30,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondFrame: 30,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.04,
        InkRecoverStop: 40,
        Jump_DegBiasDecreaseStartFrame: 40,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.065,
        PostDelayFrame: 4,
        PostDelayFrame_Blaster: 20,
        PreDelayFrame_HumanShot: 8,
        PreDelayFrame_SquidShot: 12,
        RepeatFrame: 20,
        ShotGuideFrame: 12,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_LightShort_00"
  },
  "240": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 350,
            Distance: 0.94
          },
          {
            Damage: 350,
            Distance: 3.3
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 3.3
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        BurstFrame: 15,
        MoveLength: 2,
        SplashDropPaintRadius: 2.8,
        SplashDropPaintShotColHitRadius: 2.3,
        SplashRoundAxisXArray: [
          -90,
          -45,
          0,
          45
        ],
        SplashRoundAxisYArray: [
          0,
          30,
          60,
          90,
          120
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        },
        WallHitPaintRadius: 1.9
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 850,
        ValueMin: 850
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.13305,
        GoStraightToBrakeStateFrame: 11,
        SpawnSpeed: 1.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.32,
        WidthHalfNearest: 1.848
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 1.62,
        SpawnNearestLength: 0.9,
        SpawnNum: 11,
        SplitNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          DistanceXZRate: 0,
          FirstDistance: 2.5,
          VelocityMinusYRate: 0.45
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 1,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.3
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 30,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondFrame: 30,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.07,
        InkRecoverStop: 50,
        Jump_DegBiasDecreaseStartFrame: 40,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.055,
        PostDelayFrame: 4,
        PostDelayFrame_Blaster: 20,
        PreDelayFrame_HumanShot: 8,
        PreDelayFrame_SquidShot: 12,
        RepeatFrame: 35,
        ShotGuideFrame: 15,
        SquidShotShorteningFrame: 1,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_Light_00"
  },
  "250": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageLinear: true,
        DistanceDamage: [
          {
            Damage: 350,
            Distance: 0.94
          },
          {
            Damage: 350,
            Distance: 3.3
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 3.3
        },
        PaintRadius: 0
      },
      BlasterBurstParam: {
        $type: "spl__BulletBlasterBurstParam",
        BurstFrame: 15,
        MoveLength: 2,
        SplashDropPaintRadius: 2.8,
        SplashDropPaintShotColHitRadius: 2.22,
        SplashRoundAxisXArray: [
          -90,
          -45,
          0,
          45
        ],
        SplashRoundAxisYArray: [
          0,
          30,
          60,
          90,
          120
        ],
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 1,
          FallPeriodFirstFrameMin: 1,
          FallPeriodFirstTargetSpeed: 0,
          FallPeriodLastFrameMax: 1,
          FallPeriodLastFrameMin: 1,
          FallPeriodSecondFrame: 1,
          FallPeriodSecondTargetSpeed: 0
        },
        SplashWallDropPaintParam: {
          PaintRadiusFall: 0,
          PaintRadiusGround: 0,
          PaintRadiusShock: 1.2
        },
        WallHitPaintRadius: 1.9
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 99,
        ReduceStartFrame: -1,
        ValueMax: 850,
        ValueMin: 850
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.3426,
        GoStraightToBrakeStateFrame: 11,
        SpawnSpeed: 1.4
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 0,
        WidthHalfFar: 0,
        WidthHalfMiddle: 0,
        WidthHalfNear: 0
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.32,
        WidthHalfNearest: 1.848
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 1.62,
        SpawnNearestLength: 0.9,
        SpawnNum: 12,
        SplitNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletSplashWallHitParam",
        SpawnParam: {
          DistanceXZRate: 0,
          FirstDistance: 2.5,
          VelocityMinusYRate: 0.45
        },
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 1,
          PaintRadiusFall: 1,
          PaintRadiusShock: 1.3
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMin: 30,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondFrame: 30,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        FallPeriodFirstSecondTargetAlp: 0.5,
        PaintRadiusFall: 1,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.07,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 35,
        FallPeriodSecondTargetSpeed: 0.04
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        InkConsume: 0.08,
        InkRecoverStop: 50,
        Jump_DegBiasDecreaseStartFrame: 40,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.5,
        Jump_DegSwerve: 8,
        MoveSpeed: 0.05,
        PostDelayFrame: 4,
        PostDelayFrame_Blaster: 20,
        PreDelayFrame_HumanShot: 8,
        PreDelayFrame_SquidShot: 12,
        RepeatFrame: 40,
        ShotGuideFrame: 15,
        Stand_DegBiasDecrease: 0,
        Stand_DegBiasKf: 0,
        Stand_DegBiasMax: 0,
        Stand_DegBiasMin: 0,
        Stand_DegSwerve: 0
      },
      spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate: {
        $type: "spl__PlayerGearSkillParam_ActionSpecUp_ReduceJumpSwerveRate",
        Mid: 0.5
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Blaster_LightLong_00"
  },
  "300": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 290,
        ValueMin: 145
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        GoStraightStateEndMaxSpeed: 1.568,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.75
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 2.09,
        WidthHalfMiddle: 2.09,
        WidthHalfNear: 2.09
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.7825,
        WidthHalfNearest: 2.4955
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          3,
          6,
          9
        ],
        SpawnBetweenLength: 12,
        SpawnNearestLength: 1,
        SpawnNum: 1.5,
        SplitNum: 12
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.56
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        BurstAimMoveFrame: 20,
        InkConsume: 0.0115,
        InkRecoverStop: 25,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 6,
        MoveSpeed: 0.08,
        PostDelayFrame: 2,
        RepeatFrame: 4,
        ShotGuideFrame: 8,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 1,
        TripleShotSpanFrame: 8
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_TripleQuick_00"
  },
  "310": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 410,
        ValueMin: 205
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        Overwrite_MoveVelRt_Shot_High: -1,
        Overwrite_MoveVelRt_Shot_Mid: -1
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        GoStraightStateEndMaxSpeed: 2.2698,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.875
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 2.25,
        WidthHalfMiddle: 2.25,
        WidthHalfNear: 2.25
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.633,
        WidthHalfNearest: 2.2862
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          3
        ],
        SpawnBetweenLength: 6,
        SpawnNearestLength: 1.35,
        SpawnNum: 3,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.8,
        PaintRadiusGround: 0.75,
        PaintRadiusShock: 1.92
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 35,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.065,
        FallPeriodLastFrameMax: 40,
        FallPeriodLastFrameMin: 25,
        FallPeriodSecondFrame: 25,
        FallPeriodSecondTargetSpeed: 0.09
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        BurstAimMoveFrame: 25,
        InkConsume: 0.0225,
        InkRecoverStop: 25,
        Jump_DegBiasDecreaseStartFrame: 20,
        Jump_DegBiasEndFrame: 50,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 1,
        MoveSpeed: 0.06,
        PostDelayFrame: 2,
        RepeatFrame: 5,
        ShotGuideFrame: 8,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 1,
        TripleShotSpanFrame: 20
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_TripleMiddle_00"
  },
  "400": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 24,
        ReduceStartFrame: 8,
        ValueMax: 380,
        ValueMin: 190
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.9695,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 3.2
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceFar: 20,
        DistanceMiddle: 0.5,
        DistanceNear: 0.5,
        HeightUseDepthScaleMaxBreakFree: 1.5,
        HeightUseDepthScaleMinBreakFree: 10,
        WidthHalfFar: 1.61,
        WidthHalfMiddle: 2.35,
        WidthHalfNear: 2.35
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1.357,
        WidthHalfNearest: 1.8998
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 15,
        SpawnNearestLength: 1.25,
        SpawnNum: 1.5,
        SplitNum: 8
      },
      VariableCollisionParam: {
        $type: "spl__BulletSimpleCollisionParam"
      },
      VariableDamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 23,
        ReduceStartFrame: 7,
        ValueMax: 300,
        ValueMin: 150
      },
      VariableMoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        GoStraightStateEndMaxSpeed: 2.3032,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.4
      },
      VariablePaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      VariableSplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        WidthHalf: 1.38,
        WidthHalfNearest: 1.932
      },
      VariableSplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        SpawnBetweenLength: 6.5,
        SpawnNearestLength: 1.2,
        SpawnNum: 2,
        SplitNum: 5
      },
      VariableWeaponParam: {
        $type: "spl__WeaponShooterParam",
        BurstAimMoveFrame: 20,
        InkConsume: 0.0108,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 13,
        MoveSpeed: 0.072,
        PostDelayFrame: 3,
        RepeatFrame: 7,
        ShotGuideFrame: 7,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponShooterParam",
        BurstAimMoveFrame: 20,
        InkConsume: 0.022,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 0,
        MoveSpeed: 0.072,
        PostDelayFrame: 3,
        RepeatFrame: 8,
        ShotGuideFrame: 8,
        SquidShotShorteningFrame: 0,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 0,
        VariableShotRepeatStartFrame: 10
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Shooter_Flash_00"
  },
  "1000": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          KnockBackOpponent: {
            AccelMax: 800,
            AccelMin: 420,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 280,
            AccelMin: 280,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 550,
            AccelMin: 410,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 1.4
        },
        Damage: 700,
        PaintParam: {
          Depth: 1.5,
          SpeedMax: 0.152,
          WidthAddWallCut: 0.4,
          WidthHalfMax: 2.2
        },
        SideParam: {
          CheckLength: 1.3,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      KnockBackByCanopyParam: {
        $type: "spl__BulletRollerBodyKnockBackByCanopyParam",
        KnockBackRollerPlayerDamageOff: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        },
        KnockBackRollerPlayerDamageOn: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp",
        Mid: 0.37
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      VerticalSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkVerticalSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 45,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 30,
          Inside: {
            DamageHighDistance: 11.2,
            DamageHighValue: 500,
            DamageLowDistance: 11.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 14.2,
            DamageMinValue: 350,
            Degree: 5,
            DepletionDamageRate: 0.5,
            FinalDamageMinValue: 350,
            InsideDistanceXZ: 0
          },
          Outside: {
            DamageHighDistance: 11.2,
            DamageHighValue: 500,
            DamageLowDistance: 11.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 14.2,
            DamageMinValue: 350,
            DamageRate: 1,
            Degree: 20,
            DepletionDamageRate: 0.5,
            FinalDamageMinValue: 350
          }
        },
        SpawnSplashBetweenLength: 4.2,
        SpawnSplashFirstLength: 1.1,
        SpawnSplashNum: 5,
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        SplashPaintParam: {
          DepthScaleMax: 3,
          DepthScaleMin: 3,
          WidthHalf: 1.25,
          WidthHalfNearest: 1.25
        },
        Unit: [
          {
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4615,
            FourPetalsPetalRadiusRate: 0.3077,
            SpawnPositionHeight: 0,
            SpawnPositionOffsetHeight: 0.5,
            SpawnRotateXDegreeBase: 7.5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.5166,
            SpawnWideDegree: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.65,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.6,
                WidthHalfNear: 2.2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.18,
            BulletNum: 2,
            DepletionBulletNum: 2,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4615,
            FourPetalsPetalRadiusRate: 0.3077,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -0.25,
            SpawnRotateXDegreeBase: 5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.3366,
            SpawnSpeedRandom: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.65,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.75,
                WidthHalfNear: 1.45
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.18,
            BulletNum: 2,
            DepletionBulletNum: 0,
            DepletionSpeedRate: 0.7,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -1.25,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 0.9766,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.75,
                WidthHalfNear: 1.45
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponRollerRollParam",
        DashFrame: 30,
        InkConsumeMaxPerFrame: 1e-3,
        InkConsumeMinPerFrame: 2e-4,
        InkRecoverStop: 20,
        SpeedDash: 0.152,
        SpeedDashTurnBreak: 0.128,
        SpeedInkConsumeMax: 0.152,
        SpeedInkConsumeMin: 0.02,
        SpeedNormal: 0.128
      },
      WeaponVerticalSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        InkConsume: 0.0396,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 45,
        SwingFrame: 12,
        SwingMoveSpeed: 0.048
      },
      WeaponWideSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 7,
          WidthScale: 1.2
        },
        InkConsume: 0.0396,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 40,
        SubWeaponSquidDelayFrm: 8,
        SwingFrame: 10,
        SwingMoveSpeed: 0.06
      },
      WideSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkWideSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 44,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 24,
          Inside: {
            DamageHighDistance: 6.2,
            DamageHighValue: 500,
            DamageLowDistance: 6.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1e3,
            DamageMinDistance: 8.2,
            DamageMinValue: 250,
            Degree: 12,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 250,
            InsideDistanceXZ: 1.2
          },
          Outside: {
            DamageHighDistance: 5.2,
            DamageHighValue: 500,
            DamageLowDistance: 5.2,
            DamageLowValue: 500,
            DamageMaxDistance: 2.7,
            DamageMaxValue: 1e3,
            DamageMinDistance: 6.7,
            DamageMinValue: 250,
            DamageRate: 1,
            Degree: 25,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 250
          }
        },
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        Unit: [
          {
            BulletNum: 10,
            DepletionBulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.6,
            SpawnSpeedBase: 0.8,
            SpawnSpeedRandom: 0.26,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 8.5,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.25,
                WidthHalfNear: 1.56
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            BulletNum: 2,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.3,
            SpawnSpeedBase: 0.4,
            SpawnSpeedRandom: 0.1,
            SpawnWideDegree: 8,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 8.5,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.25,
                WidthHalfNear: 1.56
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.3,
            SpawnSpeedBase: 0.24,
            SpawnSpeedRandom: 0.05,
            SpawnWideDegree: 8,
            SwerveRateBySpeed: 0.06,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                ChangeFrame: 0,
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 8.5,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.1,
                WidthHalfNear: 1.4
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Roller_Compact_00"
  },
  "1001": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          KnockBackOpponent: {
            AccelMax: 800,
            AccelMin: 420,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 280,
            AccelMin: 280,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 550,
            AccelMin: 410,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 1.4
        },
        Damage: 700,
        PaintParam: {
          Depth: 1.5,
          SpeedMax: 0.152,
          WidthAddWallCut: 0.4,
          WidthHalfMax: 2.2
        },
        SideParam: {
          CheckLength: 1.3,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      KnockBackByCanopyParam: {
        $type: "spl__BulletRollerBodyKnockBackByCanopyParam",
        KnockBackRollerPlayerDamageOff: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        },
        KnockBackRollerPlayerDamageOn: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp",
        Mid: 0.37
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      VerticalSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkVerticalSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 45,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 30,
          Inside: {
            DamageHighDistance: 11.2,
            DamageHighValue: 500,
            DamageLowDistance: 11.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 14.2,
            DamageMinValue: 350,
            Degree: 5,
            DepletionDamageRate: 0.5,
            FinalDamageMinValue: 350,
            InsideDistanceXZ: 0
          },
          Outside: {
            DamageHighDistance: 11.2,
            DamageHighValue: 500,
            DamageLowDistance: 11.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 14.2,
            DamageMinValue: 350,
            DamageRate: 1,
            Degree: 20,
            DepletionDamageRate: 0.5,
            FinalDamageMinValue: 350
          }
        },
        SpawnSplashBetweenLength: 4.2,
        SpawnSplashFirstLength: 1.1,
        SpawnSplashNum: 5,
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        SplashPaintParam: {
          DepthScaleMax: 3,
          DepthScaleMin: 3,
          WidthHalf: 1.25,
          WidthHalfNearest: 1.25
        },
        Unit: [
          {
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4615,
            FourPetalsPetalRadiusRate: 0.3077,
            SpawnPositionHeight: 0,
            SpawnPositionOffsetHeight: 0.5,
            SpawnRotateXDegreeBase: 7.5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.5166,
            SpawnWideDegree: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.65,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.6,
                WidthHalfNear: 2.2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.18,
            BulletNum: 2,
            DepletionBulletNum: 2,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4615,
            FourPetalsPetalRadiusRate: 0.3077,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -0.25,
            SpawnRotateXDegreeBase: 5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.3366,
            SpawnSpeedRandom: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.65,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.75,
                WidthHalfNear: 1.45
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.18,
            BulletNum: 2,
            DepletionBulletNum: 0,
            DepletionSpeedRate: 0.7,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -1.25,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 0.9766,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.75,
                WidthHalfNear: 1.45
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponRollerRollParam",
        DashFrame: 30,
        InkConsumeMaxPerFrame: 1e-3,
        InkConsumeMinPerFrame: 2e-4,
        InkRecoverStop: 20,
        SpeedDash: 0.152,
        SpeedDashTurnBreak: 0.128,
        SpeedInkConsumeMax: 0.152,
        SpeedInkConsumeMin: 0.02,
        SpeedNormal: 0.128
      },
      WeaponVerticalSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        InkConsume: 0.0396,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 45,
        SwingFrame: 12,
        SwingMoveSpeed: 0.048
      },
      WeaponWideSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 7,
          WidthScale: 1.2
        },
        InkConsume: 0.0396,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 40,
        SubWeaponSquidDelayFrm: 8,
        SwingFrame: 10,
        SwingMoveSpeed: 0.06
      },
      WideSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkWideSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 44,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 24,
          Inside: {
            DamageHighDistance: 6.2,
            DamageHighValue: 500,
            DamageLowDistance: 6.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1e3,
            DamageMinDistance: 8.2,
            DamageMinValue: 250,
            Degree: 12,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 250,
            InsideDistanceXZ: 1.2
          },
          Outside: {
            DamageHighDistance: 5.2,
            DamageHighValue: 500,
            DamageLowDistance: 5.2,
            DamageLowValue: 500,
            DamageMaxDistance: 2.7,
            DamageMaxValue: 1e3,
            DamageMinDistance: 6.7,
            DamageMinValue: 250,
            DamageRate: 1,
            Degree: 25,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 250
          }
        },
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        Unit: [
          {
            BulletNum: 10,
            DepletionBulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.6,
            SpawnSpeedBase: 0.8,
            SpawnSpeedRandom: 0.26,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 8.5,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.25,
                WidthHalfNear: 1.56
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            BulletNum: 2,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.3,
            SpawnSpeedBase: 0.4,
            SpawnSpeedRandom: 0.1,
            SpawnWideDegree: 8,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 8.5,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.25,
                WidthHalfNear: 1.56
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.3,
            SpawnSpeedBase: 0.24,
            SpawnSpeedRandom: 0.05,
            SpawnWideDegree: 8,
            SwerveRateBySpeed: 0.06,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.5,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                ChangeFrame: 0,
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 8.5,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.1,
                WidthHalfNear: 1.4
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Roller_Compact_01"
  },
  "1010": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          KnockBackOpponent: {
            AccelMax: 800,
            AccelMin: 420,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 280,
            AccelMin: 280,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 550,
            AccelMin: 410,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 1.4
        },
        Damage: 1250,
        PaintParam: {
          SpeedMax: 0.132,
          WidthHalfMax: 2.8
        },
        SideParam: {
          CheckLength: 1.3,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      KnockBackByCanopyParam: {
        $type: "spl__BulletRollerBodyKnockBackByCanopyParam",
        KnockBackRollerPlayerDamageOff: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        },
        KnockBackRollerPlayerDamageOn: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp",
        High: 0.7,
        Mid: 0.49
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      VerticalSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkVerticalSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 45,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 30,
          Inside: {
            DamageHighDistance: 8.2,
            DamageHighValue: 1e3,
            DamageLowDistance: 11.2,
            DamageLowValue: 500,
            DamageMaxDistance: 5.2,
            DamageMaxValue: 1500,
            DamageMinDistance: 13.2,
            DamageMinValue: 400,
            Degree: 5,
            FinalDamageMinValue: 400
          },
          Outside: {
            DamageHighDistance: 8.2,
            DamageHighValue: 1e3,
            DamageLowDistance: 11.2,
            DamageLowValue: 500,
            DamageMaxDistance: 5.2,
            DamageMaxValue: 1500,
            DamageMinDistance: 13.2,
            DamageMinValue: 400,
            DamageRate: 1,
            Degree: 20,
            FinalDamageMinValue: 400
          }
        },
        SpawnSplashBetweenLength: 4.6,
        SpawnSplashFirstLength: 1.2,
        SpawnSplashNum: 5,
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.462,
            PaintWidthHalf: 1.462
          }
        },
        SplashPaintParam: {
          DepthScaleMax: 3,
          DepthScaleMin: 3,
          WidthHalf: 1.287,
          WidthHalfNearest: 1.287
        },
        Unit: [
          {
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4667,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionOffsetHeight: 0.5,
            SpawnRotateXDegreeBase: 7.5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.8338,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.75,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.36,
                InitRadius: 0.36
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.76,
                DepthScaleMaxStraight: 1.76,
                DepthScaleMinBreakFree: 1.32,
                DepthScaleMinStraight: 1.1,
                DistanceFar: 16,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 3.068,
                WidthHalfNear: 2.454
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.65,
                PaintRadiusShock: 1.4
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 2,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4667,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -0.25,
            SpawnRotateXDegreeBase: 5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.6338,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.75,
                EndRadiusForPlayer: 0.75,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.36,
                InitRadius: 0.36
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.76,
                DepthScaleMaxStraight: 1.76,
                DepthScaleMinBreakFree: 1.32,
                DepthScaleMinStraight: 1.1,
                DistanceFar: 16,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.045,
                WidthHalfNear: 1.841
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.65,
                PaintRadiusShock: 1.4
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 0,
            DepletionSpeedRate: 0.7,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -1.25,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.2338,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.55,
                EndRadiusForPlayer: 0.7,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.36,
                InitRadius: 0.36
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 30,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.76,
                DepthScaleMaxStraight: 1.76,
                DepthScaleMinBreakFree: 1.32,
                DepthScaleMinStraight: 1.1,
                DistanceFar: 16,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.045,
                WidthHalfNear: 1.841
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.65,
                PaintRadiusShock: 1.4
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponRollerRollParam",
        DashFrame: 90,
        InkConsumeMaxPerFrame: 1e-3,
        InkConsumeMinPerFrame: 2e-4,
        InkRecoverStop: 20,
        SpeedDash: 0.132,
        SpeedDashTurnBreak: 0.108,
        SpeedInkConsumeMax: 0.132,
        SpeedInkConsumeMin: 0.02,
        SpeedNormal: 0.108
      },
      WeaponVerticalSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        InkConsume: 0.085,
        InkRecoverStop: 60,
        SwingFrame: 26,
        SwingMoveSpeed: 0.048
      },
      WeaponWideSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          WidthScale: 1.5
        },
        InkConsume: 0.085,
        InkRecoverStop: 45,
        SwingFrame: 21,
        SwingMoveSpeed: 0.048
      },
      WideSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkWideSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 45,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 25,
          Inside: {
            DamageHighDistance: 7.2,
            DamageHighValue: 1e3,
            DamageLowDistance: 7.2,
            DamageLowValue: 1e3,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1500,
            DamageMinDistance: 10.7,
            DamageMinValue: 350,
            Degree: 12,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 350,
            InsideDistanceXZ: 1.2
          },
          Outside: {
            DamageHighDistance: 7.2,
            DamageHighValue: 500,
            DamageLowDistance: 7.2,
            DamageLowValue: 500,
            DamageMaxDistance: 2,
            DamageMaxValue: 1e3,
            DamageMinDistance: 9.2,
            DamageMinValue: 350,
            DamageRate: 1,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 350
          }
        },
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        Unit: [
          {
            BulletNum: 12,
            DepletionBulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.8,
            SpawnSpeedBase: 1.05,
            SpawnSpeedRandom: 0.36,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.6,
                EndRadiusForPlayer: 0.85,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 7,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.6275,
                WidthHalfNear: 1.89
              },
              WallDropCollisionPaintParam: {
                PaintRadiusGround: 0.5
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.4,
            SpawnSpeedBase: 0.48,
            SpawnSpeedRandom: 0.11,
            SpawnWideDegree: 4,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.6,
                EndRadiusForPlayer: 0.85,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 7,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 12,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.6275,
                WidthHalfNear: 1.89
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.65,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.3
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          }
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Roller_Normal_00"
  },
  "1020": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          KnockBackOpponent: {
            AccelMax: 800,
            AccelMin: 420,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 280,
            AccelMin: 280,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 550,
            AccelMin: 410,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 1.4
        },
        Damage: 1250,
        PaintParam: {
          SpeedMax: 0.108,
          WidthHalfMax: 3.4
        },
        SideParam: {
          CheckLength: 1.3,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      KnockBackByCanopyParam: {
        $type: "spl__BulletRollerBodyKnockBackByCanopyParam",
        KnockBackRollerPlayerDamageOff: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        },
        KnockBackRollerPlayerDamageOn: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp",
        High: 1.57,
        Mid: 0.89
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        WeaponSpeedType: "Slow"
      },
      VerticalSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkVerticalSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 65,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 40,
          Inside: {
            DamageHighDistance: 12.87,
            DamageHighValue: 1e3,
            DamageLowDistance: 19.53,
            DamageLowValue: 500,
            DamageMaxDistance: 8.2,
            DamageMaxValue: 1800,
            DamageMinDistance: 20.6,
            DamageMinValue: 400,
            Degree: 5,
            FinalDamageMinValue: 400
          },
          Outside: {
            DamageHighDistance: 12.87,
            DamageHighValue: 1e3,
            DamageLowDistance: 19.53,
            DamageLowValue: 500,
            DamageMaxDistance: 8.2,
            DamageMaxValue: 1800,
            DamageMinDistance: 20.6,
            DamageMinValue: 400,
            DamageRate: 1,
            Degree: 20,
            FinalDamageMinValue: 400
          }
        },
        SpawnSplashBetweenLength: 5.2,
        SpawnSplashFirstLength: 1.5,
        SpawnSplashNum: 6,
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        SplashPaintParam: {
          DepthScaleMax: 3,
          DepthScaleMin: 3,
          WidthHalf: 1.8,
          WidthHalfNearest: 1.8
        },
        Unit: [
          {
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4286,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionOffsetHeight: 1,
            SpawnRotateXDegreeBase: 7.5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 2.0289,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 4,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 1.05,
                EndRadiusForPlayer: 1.05,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.52,
                InitRadius: 0.52
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 30,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 4,
                WidthHalfNear: 3.8
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.8,
                PaintRadiusShock: 1.6
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 2,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4286,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: 0.25,
            SpawnRotateXDegreeBase: 5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.8289,
            SpawnWideDegree: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 4,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 1.05,
                EndRadiusForPlayer: 1.05,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.52,
                InitRadius: 0.52
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 30,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.3,
                WidthHalfNear: 2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.8,
                PaintRadiusShock: 1.6
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 0,
            DepletionSpeedRate: 0.7,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -0.75,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.4289,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 5,
                DepletionRate: 0.5,
                EndRadiusForField: 0.7,
                EndRadiusForPlayer: 0.9,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.52,
                InitRadius: 0.52
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 30,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.3,
                WidthHalfNear: 2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.8,
                PaintRadiusShock: 1.6
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponRollerRollParam",
        DashFrame: 90,
        InkConsumeMaxPerFrame: 1e-3,
        InkConsumeMinPerFrame: 2e-4,
        InkRecoverStop: 20,
        SpeedDash: 0.108,
        SpeedDashTurnBreak: 0.088,
        SpeedInkConsumeMax: 0.108,
        SpeedInkConsumeMin: 0.02,
        SpeedNormal: 0.088
      },
      WeaponVerticalSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        InkConsume: 0.18,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 80,
        SwingFrame: 55,
        SwingMoveSpeed: 0.024
      },
      WeaponWideSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          WidthScale: 2
        },
        InkConsume: 0.18,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 65,
        SwingFrame: 45,
        SwingMoveSpeed: 0.024
      },
      WideSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkWideSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 55,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 30,
          Inside: {
            DamageHighDistance: 10.77,
            DamageHighValue: 1e3,
            DamageLowDistance: 16.49,
            DamageLowValue: 500,
            DamageMaxDistance: 7.2,
            DamageMaxValue: 1800,
            DamageMinDistance: 17.4,
            DamageMinValue: 400,
            Degree: 12,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 400,
            InsideDistanceXZ: 1.2
          },
          Outside: {
            DamageHighDistance: 3.38,
            DamageHighValue: 1e3,
            DamageLowDistance: 9.91,
            DamageLowValue: 500,
            DamageMaxDistance: 0.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 12.2,
            DamageMinValue: 400,
            DamageRate: 1,
            Degree: 20,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 400
          }
        },
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        Unit: [
          {
            BulletNum: 16,
            DepletionBulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.8,
            SpawnSpeedBase: 1.2,
            SpawnSpeedRandom: 0.52,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 5,
                DepletionRate: 0.5,
                EndRadiusForField: 0.8,
                EndRadiusForPlayer: 1.2,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.55,
                InitRadius: 0.55
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.7,
                ChangeWidthEndFrame: 60,
                ChangeWidthStartFrame: 25,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.95,
                WidthHalfNear: 2.1
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.5
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            BulletNum: 2,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.4,
            SpawnSpeedBase: 0.5,
            SpawnSpeedRandom: 0.1,
            SpawnWideDegree: 4,
            SwerveRateBySpeed: 0,
            UnitDamageRate: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.6,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.55,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 8,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.7,
                ChangeWidthEndFrame: 60,
                ChangeWidthStartFrame: 25,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.5,
                WidthHalfNear: 1.8
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.6,
                PaintRadiusGround: 0.35,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 70,
                FallPeriodFirstFrameMin: 50,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          }
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Roller_Heavy_00"
  },
  "1030": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          KnockBackOpponent: {
            AccelMax: 800,
            AccelMin: 420,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 280,
            AccelMin: 280,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 550,
            AccelMin: 410,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 1.4
        },
        Damage: 1250,
        PaintParam: {
          SpeedMax: 0.132,
          WidthHalfMax: 2.6
        },
        SideParam: {
          CheckLength: 1.3,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      KnockBackByCanopyParam: {
        $type: "spl__BulletRollerBodyKnockBackByCanopyParam",
        KnockBackRollerPlayerDamageOff: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        },
        KnockBackRollerPlayerDamageOn: {
          AccelMax: 750,
          AccelMin: 700,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 2e3
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      VerticalSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkVerticalSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 65,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 40,
          Inside: {
            DamageHighDistance: 9.7,
            DamageHighValue: 1e3,
            DamageLowDistance: 9.7,
            DamageLowValue: 1e3,
            DamageMaxDistance: 5.2,
            DamageMaxValue: 1500,
            DamageMinDistance: 14.5,
            DamageMinValue: 400,
            Degree: 5,
            FinalDamageMinValue: 400
          },
          Outside: {
            DamageHighDistance: 9.7,
            DamageHighValue: 1e3,
            DamageLowDistance: 9.7,
            DamageLowValue: 1e3,
            DamageMaxDistance: 5.2,
            DamageMaxValue: 1500,
            DamageMinDistance: 14.5,
            DamageMinValue: 400,
            DamageRate: 1,
            Degree: 20,
            FinalDamageMinValue: 400
          }
        },
        SpawnSplashBetweenLength: 4.5,
        SpawnSplashFirstLength: 1.2,
        SpawnSplashNum: 5,
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        SplashPaintParam: {
          DepthScaleMax: 2.8,
          DepthScaleMin: 2.8,
          WidthHalf: 1.512,
          WidthHalfNearest: 1.512
        },
        Unit: [
          {
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4286,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionOffsetHeight: 1,
            SpawnRotateXDegreeBase: 7.5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.7026,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 4,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 1.05,
                EndRadiusForPlayer: 1.05,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.48,
                InitRadius: 0.48
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 4.1,
                WidthHalfNear: 3.9
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.8,
                PaintRadiusShock: 1.6
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 2,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4286,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: 0.25,
            SpawnRotateXDegreeBase: 5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.5026,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 4,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 1.05,
                EndRadiusForPlayer: 1.05,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.48,
                InitRadius: 0.48
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.65,
                WidthHalfNear: 2.2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.8,
                PaintRadiusShock: 1.6
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 0,
            DepletionSpeedRate: 0.7,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: 0,
            SpawnSpeedBase: 1.1026,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 5,
                DepletionRate: 0.5,
                EndRadiusForField: 0.7,
                EndRadiusForPlayer: 0.9,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.48,
                InitRadius: 0.48
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.2,
                WidthHalfNear: 1.8
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.8,
                PaintRadiusShock: 1.6
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnSpeed: 0,
            BulletNum: 6,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0,
            FourPetalsPetalRadiusRate: 0,
            PaintOnly: true,
            SpawnPositionHeight: 1,
            SpawnPositionRandomCube: 0,
            SpawnRotateYDegree: 18,
            SpawnSpeedBase: 0.85,
            SpawnSpeedRandom: 0.6,
            SpawnSplash: false,
            SpawnWideDegree: 4,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 1,
                DepletionRate: 0.5,
                EndRadiusForField: 0.7,
                EndRadiusForPlayer: 0,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.08,
                InitRadius: 0.08
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.05,
                WidthHalfNear: 0.8
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.45,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 18,
                FallPeriodFirstTargetSpeed: 0.03,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 15,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          },
          {
            BulletNum: 6,
            DepletionSpeedRate: 0.7,
            PaintOnly: true,
            SpawnPositionHeight: 1,
            SpawnRotateYDegree: -18,
            SpawnSpeedBase: 0.85,
            SpawnSpeedRandom: 0.6,
            SpawnSplash: false,
            SpawnWideDegree: -4,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                DepletionRate: 0.5,
                EndRadiusForField: 0.7,
                EndRadiusForPlayer: 0,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.08,
                InitRadius: 0.08
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 9,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.6,
                DepthScaleMaxStraight: 1.6,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.05,
                WidthHalfNear: 0.8
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.8,
                PaintRadiusGround: 0.45,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 18,
                FallPeriodFirstTargetSpeed: 0.03,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 15,
                FallPeriodSecondTargetSpeed: 0.08
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponRollerRollParam",
        DashFrame: 60,
        InkConsumeMaxPerFrame: 1e-3,
        InkConsumeMinPerFrame: 2e-4,
        InkRecoverStop: 20,
        SpeedDash: 0.132,
        SpeedDashTurnBreak: 0.108,
        SpeedInkConsumeMax: 0.132,
        SpeedInkConsumeMin: 0.02,
        SpeedNormal: 0.108
      },
      WeaponVerticalSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        InkConsume: 0.12,
        InkRecoverStop: 70,
        SwingFrame: 42,
        SwingMoveSpeed: 0.08
      },
      WeaponWideSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 7,
          WidthScale: 1.3
        },
        InkConsume: 0.08,
        InkRecoverStop: 45,
        SwingFrame: 19,
        SwingMoveSpeed: 0.072
      },
      WideSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkWideSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 44,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 24,
          Inside: {
            DamageHighDistance: 7.2,
            DamageHighValue: 1e3,
            DamageLowDistance: 7.2,
            DamageLowValue: 1e3,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 1500,
            DamageMinDistance: 10.96923,
            DamageMinValue: 300,
            Degree: 12,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 300,
            InsideDistanceXZ: 1.2
          },
          Outside: {
            DamageHighDistance: 6.2,
            DamageHighValue: 500,
            DamageLowDistance: 6.2,
            DamageLowValue: 500,
            DamageMaxDistance: 2,
            DamageMaxValue: 1e3,
            DamageMinDistance: 8.2,
            DamageMinValue: 300,
            DamageRate: 1,
            Degree: 25,
            FinalDamageMinValue: 300
          }
        },
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        Unit: [
          {
            BulletNum: 10,
            DepletionBulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.6,
            SpawnSpeedBase: 0.94,
            SpawnSpeedRandom: 0.24,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.52,
                EndRadiusForPlayer: 0.76,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 7,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.28,
                WidthHalfNear: 1.58
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.3,
            SpawnSpeedBase: 0.42,
            SpawnSpeedRandom: 0.09,
            SpawnWideDegree: 6,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.52,
                EndRadiusForPlayer: 0.76,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 7,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.28,
                WidthHalfNear: 1.58
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Roller_Hunter_00"
  },
  "1040": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          KnockBackOpponent: {
            AccelMax: 800,
            AccelMin: 420,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 280,
            AccelMin: 280,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 550,
            AccelMin: 410,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 2.1
        },
        Damage: 700,
        PaintParam: {
          Depth: 1.5,
          SpeedMax: 0.142,
          WidthAddWallCut: 0.4,
          WidthHalfMax: 3.4
        },
        SideParam: {
          CheckLength: 1.3,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp",
        Mid: 0.37
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Mid"
      },
      VerticalSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkVerticalSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 65,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 40,
          Inside: {
            DamageHighDistance: 6.7,
            DamageHighValue: 1e3,
            DamageLowDistance: 9.7,
            DamageLowValue: 500,
            DamageMaxDistance: 5.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 13.2,
            DamageMinValue: 400,
            Degree: 5,
            DepletionDamageRate: 0.5,
            FinalDamageMinValue: 400,
            InsideDistanceXZ: 0
          },
          Outside: {
            DamageHighDistance: 6.7,
            DamageHighValue: 1e3,
            DamageLowDistance: 9.7,
            DamageLowValue: 500,
            DamageMaxDistance: 5.2,
            DamageMaxValue: 1200,
            DamageMinDistance: 13.2,
            DamageMinValue: 400,
            DamageRate: 1,
            Degree: 20,
            DepletionDamageRate: 0.5,
            FinalDamageMinValue: 400
          }
        },
        SpawnSplashBetweenLength: 4.5,
        SpawnSplashFirstLength: 1.2,
        SpawnSplashNum: 5,
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        SplashPaintParam: {
          DepthScaleMax: 3,
          DepthScaleMin: 3,
          WidthHalf: 1.25,
          WidthHalfNearest: 1.25
        },
        Unit: [
          {
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4286,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionHeight: 0,
            SpawnPositionOffsetHeight: 0.5,
            SpawnRotateXDegreeBase: 7.5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 2.2749,
            SpawnWideDegree: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 4,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.65,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 2.6,
                WidthHalfNear: 2.2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.65,
                PaintRadiusShock: 1.4
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 2,
            DepletionBulletNum: 2,
            DepletionSpeedRate: 0.7,
            FourPetalsCenterRadiusRate: 0.4286,
            FourPetalsPetalRadiusRate: 0.3333,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -0.25,
            SpawnRotateXDegreeBase: 5,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 2.0749,
            SpawnSpeedRandom: 0,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 4,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.65,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.75,
                WidthHalfNear: 1.45
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.65,
                PaintRadiusShock: 1.4
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          },
          {
            AfterOffsetSpawnRotateXDegree: -2.5,
            AfterOffsetSpawnSpeed: -0.2,
            BulletNum: 3,
            DepletionBulletNum: 0,
            DepletionSpeedRate: 0.7,
            SpawnPositionHeight: 0.25,
            SpawnPositionOffsetHeight: -1.25,
            SpawnRotateYDegree: 0,
            SpawnSpeedBase: 1.6749,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 5,
                DepletionRate: 0.5,
                EndRadiusForField: 0.65,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 6,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 65,
                ChangeWidthStartFrame: 40,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 20,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.75,
                WidthHalfNear: 1.45
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.65,
                PaintRadiusShock: 1.4
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.08,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.1
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponRollerRollParam",
        DashFrame: 30,
        InkConsumeMaxPerFrame: 5e-4,
        InkConsumeMinPerFrame: 1e-4,
        InkRecoverStop: 20,
        SpeedDash: 0.142,
        SpeedDashTurnBreak: 0.118,
        SpeedInkConsumeMax: 0.142,
        SpeedInkConsumeMin: 0.02,
        SpeedNormal: 0.118
      },
      WeaponVerticalSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        InkConsume: 0.1,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 50,
        SwingFrame: 20,
        SwingMoveSpeed: 0.072
      },
      WeaponWideSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 7,
          WidthScale: 1.2
        },
        InkConsume: 0.1,
        InkConsumeRateDepletion: 0.5,
        InkRecoverStop: 45,
        SubWeaponSquidDelayFrm: 8,
        SwingFrame: 18,
        SwingMoveSpeed: 0.072
      },
      WideSwingUnitGroupParam: {
        $type: "spl__BulletRollerInkWideSwingUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 55,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 30,
          Inside: {
            DamageHighDistance: 6.2,
            DamageHighValue: 500,
            DamageLowDistance: 6.2,
            DamageLowValue: 500,
            DamageMaxDistance: 4.2,
            DamageMaxValue: 700,
            DamageMinDistance: 8.2,
            DamageMinValue: 350,
            Degree: 12,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 350,
            InsideDistanceXZ: 1.2
          },
          Outside: {
            DamageHighDistance: 5.7,
            DamageHighValue: 500,
            DamageLowDistance: 5.7,
            DamageLowValue: 500,
            DamageMaxDistance: 2,
            DamageMaxValue: 700,
            DamageMinDistance: 7.7,
            DamageMinValue: 350,
            DamageRate: 1,
            Degree: 25,
            DepletionDamageRate: 0.25,
            FinalDamageMinValue: 350
          }
        },
        SplashNearestParam: {
          SpawnParam: {
            MaxHeight: 0.2,
            Offset: {
              X: 0,
              Y: -2,
              Z: 0.5
            },
            PaintDepthScale: 1.5,
            PaintWidthHalf: 1.5
          }
        },
        Unit: [
          {
            BulletNum: 8,
            DepletionBulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 1.9,
            SpawnSpeedBase: 1.1,
            SpawnSpeedRandom: 0.2,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 5,
                DepletionRate: 0.5,
                EndRadiusForField: 0.8,
                EndRadiusForPlayer: 1.2,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.35,
                InitRadius: 0.35
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 8,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DistanceFar: 15,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.85,
                WidthHalfNear: 2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.65,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.3
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            BulletNum: 5,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 1.8,
            SpawnSpeedBase: 0.75,
            SpawnSpeedRandom: 0.15,
            SpawnWideDegree: 12,
            SwerveRateBySpeed: 0.05,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.7,
                EndRadiusForPlayer: 0.8,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.35,
                InitRadius: 0.35
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 8,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 15,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.85,
                WidthHalfNear: 2
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.65,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.3
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          },
          {
            BulletNum: 3,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 1.2,
            SpawnSpeedBase: 0.4,
            SpawnSpeedRandom: 0.05,
            SpawnWideDegree: 8,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.6,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                ChangeFrame: 0,
                EndRadius: 0.3,
                InitRadius: 0.3
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 8,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMax: 10,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.4,
                DepthScaleMaxStraight: 2.4,
                DepthScaleMinBreakFree: 1.2,
                DepthScaleMinStraight: 1,
                DistanceFar: 15,
                HeightUseDepthScaleMaxBreakFree: 1.5,
                HeightUseDepthScaleMinBreakFree: 10,
                WidthHalfFar: 1.5,
                WidthHalfNear: 1.7
              },
              WallDropCollisionPaintParam: {
                FallPeriodFirstSecondTargetAlp: 1,
                PaintRadiusFall: 0.65,
                PaintRadiusGround: 0.5,
                PaintRadiusShock: 1.3
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Roller_Wide_00"
  },
  "1100": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          DownRayCastLength: 0.65,
          KnockBackDefeat: true,
          KnockBackOpponent: {
            AccelMax: 1e3,
            AccelMin: 500,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 350,
            AccelMin: 350,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 720,
            AccelMin: 540,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 0.8
        },
        Damage: 200,
        PaintParam: {
          SpeedMax: 0.192,
          SpeedMin: 0.12,
          WidthHalfMax: 0.6,
          WidthHalfMin: 0.6
        },
        SideParam: {
          CheckLength: 0.52,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 12.5
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      SwingUnitGroupParam: {
        $type: "spl__BulletRollerBrushInkUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 40,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 20,
          Inside: {
            DamageHighDistance: 6.8,
            DamageHighValue: 250,
            DamageLowDistance: 10.3,
            DamageLowValue: 150,
            DamageMaxDistance: 4.3,
            DamageMaxValue: 300,
            DamageMinDistance: 10.3,
            DamageMinValue: 150,
            Degree: 60,
            FinalDamageMinValue: 150,
            InsideDistanceXZ: 0
          },
          Outside: {
            DamageHighDistance: 6.8,
            DamageHighValue: 250,
            DamageLowDistance: 10.3,
            DamageLowValue: 150,
            DamageMaxDistance: 4.3,
            DamageMaxValue: 300,
            DamageMinDistance: 10.3,
            DamageMinValue: 150,
            DamageRate: 1,
            Degree: 80,
            FinalDamageMinValue: 150
          }
        },
        SplashNearestParam: {
          LoopNum: 6,
          OrderNum: 2,
          SpawnParam: {
            MaxHeight: 1e3,
            Offset: {
              X: -0.2,
              Y: -1,
              Z: 0.2
            },
            PaintWidthHalf: 1.5,
            Visible: true
          }
        },
        Unit: [
          {
            AddSpawnSpeedYRateBySpeed: -0.02,
            BulletNum: 2,
            DepletionBulletNum: 1,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.05,
            SpawnRotateYDegreeLeftToRight: -10,
            SpawnRotateYDegreeRightToLeft: 10,
            SpawnSpeedBase: 0.72,
            SpawnSpeedRandom: 0.12,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 0.8,
                EndRadiusForPlayer: 1.2,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.35,
                InitRadius: 0.35
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 7,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 18,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.2,
                DepthScaleMaxStraight: 2.2,
                DepthScaleMinBreakFree: 1.4,
                DepthScaleMinStraight: 1.4,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 2,
                HeightUseDepthScaleMinBreakFree: 8,
                WidthHalfFar: 2.551,
                WidthHalfNear: 2.551
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.55,
                PaintRadiusShock: 1.44
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 90,
                FallPeriodFirstFrameMin: 70,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.075
              }
            }
          },
          {
            AddSpawnSpeedYRateBySpeed: -0.02,
            BulletNum: 1,
            DepletionSpeedRate: 0.5,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.05,
            SpawnRotateYDegreeLeftToRight: -10,
            SpawnRotateYDegreeRightToLeft: 10,
            SpawnSpeedBase: 0.45,
            SpawnSpeedRandom: 0.12,
            SpawnWideDegree: 22,
            SwerveRateBySpeed: 0.3,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.4,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.35,
                InitRadius: 0.2
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 4,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 18,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.2,
                DepthScaleMaxStraight: 2.2,
                DepthScaleMinBreakFree: 1.4,
                DepthScaleMinStraight: 1.4,
                DistanceFar: 5,
                DistanceNear: 1,
                HeightUseDepthScaleMaxBreakFree: 2,
                HeightUseDepthScaleMinBreakFree: 8,
                WidthHalfFar: 1.814,
                WidthHalfNear: 1.814
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponBrushRollParam",
        InkConsumeMaxPerFrame: 135e-5,
        InkConsumeMinPerFrame: 135e-5,
        NoOpInkEffect: true,
        SpeedInkConsumeMax: 0.192,
        SpeedInkConsumeMin: 0.192,
        SpeedNormal: 0.192,
        SwingRepeatFrame: 6,
        ToPaintFrame: 12
      },
      WeaponSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 8,
          WidthScale: 1.2
        },
        InkConsume: 0.02,
        InkRecoverStop: 30,
        SwingFrame: 1,
        SwingMoveSpeed: 0.05
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Brush_Mini_00"
  },
  "1101": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          DownRayCastLength: 0.65,
          KnockBackDefeat: true,
          KnockBackOpponent: {
            AccelMax: 1e3,
            AccelMin: 500,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 350,
            AccelMin: 350,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 720,
            AccelMin: 540,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 0.8
        },
        Damage: 200,
        PaintParam: {
          SpeedMax: 0.192,
          SpeedMin: 0.12,
          WidthHalfMax: 0.6,
          WidthHalfMin: 0.6
        },
        SideParam: {
          CheckLength: 0.52,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 12.5
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      SwingUnitGroupParam: {
        $type: "spl__BulletRollerBrushInkUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 40,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 20,
          Inside: {
            DamageHighDistance: 6.8,
            DamageHighValue: 250,
            DamageLowDistance: 10.3,
            DamageLowValue: 150,
            DamageMaxDistance: 4.3,
            DamageMaxValue: 300,
            DamageMinDistance: 10.3,
            DamageMinValue: 150,
            Degree: 60,
            FinalDamageMinValue: 150,
            InsideDistanceXZ: 0
          },
          Outside: {
            DamageHighDistance: 6.8,
            DamageHighValue: 250,
            DamageLowDistance: 10.3,
            DamageLowValue: 150,
            DamageMaxDistance: 4.3,
            DamageMaxValue: 300,
            DamageMinDistance: 10.3,
            DamageMinValue: 150,
            DamageRate: 1,
            Degree: 80,
            FinalDamageMinValue: 150
          }
        },
        SplashNearestParam: {
          LoopNum: 6,
          OrderNum: 2,
          SpawnParam: {
            MaxHeight: 1e3,
            Offset: {
              X: -0.2,
              Y: -1,
              Z: 0.2
            },
            PaintWidthHalf: 1.5,
            Visible: true
          }
        },
        Unit: [
          {
            AddSpawnSpeedYRateBySpeed: -0.02,
            BulletNum: 2,
            DepletionBulletNum: 1,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.05,
            SpawnRotateYDegreeLeftToRight: -10,
            SpawnRotateYDegreeRightToLeft: 10,
            SpawnSpeedBase: 0.72,
            SpawnSpeedRandom: 0.12,
            SpawnWideDegree: 18,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 0.8,
                EndRadiusForPlayer: 1.2,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.35,
                InitRadius: 0.35
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 7,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 18,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.2,
                DepthScaleMaxStraight: 2.2,
                DepthScaleMinBreakFree: 1.4,
                DepthScaleMinStraight: 1.4,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 2,
                HeightUseDepthScaleMinBreakFree: 8,
                WidthHalfFar: 2.551,
                WidthHalfNear: 2.551
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusGround: 0.55,
                PaintRadiusShock: 1.44
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 90,
                FallPeriodFirstFrameMin: 70,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.075
              }
            }
          },
          {
            AddSpawnSpeedYRateBySpeed: -0.02,
            BulletNum: 1,
            DepletionSpeedRate: 0.5,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.05,
            SpawnRotateYDegreeLeftToRight: -10,
            SpawnRotateYDegreeRightToLeft: 10,
            SpawnSpeedBase: 0.45,
            SpawnSpeedRandom: 0.12,
            SpawnWideDegree: 22,
            SwerveRateBySpeed: 0.3,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 1,
                ChangeFrameForPlayer: 3,
                DepletionRate: 0.5,
                EndRadiusForField: 0.4,
                EndRadiusForPlayer: 0.6,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.35,
                InitRadius: 0.2
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 4,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 45,
                ChangeWidthStartFrame: 18,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 2.2,
                DepthScaleMaxStraight: 2.2,
                DepthScaleMinBreakFree: 1.4,
                DepthScaleMinStraight: 1.4,
                DistanceFar: 5,
                DistanceNear: 1,
                HeightUseDepthScaleMaxBreakFree: 2,
                HeightUseDepthScaleMinBreakFree: 8,
                WidthHalfFar: 1.814,
                WidthHalfNear: 1.814
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponBrushRollParam",
        InkConsumeMaxPerFrame: 135e-5,
        InkConsumeMinPerFrame: 135e-5,
        NoOpInkEffect: true,
        SpeedInkConsumeMax: 0.192,
        SpeedInkConsumeMin: 0.192,
        SpeedNormal: 0.192,
        SwingRepeatFrame: 6,
        ToPaintFrame: 12
      },
      WeaponSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 8,
          WidthScale: 1.2
        },
        InkConsume: 0.02,
        InkRecoverStop: 30,
        SwingFrame: 1,
        SwingMoveSpeed: 0.05
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Brush_Mini_01"
  },
  "1110": {
    GameParameters: {
      BodyParam: {
        $type: "spl__BulletRollerBodyParam",
        CollisionParam: {
          DownRayCastLength: 0.5,
          KnockBackDefeat: true,
          KnockBackOpponent: {
            AccelMax: 1e3,
            AccelMin: 500,
            MyVelocityRate: 30,
            OpponentVelocityRate: 4800
          },
          KnockBackRollerPlayerDamageOff: {
            AccelMax: 350,
            AccelMin: 350,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          KnockBackRollerPlayerDamageOn: {
            AccelMax: 720,
            AccelMin: 540,
            MyVelocityRate: 4800,
            OpponentVelocityRate: 30
          },
          WidthHalf: 0.8
        },
        Damage: 250,
        PaintParam: {
          SpeedMax: 0.132,
          WidthHalfMax: 0.9,
          WidthHalfMin: 0.9
        },
        SideParam: {
          CheckLength: 1,
          Radius: 0.75
        }
      },
      BulletAdditionMovePlayerSplashNearestParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.3,
        YPlusRate: 0,
        ZRate: 0.3
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 10.5
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      SwingUnitGroupParam: {
        $type: "spl__BulletRollerBrushInkUnitGroupParam",
        DamageParam: {
          DamageRejectEndFrame: 45,
          DamageRejectRate: 0.5,
          DamageRejectStartFrame: 24,
          Inside: {
            DamageHighDistance: 14.3,
            DamageHighValue: 200,
            DamageLowDistance: 14.3,
            DamageLowValue: 200,
            DamageMaxDistance: 3.3,
            DamageMaxValue: 400,
            DamageMinDistance: 14.3,
            DamageMinValue: 200,
            Degree: 60,
            InsideDistanceXZ: 0
          },
          Outside: {
            DamageHighDistance: 14.3,
            DamageHighValue: 200,
            DamageLowDistance: 14.3,
            DamageLowValue: 200,
            DamageMaxDistance: 3.3,
            DamageMaxValue: 400,
            DamageMinDistance: 14.3,
            DamageRate: 1,
            Degree: 80
          }
        },
        SplashNearestParam: {
          LoopNum: 6,
          OrderNum: 2,
          SpawnParam: {
            Offset: {
              X: -0.2,
              Y: -1,
              Z: 0.6
            },
            PaintWidthHalf: 2,
            Visible: true
          }
        },
        Unit: [
          {
            AddSpawnSpeedYRateBySpeed: -0.02,
            BulletNum: 3,
            DepletionBulletNum: 1,
            DepletionSpeedRate: 0.5,
            SpawnPositionOffsetHeight: 0,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.05,
            SpawnRotateYDegreeRightToLeft: 5,
            SpawnSpeedBase: 0.84,
            SpawnSpeedRandom: 0.13,
            SpawnWideDegree: 24,
            SwerveRateBySpeed: 0.1,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 3,
                ChangeFrameForPlayer: 6,
                DepletionRate: 0.5,
                EndRadiusForField: 0.8,
                EndRadiusForPlayer: 1.2,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.4,
                InitRadius: 0.4
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 8,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.8,
                DepthScaleMaxStraight: 1.8,
                DepthScaleMinBreakFree: 1.4,
                DepthScaleMinStraight: 1.4,
                DistanceNear: 10,
                HeightUseDepthScaleMaxBreakFree: 2,
                HeightUseDepthScaleMinBreakFree: 8,
                WidthHalfFar: 2.028,
                WidthHalfNear: 2.028
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.7,
                PaintRadiusShock: 1.68
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 90,
                FallPeriodFirstFrameMin: 70,
                FallPeriodFirstTargetSpeed: 0.06,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.075
              }
            }
          },
          {
            AddSpawnSpeedYRateBySpeed: -0.02,
            BulletNum: 2,
            DepletionSpeedRate: 0.5,
            SpawnPositionRandomCube: 0.1,
            SpawnPositionWidth: 0.05,
            SpawnSpeedBase: 0.5,
            SpawnSpeedRandom: 0.26,
            SpawnWideDegree: 20,
            SwerveRateBySpeed: 0.2,
            UnitParam: {
              CollisionParam: {
                ChangeFrameForField: 2,
                ChangeFrameForPlayer: 4,
                DepletionRate: 0.5,
                EndRadiusForField: 0.6,
                EndRadiusForPlayer: 0.8,
                FriendThroughFrameForPlayer: 3,
                InitRadiusForField: 0.1,
                InitRadiusForPlayer: 0.1
              },
              DrawSizeParam: {
                EndRadius: 0.2,
                InitRadius: 0.2
              },
              MoveParam: {
                FreeAirResist: 0.1,
                FreeGravity: 0.04,
                GoStraightToBrakeStateFrame: 5,
                SpawnSpeed: 0
              },
              PaintParam: {
                ChangeFrameWidthRate: 0.6,
                ChangeWidthEndFrame: 50,
                ChangeWidthStartFrame: 20,
                DegreeUseDepthScaleMin: 50,
                DepletionDepthWidthRate: 0.5,
                DepthScaleMaxBreakFree: 1.8,
                DepthScaleMaxStraight: 1.8,
                DepthScaleMinBreakFree: 1.4,
                DepthScaleMinStraight: 1.4,
                DistanceFar: 5,
                DistanceNear: 1.2,
                HeightUseDepthScaleMaxBreakFree: 2,
                HeightUseDepthScaleMinBreakFree: 8,
                WidthHalfFar: 1.465,
                WidthHalfNear: 1.014
              },
              WallDropCollisionPaintParam: {
                PaintRadiusFall: 0.5,
                PaintRadiusGround: 0.4,
                PaintRadiusShock: 1.2
              },
              WallDropMoveParam: {
                FallPeriodFirstFrameMax: 80,
                FallPeriodFirstFrameMin: 60,
                FallPeriodFirstTargetSpeed: 0.05,
                FallPeriodLastFrameMax: 35,
                FallPeriodLastFrameMin: 20,
                FallPeriodSecondFrame: 5,
                FallPeriodSecondTargetSpeed: 0.07
              }
            }
          }
        ]
      },
      WeaponRollParam: {
        $type: "spl__WeaponBrushRollParam",
        InkConsumeMaxPerFrame: 162e-5,
        InkConsumeMinPerFrame: 162e-5
      },
      WeaponSwingParam: {
        $type: "spl__WeaponRollerSwingParam",
        GuideParam: {
          Frame: 10,
          WidthScale: 1.7
        },
        InkConsume: 0.032,
        InkRecoverStop: 30,
        SwingFrame: 1,
        SwingMoveSpeed: 0.03
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Brush_Normal_00"
  },
  "2000": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.1,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.1
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 1400,
        ValueMaxCharge: 800,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 16.765,
        DistanceMaxCharge: 16.765,
        DistanceMinCharge: 9.261,
        SpawnSpeedFullCharge: 3.6,
        SpawnSpeedMaxCharge: 3.6,
        SpawnSpeedMinCharge: 2.4
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 3.845,
        RadiusMaxCharge: 3.204,
        RadiusMinCharge: 1.068
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 1.85,
        DepthHalfMaxCharge: 1.85,
        DepthHalfMinCharge: 3.2375,
        LastSplashRateFullCharge: 1.5,
        LastSplashRateMaxCharge: 1.5,
        LastSplashRateMinCharge: 1.5,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.85,
        WidthHalfMaxCharge: 1.85,
        WidthHalfMinCharge: 0.925
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.25,
        OnTopRateMaxCharge: 0.225,
        OnTopRateMinCharge: 0.125,
        SkipNum: 1,
        SpawnNearestMaxOffsetXZ: 2.2
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        SpawnParam: {
          SpawnMaxChargeFrame: 36
        },
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponKeepChargeParam: {
        $type: "spl__WeaponKeepChargeParam",
        KeepChargeFullFrame: 75,
        KeepChargePreDelayFrame: 19,
        KeepChargePreDelayFrame_Pre: 14,
        MuzzleLocalPos: {
          X: -0.314,
          Y: 0.2055,
          Z: 1.8
        }
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        AirChargeRateByInkEmpty: 4,
        ChargeFrameFullCharge: 45,
        ChargeFrameMinCharge: 8,
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.105,
        InkConsumeMinCharge: 0.018667,
        InkEmptyChargeTimes: 4,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveJumpDownStartChargeRate: 0.2,
        MoveSpeedFullCharge: 0.03
      }
    },
    WeaponName: "Charger_Quick_00"
  },
  "2010": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.1,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.1
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 1600,
        ValueMaxCharge: 800,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 24.037,
        DistanceMaxCharge: 24.037,
        DistanceMinCharge: 9.033,
        SpawnSpeedFullCharge: 4.8,
        SpawnSpeedMaxCharge: 4.8,
        SpawnSpeedMinCharge: 2.4
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 3.263,
        RadiusMaxCharge: 2.719,
        RadiusMinCharge: 0.906
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 1.56,
        DepthHalfMaxCharge: 1.56,
        DepthHalfMinCharge: 2.73,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.56,
        WidthHalfMaxCharge: 1.56,
        WidthHalfMinCharge: 0.78
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.34,
        OnTopRateMaxCharge: 0.25,
        OnTopRateMinCharge: 0.125,
        SkipNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponKeepChargeParam: {
        $type: "spl__WeaponKeepChargeParam",
        KeepChargeFullFrame: 75,
        KeepChargePreDelayFrame: 23,
        KeepChargePreDelayFrame_Pre: 18,
        MuzzleLocalPos: {
          X: -0.314,
          Y: 0.2105,
          Z: 2.0176
        }
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.18,
        InkConsumeMinCharge: 0.0225,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.02
      },
      spl__WeaponChargerGuideShapeParam: {
        $type: "spl__WeaponChargerGuideShapeParam"
      }
    },
    WeaponName: "Charger_Normal_00"
  },
  "2020": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.1,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.1
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 1600,
        ValueMaxCharge: 800,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 26.037,
        DistanceMaxCharge: 24.037,
        DistanceMinCharge: 9.033,
        SpawnSpeedFullCharge: 4.8,
        SpawnSpeedMaxCharge: 4.8,
        SpawnSpeedMinCharge: 2.4
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 3.085,
        RadiusMaxCharge: 2.719,
        RadiusMinCharge: 0.906
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 1.4825,
        DepthHalfMaxCharge: 1.56,
        DepthHalfMinCharge: 2.73,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.4825,
        WidthHalfMaxCharge: 1.56,
        WidthHalfMinCharge: 0.78
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.34,
        OnTopRateMaxCharge: 0.25,
        OnTopRateMinCharge: 0.125
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.18,
        InkConsumeMinCharge: 0.0225,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.02
      },
      WeaponScopeParam: {
        $type: "spl__WeaponScopeParam"
      }
    },
    WeaponName: "Charger_NormalScope_00"
  },
  "2030": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.1,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.1
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 1800,
        ValueMaxCharge: 800,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        WeaponSpeedType: "Slow"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 29.05,
        DistanceMaxCharge: 29.05,
        DistanceMinCharge: 9.045,
        SpawnSpeedFullCharge: 9.6,
        SpawnSpeedMaxCharge: 6.4,
        SpawnSpeedMinCharge: 2.4
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 3.845,
        RadiusMaxCharge: 3.204,
        RadiusMinCharge: 1.068
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 1.85,
        DepthHalfMaxCharge: 1.85,
        DepthHalfMinCharge: 3.2375,
        LastSplashRateFullCharge: 1.5,
        LastSplashRateMaxCharge: 1.5,
        LastSplashRateMinCharge: 1.5,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.85,
        WidthHalfMaxCharge: 1.85,
        WidthHalfMinCharge: 0.925
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.34,
        OnTopRateMaxCharge: 0.25,
        OnTopRateMinCharge: 0.125,
        SkipNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponKeepChargeParam: {
        $type: "spl__WeaponKeepChargeParam",
        KeepChargeFullFrame: 75,
        KeepChargePreDelayFrame: 23,
        KeepChargePreDelayFrame_Pre: 18,
        MuzzleLocalPos: {
          X: -0.314,
          Y: 0.243,
          Z: 2.0175
        }
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        ChargeFrameFullCharge: 92,
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.25,
        InkConsumeMinCharge: 0.0225,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.015
      }
    },
    WeaponName: "Charger_Long_00"
  },
  "2040": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.1,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.1
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 1800,
        ValueMaxCharge: 800,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        WeaponSpeedType: "Slow"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 31.05,
        DistanceMaxCharge: 29.05,
        DistanceMinCharge: 9.045,
        SpawnSpeedFullCharge: 9.6,
        SpawnSpeedMaxCharge: 6.4,
        SpawnSpeedMinCharge: 2.4
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 3.69,
        RadiusMaxCharge: 3.204,
        RadiusMinCharge: 1.068
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 1.7725,
        DepthHalfMaxCharge: 1.848717,
        DepthHalfMinCharge: 3.232154,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.7725,
        WidthHalfMaxCharge: 1.848717,
        WidthHalfMinCharge: 0.9234725
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.34,
        OnTopRateMaxCharge: 0.25,
        OnTopRateMinCharge: 0.125,
        SkipNum: 1
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        ChargeFrameFullCharge: 92,
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.25,
        InkConsumeMinCharge: 0.0225,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.015
      },
      WeaponScopeParam: {
        $type: "spl__WeaponScopeParam",
        CameraFovy: 20
      }
    },
    WeaponName: "Charger_LongScope_00"
  },
  "2050": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.2,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 850,
        ValueMaxCharge: 850,
        ValueMinCharge: 300
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 19.564,
        DistanceMaxCharge: 19.564,
        DistanceMinCharge: 19.564,
        SpawnSpeedFullCharge: 4,
        SpawnSpeedMaxCharge: 4,
        SpawnSpeedMinCharge: 4,
        ThroughFullCharge: false
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 2.557,
        RadiusMaxCharge: 2.13,
        RadiusMinCharge: 0.994
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 3.198,
        DepthHalfMaxCharge: 3.198,
        DepthHalfMinCharge: 2.583,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.23,
        WidthHalfMaxCharge: 1.23,
        WidthHalfMinCharge: 0.861
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.7,
        OnTopRateMaxCharge: 0.7,
        OnTopRateMinCharge: 0.466667,
        SkipNum: 3,
        SpawnNearestChargeRate: 1.01
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        SpawnParam: {
          NumMax: 5,
          SpawnMaxChargeFrame: 20
        },
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.5,
          PaintRadiusFallMaxCharge: 0.5,
          PaintRadiusFallMinCharge: 0.34,
          PaintRadiusGround: 0.27,
          PaintRadiusShock: 0.675,
          PaintRadiusShockMaxCharge: 0.675,
          PaintRadiusShockMinCharge: 0.45
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 0.9,
        PaintRadiusFallMaxCharge: 0.9,
        PaintRadiusFallMinCharge: 0.6,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.35,
        PaintRadiusShockMaxCharge: 1.35,
        PaintRadiusShockMinCharge: 1.35
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        AirChargeRateByInkEmpty: 2,
        ChargeFrameFullCharge: 20,
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.07,
        InkConsumeMinCharge: 0.028,
        InkEmptyChargeTimes: 5,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.06
      }
    },
    WeaponName: "Charger_Light_00"
  },
  "2060": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.1,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.1
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 1800,
        ValueMaxCharge: 1300,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 19.804,
        DistanceMaxCharge: 18.804,
        DistanceMinCharge: 12.602,
        SpawnSpeedFullCharge: 4.8,
        SpawnSpeedMaxCharge: 4.8,
        SpawnSpeedMinCharge: 2.4
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 3.949,
        RadiusMaxCharge: 2.797,
        RadiusMinCharge: 1.097
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 1.9,
        DepthHalfMaxCharge: 1.615,
        DepthHalfMinCharge: 3.04,
        LastSplashRateFullCharge: 1.5,
        LastSplashRateMinCharge: 1.5,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.9,
        WidthHalfMaxCharge: 1.615,
        WidthHalfMinCharge: 0.95
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.3,
        OnTopRateMaxCharge: 0.25,
        OnTopRateMinCharge: 0.175,
        SkipNum: 1,
        SpawnNearestMaxOffsetXZ: 2.3
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.04,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.05
      },
      WeaponKeepChargeParam: {
        $type: "spl__WeaponKeepChargeParam",
        EnableKeepChargeAnytime: true,
        EnableKeepChargeTransCancel: true,
        KeepChargeFullFrame: 300,
        KeepChargePreDelayFrame: 15,
        KeepChargePreDelayFrame_Pre: 10,
        MuzzleLocalPos: {
          X: -0.314,
          Y: 0.143,
          Z: 1.46
        }
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        ChargeFrameFullCharge: 75,
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.15,
        InkConsumeMinCharge: 0.02,
        JumpHeightFullCharge: 0.07,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.03
      }
    },
    WeaponName: "Charger_Keeper_00"
  },
  "2070": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.02,
        EndRadiusForPlayer: 0.2,
        InitRadiusForField: 0.02,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletChargerDamageParam",
        ValueFullCharge: 600,
        ValueMaxCharge: 600,
        ValueMinCharge: 400
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletChargerMoveParam",
        DistanceFullCharge: 26.037,
        DistanceMaxCharge: 24.037,
        DistanceMinCharge: 9.033,
        SpawnSpeedFullCharge: 4.8,
        SpawnSpeedMaxCharge: 4.8,
        SpawnSpeedMinCharge: 2.4,
        ThroughFullCharge: false
      },
      PaintParam: {
        $type: "spl__BulletChargerPaintParam",
        RadiusFullCharge: 2.808,
        RadiusMaxCharge: 2.34,
        RadiusMinCharge: 0.78
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashChargerPaintParam",
        DepthHalfFullCharge: 3.2,
        DepthHalfMaxCharge: 1.56,
        DepthHalfMinCharge: 2.73,
        RadiusSpawnNearest: 1.2,
        WidthHalfFullCharge: 1.11,
        WidthHalfMaxCharge: 1.11,
        WidthHalfMinCharge: 0.78
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashChargerSpawnParam",
        OnTopRateFullCharge: 0.18,
        OnTopRateMaxCharge: 0.25,
        OnTopRateMinCharge: 0.125,
        SpawnNearestMaxOffsetXZ: 10
      },
      SplashWallHitParam: {
        $type: "spl__BulletChargerSplashWallHitParam",
        SpawnParam: {
          BetweenDistance: 2.1875,
          FirstDistance: 2.1875,
          NumMax: 5
        },
        WallDropCollisionPaintParam: {
          PaintRadiusFall: 0.675,
          PaintRadiusFallMaxCharge: 0.675,
          PaintRadiusFallMinCharge: 0.45,
          PaintRadiusGround: 0.4,
          PaintRadiusShock: 0.9,
          PaintRadiusShockMaxCharge: 0.9,
          PaintRadiusShockMinCharge: 0.6
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 30,
          FallPeriodFirstFrameMin: 15,
          FallPeriodFirstTargetSpeed: 0.04,
          FallPeriodLastFrameMax: 30,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondTargetSpeed: 0.05
        }
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletChargerWallDropCollisionPaintParam",
        PaintRadiusFall: 1.2,
        PaintRadiusFallMaxCharge: 1.2,
        PaintRadiusFallMinCharge: 0.8,
        PaintRadiusShock: 1.8,
        PaintRadiusShockMaxCharge: 1.8,
        PaintRadiusShockMinCharge: 1.2
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMin: 25,
        FallPeriodFirstTargetSpeed: 0.05,
        FallPeriodLastFrameMax: 30,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponDivideChargerParam: {
        $type: "spl__WeaponDivideChargerParam",
        FullChargeDivideNum: 5,
        MuzzleLocalPos: {
          X: -0.3125,
          Y: 0.2389,
          Z: 2.0409
        }
      },
      WeaponParam: {
        $type: "spl__WeaponChargerParam",
        ChargeFrameFullCharge: 72,
        ChargeFrameMinCharge: 8,
        FreezeFrameFullCharge: 1,
        FreezeFrameMinCharge: 1,
        InkConsumeFullCharge: 0.4,
        InkConsumeMinCharge: 0.0225,
        JumpHeightFullCharge: 0.1,
        MoveJumpDownBias: 0.5,
        MoveSpeedFullCharge: 0.06,
        PostDelayFrame: 15
      }
    },
    WeaponName: "Charger_Pencil_00"
  },
  "3000": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 14
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      NearestParam: {
        $type: "spl__BulletSplashSlosherNearestParam",
        DrawSizeCollisionPaintParam: {
          CollisionParam: {
            EndRadiusForPlayer: 0,
            InitRadiusForPlayer: 0
          },
          PaintDepthScale: 1.2,
          PaintWidthHalf: 1.56
        },
        SpawnOffset: {
          X: 0.25,
          Y: 0
        }
      },
      UnitGroupParam: {
        $type: "spl__BulletSlosherUnitGroupParam",
        Unit: [
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: 0.34,
            AfterPaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.9,
              WidthHalfNear: 1.9
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 0,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0.1,
              AfterOffsetEndRadiusForPlayer: 0.1,
              AfterOffsetInitRadiusForField: 0.01,
              AfterOffsetInitRadiusForPlayer: 0.01,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.6,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.05,
              InitRadiusForPlayer: 0.06
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 700,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0.4,
              AfterOffsetInitRadius: 0.4,
              ChangeFrame: 0,
              EndRadius: 1.2,
              InitRadius: 1.2,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 2,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.2,
              DepthScaleNear: 1.2,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.3,
              WidthHalfNear: 1.3
            },
            RandomRotateYBias: 0.4,
            RandomRotateYDegree: 4.5,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1.14,
            SpawnSpeedGround: 1.22,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [],
              SplashParam: [],
              SplashWallHitParam: []
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: -0.16,
            AfterPaintParam: {
              DepthScaleFar: 1.2,
              DepthScaleNear: 1.3,
              DistanceXZFar: 12,
              DistanceXZNear: 8.5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.92,
              WidthHalfNear: 1.44
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.585
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 4,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.12,
              AfterOffsetEndRadiusForPlayer: -0.12,
              AfterOffsetInitRadiusForField: -0.012,
              AfterOffsetInitRadiusForPlayer: -0.012,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.8,
              EndRadiusForPlayer: 0.85,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.08,
              InitRadiusForPlayer: 0.085
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 700,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -0.03,
              AfterOffsetInitRadius: -0.05,
              ChangeFrame: 0,
              EndRadius: 1,
              InitRadius: 0.5625,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [
              0
            ],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 2,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 3.84,
              WidthHalfNear: 4.44
            },
            RandomRotateYBias: 0.65,
            RandomRotateYDegree: 4.5,
            RandomRotateYOffOrderNum: [
              0
            ],
            SpawnSpeedAir: 1.6852,
            SpawnSpeedGround: 1.7609,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: -1,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 4
                }
              ],
              SplashParam: [],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.3,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.4,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.585
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 2,
            AfterOffsetSpawnSpeed: -0.2,
            AfterPaintParam: {
              DepthScaleFar: 1.4,
              DepthScaleNear: 1.4,
              DistanceXZFar: 8,
              DistanceXZNear: 2,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.14,
              WidthHalfNear: 0.96
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 5,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.05,
              AfterOffsetEndRadiusForPlayer: -0.05,
              AfterOffsetInitRadiusForField: -5e-3,
              AfterOffsetInitRadiusForPlayer: -5e-3,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.4,
              EndRadiusForPlayer: 0.45,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.04,
              InitRadiusForPlayer: 0.045
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 500,
              ValueMin: 250
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -0.1,
              AfterOffsetInitRadius: -0.1,
              ChangeFrame: 0,
              EndRadius: 0.6,
              InitRadius: 0.6,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 2,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.4,
              DepthScaleNear: 1.4,
              DistanceXZFar: 8,
              DistanceXZNear: 2,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.2,
              WidthHalfNear: 1.2
            },
            RandomRotateYBias: 0.65,
            RandomRotateYDegree: 4.5,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1,
            SpawnSpeedGround: 1.1,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 3,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 1
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0
                    },
                    DrawRadius: 0.3,
                    PaintDepthScale: 2,
                    PaintWidthHalf: 0.7
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 0.9,
                    FirstSplashRateForLengthMin: 0.7,
                    SpawnBetweenLength: 1.5,
                    SpawnNum: 1
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.3,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.4,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 4,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          }
        ]
      },
      WeaponParam: {
        $type: "spl__WeaponSlosherParam",
        InkConsume: 0.07,
        InkRecoverStop: 40,
        MoveSpeed: 0.04,
        RepeatFrame: 29,
        ShotGuide: {
          BulletOrderNumInUnit: 0,
          Frame: 13,
          UnitOrderNum: 1
        },
        SwingLiftFrame: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        GuideYMinusZero: true,
        YMinusRate: 1,
        ZRate: 2
      }
    },
    WeaponName: "Slosher_Strong_00"
  },
  "3001": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 14
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      NearestParam: {
        $type: "spl__BulletSplashSlosherNearestParam",
        DrawSizeCollisionPaintParam: {
          CollisionParam: {
            EndRadiusForPlayer: 0,
            InitRadiusForPlayer: 0
          },
          PaintDepthScale: 1.2,
          PaintWidthHalf: 1.56
        },
        SpawnOffset: {
          X: 0.25,
          Y: 0
        }
      },
      UnitGroupParam: {
        $type: "spl__BulletSlosherUnitGroupParam",
        Unit: [
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: 0.34,
            AfterPaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.9,
              WidthHalfNear: 1.9
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 0,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0.1,
              AfterOffsetEndRadiusForPlayer: 0.1,
              AfterOffsetInitRadiusForField: 0.01,
              AfterOffsetInitRadiusForPlayer: 0.01,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.6,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.05,
              InitRadiusForPlayer: 0.06
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 700,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0.4,
              AfterOffsetInitRadius: 0.4,
              ChangeFrame: 0,
              EndRadius: 1.2,
              InitRadius: 1.2,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 2,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.2,
              DepthScaleNear: 1.2,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.3,
              WidthHalfNear: 1.3
            },
            RandomRotateYBias: 0.4,
            RandomRotateYDegree: 4.5,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1.14,
            SpawnSpeedGround: 1.22,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [],
              SplashParam: [],
              SplashWallHitParam: []
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: -0.16,
            AfterPaintParam: {
              DepthScaleFar: 1.2,
              DepthScaleNear: 1.3,
              DistanceXZFar: 12,
              DistanceXZNear: 8.5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.92,
              WidthHalfNear: 1.44
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.585
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 4,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.12,
              AfterOffsetEndRadiusForPlayer: -0.12,
              AfterOffsetInitRadiusForField: -0.012,
              AfterOffsetInitRadiusForPlayer: -0.012,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.8,
              EndRadiusForPlayer: 0.85,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.08,
              InitRadiusForPlayer: 0.085
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 700,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -0.03,
              AfterOffsetInitRadius: -0.05,
              ChangeFrame: 0,
              EndRadius: 1,
              InitRadius: 0.5625,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [
              0
            ],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 2,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 3.84,
              WidthHalfNear: 4.44
            },
            RandomRotateYBias: 0.65,
            RandomRotateYDegree: 4.5,
            RandomRotateYOffOrderNum: [
              0
            ],
            SpawnSpeedAir: 1.6852,
            SpawnSpeedGround: 1.7609,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: -1,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 4
                }
              ],
              SplashParam: [],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.3,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.4,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.585
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 2,
            AfterOffsetSpawnSpeed: -0.2,
            AfterPaintParam: {
              DepthScaleFar: 1.4,
              DepthScaleNear: 1.4,
              DistanceXZFar: 8,
              DistanceXZNear: 2,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.14,
              WidthHalfNear: 0.96
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 5,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.05,
              AfterOffsetEndRadiusForPlayer: -0.05,
              AfterOffsetInitRadiusForField: -5e-3,
              AfterOffsetInitRadiusForPlayer: -5e-3,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.4,
              EndRadiusForPlayer: 0.45,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.04,
              InitRadiusForPlayer: 0.045
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 500,
              ValueMin: 250
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -0.1,
              AfterOffsetInitRadius: -0.1,
              ChangeFrame: 0,
              EndRadius: 0.6,
              InitRadius: 0.6,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 2,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.4,
              DepthScaleNear: 1.4,
              DistanceXZFar: 8,
              DistanceXZNear: 2,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 1.2,
              WidthHalfNear: 1.2
            },
            RandomRotateYBias: 0.65,
            RandomRotateYDegree: 4.5,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1,
            SpawnSpeedGround: 1.1,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 3,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 1
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0
                    },
                    DrawRadius: 0.3,
                    PaintDepthScale: 2,
                    PaintWidthHalf: 0.7
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 0.9,
                    FirstSplashRateForLengthMin: 0.7,
                    SpawnBetweenLength: 1.5,
                    SpawnNum: 1
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.3,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.4,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 4,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          }
        ]
      },
      WeaponParam: {
        $type: "spl__WeaponSlosherParam",
        InkConsume: 0.07,
        InkRecoverStop: 40,
        MoveSpeed: 0.04,
        RepeatFrame: 29,
        ShotGuide: {
          BulletOrderNumInUnit: 0,
          Frame: 13,
          UnitOrderNum: 1
        },
        SwingLiftFrame: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        GuideYMinusZero: true,
        YMinusRate: 1,
        ZRate: 2
      }
    },
    WeaponName: "Slosher_Strong_01"
  },
  "3010": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 11.5
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      NearestParam: {
        $type: "spl__BulletSplashSlosherNearestParam",
        DrawSizeCollisionPaintParam: {
          CollisionParam: {
            EndRadiusForPlayer: 0,
            InitRadiusForPlayer: 0
          },
          PaintDepthScale: 2,
          PaintWidthHalf: 1.296
        },
        SpawnOffset: {
          X: 0.2,
          Y: 0.35
        }
      },
      UnitGroupParam: {
        $type: "spl__BulletSlosherUnitGroupParam",
        Unit: [
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: -0.16,
            AfterPaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 0,
              WidthHalfNear: 0
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 0.8
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 4,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.1,
              AfterOffsetEndRadiusForPlayer: -0.1,
              AfterOffsetInitRadiusForField: -0.01,
              AfterOffsetInitRadiusForPlayer: -0.01,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.7,
              EndRadiusForPlayer: 0.9,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.07,
              InitRadiusForPlayer: 0.09
            },
            DamageParam: {
              ReduceEndFallDistance: 8,
              ReduceStartFallDistance: 1.5,
              ValueMax: 620,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -1.4,
              AfterOffsetInitRadius: -1.4,
              ChangeFrame: 0,
              EndRadius: 1.4,
              InitRadius: 1.4,
              TailID: 0,
              TailLengthMax: 2,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.15,
              DepthScaleNear: 1.15,
              DistanceXZFar: 12,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 3,
              WidthHalfNear: 3.75
            },
            RandomRotateYBias: 0.5,
            RandomRotateYDegree: 3,
            RandomRotateYOffOrderNum: [
              0
            ],
            SpawnSpeedAir: 1.1523,
            SpawnSpeedGround: 1.2229,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: -1,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 3
                }
              ],
              SplashParam: [],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.5,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.2,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 1.8
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 2,
            AfterOffsetSpawnSpeed: -0.25,
            AfterPaintParam: {
              DepthScaleFar: 2.2,
              DepthScaleNear: 2.2,
              DistanceXZFar: 5.8,
              DistanceXZNear: 3.1,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 1.155,
              WidthHalfNear: 1.1
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 0.8
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 3,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.1,
              AfterOffsetEndRadiusForPlayer: -0.1,
              AfterOffsetInitRadiusForField: -0.01,
              AfterOffsetInitRadiusForPlayer: -0.01,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.7,
              EndRadiusForPlayer: 0.8,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.07,
              InitRadiusForPlayer: 0.08
            },
            DamageParam: {
              ReduceEndFallDistance: 8,
              ReduceStartFallDistance: 1.5,
              ValueMax: 620,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -0.1,
              AfterOffsetInitRadius: -0.1,
              ChangeFrame: 0,
              EndRadius: 0.8,
              InitRadius: 0.8,
              TailID: 0,
              TailLengthMax: 2,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 2.2,
              DepthScaleNear: 1.9,
              DistanceXZFar: 8.5,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 1.54,
              WidthHalfNear: 1.76
            },
            RandomRotateYBias: 0.5,
            RandomRotateYDegree: 3,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 0.808,
            SpawnSpeedGround: 0.896,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 2,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 1
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0
                    },
                    DrawRadius: 0.2,
                    PaintDepthScale: 2.6,
                    PaintWidthHalf: 0.94
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 1,
                    FirstSplashRateForLengthMin: 1,
                    SpawnBetweenLength: 2.6,
                    SpawnNum: 1
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.5,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.2,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 2,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 1.8
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 0,
            AfterOffsetSpawnSpeed: -0.2,
            AfterPaintParam: {
              DepthScaleFar: 2,
              DepthScaleNear: 2,
              DistanceXZFar: 8,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 1.045,
              WidthHalfNear: 1.045
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 0.8
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 15,
            BulletNum: 1,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0,
              AfterOffsetEndRadiusForPlayer: 0,
              AfterOffsetInitRadiusForField: 0,
              AfterOffsetInitRadiusForPlayer: 0,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.7,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.05,
              InitRadiusForPlayer: 0.07
            },
            DamageParam: {
              ReduceEndFallDistance: 8,
              ReduceStartFallDistance: 1.5,
              ValueMax: 620,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0,
              AfterOffsetInitRadius: 0,
              ChangeFrame: 0,
              EndRadius: 1,
              InitRadius: 1,
              TailID: 1,
              TailLengthMax: 2,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.5,
              DepthScaleNear: 1.5,
              DistanceXZFar: 8,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 1.65,
              WidthHalfNear: 2
            },
            RandomRotateYBias: 0.5,
            RandomRotateYDegree: 3,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 0.836,
            SpawnSpeedGround: 0.897,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 1
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0
                    },
                    DrawRadius: 0.3,
                    PaintDepthScale: 2.1,
                    PaintWidthHalf: 0.825
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 1,
                    FirstSplashRateForLengthMin: 0.6,
                    SpawnBetweenLength: 7,
                    SpawnNum: 1
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.5,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.2,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 3,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 1.8
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 0,
            AfterOffsetSpawnSpeed: -0.2,
            AfterPaintParam: {
              DepthScaleFar: 2,
              DepthScaleNear: 2,
              DistanceXZFar: 8,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 1.045,
              WidthHalfNear: 1.045
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 0.8
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: -15,
            BulletNum: 1,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0,
              AfterOffsetEndRadiusForPlayer: 0,
              AfterOffsetInitRadiusForField: 0,
              AfterOffsetInitRadiusForPlayer: 0,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.7,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.05,
              InitRadiusForPlayer: 0.07
            },
            DamageParam: {
              ReduceEndFallDistance: 8,
              ReduceStartFallDistance: 1.5,
              ValueMax: 620,
              ValueMin: 350
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0,
              AfterOffsetInitRadius: 0,
              ChangeFrame: 0,
              EndRadius: 1,
              InitRadius: 1,
              TailID: 2,
              TailLengthMax: 2,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.5,
              DepthScaleNear: 1.5,
              DistanceXZFar: 8,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.8,
              WidthHalfFar: 1.65,
              WidthHalfNear: 2
            },
            RandomRotateYBias: 0.5,
            RandomRotateYDegree: 3,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 0.836,
            SpawnSpeedGround: 0.897,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 1
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0
                    },
                    DrawRadius: 0.3,
                    PaintDepthScale: 2.1,
                    PaintWidthHalf: 0.825
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 1,
                    FirstSplashRateForLengthMin: 0.6,
                    SpawnBetweenLength: 7,
                    SpawnNum: 1
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.5,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.2,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.05,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 3,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.8,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 1.8
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 15,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 30,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.05,
              FreeGravityType: "value_0_008"
            }
          }
        ]
      },
      WeaponParam: {
        $type: "spl__WeaponSlosherParam",
        FrameOffsetMaxDegree: 1.5,
        FrameOffsetMaxMoveLength: 0.5,
        InkConsume: 0.06,
        InkRecoverStop: 35,
        MoveLmtFrame: 30,
        MoveSpeed: 0.066,
        PostDelayFrame: 10,
        RepeatFrame: 23,
        ShotGuide: {
          BulletOrderNumInUnit: 0,
          Frame: 13,
          UnitOrderNum: 0
        },
        SwingLiftFrame: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        GuideYMinusZero: true,
        YMinusRate: 1,
        ZRate: 2
      }
    },
    WeaponName: "Slosher_Diffusion_00"
  },
  "3020": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 14.5
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      NearestParam: {
        $type: "spl__BulletSplashSlosherNearestParam",
        DrawSizeCollisionPaintParam: {
          PaintDepthScale: 2,
          PaintWidthHalf: 1
        },
        SpawnOffset: {
          X: 0.05,
          Y: 0.15
        }
      },
      SplashSlosherScatterParam: {
        $type: "spl__BulletSplashSlosherScatterParam",
        CollisionParam: {
          EndRadiusForField: 0.3,
          EndRadiusForPlayer: 0,
          InitRadiusForField: 0.3,
          InitRadiusForPlayer: 0
        },
        PaintRadius: 0.5,
        SpawnFirstFrame: 4,
        SpawnMaxDegree: 65,
        SpawnMaxNum: 6,
        SpawnMinDegree: -45,
        SpawnOffsetMax: 1.2,
        SpawnOffsetMin: 0.8,
        SpawnSpanChangeEndFrame: 35,
        SpawnSpanFrameFirst: 6,
        SpawnSpanFrameLast: 12,
        SpawnSpeed: 0.15
      },
      SplashSlosherSpiralParam: {
        $type: "spl__BulletSplashSlosherSpiralParam",
        CollisionParam: {
          EndRadiusForField: 0.25,
          EndRadiusForPlayer: 0,
          InitRadiusForField: 0.25,
          InitRadiusForPlayer: 0
        },
        LifeFrame: 11,
        RoundSplitNum: 4,
        SameTimeSpawnNum: 3,
        SpawnSpanChangeEndFrame: 45,
        SpawnSpanChangeStartFrame: 18,
        SpawnSpanFrameFirst: 5,
        SpawnSpanFrameLast: 5,
        SpawnSpeedChangeEndFallHeight: 7,
        SpawnSpeedChangeStartFallHeight: 1.5,
        SpawnSpeedFirst: 0.17,
        SpawnSpeedLast: 0.085
      },
      UnitGroupParam: {
        $type: "spl__BulletSlosherUnitGroupParam",
        Unit: [
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 0,
            AfterOffsetSpawnSpeed: 0,
            AfterPaintParam: {
              DepthScaleFar: 1.5,
              DepthScaleNear: 1.5,
              DistanceXZFar: 10,
              DistanceXZNear: 10,
              ScaleEndFallDistance: 10,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.5,
              WidthHalfFar: 0,
              WidthHalfNear: 0
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.2
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 1,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0,
              AfterOffsetEndRadiusForPlayer: 0,
              AfterOffsetInitRadiusForField: 0,
              AfterOffsetInitRadiusForPlayer: 0,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.1,
              EndRadiusForPlayer: 0.25,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.01,
              InitRadiusForPlayer: 0.025
            },
            DamageParam: {
              ReduceEndFallDistance: 8.5,
              ReduceStartFallDistance: 1.5,
              ValueMax: 760,
              ValueMin: 520
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0,
              AfterOffsetInitRadius: 0,
              ChangeFrame: 0,
              EndRadius: 0.1,
              InitRadius: 0.1,
              TailID: 0,
              TailLengthMax: 0.5,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.16,
              FreeGravity: 0.06,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 5,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 0.897,
              DepthScaleNear: 0.897,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 10,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.5,
              WidthHalfFar: 4.156,
              WidthHalfNear: 4.156
            },
            RandomRotateYBias: 0.45,
            RandomRotateYDegree: 0,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1.4563,
            SpawnSpeedGround: 1.4737,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 4
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.1,
                      EndRadiusForPlayer: 0.1,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.1,
                      InitRadiusForPlayer: 0.1
                    },
                    DrawRadius: 0.2,
                    PaintDepthScale: 2.2,
                    PaintWidthHalf: 1.559
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 0.35,
                    FirstSplashRateForLengthMin: 0.1,
                    SpawnBetweenLength: 3.6,
                    SpawnNum: 4
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 1.25,
                    DistanceXZRate: 1.5,
                    FirstDistance: 2.5,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [
              {
                CollisionRadius: 0.2,
                DrawRadius: 0.4,
                PaintRadiusRatePerWidthHalf: 0.6,
                SpawnOffsetHitByPlayer: 1,
                SpawnOffsetY: 1.6
              }
            ],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.64
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 2,
            AfterOffsetSpawnSpeed: 0,
            AfterPaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 0,
              DistanceXZNear: 0,
              ScaleEndFallDistance: 10,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.5,
              WidthHalfFar: 0,
              WidthHalfNear: 0
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 10,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 20,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 10,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 4,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0,
              AfterOffsetEndRadiusForPlayer: 0.47,
              AfterOffsetInitRadiusForField: 0,
              AfterOffsetInitRadiusForPlayer: 0.047,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0,
              EndRadiusForPlayer: 0.47,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0,
              InitRadiusForPlayer: 0.047
            },
            DamageParam: {
              ReduceEndFallDistance: 8.5,
              ReduceStartFallDistance: 1.5,
              ValueMax: 380,
              ValueMin: 380
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0,
              AfterOffsetInitRadius: 0,
              ChangeFrame: 0,
              EndRadius: 0,
              InitRadius: 0,
              TailID: 0,
              TailLengthMax: 0.5,
              TailLengthMin: 0.5,
              TailSolidFrame: 5
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.16,
              FreeGravity: 0.06,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 5,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 0,
              DistanceXZNear: 0,
              ScaleEndFallDistance: 10,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.5,
              WidthHalfFar: 0,
              WidthHalfNear: 0
            },
            RandomRotateYBias: 0.45,
            RandomRotateYDegree: 0,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1.4563,
            SpawnSpeedGround: 1.4737,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [],
              SplashParam: [],
              SplashWallHitParam: []
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 1,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2.4
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 10,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 20,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 10,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          }
        ]
      },
      WeaponParam: {
        $type: "spl__WeaponSlosherParam",
        FrameOffsetMaxDegree: 0,
        FrameOffsetMaxMoveLength: 0,
        InkConsume: 0.092,
        InkRecoverStop: 42,
        MoveLmtFrame: 33,
        MoveSpeed: 0.07,
        PostDelayFrame: 10,
        RepeatFrame: 33,
        ShotGuide: {
          Frame: 12
        },
        SwingLiftFrame: 12
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        GuideYMinusZero: true,
        YMinusRate: 1
      }
    },
    WeaponName: "Slosher_Launcher_00"
  },
  "3030": {
    GameParameters: {
      BounceGroupParam: {
        $type: "spl__BulletSlosherBounceGroupParam",
        BounceParam: [
          {
            PaintRadiusFirstBounce: 1.5
          },
          {
            AfterOffsetPaintRadiusFirstBnce: -0.05,
            BounceAfterMaxSpeed: 0.35,
            PaintRadiusFirstBounce: 1.2,
            UnitOrderNum: 1
          }
        ]
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 14
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      NearestParam: {
        $type: "spl__BulletSplashSlosherNearestParam",
        DrawSizeCollisionPaintParam: {
          CollisionParam: {
            EndRadiusForPlayer: 0,
            InitRadiusForPlayer: 0
          },
          PaintDepthScale: 1.2,
          PaintWidthHalf: 2.2
        },
        SpawnOffset: {
          X: 0.25,
          Y: -0.4
        }
      },
      UnitGroupParam: {
        $type: "spl__BulletSlosherUnitGroupParam",
        Unit: [
          {
            AddSpawnSpeedYRateByXZ: 0.2,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: 0,
            AfterPaintParam: {
              DepthScaleFar: 1.1,
              DepthScaleNear: 0,
              DistanceXZFar: 0.1,
              DistanceXZNear: 0,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 1,
              WidthHalfFar: 1.875,
              WidthHalfNear: 0
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 1.875
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 1,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0,
              AfterOffsetEndRadiusForPlayer: 0,
              AfterOffsetInitRadiusForField: 0,
              AfterOffsetInitRadiusForPlayer: 0,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.75,
              EndRadiusForPlayer: 0.8,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.075,
              InitRadiusForPlayer: 0.08
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 300,
              ValueMin: 300
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0,
              AfterOffsetInitRadius: 0,
              ChangeFrame: 5,
              EndRadius: 0.8,
              InitRadius: 0.16,
              TailID: 0,
              TailLengthMax: 0,
              TailLengthMin: 0,
              TailSolidFrame: 0
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.01,
              BrakeGravity: 0.01,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.01,
              FreeGravity: 0.015,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.1,
              DepthScaleNear: 1.1,
              DistanceXZFar: 20,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 1,
              WidthHalfFar: 1.5,
              WidthHalfNear: 1.5
            },
            RandomRotateYBias: 1,
            RandomRotateYDegree: 0,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 0.51,
            SpawnSpeedGround: 0.53982,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: -1,
                  TotalNum: 5
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0.15,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0.15
                    },
                    DrawRadius: 0.2,
                    PaintDepthScale: 1.84,
                    PaintWidthHalf: 1.495
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 1,
                    FirstSplashRateForLengthMin: 1,
                    SpawnBetweenLength: 3,
                    SpawnNum: 5
                  }
                }
              ],
              SplashWallHitParam: []
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.6,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 1
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          },
          {
            AddSpawnSpeedYRateByXZ: 0.2,
            AfterOffsetDelayFrame: 5,
            AfterOffsetSpawnSpeed: -0.01,
            AfterPaintParam: {
              DepthScaleFar: 1.1,
              DepthScaleNear: 1.1,
              DistanceXZFar: 20,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 1,
              WidthHalfFar: 1.0375,
              WidthHalfNear: 1.0375
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.6,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 1.875
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 3,
            CollisionParam: {
              AfterOffsetEndRadiusForField: -0.03,
              AfterOffsetEndRadiusForPlayer: -0.03,
              AfterOffsetInitRadiusForField: -3e-3,
              AfterOffsetInitRadiusForPlayer: -3e-3,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.52,
              FriendThroughFrameForPlayer: 2,
              InitRadiusForField: 0.05,
              InitRadiusForPlayer: 0.052
            },
            DamageParam: {
              ReduceEndFallDistance: 7.625,
              ReduceStartFallDistance: 1.5,
              ValueMax: 300,
              ValueMin: 300
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: -0.03,
              AfterOffsetInitRadius: -6e-3,
              ChangeFrame: 5,
              EndRadius: 0.52,
              InitRadius: 0.104,
              TailID: 0,
              TailLengthMax: 0,
              TailLengthMin: 0,
              TailSolidFrame: 0
            },
            HitEffectBigOrderNum: [],
            MoveParam: {
              BrakeAirResist: 0.01,
              BrakeGravity: 0.01,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.01,
              FreeGravity: 0.015,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 0
            },
            PaintParam: {
              DepthScaleFar: 1.1,
              DepthScaleNear: 1.1,
              DistanceXZFar: 20,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 1,
              WidthHalfFar: 1.08125,
              WidthHalfNear: 1.08125
            },
            RandomRotateYBias: 1,
            RandomRotateYDegree: 0,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 0.5,
            SpawnSpeedGround: 0.53,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [],
              SplashParam: [],
              SplashWallHitParam: []
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 5,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.6,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 1.875
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 40,
              FallPeriodFirstFrameMin: 20,
              FallPeriodFirstTargetSpeed: 0.05,
              FallPeriodLastFrameMax: 35,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            }
          }
        ]
      },
      WeaponParam: {
        $type: "spl__WeaponSlosherParam",
        FrameOffsetDegreeRate: 0.3,
        InkConsume: 0.08,
        InkRecoverStop: 40,
        MoveLmtFrame: 32,
        MoveSpeed: 0.05,
        PostDelayFrame: 15,
        RepeatFrame: 32,
        ShotGuide: {
          BulletOrderNumInUnit: 0,
          Frame: 22,
          UnitOrderNum: 0
        },
        SwingLiftAnimFrame: 2,
        SwingLiftFrame: 6
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        GuideYMinusZero: true,
        YMinusRate: 0,
        YPlusRate: 0,
        ZRate: 0.5
      }
    },
    WeaponName: "Slosher_Bathtub_00"
  },
  "3040": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletSlosherBlastParam",
        BlastParam: {
          CollisionRadiusForPaint: 4.5,
          CrossPaintCheckLength: 0,
          CrossPaintRadius: 0,
          DamageAttackerPriority: true,
          DamageOffsetY: 0.2,
          DistanceDamage: [
            {
              Damage: 350,
              Distance: 2.8
            }
          ],
          KnockBackParam: {
            Accel: 470,
            Bias: 0.8,
            Distance: 5
          },
          PaintOffsetY: 0.2,
          PaintRadius: 4.5
        },
        DistanceFar: 23,
        DistanceNear: 21,
        PaintRadiusFar: 4.095,
        PaintRadiusNear: 4.5
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_SlosherAndBrush",
        BaseDistance: 20.7
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Slow"
      },
      NearestParam: {
        $type: "spl__BulletSplashSlosherNearestParam",
        DrawSizeCollisionPaintParam: {
          CollisionParam: {
            EndRadiusForPlayer: 0,
            InitRadiusForPlayer: 0
          },
          PaintDepthScale: 1.4,
          PaintWidthHalf: 1.56
        },
        SpawnOffset: {
          X: 0.25,
          Y: 0.3
        }
      },
      UnitGroupParam: {
        $type: "spl__BulletSlosherUnitGroupParam",
        Unit: [
          {
            AddSpawnSpeedYRateByXZ: 0.1,
            AfterOffsetDelayFrame: 1,
            AfterOffsetSpawnSpeed: 0,
            AfterPaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 20,
              DistanceXZNear: 1,
              ScaleEndFallDistance: 10,
              ScaleStartFallDistance: 5,
              WidthDepthScaleFall: 1,
              WidthHalfFar: 1.8,
              WidthHalfNear: 1
            },
            AfterWallDropCollisionPaintPrm: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 0.65,
              PaintRadiusGround: 0.6,
              PaintRadiusShock: 1.3
            },
            AfterWallDropMoveParam: {
              FallPeriodFirstFrameMax: 30,
              FallPeriodFirstFrameMin: 10,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 20,
              FallPeriodLastFrameMin: 15,
              FallPeriodSecondFrame: 10,
              FallPeriodSecondTargetSpeed: 0.06,
              FreeGravityType: "value_0_008"
            },
            BaseRotateYDegree: 0,
            BulletNum: 1,
            CollisionParam: {
              AfterOffsetEndRadiusForField: 0,
              AfterOffsetEndRadiusForPlayer: 0,
              AfterOffsetInitRadiusForField: 0,
              AfterOffsetInitRadiusForPlayer: 0,
              ChangeFrameForField: 4,
              ChangeFrameForPlayer: 5,
              EndRadiusForField: 0.25,
              EndRadiusForPlayer: 0.4,
              FriendThroughFrameForPlayer: 1e3,
              InitRadiusForField: 0.1,
              InitRadiusForPlayer: 0.04
            },
            DamageParam: {
              ReduceEndFallDistance: 9,
              ReduceStartFallDistance: 1.5,
              ValueMax: 550,
              ValueMin: 550
            },
            DrawSizeParam: {
              AfterOffsetEndRadius: 0,
              AfterOffsetInitRadius: 0,
              ChangeFrame: 0,
              EndRadius: 0.7,
              InitRadius: 0.7,
              TailID: 0,
              TailLengthMax: 4,
              TailLengthMin: 0.5,
              TailSolidFrame: 1
            },
            HitEffectBigOrderNum: [
              0
            ],
            MoveParam: {
              BrakeAirResist: 0.1,
              BrakeGravity: 0.04,
              BrakeToFreeStateFrame: 1,
              BrakeToFreeVelocityXZ: 20,
              BrakeToFreeVelocityY: 10,
              FreeAirResist: 0.12,
              FreeGravity: 0.05,
              GoStraightStateEndMaxSpeed: 10,
              GoStraightToBrakeStateFrame: 8,
              SpawnSpeed: 2
            },
            PaintParam: {
              DepthScaleFar: 1,
              DepthScaleNear: 1,
              DistanceXZFar: 15,
              DistanceXZNear: 5,
              ScaleEndFallDistance: 12,
              ScaleStartFallDistance: 1.5,
              WidthDepthScaleFall: 0.7,
              WidthHalfFar: 2.28,
              WidthHalfNear: 2.28
            },
            RandomRotateYBias: 0,
            RandomRotateYDegree: 0,
            RandomRotateYOffOrderNum: [],
            SpawnSpeedAir: 1.38975,
            SpawnSpeedGround: 1.4105,
            SplashAndSplashWallHitSpawnPrm: {
              Combination: [
                {
                  OrderNum: 0,
                  SplashArrayOrderNum: 0,
                  SplashWallHitArrayOrderNum: 0,
                  TotalNum: 7
                }
              ],
              SplashParam: [
                {
                  DrawSizeCollisionPaintParam: {
                    CollisionParam: {
                      ChangeFrameForField: 0,
                      ChangeFrameForPlayer: 0,
                      EndRadiusForField: 0.15,
                      EndRadiusForPlayer: 0,
                      FriendThroughFrameForPlayer: 0,
                      InitRadiusForField: 0.15,
                      InitRadiusForPlayer: 0
                    },
                    DrawRadius: 0.1,
                    PaintDepthScale: 2,
                    PaintWidthHalf: 1.344
                  },
                  SpawnParam: {
                    FirstSplashRateForLengthMax: 0.55,
                    FirstSplashRateForLengthMin: 0.5,
                    SpawnBetweenLength: 3.1,
                    SpawnNum: 7
                  }
                }
              ],
              SplashWallHitParam: [
                {
                  SpawnParam: {
                    BetweenDistance: 0.6,
                    DistanceXZRate: 1.333333,
                    FirstDistance: 2.4,
                    VelocityMinusYRate: 0.45
                  },
                  WallDropCollisionPaintParam: {
                    FallPeriodFirstSecondTargetAlp: 1,
                    PaintRadiusFall: 0.65,
                    PaintRadiusGround: 0.4,
                    PaintRadiusShock: 0.9
                  },
                  WallDropMoveParam: {
                    FallPeriodFirstFrameMax: 40,
                    FallPeriodFirstFrameMin: 20,
                    FallPeriodFirstTargetSpeed: 0.05,
                    FallPeriodLastFrameMax: 35,
                    FallPeriodLastFrameMin: 20,
                    FallPeriodSecondFrame: 10,
                    FallPeriodSecondTargetSpeed: 0.04,
                    FreeGravityType: "value_0_008"
                  }
                }
              ]
            },
            SplashSlosherHitParam: [],
            UnitDelayFrame: 0,
            WallDropCollisionPaintParam: {
              FallPeriodFirstSecondTargetAlp: 1,
              PaintRadiusFall: 1,
              PaintRadiusGround: 0.7,
              PaintRadiusShock: 2
            },
            WallDropMoveParam: {
              FallPeriodFirstFrameMax: 45,
              FallPeriodFirstFrameMin: 25,
              FallPeriodFirstTargetSpeed: 0.06,
              FallPeriodLastFrameMax: 45,
              FallPeriodLastFrameMin: 25,
              FallPeriodSecondFrame: 20,
              FallPeriodSecondTargetSpeed: 0.08,
              FreeGravityType: "value_0_008"
            }
          }
        ]
      },
      WeaponParam: {
        $type: "spl__WeaponSlosherParam",
        InkConsume: 0.117,
        InkRecoverStop: 70,
        MoveLmtFrame: 55,
        MoveSpeed: 0.045,
        PostDelayFrame: 25,
        RepeatFrame: 55,
        ShotGuide: {
          Frame: 18
        },
        SwingLiftFrame: 16
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        GuideYMinusZero: true,
        XRate: 0.3,
        YMinusRate: 0.5,
        YPlusRate: 0.5,
        ZRate: 1
      }
    },
    WeaponName: "Slosher_Washtub_00"
  },
  "4000": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 19,
        ReduceStartFrame: 11,
        ValueFullChargeMax: 320,
        ValueMax: 320,
        ValueMin: 160
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_Spinner"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_MoveVelRt_Shot_High: 1.4,
        Overwrite_MoveVelRt_Shot_Low: 1,
        Overwrite_MoveVelRt_Shot_Mid: 1.2
      },
      MoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 1.105,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 1.05,
        SpawnSpeedFirstLastAndSecond: 1.5,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.1
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceMiddle: 1,
        DistanceNear: 1,
        HeightUseDepthScaleMaxBreakFree: 3,
        HeightUseDepthScaleMinBreakFree: 10,
        WidthHalfFar: 2.16,
        WidthHalfMiddle: 2.28,
        WidthHalfNear: 2.28
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 1.4,
        DepthScaleMin: 1.4,
        WidthHalf: 1.449,
        WidthHalfNearest: 1.7388
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 10,
        SpawnNearestLength: 0,
        SpawnNum: 1.6,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 30,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponParam: {
        $type: "spl__WeaponSpinnerParam",
        BurstAimMoveFrame: 0,
        ChargeFrame_First: 20,
        ChargeFrame_Second: 30,
        InkConsume: 0.1725,
        InkEmptyChargeTimes: 6,
        InkRecoverStop: 30,
        JumpGnd_Charge: 0.1,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.3,
        Jump_DegSwerve: 8,
        MaxShootingFrame_First: 36,
        MaxShootingFrame_Second: 72,
        MoveSpeed: 0.086,
        MoveSpeed_Charge: 0.072,
        PitchDegBias: 0.4,
        PitchDegSwerve: 1.2,
        PostDelayFrame: 4,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 4,
        ShotGuideFrame: 11,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 4,
        VelGnd_Bias_Charge: 0.9,
        VelGnd_DownRt_Charge: 0.05
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        MaxLengthFrame: 3
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam"
      }
    },
    WeaponName: "Spinner_Quick_00"
  },
  "4001": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 19,
        ReduceStartFrame: 11,
        ValueFullChargeMax: 320,
        ValueMax: 320,
        ValueMin: 160
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_Spinner"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_MoveVelRt_Shot_High: 1.4,
        Overwrite_MoveVelRt_Shot_Low: 1,
        Overwrite_MoveVelRt_Shot_Mid: 1.2
      },
      MoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 1.105,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 1.05,
        SpawnSpeedFirstLastAndSecond: 1.5,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.1
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceMiddle: 1,
        DistanceNear: 1,
        HeightUseDepthScaleMaxBreakFree: 3,
        HeightUseDepthScaleMinBreakFree: 10,
        WidthHalfFar: 2.16,
        WidthHalfMiddle: 2.28,
        WidthHalfNear: 2.28
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 1.4,
        DepthScaleMin: 1.4,
        WidthHalf: 1.449,
        WidthHalfNearest: 1.7388
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 10,
        SpawnNearestLength: 0,
        SpawnNum: 1.6,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 30,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponParam: {
        $type: "spl__WeaponSpinnerParam",
        BurstAimMoveFrame: 0,
        ChargeFrame_First: 20,
        ChargeFrame_Second: 30,
        InkConsume: 0.1725,
        InkEmptyChargeTimes: 6,
        InkRecoverStop: 30,
        JumpGnd_Charge: 0.1,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.3,
        Jump_DegSwerve: 8,
        MaxShootingFrame_First: 36,
        MaxShootingFrame_Second: 72,
        MoveSpeed: 0.086,
        MoveSpeed_Charge: 0.072,
        PitchDegBias: 0.4,
        PitchDegSwerve: 1.2,
        PostDelayFrame: 4,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 4,
        ShotGuideFrame: 11,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 4,
        VelGnd_Bias_Charge: 0.9,
        VelGnd_DownRt_Charge: 0.05
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        MaxLengthFrame: 3
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam"
      }
    },
    WeaponName: "Spinner_Quick_01"
  },
  "4010": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 19,
        ReduceStartFrame: 11,
        ValueFullChargeMax: 300,
        ValueMax: 300,
        ValueMin: 150
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_Spinner"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_MoveVelRt_Shot_High: 1.35,
        Overwrite_MoveVelRt_Shot_Low: 1,
        Overwrite_MoveVelRt_Shot_Mid: 1.175
      },
      MoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 1.5105,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 1.05,
        SpawnSpeedFirstLastAndSecond: 2.1,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.12
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceMiddle: 1.1,
        HeightUseDepthScaleMaxBreakFree: 3,
        WidthHalfFar: 2.04,
        WidthHalfMiddle: 2.16,
        WidthHalfNear: 2.16
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 1.6,
        DepthScaleMin: 1.6,
        WidthHalf: 1.449,
        WidthHalfNearest: 1.85472
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 20,
        SpawnNearestLength: 0,
        SpawnNum: 1,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 30,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponParam: {
        $type: "spl__WeaponSpinnerParam",
        InkConsume: 0.225,
        InkRecoverStop: 40,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.3,
        Jump_DegSwerve: 7,
        MoveSpeed: 0.07,
        PitchDegBias: 0.4,
        PitchDegSwerve: 1.6,
        PostDelayFrame: 4,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 4,
        ShotGuideFrame: 11,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 3.3,
        VelGnd_Bias_Charge: 0.9,
        VelGnd_DownRt_Charge: 0.05
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        MaxLengthFrame: 3
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam"
      }
    },
    WeaponName: "Spinner_Standard_00"
  },
  "4020": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 19,
        ReduceStartFrame: 11,
        ValueFullChargeMax: 400,
        ValueMax: 320,
        ValueMin: 160
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_Spinner"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Low: 1,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        Overwrite_MoveVelRt_Shot_High: 1.35,
        Overwrite_MoveVelRt_Shot_Low: 1,
        Overwrite_MoveVelRt_Shot_Mid: 1.175,
        WeaponSpeedType: "Slow"
      },
      MoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 1.94,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 1.05,
        SpawnSpeedFirstLastAndSecond: 2.4,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.14
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceFar: 25,
        DistanceMiddle: 1.1,
        HeightUseDepthScaleMaxBreakFree: 3,
        WidthHalfFar: 1.92,
        WidthHalfMiddle: 2.1,
        WidthHalfNear: 2.1
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 1.5,
        DepthScaleMin: 1.5,
        WidthHalf: 1.288,
        WidthHalfNearest: 1.5456
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 23.5,
        SpawnNearestLength: 0,
        SpawnNum: 1,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 30,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponParam: {
        $type: "spl__WeaponSpinnerParam",
        ChargeFrame_First: 120,
        ChargeFrame_Second: 150,
        InkConsume: 0.35,
        InkEmptyChargeTimes: 3,
        InkRecoverStop: 40,
        JumpGnd_Charge: 0.06,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.3,
        Jump_DegSwerve: 6,
        MaxShootingFrame_First: 120,
        MaxShootingFrame_Second: 240,
        MoveSpeed: 0.06,
        MoveSpeed_Charge: 0.04,
        PitchDegBias: 0.4,
        PitchDegSwerve: 2,
        PostDelayFrame: 4,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 4,
        ShotGuideFrame: 11,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 3,
        VelGnd_Bias_Charge: 0.9,
        VelGnd_DownRt_Charge: 0.05
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        MaxLengthFrame: 3
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam"
      }
    },
    WeaponName: "Spinner_Hyper_00"
  },
  "4030": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 19,
        ReduceStartFrame: 11,
        ValueFullChargeMax: 280,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_Spinner",
        ValidMinCharge: true
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_MoveVelRt_Shot_High: 1.25,
        Overwrite_MoveVelRt_Shot_Low: 1,
        Overwrite_MoveVelRt_Shot_Mid: 1.125
      },
      MoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 1.027,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 1.1,
        SpawnSpeedFirstLastAndSecond: 1.1,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.12
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceMiddle: 1.1,
        HeightUseDepthScaleMaxBreakFree: 3,
        WidthHalfFar: 2.16,
        WidthHalfMiddle: 2.28,
        WidthHalfNear: 2.28
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 1.6,
        DepthScaleMin: 1.6,
        WidthHalf: 1.472,
        WidthHalfNearest: 1.7664
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 11,
        SpawnNearestLength: 0,
        SpawnNum: 1,
        SplitNum: 6
      },
      VariableDamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 19,
        ReduceStartFrame: 11,
        ValueFullChargeMax: 300,
        ValueMax: 300,
        ValueMin: 150
      },
      VariableMoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 10,
        GoStraightToBrakeStateFrame: 8,
        SpawnSpeed: 2.21915,
        SpawnSpeedFirstLastAndSecond: 2.21915,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.03
      },
      VariablePaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceFar: 25,
        DistanceMiddle: 1,
        DistanceNear: 1,
        HeightUseDepthScaleMaxBreakFree: 3,
        WidthHalfFar: 1.66,
        WidthHalfMiddle: 1.88,
        WidthHalfNear: 1.88
      },
      VariableShotParam: {
        $type: "spl__WeaponVariableShotParam",
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 4,
        MoveSpeed: 0.05,
        PitchDegBias: 0.2,
        PitchDegSwerve: 0.5,
        RepeatFrame: 5,
        Stand_DegBiasMax: 0.4,
        Stand_DegSwerve: 1,
        VariableInterpolatedFrame: 10
      },
      VariableSplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthScaleMax: 1.4,
        DepthScaleMin: 1.4,
        WidthHalf: 1.265,
        WidthHalfNearest: 1.518
      },
      VariableSplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        SpawnBetweenLength: 24,
        SpawnNum: 1,
        SplitNum: 6
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 30,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponParam: {
        $type: "spl__WeaponSpinnerParam",
        ChargeFrame_First: 1,
        ChargeFrame_Second: 100,
        EnableRecharge: true,
        InkConsume: 0.25,
        InkEmptyChargeTimes: 6,
        InkRecoverStop: 40,
        JumpGnd_Charge: 0.1,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        MaxShootingFrame_First: 1,
        MaxShootingFrame_Second: 200,
        MoveSpeed: 0.086,
        MoveSpeed_Charge: 0.086,
        PitchDegBias: 0.4,
        PitchDegSwerve: 2.5,
        PostDelayFrame: 4,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 3,
        ShotGuideFrame: 11,
        Stand_DegBiasMax: 0.4,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 6,
        VelGnd_Bias_Charge: 0.9,
        VelGnd_DownRt_Charge: 0.05
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        MaxLengthFrame: 3
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam"
      }
    },
    WeaponName: "Spinner_Downpour_00"
  },
  "4040": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletSpinnerDamageParam",
        ReduceEndFrame: 15,
        ReduceStartFrame: 7,
        ValueFullChargeMax: 320,
        ValueMax: 320,
        ValueMin: 160
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp_Spinner",
        ValidMinCharge: true
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_MoveVelRt_Shot_High: 1.3,
        Overwrite_MoveVelRt_Shot_Low: 1,
        Overwrite_MoveVelRt_Shot_Mid: 1.15
      },
      MoveParam: {
        $type: "spl__BulletSpinnerMoveParam",
        GoStraightStateEndMaxSpeed: 1.8215,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 4.4333,
        SpawnSpeedFirstLastAndSecond: 4.4333,
        SpawnSpeedRandomBias: 0.2,
        SpawnSpeedRandomRate: 0.11
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 1.83,
        DepthScaleMaxBreakFree: 1.67,
        DepthScaleMin: 1.17,
        DepthScaleMinBreakFree: 1.17,
        DistanceMiddle: 1.1,
        HeightUseDepthScaleMaxBreakFree: 3,
        WidthHalfFar: 1.68,
        WidthHalfMiddle: 1.98,
        WidthHalfNear: 1.98
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMax: 1.4,
        DepthScaleMin: 1.3,
        WidthHalf: 1.449,
        WidthHalfNearest: 2.10105
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [
          4
        ],
        SpawnBetweenLength: 12,
        SpawnNearestLength: 0,
        SpawnNum: 1.5,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 30,
        FallPeriodFirstFrameMin: 15,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 30,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.06
      },
      WeaponKeepChargeParam: {
        $type: "spl__WeaponKeepChargeParam",
        EnableKeepChargeAnytime: true,
        KeepChargeFullFrame: 200,
        KeepChargePreDelayFrame: 10,
        KeepChargePreDelayFrame_Pre: 5
      },
      WeaponParam: {
        $type: "spl__WeaponSpinnerParam",
        ChargeFrame_First: 38,
        ChargeFrame_Second: 76,
        EnableRecharge: true,
        InkConsume: 0.15,
        InkEmptyChargeTimes: 5,
        InkRecoverStop: 40,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.3,
        Jump_DegSwerve: 3.6,
        MaxShootingFrame_First: 60,
        MaxShootingFrame_Second: 120,
        MoveSpeed: 0.07,
        MoveSpeed_Charge: 0.04,
        PitchDegBias: 0.4,
        PitchDegSwerve: 1.3,
        PostDelayFrame: 4,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 4,
        ShotGuideFrame: 7,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.1,
        Stand_DegSwerve: 3.3,
        VelGnd_Bias_Charge: 0.9,
        VelGnd_DownRt_Charge: 0.05
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        MaxLengthFrame: 3
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam"
      }
    },
    WeaponName: "Spinner_Serein_00"
  },
  "5000": {
    GameParameters: {
      CollisionLapOverParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 15,
        ReduceStartFrame: 7,
        ValueMax: 360,
        ValueMin: 180
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.7635,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 1.78
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DegreeUseDepthScaleMin: 35,
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.77,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SideStepParam: {
        $type: "spl__PlayerSideStepParam",
        InkConsume: 0.05,
        InkRecoverStop: 50,
        MoveDist: 3,
        MoveFrame: 8,
        SlipMoveDistAir: 0.6,
        SlipMoveDistGnd: 0.6,
        SlipMoveFrame: 30,
        SplashSlideParam: {
          MoveLength: 4,
          PaintWidthHalf: 1.8
        }
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMin: 1,
        WidthHalf: 1.5525,
        WidthHalfNearest: 2.1735
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 11,
        SpawnNearestLength: 1,
        SpawnNum: 1,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponManeuverParam",
        InkConsume: 663e-5,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        LapOver_DegSwerve: 4,
        LapOver_RepeatFrame: 4,
        MoveSpeed: 0.08,
        RepeatFrame: 5,
        ShotGuideFrame: 7,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMax: 0.4,
        Stand_DegBiasMin: 0.05,
        Stand_DegSwerve: 7
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Maneuver_Short_00"
  },
  "5001": {
    GameParameters: {
      CollisionLapOverParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 15,
        ReduceStartFrame: 7,
        ValueMax: 360,
        ValueMin: 180
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 1.7635,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 1.78
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DegreeUseDepthScaleMin: 35,
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.77,
        WidthHalfMiddle: 1.93,
        WidthHalfNear: 1.93
      },
      SideStepParam: {
        $type: "spl__PlayerSideStepParam",
        InkConsume: 0.05,
        InkRecoverStop: 50,
        MoveDist: 3,
        MoveFrame: 8,
        SlipMoveDistAir: 0.6,
        SlipMoveDistGnd: 0.6,
        SlipMoveFrame: 30,
        SplashSlideParam: {
          MoveLength: 4,
          PaintWidthHalf: 1.8
        }
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMin: 1,
        WidthHalf: 1.5525,
        WidthHalfNearest: 2.1735
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 11,
        SpawnNearestLength: 1,
        SpawnNum: 1,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponManeuverParam",
        InkConsume: 663e-5,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12,
        LapOver_DegSwerve: 4,
        LapOver_RepeatFrame: 4,
        MoveSpeed: 0.08,
        RepeatFrame: 5,
        ShotGuideFrame: 7,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMax: 0.4,
        Stand_DegBiasMin: 0.05,
        Stand_DegSwerve: 7
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Maneuver_Short_01"
  },
  "5010": {
    GameParameters: {
      CollisionLapOverParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 15,
        ReduceStartFrame: 7,
        ValueMax: 300,
        ValueMin: 150
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.3425,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.37
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.66,
        WidthHalfMiddle: 1.71,
        WidthHalfNear: 1.71
      },
      SideStepParam: {
        $type: "spl__PlayerSideStepParam",
        InkConsume: 0.07,
        SplashSlideParam: {
          PaintWidthHalf: 1.8
        }
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMin: 1,
        WidthHalf: 1.55825,
        WidthHalfNearest: 2.18155
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 14,
        SpawnNearestLength: 1,
        SpawnNum: 1,
        SplitNum: 7
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponManeuverParam",
        InkConsume: 72e-4,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 7.5,
        LapOver_DegSwerve: 0,
        LapOver_RepeatFrame: 4,
        MoveSpeed: 0.08,
        RepeatFrame: 5,
        ShotGuideFrame: 7,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.01,
        Stand_DegBiasMin: 0.01,
        Stand_DegSwerve: 2
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Maneuver_Normal_00"
  },
  "5020": {
    GameParameters: {
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      DamageLapOverParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 15,
        ReduceStartFrame: 7,
        ValueMax: 525,
        ValueMin: 263
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 15,
        ReduceStartFrame: 7,
        ValueMax: 360,
        ValueMin: 180
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveLapOverParam: {
        $type: "spl__BulletSimpleMoveParam",
        GoStraightStateEndMaxSpeed: 3.197,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 3.2
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.8115,
        GoStraightToBrakeStateFrame: 3,
        SpawnSpeed: 2.85
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.82,
        WidthHalfNear: 1.82
      },
      SideStepParam: {
        $type: "spl__PlayerSideStepParam",
        InkConsume: 0.08,
        SlipMoveDistAir: 1.2,
        SlipMoveDistGnd: 1.2,
        SplashSlideParam: {
          PaintWidthHalf: 2
        },
        UnrelaxFrameMove: 40,
        UnrelaxFrameMove_Last: 40,
        UnrelaxFrameNoSideStep: 40,
        UnrelaxFrameNoSideStep_Last: 40,
        UnrelaxFrameNoSquid: 40,
        UnrelaxFrameNoSquid_Last: 40,
        UnrelaxFrameNoWeapon: 8,
        UnrelaxFrameNoWeapon_Last: 8,
        UnrelaxFrameOneMuzzle: 40,
        UnrelaxFrameOneMuzzle_Last: 40
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMin: 1,
        WidthHalf: 1.518,
        WidthHalfNearest: 2.1252
      },
      SplashSpawnLapOverParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        SpawnBetweenLength: 7,
        SpawnNearestLength: 1,
        SpawnNum: 3,
        SplitNum: 5
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 7,
        SpawnNearestLength: 1,
        SpawnNum: 2,
        SplitNum: 5
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponManeuverParam",
        InkConsume: 0.014,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 8,
        LapOver_DegSwerve: 3,
        LapOver_RepeatFrame: 9,
        MoveSpeed: 0.06,
        PreDelayFrame_SquidShot: 4,
        RepeatFrame: 9,
        ShotGuideFrame: 7,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.03,
        Stand_DegBiasMin: 0.03,
        Stand_DegSwerve: 3.2
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Maneuver_Gallon_00"
  },
  "5030": {
    GameParameters: {
      CollisionLapOverParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 25,
        ReduceStartFrame: 9,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.2698,
        GoStraightToBrakeStateFrame: 5,
        SpawnSpeed: 2.3
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.24,
        DepthScaleMaxBreakFree: 2.24,
        DepthScaleMin: 1.31,
        DepthScaleMinBreakFree: 1.12,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.77,
        WidthHalfMiddle: 2.11,
        WidthHalfNear: 2.11
      },
      SideStepParam: {
        $type: "spl__PlayerSideStepParam",
        InkConsume: 0.08,
        InkRecoverStop: 60,
        MoveDist: 3.5,
        MoveFrame: 12,
        SlipMoveFrame: 45,
        SplashSlideParam: {
          MoveLength: 4.5,
          PaintWidthHalf: 1.8
        },
        UnrelaxFrameMove: 8,
        UnrelaxFrameMove_Last: 8,
        UnrelaxFrameNoWeapon: 8,
        UnrelaxFrameNoWeapon_Last: 8
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMin: 1,
        WidthHalf: 1.38,
        WidthHalfNearest: 1.932
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 9,
        SpawnNearestLength: 1.1,
        SpawnNum: 2,
        SplitNum: 8
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponManeuverParam",
        InkConsume: 0.012,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 8,
        LapOver_DegSwerve: 2,
        LapOver_RepeatFrame: 6,
        MoveSpeed: 0.072,
        RepeatFrame: 6,
        ShotGuideFrame: 9,
        Stand_DegBiasDecrease: 0.01,
        Stand_DegBiasKf: 0.02,
        Stand_DegBiasMax: 0.3,
        Stand_DegBiasMin: 0.04,
        Stand_DegSwerve: 4
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Maneuver_Dual_00"
  },
  "5040": {
    GameParameters: {
      CollisionLapOverParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.25,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.25
      },
      CollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      DamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 16,
        ReduceStartFrame: 8,
        ValueMax: 280,
        ValueMin: 140
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.205,
        GoStraightToBrakeStateFrame: 4,
        SpawnSpeed: 2.21
      },
      PaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DepthScaleMax: 2.18,
        DepthScaleMaxBreakFree: 2.18,
        DepthScaleMin: 1.27,
        DepthScaleMinBreakFree: 1.09,
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.71,
        WidthHalfMiddle: 1.76,
        WidthHalfNear: 1.76
      },
      SideStepParam: {
        $type: "spl__PlayerSideStepParam",
        ChargeFrame: 5,
        InkConsume: 0.03,
        IsShootableInMove: true,
        MoveDist: 3.5,
        RepeatCnt: 4,
        SplashSlideParam: {
          PaintWidthHalf: 1.8
        },
        UnrelaxFrameMove: 45,
        UnrelaxFrameMove_Last: 45,
        UnrelaxFrameNoSideStep: 45,
        UnrelaxFrameNoSideStep_Last: 45,
        UnrelaxFrameNoSquid: 45,
        UnrelaxFrameNoSquid_Last: 45,
        UnrelaxFrameNoWeapon: 8,
        UnrelaxFrameNoWeapon_Last: 8,
        UnrelaxFrameOneMuzzle: 45,
        UnrelaxFrameOneMuzzle_Last: 45
      },
      SplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        DepthScaleMin: 1,
        WidthHalf: 1.541,
        WidthHalfNearest: 2.1574
      },
      SplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 13.5,
        SpawnNearestLength: 1,
        SpawnNum: 1.2,
        SplitNum: 7
      },
      WallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      WallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponParam: {
        $type: "spl__WeaponManeuverParam",
        InkConsume: 8e-3,
        Jump_DegBiasDecreaseStartFrame: 25,
        Jump_DegBiasEndFrame: 70,
        Jump_DegBiasMax: 0.4,
        Jump_DegSwerve: 12.8,
        LapOver_DegSwerve: 2.7,
        LapOver_RepeatFrame: 5,
        MoveSpeed: 0.072,
        RepeatFrame: 6,
        ShotGuideFrame: 8,
        Stand_DegBiasDecrease: 5e-3,
        Stand_DegBiasKf: 0.04,
        Stand_DegBiasMin: 0.04,
        Stand_DegSwerve: 7.4
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      }
    },
    WeaponName: "Maneuver_Stepper_00"
  },
  "6000": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      spl__BulletShelterCanopyParam: {
        $type: "spl__BulletShelterCanopyParam",
        CanopyGravity: 0.75,
        CanopyInitSpeed: 7.92,
        CanopySpeedAirAddScaleXZ: 0.72,
        CanopySpeedGroundAddScale: 0.48,
        FootSplashShapeCastOffset: 0.4
      },
      spl__BulletShelterShotgunParam: {
        $type: "spl__BulletShelterShotgunParam",
        DamageEffectiveTotalMax: 810,
        GroupParams: [
          {
            DamageParam: {
              ValueMax: 162,
              ValueMin: 108
            },
            DrawRadius: 1.325,
            HorizontalDegree: 0,
            HorizontalOffset: 0,
            InitVelRandom: 0,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 1.652,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 2.6
            },
            PaintParam: {
              WidthHalfNear: 1.8
            },
            TotalNum: 1,
            VerticalDegree: 0,
            VerticalOffset: 0
          },
          {
            CollisionParam: {
              EndRadiusForField: 0.1,
              EndRadiusForPlayer: 0.1,
              InitRadiusForField: 0.1,
              InitRadiusForPlayer: 0.1
            },
            DamageParam: {
              ValueMax: 162,
              ValueMin: 108
            },
            DrawRadius: 1.325,
            HorizontalDegree: 6,
            HorizontalOffset: 0.12,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 1.652,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 2.6
            },
            PaintParam: {},
            TotalNum: 6,
            VerticalDegree: 4,
            VerticalOffset: 0.1
          },
          {
            CollisionParam: {
              EndRadiusForField: 0.1,
              EndRadiusForPlayer: 0.1,
              InitRadiusForField: 0.1,
              InitRadiusForPlayer: 0.1
            },
            DamageParam: {
              ValueMax: 162,
              ValueMin: 108
            },
            DrawRadius: 1.325,
            HorizontalDegree: 2,
            HorizontalOffset: 0.05,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 1.652,
              GoStraightToBrakeStateFrame: 3,
              SpawnSpeed: 2.6
            },
            TotalNum: 4,
            VerticalDegree: 3,
            VerticalOffset: 0.05
          }
        ],
        ShotgunWallDropMoveParam: {
          FallPeriodFirstFrameMax: 40,
          FallPeriodFirstFrameMin: 20,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15
        },
        SplashParam: {
          SplashPaintDepthScaleFullActive: 2.1,
          SplashPaintDepthScaleOneActive: 4.7,
          SplashPaintWidthFullActive: 1.4986,
          SplashPaintWidthOneActive: 0.59
        },
        SplashWallDropCollisionParam: {
          PaintRadiusFall: 0.65,
          PaintRadiusGround: 0.6,
          PaintRadiusShock: 1.3
        },
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 15,
          FallPeriodFirstTargetSpeed: 0.03,
          FallPeriodLastFrameMax: 25,
          FallPeriodLastFrameMin: 10,
          FallPeriodSecondFrame: 5,
          FallPeriodSecondTargetSpeed: 0.08
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      },
      spl__WeaponShelterCanopyParam: {
        $type: "spl__WeaponShelterCanopyParam",
        CanopyOpenEndOffset: 0,
        CanopyOpenStartOffset: -0.6,
        InkConsumeUmbrella: 0.3
      },
      spl__WeaponShelterShotgunParam: {
        $type: "spl__WeaponShelterShotgunParam",
        JumpGndCharge: 0.07,
        MoveSpeed: 0.065,
        MoveSpeedCharge: 0.055,
        RepeatFrame: 0
      }
    },
    WeaponName: "Shelter_Normal_00"
  },
  "6010": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        Overwrite_ConsumeRt_Main_High: 0.5,
        Overwrite_ConsumeRt_Main_Mid: 0.7,
        WeaponSpeedType: "Slow"
      },
      spl__BulletShelterCanopyParam: {
        $type: "spl__BulletShelterCanopyParam",
        CanopyAttackedDamageRate: 0.6,
        CanopyColRadius: 1,
        CanopyCureHPPerFrame: 5,
        CanopyFrame: 360,
        CanopyGravity: 0.75,
        CanopyHP: 7e3,
        CanopyHitOtherCanopyDamage: 8e3,
        CanopyHitOtherCanopyVolume: 13,
        CanopyHitShieldAttackDamage: 4e3,
        CanopyHitShieldReceiveDamage: 5e3,
        CanopyInitSpeed: 4.6,
        CanopyMoveKnockBackSideStepRate: 1,
        CanopyNakedFrame: 340,
        CanopyPaintRadius: 2.4,
        CanopySpeedAirAddScaleXZ: 0.72,
        CanopySpeedGroundAddScale: 0.48,
        FootSplashPaintRadius: 1.8,
        FootSplashShapeCastOffset: 1
      },
      spl__BulletShelterShotgunParam: {
        $type: "spl__BulletShelterShotgunParam",
        DamageEffectiveTotalMax: 1190,
        GroupParams: [
          {
            DamageParam: {
              ReduceEndFrame: 25,
              ReduceStartFrame: 9,
              ValueMax: 170,
              ValueMin: 170
            },
            DrawRadius: 1.325,
            HorizontalDegree: 0,
            HorizontalOffset: 0,
            InitVelRandom: 0,
            MoveParam: {
              BrakeGravity: 0.07,
              GoStraightStateEndMaxSpeed: 2.3135,
              GoStraightToBrakeStateFrame: 4,
              SpawnSpeed: 2.4
            },
            PaintParam: {
              WidthHalfFar: 1.5,
              WidthHalfMiddle: 1.5,
              WidthHalfNear: 2.2
            },
            TotalNum: 1,
            VerticalDegree: 0,
            VerticalOffset: 0
          },
          {
            CollisionParam: {
              EndRadiusForField: 0.1,
              EndRadiusForPlayer: 0.1,
              InitRadiusForField: 0.1,
              InitRadiusForPlayer: 0.1
            },
            DamageParam: {
              ReduceEndFrame: 25,
              ReduceStartFrame: 9,
              ValueMax: 170,
              ValueMin: 170
            },
            DrawRadius: 1.325,
            HorizontalDegree: 7,
            HorizontalOffset: 0.12,
            InitVelRandom: 0.35,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 2.3135,
              GoStraightToBrakeStateFrame: 4,
              SpawnSpeed: 2.4
            },
            PaintParam: {
              WidthHalfFar: 1.5,
              WidthHalfMiddle: 1.5,
              WidthHalfNear: 1.5
            },
            TotalNum: 6,
            VerticalDegree: 4.5,
            VerticalOffset: 0.1
          },
          {
            CollisionParam: {
              EndRadiusForField: 0.1,
              EndRadiusForPlayer: 0.1,
              InitRadiusForField: 0.1,
              InitRadiusForPlayer: 0.1
            },
            DamageParam: {
              ReduceEndFrame: 25,
              ReduceStartFrame: 9,
              ValueMax: 170,
              ValueMin: 170
            },
            DrawRadius: 1.325,
            HorizontalDegree: 2.5,
            HorizontalOffset: 0.05,
            InitVelRandom: 0.35,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 2.3135,
              GoStraightToBrakeStateFrame: 4,
              SpawnSpeed: 2.4
            },
            PaintParam: {
              WidthHalfFar: 1.5,
              WidthHalfMiddle: 1.5,
              WidthHalfNear: 1.5
            },
            TotalNum: 6,
            VerticalDegree: 3,
            VerticalOffset: 0.05
          }
        ],
        ShotgunWallDropMoveParam: {
          FallPeriodFirstFrameMax: 40,
          FallPeriodFirstFrameMin: 20,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15
        },
        SplashParam: {
          CreateSplashNum: 7,
          SplashPaintDepthScaleFullActive: 1.5,
          SplashPaintDepthScaleOneActive: 3.43,
          SplashPaintWidthFullActive: 1.84,
          SplashPaintWidthOneActive: 0.805
        },
        SplashWallDropCollisionParam: {
          PaintRadiusFall: 0.65,
          PaintRadiusGround: 0.6,
          PaintRadiusShock: 1.3
        },
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 15,
          FallPeriodFirstTargetSpeed: 0.03,
          FallPeriodLastFrameMax: 25,
          FallPeriodLastFrameMin: 10,
          FallPeriodSecondFrame: 5,
          FallPeriodSecondTargetSpeed: 0.08
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      },
      spl__WeaponShelterCanopyParam: {
        $type: "spl__WeaponShelterCanopyParam",
        CanopyChargeFrame: 45,
        CanopyDirXZ_RotDeg_H: 1.6,
        CanopyDirXZ_RotDeg_L: 0.8,
        CanopyNakedFrame: 340,
        CanopyOpenEndOffset: 0,
        CanopyOpenFrame: 30,
        CanopyOpenStartOffset: -0.6,
        CanopyShotFrame: 30,
        InkConsumeUmbrella: 0.3
      },
      spl__WeaponShelterShotgunParam: {
        $type: "spl__WeaponShelterShotgunParam",
        InkConsume: 0.11,
        InkRecoverStop: 70,
        InkRecoverStopCharge: 30,
        JumpGndCharge: 0.06,
        MoveSpeed: 0.05,
        MoveSpeedCharge: 0.04,
        PostDelayFrame_Main: 40,
        PostDelayFrame_MoveLmt: 30,
        PostNoShotReqFrame: 35,
        PreDelayFrame_HumanMain: 10,
        PreDelayFrame_SquidMain: 20,
        RepeatFrame: 0,
        ShotGuideFrame: 9
      }
    },
    WeaponName: "Shelter_Wide_00"
  },
  "6020": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      spl__BulletShelterCanopyParam: {
        $type: "spl__BulletShelterCanopyParam",
        CanopyCureHPPerFrame: 5,
        CanopyDamage: 150,
        CanopyFrame: 100,
        CanopyGravity: 1.102,
        CanopyHP: 2e3,
        CanopyHitOtherCanopyDamage: 2e3,
        CanopyHitOtherCanopyVolume: 3,
        CanopyHitShieldAttackDamage: 750,
        CanopyInitSpeed: 7.92,
        CanopyMoveKnockBackSideStepRate: 1,
        CanopyNakedFrame: 270,
        CanopyPaintRadius: 1,
        CanopySpeedAirAddScaleXZ: 0.72,
        CanopySpeedGroundAddScale: 0.48,
        FootSplashPaintRadius: 1,
        FootSplashShapeCastOffset: 0.4,
        FootSplashSpanFrame: 0,
        FootSplashWaitFrame: 5
      },
      spl__BulletShelterShotgunParam: {
        $type: "spl__BulletShelterShotgunParam",
        DamageEffectiveTotalMax: 400,
        GroupParams: [
          {
            CollisionParam: {
              EndRadiusForField: 0.25,
              EndRadiusForPlayer: 0.25,
              InitRadiusForField: 0.25,
              InitRadiusForPlayer: 0.25
            },
            DamageParam: {
              ValueMax: 120,
              ValueMin: 90
            },
            DrawRadius: 1.325,
            HorizontalDegree: 0,
            HorizontalOffset: 0,
            InitVelRandom: 0,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 1.9085,
              GoStraightToBrakeStateFrame: 4,
              SpawnSpeed: 2
            },
            PaintParam: {
              WidthHalfFar: 1.62,
              WidthHalfMiddle: 1.62,
              WidthHalfNear: 1.9
            },
            TotalNum: 1,
            VerticalDegree: 0,
            VerticalOffset: 0
          },
          {
            AddDegree: 0,
            CollisionParam: {
              EndRadiusForField: 0.16,
              EndRadiusForPlayer: 0.16,
              InitRadiusForField: 0.16,
              InitRadiusForPlayer: 0.16
            },
            DamageParam: {
              ValueMax: 120,
              ValueMin: 90
            },
            DrawRadius: 1.325,
            HorizontalDegree: 4,
            HorizontalOffset: 0.12,
            InitVelRandom: 0.2,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 1.9085,
              GoStraightToBrakeStateFrame: 4,
              SpawnSpeed: 2
            },
            PaintParam: {
              WidthHalfFar: 1.62,
              WidthHalfMiddle: 1.62,
              WidthHalfNear: 1.62
            },
            TotalNum: 2,
            VerticalDegree: 2.7,
            VerticalOffset: 0.1
          },
          {
            AddDegree: 45,
            CollisionParam: {
              EndRadiusForField: 0.16,
              EndRadiusForPlayer: 0.16,
              InitRadiusForField: 0.16,
              InitRadiusForPlayer: 0.16
            },
            DamageParam: {
              ValueMax: 120,
              ValueMin: 90
            },
            DrawRadius: 1.325,
            HorizontalDegree: 2,
            HorizontalOffset: 0.05,
            InitVelRandom: 0.2,
            MoveParam: {
              GoStraightStateEndMaxSpeed: 1.9085,
              GoStraightToBrakeStateFrame: 4
            },
            PaintParam: {
              WidthHalfFar: 1.62,
              WidthHalfMiddle: 1.62,
              WidthHalfNear: 1.62
            },
            TotalNum: 4,
            VerticalDegree: 2.6,
            VerticalOffset: 0.05
          }
        ],
        ShotgunWallDropMoveParam: {
          FallPeriodFirstFrameMax: 40,
          FallPeriodFirstFrameMin: 20,
          FallPeriodFirstTargetSpeed: 0.06,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15
        },
        SplashParam: {
          CreateSplashLength: 3.5,
          CreateSplashNum: 4,
          SplashPaintDepthScaleFullActive: 2.2,
          SplashPaintDepthScaleOneActive: 5.6,
          SplashPaintWidthFullActive: 1.711,
          SplashPaintWidthOneActive: 0.59
        },
        SplashWallDropCollisionParam: {
          PaintRadiusFall: 0.65,
          PaintRadiusGround: 0.6,
          PaintRadiusShock: 1.3
        },
        SplashWallDropMoveParam: {
          FallPeriodFirstFrameMax: 15,
          FallPeriodFirstTargetSpeed: 0.03,
          FallPeriodLastFrameMax: 25,
          FallPeriodLastFrameMin: 10,
          FallPeriodSecondFrame: 5,
          FallPeriodSecondTargetSpeed: 0.08
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      },
      spl__WeaponShelterCanopyParam: {
        $type: "spl__WeaponShelterCanopyParam",
        CanopyChargeFrame: 10,
        CanopyDirXZ_DiffDeg_H: 50,
        CanopyDirXZ_DiffDeg_L: 30,
        CanopyDirXZ_RotDegBias: 0.5,
        CanopyDirXZ_RotDeg_H: 20,
        CanopyDirXZ_RotDeg_L: 15,
        CanopyNakedFrame: 270,
        CanopyOpenEndBias: 0.7,
        CanopyOpenEndOffset: 0,
        CanopyOpenFrame: 10,
        CanopyOpenStartOffset: -0.6,
        InkConsumeUmbrella: 0,
        IsCanopyShot: false,
        IsRecoverCanopyByKill: true
      },
      spl__WeaponShelterShotgunParam: {
        $type: "spl__WeaponShelterShotgunParam",
        InkConsume: 0.04,
        InkRecoverStop: 40,
        InkRecoverStopCharge: 30,
        JumpGndCharge: 0.08,
        MoveSpeed: 0.072,
        MoveSpeedCharge: 0.072,
        RepeatFrame: 26
      }
    },
    WeaponName: "Shelter_Compact_00"
  },
  "7010": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      spl__BulletStringerParam: {
        $type: "spl__BulletStringerParam",
        CollisionParam: {
          EndRadiusForPlayer: 0.18,
          InitRadiusForPlayer: 0.18
        },
        DamageParam: {
          DirectHitDamageMax: 350,
          DirectHitDamageMid: 350,
          DirectHitDamageMin: 300
        },
        DetonationParam: {
          BlastParam: {
            DamageOffsetY: 0.6,
            DistanceDamage: [
              {
                Damage: 280,
                Distance: 2
              }
            ],
            PaintOffsetY: 0.6,
            PaintRadius: 2
          },
          DetonationFrame: 45,
          IsExplosiveBoltMidCharge: true
        },
        DrawParam: {
          CapsuleLength: 1.1,
          CapsuleRadius: 0.2,
          IsDrawCapsule: false,
          IsDrawCollision: false
        },
        Effect1stParam: {
          DelayFrame: 8,
          MaxLen: 13.075
        },
        Effect2ndParam: {
          SmokeInterval: 0.159375
        },
        MoveParam: {
          BrakeAirResist: 0.1,
          BrakeGravity: 0.04,
          BrakeToFreeStateFrame: 1,
          BrakeToFreeVelocityXZ: 20,
          BrakeToFreeVelocityY: 10,
          FreeAirResist: 0.24,
          FreeGravity: 0.15,
          GoStraightStateEndMaxSpeed: 10,
          GoStraightToBrakeStateFrame: 4,
          SpawnSpeed: 0,
          SpawnSpeedMax: 3.85,
          SpawnSpeedMid: 2.1,
          SpawnSpeedMin: 2.1
        },
        PaintParam: {
          WidthHalfMax: 3,
          WidthHalfMid: 2.5,
          WidthHalfMin: 2.5
        },
        SplashPaintParam: {
          DepthScaleMax: 2.7,
          WidthHalf: 1.35
        },
        SplashSpawnParam: {
          DropInterval: 10,
          SplashNumMax: 5,
          SplitNum: 7
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 40,
          FallPeriodFirstFrameMin: 20,
          FallPeriodLastFrameMax: 35
        }
      },
      spl__WeaponStringerParam: {
        $type: "spl__WeaponStringerParam",
        ChargeKeepParam: {
          KeepChargeFullFrame: 1,
          KeepChargePreDelayFrame: 23,
          KeepChargePreDelayFrame_Pre: 18
        },
        ChargeParam: {
          AirChargeRateByInkEmpty: 1,
          ChargeFrameFullCharge: 72,
          ChargeFrameMidCharge: 30,
          ChargeFrameMinCharge: 9,
          FreezeFrameFullCharge: 15,
          FreezeFrameMidCharge: 15,
          FreezeFrameMinCharge: 12,
          InkConsumeFullCharge: 0.085,
          InkConsumeMidCharge: 0.06,
          InkConsumeMinCharge: 0.05,
          JumpHeightFullCharge: 0.07,
          MoveSpeedFullCharge: 0.06,
          PostDelayFrame: 10
        },
        IsEnableChargeKeep: false,
        PlayerParam: {
          BowTiltDegRcvInterpRate: 0.2
        },
        ShotGuideParam: {
          GuideDrawFrameFirst: 8,
          GuideDrawFrameSecond: 8,
          IsDrawTrajectory: false,
          MainArrowGuideDrawFrame: 10,
          SubArrowGuideDrawFrame: 3,
          TiltGuideEnabled: false,
          TiltGuideLength: 0,
          TiltGuideWidth: 4
        },
        ShotParam: {
          ArrowAngleMax: 8,
          ArrowAngleMid: 8,
          ArrowMargin: 0.4,
          BowJumpTiltSpeedForward: 9,
          BowJumpTiltSpeedReverse: -12,
          BowTiltDegreeMax: 90,
          BowTiltKeepFrame: 45,
          BowTiltResetSpeed: 2
        }
      }
    },
    WeaponName: "Stringer_Normal_00"
  },
  "7020": {
    GameParameters: {
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      spl__BulletStringerParam: {
        $type: "spl__BulletStringerParam",
        CollisionParam: {
          EndRadiusForPlayer: 0.18,
          InitRadiusForPlayer: 0.18
        },
        DamageParam: {
          DirectHitDamageMax: 450,
          DirectHitDamageMid: 450,
          DirectHitDamageMin: 300
        },
        DetonationParam: {
          BlastParam: {
            DamageOffsetY: 0.6,
            DistanceDamage: [
              {
                Damage: 280,
                Distance: 2
              }
            ],
            PaintOffsetY: 0.6,
            PaintRadius: 2
          },
          DetonationFrame: 45,
          IsExplosiveBoltMidCharge: false
        },
        DrawParam: {
          CapsuleLength: 1.1,
          CapsuleRadius: 0.2,
          IsDrawCapsule: false,
          IsDrawCollision: false
        },
        Effect1stParam: {
          DelayFrame: 8,
          MaxLen: 13.075
        },
        Effect2ndParam: {
          SmokeInterval: 0.159375
        },
        MoveParam: {
          BrakeAirResist: 0.1,
          BrakeGravity: 0.04,
          BrakeToFreeStateFrame: 1,
          BrakeToFreeVelocityXZ: 20,
          BrakeToFreeVelocityY: 10,
          FreeAirResist: 0.24,
          FreeGravity: 0.15,
          GoStraightStateEndMaxSpeed: 10,
          GoStraightToBrakeStateFrame: 4,
          SpawnSpeed: 0,
          SpawnSpeedMax: 2.55,
          SpawnSpeedMid: 1.45,
          SpawnSpeedMin: 1.45
        },
        PaintParam: {
          WidthHalfMax: 2.8,
          WidthHalfMid: 2.8,
          WidthHalfMin: 2.8
        },
        SplashPaintParam: {
          DepthScaleMax: 1.28,
          WidthHalf: 1.28
        },
        SplashSpawnParam: {
          DropInterval: 10,
          SplitNum: 7
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 40,
          FallPeriodFirstFrameMin: 20,
          FallPeriodLastFrameMax: 35
        }
      },
      spl__WeaponStringerParam: {
        $type: "spl__WeaponStringerParam",
        ChargeKeepParam: {
          KeepChargeFullFrame: 75,
          KeepChargePreDelayFrame: 19,
          KeepChargePreDelayFrame_Pre: 14
        },
        ChargeParam: {
          AirChargeRateByInkEmpty: 1,
          ChargeFrameFullCharge: 34,
          ChargeFrameMidCharge: 12,
          ChargeFrameMinCharge: 6,
          FreezeFrameFullCharge: 15,
          FreezeFrameMidCharge: 15,
          FreezeFrameMinCharge: 8,
          InkConsumeFullCharge: 0.065,
          InkConsumeMidCharge: 0.04,
          InkConsumeMinCharge: 0.03,
          JumpHeightFullCharge: 0.07,
          MoveSpeedFullCharge: 0.07,
          PostDelayFrame: 10
        },
        PlayerParam: {
          BowTiltDegRcvInterpRate: 0.2
        },
        ShotGuideParam: {
          GuideDrawFrameFirst: 7,
          GuideDrawFrameSecond: 7,
          IsDrawTrajectory: false,
          MainArrowGuideDrawFrame: 10,
          SubArrowGuideDrawFrame: 3,
          TiltGuideEnabled: false,
          TiltGuideLength: 0,
          TiltGuideWidth: 4
        },
        ShotParam: {
          ArrowAngleMax: 15,
          ArrowAngleMid: 7,
          ArrowAngleMin: 1,
          ArrowMargin: 0.2,
          ArrowNum: 3,
          BowJumpTiltSpeedForward: 9,
          BowJumpTiltSpeedReverse: -12,
          BowTiltDegreeMax: 90,
          BowTiltKeepFrame: 45,
          BowTiltResetSpeed: 2,
          EnableOldTiltControl: false
        }
      }
    },
    WeaponName: "Stringer_Short_00"
  },
  "8000": {
    GameParameters: {
      BulletSaberHorizontalParam: {
        $type: "spl__BulletSaberParam",
        BurstParam: {
          BurstFrame: 6,
          SplashColRadius: 0.1,
          SplashDrawRadius: 0.2,
          SplashPaintRadius: 2.2
        },
        CollisionParam: {
          CoreIndex: 2,
          OffsetArray: [
            {
              X: -1.2,
              Y: 0,
              Z: -0.2
            },
            {
              X: -0.6,
              Y: 0,
              Z: -0.1
            },
            {
              X: 0,
              Y: 0,
              Z: 0
            },
            {
              X: 0.6,
              Y: 0,
              Z: -0.1
            },
            {
              X: 1.2,
              Y: 0,
              Z: -0.2
            }
          ],
          ParamArray: [
            {
              ChangeFrameForField: 5,
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.25,
              InitRadiusForField: 0.25,
              InitRadiusForPlayer: 0.25
            },
            {
              ChangeFrameForField: 5,
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.275,
              InitRadiusForField: 0.275,
              InitRadiusForPlayer: 0.275
            },
            {
              ChangeFrameForField: 0,
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.3,
              InitRadiusForPlayer: 0.3
            },
            {
              ChangeFrameForField: 5,
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.275,
              InitRadiusForField: 0.275,
              InitRadiusForPlayer: 0.275
            },
            {
              ChangeFrameForField: 5,
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.25,
              InitRadiusForField: 0.25,
              InitRadiusForPlayer: 0.25
            }
          ]
        },
        DamageParam: {
          HasGuard: false,
          HitDamage: 350
        },
        MoveParam: {
          BrakeAirResist: 0,
          BrakeGravity: 0,
          BrakeToFreeStateFrame: 0,
          BrakeToFreeVelocityXZ: 0,
          BrakeToFreeVelocityY: 0,
          FreeAirResist: 0,
          FreeGravity: 0,
          GoStraightToBrakeStateFrame: 5,
          SpawnSpeed: 2.82
        },
        PaintParam: {
          DepthScaleMax: 1.4,
          DepthScaleMin: 0.4,
          PaintDegreeMax: 60,
          WidthHalf: 2.3
        },
        SplashPaintParam: {
          WidthHalf: 1.8
        },
        SplashSpawnParam: {
          DropInterval: 3,
          SplashNumMax: 8
        }
      },
      BulletSaberSlashHorizontalParam: {
        $type: "spl__BulletSaberSlashParam",
        DamageParam: {
          DamageValue: 200
        },
        MoveParam: {
          AliveFrame: 4
        },
        ShapeParam: {
          BoxCenter: {
            X: 0,
            Y: 0,
            Z: 0.4
          },
          BoxHalfExtents: {
            X: 1.6,
            Y: 0.25,
            Z: 1.4
          },
          CylinderCenterA: {
            X: 1.5,
            Y: 1.4,
            Z: 1.5
          },
          CylinderCenterB: {
            X: 1.5,
            Y: 1.4,
            Z: 1.5
          },
          CylinderRadius: 1.5,
          HasCylinderShape: false
        }
      },
      BulletSaberSlashVerticalParam: {
        $type: "spl__BulletSaberSlashParam",
        DamageParam: {
          DamageValue: 1400
        },
        MoveParam: {
          AliveFrame: 4
        },
        ShapeParam: {
          BoxCenter: {
            X: 0,
            Y: 0,
            Z: 0.7
          },
          BoxHalfExtents: {
            X: 0.5,
            Y: 1.4,
            Z: 0.7
          },
          CylinderCenterA: {
            X: -0.5,
            Y: 0,
            Z: 1.4
          },
          CylinderCenterB: {
            X: 0.5,
            Y: 0,
            Z: 1.4
          },
          CylinderRadius: 1.4,
          HasCylinderShape: true
        }
      },
      BulletSaberVerticalParam: {
        $type: "spl__BulletSaberParam",
        BurstParam: {
          BurstFrame: 26,
          SplashColRadius: 0.1,
          SplashDrawRadius: 0.2,
          SplashPaintRadius: 3
        },
        CollisionParam: {
          CoreIndex: 3,
          OffsetArray: [
            {
              X: 0,
              Y: 1.6,
              Z: 0.1
            },
            {
              X: 0,
              Y: 1.2,
              Z: 0.2
            },
            {
              X: 0,
              Y: 0.6,
              Z: 0.1
            },
            {
              X: 0,
              Y: 0,
              Z: 0
            },
            {
              X: 0,
              Y: -0.6,
              Z: 0.1
            },
            {
              X: 0,
              Y: -1.2,
              Z: 0.2
            },
            {
              X: 0,
              Y: -1.6,
              Z: 0.1
            }
          ],
          ParamArray: [
            {
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.3,
              InitRadiusForPlayer: 0.3
            },
            {
              EndRadiusForField: 0.35,
              EndRadiusForPlayer: 0.35,
              InitRadiusForField: 0.35,
              InitRadiusForPlayer: 0.35
            },
            {
              EndRadiusForField: 0.45,
              EndRadiusForPlayer: 0.45,
              InitRadiusForField: 0.45,
              InitRadiusForPlayer: 0.45
            },
            {
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.5,
              InitRadiusForField: 0.5,
              InitRadiusForPlayer: 0.5
            },
            {
              EndRadiusForField: 0.45,
              EndRadiusForPlayer: 0.45,
              InitRadiusForField: 0.45,
              InitRadiusForPlayer: 0.45
            },
            {
              EndRadiusForField: 0.35,
              EndRadiusForPlayer: 0.35,
              InitRadiusForField: 0.35,
              InitRadiusForPlayer: 0.35
            },
            {
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.3,
              InitRadiusForPlayer: 0.3
            }
          ]
        },
        DamageParam: {
          HasGuard: false,
          HitDamage: 700
        },
        MoveParam: {
          BrakeAirResist: 0,
          BrakeGravity: 27e-4,
          BrakeToFreeStateFrame: 0,
          BrakeToFreeVelocityXZ: 0,
          BrakeToFreeVelocityY: 0,
          FreeAirResist: 0,
          FreeGravity: 0.02,
          GoStraightStateEndMaxSpeed: 10,
          GoStraightToBrakeStateFrame: 22,
          SpawnSpeed: 0.8
        },
        SplashPaintParam: {
          WidthHalf: 2
        },
        SplashSpawnParam: {
          DropInterval: 2,
          SplashNumMax: 14
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting"
      },
      spl__WeaponSaberParam: {
        $type: "spl__WeaponSaberParam",
        ChargeParam: {
          AirChargeRateByInkEmpty: 3,
          ChargeFrameFullCharge: 20,
          ChargeFrameMinCharge: 5,
          InkConsumeFullCharge: 0.09,
          InkConsumeMinCharge: 0.035,
          InkRecoverStop: 40,
          MoveSpeedFullCharge: 0.4
        },
        FootSplashPaintParam: {
          DepthMaxDropHeight: 0,
          DepthMinDropHeight: 0,
          DepthScaleMax: 1,
          DepthScaleMin: 0,
          WidthHalf: 0,
          WidthHalfNearest: 2
        },
        ShotGuideParam: {
          HorizontalSightFrame: 6,
          HorizontalSphereIndex: 2,
          VerticalSightFrame: 26,
          VerticalSphereIndex: 4
        },
        SwingParam: {
          ChargeMoveVelLimit: 0.06,
          ChargeSwingFrame: 22,
          ChargeSwingPostDelayFrame: 14,
          ChargeSwingShotBulletFrame: 6,
          ChargeSwingShotSlashFrame: 3,
          ChargeSwingStepShotBulletFrame: 18,
          ChargeSwingStepShotSlashFrame: 15,
          InkConsume: 0.04,
          InkRecoverStop: 40,
          InkRecoverStop_ChargeSwing: 40,
          IsShotEnable: true,
          ReserveAcceptFrame: 11,
          ShotBulletOffset_L: {
            X: 0,
            Y: 1,
            Z: 1.4
          },
          ShotBulletOffset_R: {
            X: 0,
            Y: 1,
            Z: 1.4
          },
          ShotBulletOffset_Vertical: {
            X: 0,
            Y: 2.2,
            Z: 0.8
          },
          ShotSlashOffset_L: {
            X: 0,
            Y: 0.9,
            Z: 0.3
          },
          ShotSlashOffset_R: {
            X: 0,
            Y: 0.9,
            Z: 0.3
          },
          ShotSlashOffset_Vertical: {
            X: 0,
            Y: 1.2,
            Z: 0.5
          },
          SideStepParam: {
            ChargeFrame: 3,
            InkConsume: 0,
            InkRecoverStop: 0,
            InputReqAcceptFrame: 0,
            MoveDist: 3,
            MoveFrame: 8,
            MoveStepKd: 0.75,
            RepeatCnt: 1,
            SlipMoveDistAir: 1,
            SlipMoveDistGnd: 0,
            SlipMoveFrame: 0,
            TimeScale: 1,
            TimeScaleFrm: 0,
            UnrelaxFrameMove: 6,
            UnrelaxFrameMove_Last: 14,
            UnrelaxFrameNoSideStep: 0,
            UnrelaxFrameNoSideStep_Last: 14,
            UnrelaxFrameNoSquid: 5,
            UnrelaxFrameNoSquid_Last: 14,
            UnrelaxFrameNoWeapon: 5,
            UnrelaxFrameNoWeapon_Last: 19,
            UnrelaxFrameOneMuzzle: 0,
            UnrelaxFrameOneMuzzle_Last: 0
          },
          StepStartStickHistoryFrame: 5,
          StepStartStickThresholdY: 0.9,
          WeakSwingASFrame: 36,
          WeakSwingFrame: 26,
          WeakSwingMoveVelLimit: 0.06,
          WeakSwingPostDelayFrame: 22,
          WeakSwingShotBulletFrame: 9,
          WeakSwingShotSlashFrame: 6
        }
      }
    },
    WeaponName: "Saber_Normal_00"
  },
  "8010": {
    GameParameters: {
      BulletSaberHorizontalParam: {
        $type: "spl__BulletSaberParam",
        BurstParam: {
          BurstFrame: 4,
          SplashColRadius: 0.1,
          SplashDrawRadius: 0.2,
          SplashPaintRadius: 2.2
        },
        CollisionParam: {
          CoreIndex: 1,
          OffsetArray: [
            {
              X: -0.7,
              Y: 0,
              Z: -0.2
            },
            {
              X: 0,
              Y: 0,
              Z: 0
            },
            {
              X: 0.7,
              Y: 0,
              Z: -0.2
            }
          ],
          ParamArray: [
            {
              ChangeFrameForPlayer: 0,
              EndRadiusForField: 0.25,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.25,
              InitRadiusForPlayer: 0.25
            },
            {
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.3,
              InitRadiusForPlayer: 0.3
            },
            {
              ChangeFrameForPlayer: 0,
              EndRadiusForField: 0.25,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.25,
              InitRadiusForPlayer: 0.25
            }
          ]
        },
        DamageParam: {
          HitDamage: 300
        },
        MoveParam: {
          BrakeAirResist: 0,
          BrakeGravity: 0,
          BrakeToFreeStateFrame: 0,
          BrakeToFreeVelocityXZ: 0,
          BrakeToFreeVelocityY: 0,
          FreeAirResist: 0,
          FreeGravity: 0,
          GoStraightToBrakeStateFrame: 5,
          SpawnSpeed: 3.3
        },
        PaintParam: {
          DepthScaleMax: 1.4,
          DepthScaleMin: 0.4,
          PaintDegreeMax: 60,
          WidthHalf: 2.3
        },
        SplashPaintParam: {
          DepthScaleMax: 3,
          DepthScaleMin: 1,
          WidthHalf: 1.28
        },
        SplashSpawnParam: {
          DropInterval: 2,
          NearestLen: 1.25,
          SplashNumMax: 8,
          SplitNum: 8
        }
      },
      BulletSaberSlashHorizontalParam: {
        $type: "spl__BulletSaberSlashParam",
        DamageParam: {
          DamageValue: 150
        },
        MoveParam: {
          AliveFrame: 4
        },
        ShapeParam: {
          BoxCenter: {
            X: 0,
            Y: 0,
            Z: 0.4
          },
          BoxHalfExtents: {
            X: 1.2,
            Y: 0.15,
            Z: 1
          }
        }
      },
      BulletSaberSlashVerticalParam: {
        $type: "spl__BulletSaberSlashParam",
        DamageParam: {
          DamageValue: 1200
        },
        MoveParam: {
          AliveFrame: 4
        },
        ShapeParam: {
          BoxCenter: {
            X: 0,
            Y: 0,
            Z: 0
          },
          BoxHalfExtents: {
            X: 0.25,
            Y: 1.4,
            Z: 0.7
          },
          CylinderCenterA: {
            X: -0.25,
            Y: 0,
            Z: 0.7
          },
          CylinderCenterB: {
            X: 0.25,
            Y: 0,
            Z: 0.7
          },
          HasCylinderShape: true
        }
      },
      BulletSaberVerticalParam: {
        $type: "spl__BulletSaberParam",
        BurstParam: {
          BurstFrame: 14,
          SplashColRadius: 0.1,
          SplashDrawRadius: 0.2,
          SplashPaintRadius: 3
        },
        CollisionParam: {
          CoreIndex: 3,
          OffsetArray: [
            {
              X: 0,
              Y: 1.2,
              Z: -0.3
            },
            {
              X: 0,
              Y: 0.8,
              Z: -0.2
            },
            {
              X: 0,
              Y: 0.4,
              Z: -0.1
            },
            {
              X: 0,
              Y: 0,
              Z: 0
            },
            {
              X: 0,
              Y: -0.4,
              Z: 0.1
            },
            {
              X: 0,
              Y: -0.8,
              Z: 0.2
            },
            {
              X: 0,
              Y: -1.2,
              Z: 0.3
            }
          ],
          ParamArray: [
            {
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.3,
              InitRadiusForPlayer: 0.3
            },
            {
              EndRadiusForField: 0.35,
              EndRadiusForPlayer: 0.35,
              InitRadiusForField: 0.35,
              InitRadiusForPlayer: 0.35
            },
            {
              EndRadiusForField: 0.45,
              EndRadiusForPlayer: 0.45,
              InitRadiusForField: 0.45,
              InitRadiusForPlayer: 0.45
            },
            {
              EndRadiusForField: 0.5,
              EndRadiusForPlayer: 0.5,
              InitRadiusForField: 0.5,
              InitRadiusForPlayer: 0.5
            },
            {
              EndRadiusForField: 0.45,
              EndRadiusForPlayer: 0.45,
              InitRadiusForField: 0.45,
              InitRadiusForPlayer: 0.45
            },
            {
              EndRadiusForField: 0.35,
              EndRadiusForPlayer: 0.35,
              InitRadiusForField: 0.35,
              InitRadiusForPlayer: 0.35
            },
            {
              EndRadiusForField: 0.3,
              EndRadiusForPlayer: 0.3,
              InitRadiusForField: 0.3,
              InitRadiusForPlayer: 0.3
            }
          ]
        },
        DamageParam: {
          HasGuard: false,
          HitDamage: 600
        },
        MoveParam: {
          BrakeAirResist: 0,
          BrakeGravity: 0.02,
          BrakeToFreeStateFrame: 0,
          BrakeToFreeVelocityXZ: 0,
          BrakeToFreeVelocityY: 0,
          FreeAirResist: 0,
          FreeGravity: 0.1,
          GoStraightStateEndMaxSpeed: 10,
          GoStraightToBrakeStateFrame: 10,
          SpawnSpeed: 1.2
        },
        SplashPaintParam: {
          DepthScaleMax: 2,
          WidthHalf: 1.28
        },
        SplashSpawnParam: {
          DropInterval: 1.5,
          SplashNumMax: 14
        }
      },
      MainEffectiveRangeUpParam: {
        $type: "spl__PlayerGearSkillParam_MainEffectiveRangeUp"
      },
      MainWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_MainWeaponSetting",
        WeaponSpeedType: "Fast"
      },
      spl__WeaponSaberParam: {
        $type: "spl__WeaponSaberParam",
        ChargeParam: {
          AirChargeRateByInkEmpty: 3,
          ChargeFrameFullCharge: 16,
          ChargeFrameMinCharge: 5,
          InkConsumeFullCharge: 0.06,
          InkConsumeMinCharge: 0.035,
          InkRecoverStop: 30,
          MoveSpeedFullCharge: 0.4
        },
        FootSplashPaintParam: {
          DepthMaxDropHeight: 0,
          DepthMinDropHeight: 0,
          DepthScaleMax: 1,
          DepthScaleMin: 0,
          WidthHalf: 0,
          WidthHalfNearest: 2
        },
        ShotGuideParam: {
          HorizontalSightFrame: 4,
          HorizontalSphereIndex: 1,
          VerticalSightFrame: 14,
          VerticalSphereIndex: 3
        },
        SwingParam: {
          ChargeMoveVelLimit: 0.0945,
          ChargeSwingASFrame: 30,
          ChargeSwingFrame: 22,
          ChargeSwingPostDelayFrame: 22,
          ChargeSwingShotBulletFrame: 6,
          ChargeSwingShotSlashFrame: 3,
          ChargeSwingStepShotBulletFrame: 17,
          ChargeSwingStepShotSlashFrame: 14,
          InkConsume: 0.03,
          InkRecoverStop: 30,
          InkRecoverStop_ChargeSwing: 30,
          IsEnableStep: true,
          IsShotEnable: true,
          ReserveAcceptFrame: 14,
          ShotBulletOffset_L: {
            X: 0,
            Y: 1,
            Z: 1.4
          },
          ShotBulletOffset_R: {
            X: 0,
            Y: 1,
            Z: 1.4
          },
          ShotBulletOffset_Vertical: {
            X: 0,
            Y: 2.2,
            Z: 0.8
          },
          ShotSlashOffset_L: {
            X: 0,
            Y: 0.9,
            Z: 0.3
          },
          ShotSlashOffset_R: {
            X: 0,
            Y: 0.9,
            Z: 0.3
          },
          ShotSlashOffset_Vertical: {
            X: 0,
            Y: 1.2,
            Z: 0.5
          },
          SideStepParam: {
            ChargeFrame: 4,
            InkConsume: 0,
            InkRecoverStop: 0,
            InputReqAcceptFrame: 0,
            MoveDist: 2,
            MoveFrame: 3,
            MoveStepKd: 0.3,
            RepeatCnt: 1,
            SlipMoveDistAir: 1,
            SlipMoveFrame: 0,
            TimeScale: 1,
            TimeScaleFrm: 0,
            UnrelaxFrameMove: 0,
            UnrelaxFrameMove_Last: 12,
            UnrelaxFrameNoSideStep: 0,
            UnrelaxFrameNoSideStep_Last: 12,
            UnrelaxFrameNoSquid: 0,
            UnrelaxFrameNoSquid_Last: 12,
            UnrelaxFrameNoWeapon: 0,
            UnrelaxFrameNoWeapon_Last: 26,
            UnrelaxFrameOneMuzzle: 0,
            UnrelaxFrameOneMuzzle_Last: 0
          },
          StepStartStickHistoryFrame: 5,
          StepStartStickThresholdY: 0.9,
          WeakSwingASFrame: 22,
          WeakSwingFrame: 16,
          WeakSwingMoveVelLimit: 0.0945,
          WeakSwingPostDelayFrame: 15,
          WeakSwingShotBulletFrame: 6,
          WeakSwingShotSlashFrame: 3
        }
      }
    },
    WeaponName: "Saber_Lite_00"
  }
};
const subs = {
  "0": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        DistanceDamage: [
          {
            Damage: 1800,
            Distance: 3.6
          },
          {
            Damage: 300,
            Distance: 7
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 12
        },
        PaintOffsetY: 0.1,
        SplashAroundParam: {
          Num: 15,
          OffsetY: 0.3,
          PaintRadius: 1.064,
          PitchMax: 45
        }
      },
      MoveParam: {
        $type: "spl__BulletBombSplashParam",
        BurstFrame: 60,
        CollisionSESpanFrame: 8,
        CollisionSEVelDotGroundNrm: -1,
        ContactDashPanel: {
          AddSpeedPerImpact: 0.15833,
          CrossSaveSpeedRate: 0.9
        },
        ContactJumpPanel: {
          AddSpeedOneBoundRate: 0.7,
          AddSpeedPerImpact: 0.08333
        },
        FlyGravity: 0.016,
        FlyRotateAirResist: 0.018,
        GroundGravity: 0.016,
        GroundPositionDeg50AirResist: 0.28,
        GroundPositionHorizonAirResist: 0.19,
        GroundRotateDeg50AirResist: 0.5,
        GroundRotateHorizonAirResist: 0.35,
        GuideRadius: 0.575,
        HitVerticalWallReboundMaxRate: 0.7,
        SpawnRotatePitch: 0.4,
        SpawnRotateRoll: 0.03,
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.68,
          Low: 1.12,
          Mid: 1.4
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting"
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkRecoverStop: 60
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4
      }
    },
    SubName: "Bomb_Splash"
  },
  "1": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 2.5,
        CrossPaintRadius: 2.5,
        DamageOffsetY: 0.6,
        DistanceDamage: [
          {
            Damage: 1800,
            Distance: 4.6
          },
          {
            Damage: 300,
            Distance: 8
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 12
        },
        PaintOffsetY: 0.45,
        PaintRadius: 5,
        SplashAroundParam: {
          Num: 15,
          OffsetY: 0.5,
          PaintRadius: 1.116,
          PitchMax: 45,
          PitchMin: 5,
          VelocityMax: 0.64,
          VelocityMin: 0.48
        }
      },
      MoveParam: {
        $type: "spl__BulletBombSuctionParam",
        GuideHitCollisionType: "EnemyOffFenceOn",
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.68,
          Low: 1.12,
          Mid: 1.4
        },
        WarningSERestFrame: 60
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting"
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkRecoverStop: 60
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4,
        ZRate: 2
      }
    },
    SubName: "Bomb_Suction"
  },
  "2": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 1.4,
        CrossPaintRadius: 1.4,
        DamageAttackerPriority: false,
        DamageLinear: false,
        DistanceDamage: [
          {
            Damage: 350,
            Distance: 2.8
          },
          {
            Damage: 250,
            Distance: 4
          }
        ],
        KnockBackParam: {
          Accel: 470,
          Bias: 0.8,
          Distance: 8
        },
        PaintOffsetY: -0.05,
        SplashAroundParam: {
          Num: 10,
          OffsetY: 0.3,
          PaintRadius: 0.7,
          PitchMax: 30,
          PitchMin: 5,
          VelocityMax: 0.35,
          VelocityMin: 0.52
        }
      },
      MoveParam: {
        $type: "spl__BulletBombQuickParam",
        GuideHitCollisionType: "EnemyOnFenceOn",
        SpawnRotatePitch: 0.4,
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.68,
          Low: 1.12,
          Mid: 1.4
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 0
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.4,
        InkRecoverStop: 50
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4
      }
    },
    SubName: "Bomb_Quick"
  },
  "3": {
    GameParameters: {
      MoveParam: {
        $type: "spl__BulletSprinklerParam",
        GuideHitCollisionType: "EnemyOffFenceOnBlowerOffTorpedoOff",
        HitPaintRadius: 2.9,
        PeriodFirst: {
          High: 600,
          Low: 300,
          Mid: 450
        },
        PeriodSecond: {
          High: 1020,
          Low: 900,
          Mid: 960
        },
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.12,
          Low: 1.12,
          Mid: 1.12
        },
        SpoutInkDrawRadius: 0.25,
        SpoutInkPaintRadiusMaxHeight: 1.5,
        SpoutInkPaintRadiusMaxRate: 1.4,
        SpoutInkPaintRadiusMinHeight: 10,
        SpoutInkPaintRadiusMinRate: 1.4
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 3
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.6,
        InkRecoverStop: 60
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4,
        ZRate: 2
      }
    },
    SubName: "Sprinkler"
  },
  "4": {
    GameParameters: {
      MoveParam: {
        $type: "spl__BulletShieldParam",
        DamageSpanFrame: 30,
        FlyGravity: 9e-3,
        FlyPositionAirResist: 1e-3,
        MaxHP: {
          High: 15e3,
          Low: 8e3,
          Mid: 11500
        },
        SpawnSpeedY: 0.07,
        SpawnSpeedYWorldMin: -0.5,
        SpawnSpeedZSpecUp: {
          High: 0.3,
          Low: 0.3,
          Mid: 0.3
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting"
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.6,
        InkRecoverStop: 85
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YPlusRate: 0,
        ZRate: 0
      }
    },
    SubName: "Shield"
  },
  "5": {
    GameParameters: {
      MoveParam: {
        $type: "spl__BulletBombFizzyParam",
        BlastParamArray: [
          {
            CrossPaintRadius: 2,
            DistanceDamage: [
              {
                Damage: 500,
                Distance: 1.6
              },
              {
                Damage: 350,
                Distance: 3.8
              }
            ],
            KnockBackParam: {
              Accel: 470,
              Bias: 0.8,
              Distance: 8
            },
            PaintRadius: 3,
            SplashAroundParam: {
              Num: 6,
              OffsetY: 0.3,
              PaintRadius: 0.7,
              PitchMax: 25,
              PitchMin: 10,
              VelocityMax: 0.4,
              VelocityMin: 0.35
            }
          },
          {
            CrossPaintRadius: 2,
            DistanceDamage: [
              {
                Damage: 500,
                Distance: 1.95
              },
              {
                Damage: 350,
                Distance: 4.5
              }
            ],
            KnockBackParam: {
              Accel: 470,
              Bias: 0.8,
              Distance: 8
            },
            PaintRadius: 3.4,
            SplashAroundParam: {
              Num: 6,
              OffsetY: 0.3,
              PaintRadius: 0.7,
              PitchMax: 20,
              PitchMin: 10,
              VelocityMax: 0.42,
              VelocityMin: 0.36
            }
          },
          {
            CrossPaintRadius: 2,
            DistanceDamage: [
              {
                Damage: 500,
                Distance: 2.6
              },
              {
                Damage: 350,
                Distance: 5.45
              }
            ],
            KnockBackParam: {
              Accel: 470,
              Bias: 0.8,
              Distance: 8
            },
            PaintRadius: 3.8,
            SplashAroundParam: {
              Num: 6,
              OffsetY: 0.3,
              PaintRadius: 0.7,
              PitchMax: 20,
              PitchMin: 10,
              VelocityMax: 0.43,
              VelocityMin: 0.39
            }
          }
        ],
        BurstSeFrameArray: [
          10,
          7,
          7
        ],
        BurstWaitFrameArray: [
          15,
          1,
          1
        ],
        BurstWarnFrameArray: [
          15,
          7,
          7
        ],
        ChargeFrameArray: [
          40,
          80
        ],
        CollisionSeSilentFrame: 8,
        CollisionSeVelDotGndNrm: -1,
        FlyRotateAirResist: 0.018,
        FlySplashDistanceArray: [
          2.2,
          2.2,
          2.2
        ],
        FlySplashPaintParamArray: [
          {
            DepthMaxDropHeight: 3,
            DepthMinDropHeight: 10,
            DepthScaleMax: 1.6,
            DepthScaleMin: 1.6,
            WidthHalf: 1.08,
            WidthHalfNearest: 1.08
          },
          {
            DepthScaleMax: 1.6,
            DepthScaleMin: 1.6,
            WidthHalf: 1.2,
            WidthHalfNearest: 1.2
          },
          {
            DepthScaleMax: 1.6,
            DepthScaleMin: 1.6,
            WidthHalf: 1.32,
            WidthHalfNearest: 1.32
          }
        ],
        FlySplashPaintRadiusArray: [
          0.9,
          1,
          1.1
        ],
        GroundGravity: 0.016,
        GroundPositionDeg50AirResist: 0.28,
        GroundPositionHorizonAirResist: 0.19,
        GroundRotateDeg50AirResist: 0.5,
        GroundRotateHorizonAirResist: 0.35,
        ObjColDamage: 100,
        SpawnSpeedY: 0.24,
        SpawnSpeedZSpecUp: {
          High: 1.84,
          Low: 1.36,
          Mid: 1.6
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 1
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.6,
        InkRecoverStop: 85
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4,
        ZRate: 2
      }
    },
    SubName: "Bomb_Fizzy"
  },
  "6": {
    GameParameters: {
      BlastParamMaxCharge: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 2.1,
        CrossPaintRadius: 2.1,
        DamageAttackerPriority: false,
        DistanceDamage: [
          {
            Damage: 1800,
            Distance: 4.6
          },
          {
            Damage: 300,
            Distance: 8
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 9
        },
        PaintRadius: 5,
        SplashAroundParam: {
          Num: 12,
          PaintRadius: 0.805,
          PitchMax: 33,
          PitchMin: 19,
          VelocityMax: 0.48,
          VelocityMin: 0.4
        }
      },
      BlastParamMinCharge: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 1,
        CrossPaintRadius: 1,
        DamageAttackerPriority: false,
        DistanceDamage: [
          {
            Damage: 1800,
            Distance: 1.6
          },
          {
            Damage: 300,
            Distance: 5
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 9
        },
        PaintRadius: 2.133,
        SplashAroundParam: {
          Num: 12,
          PaintRadius: 0.805,
          PitchMax: 33,
          PitchMin: 19,
          VelocityMax: 0.3,
          VelocityMin: 0.25
        }
      },
      MoveParam: {
        $type: "spl__BulletBombCurlingParam",
        BaseSpeedComeOverRate: 0.92,
        BaseSpeedComeUnderRate: 0.96,
        BaseSpeedMinCharge: 0.22,
        BurstFrame: 210,
        BurstTimingSpeedStartRestFrame: 90,
        BurstTimingSpeedStopBias: 0.41,
        ContactDashPanel: {
          AddSpeedPerImpact: 0.22807,
          AddSpeedSequenceFrameRate: 0.95,
          ImpactDirectionSaveSpeedRate: 0
        },
        ContactJumpPanel: {
          AddSpeedOneBoundRate: 0.5,
          AddSpeedPerImpact: 0.05167,
          MaxBoundNum: 3
        },
        DamageDirectHit: 200,
        DamageDirectSpanSecond: 0.6667,
        FlyGravity: 0.016,
        FlyPositionAirResist: 0.05866,
        GroundGravity: 16e-4,
        GroundPositionAirResist: 0,
        GuideHitCollisionType: "EnemyOnFenceOn",
        KnockBackParam: {
          Accel: 350,
          Bias: 0,
          Degree: 60,
          Distance: 10
        },
        ModelRotateHitWall45Degree: 1,
        ModelRotateReduceDegree: 5e-3,
        PaintBurstRadiusBias: 0.65,
        PaintCheckHeight: 2,
        PaintRadiusBias: 0.25,
        PaintRadiusMaxCharge: 1.29,
        PaintRadiusMinCharge: 1.075,
        SpawnSpeedY: 0.12,
        SpawnSpeedYMaxCharge: 0.12,
        SpawnSpeedYWorldMin: -0.5,
        SpawnSpeedZMaxCharge: 0.2,
        SpawnSpeedZSpecUp: {
          High: 0.52,
          Low: 0.4,
          Mid: 0.46
        },
        WarningAnimRestFrame: 90
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting"
      },
      WeaponParam: {
        $type: "spl__WeaponBombCurlingParam",
        ChargeFrameBlastRate: 2,
        InkRecoverStop: 70,
        InkRecoverStopMaxCharge: 30,
        MaxChargeFrame: 60
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.8,
        YMax: 0.16,
        YMinusRate: 0,
        YPlusRate: 2,
        ZRate: 1.2
      }
    },
    SubName: "Bomb_Curling"
  },
  "7": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 1.75,
        CrossPaintRadius: 1.75,
        DistanceDamage: [
          {
            Damage: 1800,
            Distance: 2.85
          },
          {
            Damage: 300,
            Distance: 6.5
          }
        ],
        KnockBackParam: {
          Accel: 470,
          Bias: 0.8,
          Distance: 9
        },
        SplashAroundParam: {
          Num: 10,
          OffsetY: 0.3,
          PaintRadius: 0.7,
          VelocityMax: 0.35,
          VelocityMin: 0.52
        }
      },
      MoveParam: {
        $type: "spl__BulletBombRobotParam",
        BeforeRotateFrame: 30,
        ChaseAirAddSpeedXZPerFrame: 0.012,
        ChaseAirMaxSpeedXZ: 0.09,
        ChaseAirMaxSpeedY: 0.18,
        ChaseBurstWaitFrame: 60,
        ChaseFrame: 150,
        ChaseGroundAddSpeedPerFrame: 3e-3,
        ChaseGroundMaxSpeed: 0.09,
        ChasePitchDegree: 3,
        ChaseRollDegree: 1.25,
        ChaseYawDegree: 2,
        ContactDashPanel: {
          AddSpeedPerImpact: 0.16667
        },
        ContactJumpPanel: {
          AddSpeedOneBoundRate: 0.5,
          AddSpeedPerImpact: 0.08333,
          MaxBoundNum: 3
        },
        DeathTargetApprouchDistance: 0.65,
        FindApproachBurstWaitFrame: 60,
        FindRotateFrame: 10,
        FlyGravity: 0.016,
        FlyHitWallPitchToPlane: 5,
        FlyHitWallReboundResetFrame: 12,
        FlyPositionAirResist: 0.05866,
        FlyRotateAirResist: 0.01985,
        GuideRadius: 0.5,
        NoReceiveTargetBurstWaitFrame: 180,
        SpawnRotatePitch: 0.4,
        SpawnRotateRoll: 0.12,
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.68,
          Low: 1.12,
          Mid: 1.4
        },
        UnfindBurstWaitFrame: 60,
        WarningAnimRestFrame: 60,
        WarningSERestFrame: 60
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 1
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.55,
        InkRecoverStop: 85
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4,
        ZRate: 2
      }
    },
    SubName: "Bomb_Robot"
  },
  "8": {
    GameParameters: {
      MoveParam: {
        $type: "spl__BulletBeaconMoveParam",
        GuideRadius: 0,
        SpawnSpeedZSpecUp: {
          High: 1.12,
          Low: 1.12,
          Mid: 1.12
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 3
      },
      WeaponParam: {
        $type: "spl__WeaponBeaconParam",
        InkConsume: 0.75,
        InkRecoverStop: 0,
        KnockBackParam: {
          ImpactValue: 0.05
        }
      }
    },
    SubName: "Beacon"
  },
  "9": {
    GameParameters: {
      AreaParam: {
        $type: "spl__BulletPointSensorAreaParam",
        Distance: {
          High: 6,
          Low: 6,
          Mid: 6
        },
        MarkingFrameSubSpec: {
          High: 960,
          Low: 480,
          Mid: 720
        }
      },
      MoveParam: {
        $type: "spl__BulletPointSensorParam",
        GuideHitCollisionType: "EnemyOnFenceOnTorpedoOff",
        MarkingFrameSubSpec: {
          High: 960,
          Low: 480,
          Mid: 720
        },
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.87,
          Low: 1.38,
          Mid: 1.64
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 1
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.45,
        InkRecoverStop: 75
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4
      }
    },
    SubName: "PointSensor"
  },
  "10": {
    GameParameters: {
      AreaParam: {
        $type: "spl__BulletPointSensorAreaParam",
        AreaOffsetY: 0.45,
        Distance: {
          High: 11,
          Low: 8,
          Mid: 9.5
        },
        Frame: 1,
        MarkingFrameSubSpec: {
          High: 600,
          Low: 300,
          Mid: 450
        }
      },
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 2.5,
        CrossPaintRadius: 2.5,
        DamageOffsetY: 0.45,
        DistanceDamage: [
          {
            Damage: 450,
            Distance: 3.6
          },
          {
            Damage: 350,
            Distance: 8
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 12
        },
        PaintOffsetY: 0.45,
        PaintRadius: 5,
        PlaneDamage: [
          {
            Damage: 450,
            Distance: -0.5
          },
          {
            Damage: 350,
            Distance: -1.5
          }
        ],
        SubSpecialSpecUpList: [
          {
            SpecUpType: "DistanceDamageDistanceRate",
            Value: {
              High: 1.375,
              Low: 1,
              Mid: 1.1875
            }
          }
        ]
      },
      MoveParam: {
        $type: "spl__BulletTrapParam",
        GuideRadius: 0,
        MaxPlaceNum: 2,
        PlacePaintRadius: 1,
        SensorRadius: {
          High: 4,
          Low: 3,
          Mid: 3.5
        },
        SpawnSpeedZSpecUp: {
          High: 1.12,
          Low: 1.12,
          Mid: 1.12
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 3
      },
      WeaponParam: {
        $type: "spl__WeaponTrapParam",
        InkConsume: 0.6,
        InkRecoverStop: 0,
        KnockBackParam: {
          ImpactValue: 0.015
        }
      }
    },
    SubName: "Trap"
  },
  "11": {
    GameParameters: {
      AreaParam: {
        $type: "spl__BulletPoisonMistAreaParam",
        AreaOffsetY: 0,
        DistanceForOff: 5.4,
        EffectParam: {
          Level: [
            {
              Frame: 60,
              NextLevelCount: 3
            },
            {
              Frame: 30,
              NextLevelCount: 4
            },
            {
              Frame: 15,
              NextLevelCount: 0
            }
          ]
        }
      },
      MoveParam: {
        $type: "spl__BulletPoisonMistParam",
        GuideHitCollisionType: "EnemyOffFenceOnTorpedoOff",
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.68,
          Low: 1.12,
          Mid: 1.4
        }
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 1
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.6,
        InkRecoverStop: 75
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4
      }
    },
    SubName: "PoisonMist"
  },
  "12": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CollisionRadiusForPaint: 2.2,
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        KnockBackParam: {
          Accel: 0
        },
        PaintHeight: 3,
        PaintOffsetY: 0,
        PaintRadius: 2,
        PaintTexture: "BombLineMarker"
      },
      MoveParam: {
        $type: "spl__BulletLineMarkerParam",
        CollisionRadius: 0.25,
        DirectDamage: 350,
        FlyGravity: 0,
        FlyPositionAirResist: 0,
        FlyingFrame: 7,
        GuideHitCollisionType: "EnemyOnFenceOff",
        GuideRadius: 0.25,
        MarkingFrame: {
          High: 600,
          Low: 300,
          Mid: 450
        },
        PaintRadius: 1.3,
        ReboundGroundBoundRate: 1,
        ReboundGroundReflectAngleRate: 0.1,
        ReboundWallBoundRate: 1,
        ReboundWallReflectAngleRate: 1,
        SpawnSpeedYWorldMin: -100,
        SpawnSpeedZSpecUp: {
          High: 6.48,
          Low: 6,
          Mid: 6.24
        },
        TailDamage: 0,
        TailFrame: 90
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting",
        SubInkSaveLv: 0
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.4,
        InkRecoverStop: 50
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YPlusRate: 0,
        ZRate: 0
      }
    },
    SubName: "LineMarker"
  },
  "13": {
    GameParameters: {
      BlastParamChase: {
        $type: "spl__BulletBombTorpedoChaseBlastParam",
        DistanceDamage: [
          {
            Damage: 600,
            Distance: 2.6
          },
          {
            Damage: 350,
            Distance: 6
          }
        ],
        KnockBackParam: {
          Accel: 230,
          Bias: 0.8,
          Distance: 12
        },
        PaintRadius: 3.5,
        SplashAroundParam: {
          Num: 8,
          PaintRadius: 0,
          PitchMax: 65,
          PitchMin: 65,
          VelocityMax: 0.48,
          VelocityMin: 0.42
        },
        SplashBlastParam: {
          CrossPaintCheckLength: 1,
          CrossPaintRadius: 1,
          DistanceDamage: [
            {
              Damage: 120,
              Distance: 2.6
            }
          ],
          KnockBackParam: {
            Accel: 0
          },
          PaintRadius: 2
        }
      },
      BlastParamThrow: {
        $type: "spl__BulletBlastParam",
        DistanceDamage: [
          {
            Damage: 600,
            Distance: 2.6
          },
          {
            Damage: 350,
            Distance: 6
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 12
        },
        PaintOffsetY: 0.1,
        PaintRadius: 3.5,
        SplashAroundParam: {
          Num: 0,
          PaintRadius: 0.6,
          PitchMax: 45,
          VelocityMax: 0.35,
          VelocityMin: 0.3
        }
      },
      MoveParam: {
        $type: "spl__BulletBombTorpedoParam",
        BurstFrame: 30,
        CollisionSESpanFrame: 8,
        CollisionSEVelDotGroundNrm: -1,
        FindCollisionStartRadiusRate: 0.55555,
        FindSpawnSplashAroundParam: {
          Num: 6,
          PaintRadius: 0.7,
          PitchMax: 45,
          PitchMin: 30,
          VelocityMax: 0.23,
          VelocityMin: 0.15
        },
        FlyRotateAirResist: 0.018,
        GroundPositionDeg50AirResist: 0.3,
        GroundPositionHorizonAirResist: 0.3,
        GroundRotateDeg50AirResist: 0.5,
        GroundRotateHorizonAirResist: 0.35,
        GuideHitCollisionType: "EnemyOffFenceOn",
        GuideRadius: 0.575,
        HitVerticalWallReboundMaxRate: 0.7,
        SpawnRotateRoll: 0.2,
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.84,
          Low: 1.36,
          Mid: 1.6
        },
        WarningSERestFrame: 30
      },
      SplashNearest: {
        $type: "spl__BulletSplashBombTorpedoNearestParam"
      },
      SubWeaponSetting: {
        $type: "spl__PlayerGearSkillParam_SubWeaponSetting"
      },
      WeaponParam: {
        $type: "spl__WeaponSubParam",
        InkConsume: 0.65,
        InkRecoverStop: 88
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.32,
        YPlusRate: 4
      }
    },
    SubName: "Bomb_Torpedo"
  }
};
const specials = {
  "1": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        DistanceDamage: [
          {
            Damage: 400,
            Distance: 4
          }
        ],
        KnockBackParam: {
          Accel: 470,
          Bias: 0.8,
          Distance: 8
        },
        PaintRadius: 3.2,
        SubSpecialSpecUpList: [
          {
            SpecUpType: "PaintRadius",
            Value: {
              High: 4,
              Low: 3.2,
              Mid: 3.6
            }
          },
          {
            SpecUpType: "DistanceDamageDistanceRate",
            Value: {
              High: 1.3,
              Low: 1,
              Mid: 1.15
            }
          }
        ]
      },
      CollisionParam: {
        $type: "spl__BulletSpUltraShotCollisionParam",
        ChangeFrameForField: 20,
        ChangeFrameForPlayer: 10,
        EndRadiusForField: 0.3,
        EndRadiusForPlayer: 0.75,
        InitRadiusForField: 0.01,
        InitRadiusForPlayer: 0.01
      },
      DamageParam: {
        $type: "spl__BulletSpUltraShotDamageParam",
        DirectHitDamage: 2200
      },
      MoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        BrakeAirResist: 0.09,
        BrakeGravity: 0.09,
        BrakeToFreeStateFrame: 10,
        BrakeToFreeVelocityXZ: 1,
        BrakeToFreeVelocityY: -0.1,
        FreeAirResist: 0.01985,
        FreeGravity: 0.0190565,
        GoStraightStateEndMaxSpeed: 1,
        GoStraightToBrakeStateFrame: 18,
        SpawnSpeed: 1
      },
      UltraShotMoveParam: {
        $type: "spl__BulletSpUltraShotMoveParam",
        OrbitalRadiusEnd: 1,
        OrbitalRadiusTransitionFrame: 10
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YPlusRate: 0,
        ZRate: 0
      },
      spl__WeaponSpUltraShotParam: {
        $type: "spl__WeaponSpUltraShotParam",
        EjectCartridgeAngularVel: {
          X: 35,
          Y: 0,
          Z: 20
        },
        EjectCartridgeFadeOutFrame: 5,
        EjectCartridgeFrame: 30,
        EjectCartridgeInitSpeed: 5,
        EjectCartridgeLifeTimeFrame: 60,
        HideCartridgeBeforeEjectFrame: 1,
        HoldAimFrame: 55,
        KnockBackParam: {
          AirBreakRt: 0.8,
          ImpactValue: 0.04,
          StickDownRt: 5
        },
        MoveSpeed: 0.07,
        MoveSpeedInCharge: 0.04,
        RepeatFrame: 55,
        ShotDelayFrame: 15,
        SpecialDurationFrame: {
          High: 480,
          Low: 360,
          Mid: 420
        }
      }
    },
    SpecialName: "SpUltraShot"
  },
  "2": {
    GameParameters: {
      spl__BulletSpGreatBarrierMoveParam: {
        $type: "spl__BulletSpGreatBarrierMoveParam",
        BarrierParam: {
          CanopyKnockBack: 700,
          DamgeRatio: 0.5,
          MaxFieldHP: {
            High: 28800,
            Low: 24e3,
            Mid: 26400
          },
          MaxHP: {
            High: 14400,
            Low: 12e3,
            Mid: 13200
          },
          MaxRadius: 6,
          MinRadius: 2.255,
          RadiusRatioCurve: {
            Data: [
              0.1940299,
              0,
              0,
              0.6522388,
              0.3726415,
              -0.02766653,
              0.8723881,
              0.75,
              1.1808,
              1,
              1,
              4.740566
            ],
            MaxX: 1,
            Type: "Hermit2DSmooth"
          },
          TimeDamage: 720,
          TimeDamageOnVLift: 1440
        },
        DroneParam: {
          AscendCurve: {
            Data: [
              0,
              0,
              0,
              0.25,
              0.1122642,
              0.8181818,
              0.5,
              0.5,
              2.926098,
              0.6830189,
              0.8556603,
              1.395833,
              1,
              1,
              0
            ],
            MaxX: 1,
            Type: "Hermit2DSmooth"
          },
          AscendHeight: 7,
          FieldCollisionRadius: 0.4,
          IgnitionFrame: 15,
          OverlapFieldDamage: 5,
          OverlapFieldDamageInterval: 5
        }
      },
      spl__WeaponSpGreatBarrierParam: {
        $type: "spl__WeaponSpGreatBarrierParam",
        KnockBackParam: {
          ImpactValue: 0.05
        }
      }
    },
    SpecialName: "SpGreatBarrier"
  },
  "3": {
    GameParameters: {
      BulletBombMoveParam: {
        $type: "spl__BulletBombMoveParam",
        FlyGravity: 0,
        FlyPositionAirResist: 0,
        GuideHitCollisionType: "SuperHook",
        SpawnSpeedZSpecUp: {
          High: 3.36,
          Low: 3.36,
          Mid: 3.36
        }
      },
      BulletParam: {
        $type: "spl__BulletSpSuperHookParam",
        CollisionRadiusForField: 1.6,
        CollisionRadiusForPlayer: 1.2,
        KnockBackParam: {
          Accel: 450,
          Bias: 0,
          Degree: 55,
          DirectionZeroAccelRate: 1,
          Distance: 10
        },
        PaintDepthScale: 1.5,
        PaintSpanFrame: 2,
        PaintWidthHalf: 1
      },
      HookBlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 1.4,
        CrossPaintRadius: 1.4,
        DistanceDamage: [
          {
            Damage: 350,
            Distance: 3.2
          },
          {
            Damage: 250,
            Distance: 4
          }
        ],
        KnockBackParam: {
          Accel: 470,
          Bias: 0.8,
          Distance: 8
        }
      },
      HookCollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        EndRadiusForField: 0.5,
        EndRadiusForPlayer: 0.01,
        InitRadiusForField: 0.5,
        InitRadiusForPlayer: 0.01
      },
      WeaponParam: {
        $type: "spl__WeaponSpSuperHookParam",
        InkCapacityRt: 1.5,
        InkConsume_Hook: {
          High: 0.0225,
          Low: 0.06,
          Mid: 0.0375
        },
        InkConsume_PerSec: {
          High: 0.12,
          Low: 0.15,
          Mid: 0.1305
        },
        MaxLengthHook: 35,
        MinLengthHook_Floor: 4,
        MinLengthHook_Wall: 0,
        MoveAccAttack: 0.1,
        MoveSpeedAttack_Init: 0.06,
        ShotFailedIntervalFrm: 20,
        SpecialTotalFrame: 540,
        WaitFrameShot2Attack: 12
      }
    },
    SpecialName: "SpSuperHook"
  },
  "4": {
    GameParameters: {
      spl__BulletBlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 3,
        DamageOffsetY: 0,
        DistanceDamage: [
          {
            Damage: 1500,
            Distance: 1.1
          },
          {
            Damage: 500,
            Distance: 2.1
          },
          {
            Damage: 300,
            Distance: 5
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 8
        },
        PaintOffsetY: 0,
        PaintRadius: 3,
        SubSpecialSpecUpList: [
          {
            Value: {
              High: 3.78,
              Low: 3.15,
              Mid: 3.465
            }
          },
          {
            SpecUpType: "CrossPaintRadius",
            Value: {
              High: 2,
              Low: 2,
              Mid: 2
            }
          },
          {
            SpecUpType: "CrossPaintCheckLength",
            Value: {
              High: 3,
              Low: 3,
              Mid: 3
            }
          }
        ]
      },
      spl__BulletSpMultiMissileDamageParam: {
        $type: "spl__BulletSpMultiMissileDamageParam"
      },
      spl__BulletSpMultiMissileMoveParam: {
        $type: "spl__BulletSpMultiMissileMoveParam",
        RiseParam: {
          RiseBaseSpeedComeUnderRate: 0.9
        },
        TargetParam: {
          MultiTargetCircleArray: [
            {
              Num: 0,
              RandomOffset: 4,
              RandomOffsetBias: 0.3
            }
          ],
          OneTargetCircleArray: [
            {
              Num: 1,
              Radius: 0,
              RandomOffset: 0
            },
            {
              Num: 9,
              Radius: 3,
              RandomOffset: 0.5,
              RandomOffsetBias: 0.35
            },
            {
              Radius: 5,
              RandomOffset: 0.5,
              RandomOffsetBias: 0.35
            }
          ]
        }
      },
      spl__WeaponSpMultiMissileLaunchParam: {
        $type: "spl__WeaponSpMultiMissileLaunchParam",
        ShotIntervalTargetArray: [
          4
        ],
        ShotNumOneTargetArray: [
          10,
          5,
          4
        ]
      },
      spl__WeaponSpMultiMissileLockOnParam: {
        $type: "spl__WeaponSpMultiMissileLockOnParam",
        TargetCircleEffectDefaultRadius: 9.3,
        TargetInCircleRadius: {
          High: 240,
          Low: 140,
          Mid: 190
        }
      },
      spl__WeaponSpMultiMissilePlayerParam: {
        $type: "spl__WeaponSpMultiMissilePlayerParam",
        JumpVelLimitSearching: 0.06,
        MoveVelLimitSearching: 0.048
      }
    },
    SpecialName: "SpMultiMissile"
  },
  "5": {
    GameParameters: {
      CloudParam: {
        $type: "spl__BulletSpInkStormCloudParam",
        NoPaintRainNum: 0,
        RainNum: 72,
        RainyFrame: {
          High: 600,
          Low: 480,
          Mid: 540
        },
        WithNoPaintRainNum: 120
      },
      MoveParam: {
        $type: "spl__BulletSpInkStormGeneratorMoveParam",
        GuideHitCollisionType: "InkStorm",
        SpawnSpeedY: 0.24,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1.68,
          Low: 1.12,
          Mid: 1.4
        }
      },
      RainParam: {
        $type: "spl__BulletSpInkStormRainParam",
        CollisionParam: {
          EndRadiusForField: 0.25,
          EndRadiusForPlayer: 0,
          InitRadiusForField: 0.25,
          InitRadiusForPlayer: 0
        },
        MoveParam: {
          BrakeAirResist: 0,
          BrakeGravity: 0,
          BrakeToFreeStateFrame: 0,
          BrakeToFreeVelocityXZ: 0,
          BrakeToFreeVelocityY: 0,
          FreeAirResist: 0.07,
          FreeGravity: 0.02,
          GoStraightStateEndMaxSpeed: 0,
          GoStraightToBrakeStateFrame: 0,
          SpawnSpeed: 0
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.16,
        YPlusRate: 4
      }
    },
    SpecialName: "SpInkStorm"
  },
  "6": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletSpNiceBallBlastParam",
        CrossPaintCheckLength: 1.5,
        CrossPaintRadius: 1.5,
        DamageOffsetY: -0.2,
        KnockBackParam: {
          Accel: 93.333,
          Bias: 0.8,
          Distance: 8
        },
        PaintOffsetY: 0.3,
        PaintRadiusEnd: 13.5
      },
      FootSplashParam: {
        $type: "spl__BulletSpNiceBallFootSplashParam",
        PaintRadius: 4.68
      },
      MoveParam: {
        $type: "spl__BulletSpNiceBallParam",
        FlyGravity: 0.021,
        FlyPositionAirResist: 0.045,
        GuideHitCollisionType: "NiceBall",
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 1,
          Low: 1,
          Mid: 1
        }
      },
      WeaponParam: {
        $type: "spl__WeaponSpNiceBallParam",
        ArmorHP: 4700,
        ChargeRateAutoPerFrame: {
          High: 0.01,
          Low: 2e-3,
          Mid: 6e-3
        },
        ChargeRateNiceFriend: [
          0.08,
          0.04,
          0.02,
          0.01
        ],
        ThanksPaintPointMax: 15,
        ThanksPaintPointOnce: [
          6,
          3,
          2,
          1,
          0.5
        ]
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YMinusRate: 0,
        YPlusRate: 0,
        ZRate: 0
      }
    },
    SpecialName: "SpNiceBall"
  },
  "7": {
    GameParameters: {
      spl__BulletSpShockSonarParam: {
        $type: "spl__BulletSpShockSonarParam",
        GeneratorParam: {
          HeadColRadius: 0.75,
          HitDamage: 300,
          HitDamageInterval: 0.5,
          HitKnockback: 400,
          MoveParam: {
            FlyGravity: 9e-3,
            FlyPositionAirResist: 1e-3,
            GuideHitCollisionType: "Clam",
            SpawnSpeedY: 0.07,
            SpawnSpeedYWorldMin: -0.5,
            SpawnSpeedZSpecUp: {
              High: 0.3,
              Low: 0.3,
              Mid: 0.3
            }
          },
          PoleColHeight: 2.75,
          SphereAnimCurve: {
            Data: [
              0,
              0,
              0,
              0.1454545,
              0,
              0,
              0.901515,
              1,
              -0.1383645,
              1,
              0,
              0
            ],
            MaxX: 1,
            Type: "Hermit2DSmooth"
          },
          SphereAnimRadius: 0.3,
          WaveEmitFrameArray: [
            90,
            240,
            390
          ]
        },
        WaveParam: {
          Damage: 450,
          DamageYMax: 2.8,
          DamageYMin: -5.2,
          MaxFrame: {
            High: 216,
            Low: 160,
            Mid: 192
          },
          MaxRadius: {
            High: 27,
            Low: 20,
            Mid: 24
          }
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YPlusRate: 0,
        ZRate: 0
      },
      spl__WeaponSpShockSonarParam: {
        $type: "spl__WeaponSpShockSonarParam",
        ShotParam: {}
      }
    },
    SpecialName: "SpShockSonar"
  },
  "8": {
    GameParameters: {
      ExhaleBlastParamMaxCharge: {
        $type: "spl__BulletBlastParam",
        DamageOffsetY: 0.5,
        DistanceDamage: [
          {
            Damage: 2200,
            Distance: 8
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 9
        },
        PaintOffsetY: 0.5,
        PaintRadius: 8
      },
      ExhaleBlastParamMinCharge: {
        $type: "spl__BulletBlastParam",
        DamageOffsetY: 0.5,
        DistanceDamage: [
          {
            Damage: 2200,
            Distance: 4
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          DirectionZeroAccelRate: 0,
          Distance: 9
        },
        PaintOffsetY: 0.5,
        PaintRadius: 4
      },
      ExhaleCollisionParam: {
        $type: "spl__BulletSpBlowerExhaleCollisionParam",
        RadiusForPlayerMinCharge: 0.4
      },
      ExhaleParam: {
        $type: "spl__BulletSpBlowerExhaleParam",
        DirectDamage: 2200,
        FlyGravity: 3e-3,
        FlyPositionAirResist: 0.01,
        GuideHitCollisionType: "BlowerExhale",
        GuideRadius: 0.25,
        PaintRadiusMaxCharge: 3.2,
        PaintRadiusMinCharge: 2.4,
        SpawnBlastWaitFrame: 50,
        SpawnSpeedY: 0.08,
        SpawnSpeedYMaxCharge: 0.08,
        SpawnSpeedZMaxCharge: 0.7,
        SpawnSpeedZSpecUp: {
          High: 0.55,
          Low: 0.55,
          Mid: 0.55
        }
      },
      ExhaleSplashPaintSpawnParam: {
        $type: "spl__BulletSplashSpBlowerExhalePaintSpawnParam"
      },
      InhaleParam: {
        $type: "spl__BulletSpBlowerInhaleParam",
        CollisionAccelRateNearest: 2,
        CollisionAccelRatePerDist: 0.01,
        CollisionAirResist: 0.12,
        DamagePerFrameByObject: 20,
        EffectRingSpanFrame: 56,
        EffectRingSpeed: {
          Data: [
            0,
            0.55,
            0.1832544,
            0.0637774,
            0.5,
            0,
            0.4208998,
            0.219,
            0,
            1,
            0.219,
            0
          ],
          MaxX: 1,
          Type: "Hermit2D"
        },
        EffectScalePerCollision: {
          Data: [
            0,
            0.28,
            2.329197,
            0.440625,
            1,
            0,
            1,
            1,
            0
          ],
          MaxX: 1,
          Type: "Hermit2D"
        },
        EffectSpeed: 2,
        LengthAddPerFrame: 0.3334,
        LengthMax: 15,
        MuzzleCollisionOffset: 1,
        MuzzleCollisionRadius: 1.2,
        PoisonMistForPlayer: {
          EffectFrame: 5,
          Level: [
            {},
            {
              NextLevelCount: 4
            },
            {
              Frame: 15,
              NextLevelCount: 0
            }
          ],
          SideStepInkConsumeRate: 3.5,
          SpecialWeapon: true
        },
        RadiusMax: {
          High: 4,
          Low: 3,
          Mid: 3.5
        },
        RadiusMin: {
          High: 1.4,
          Low: 0.8,
          Mid: 1.1
        },
        ReceiveDamageForPlayer: 15
      },
      WeaponParam: {
        $type: "spl__WeaponSpBlowerParam",
        ExhaleWaitFrame: 150,
        InhaleToExhaleWaitFrame: 20,
        JumpHeightFullCharge: 0.07,
        JumpHeightMinCharge: 0.115,
        JumpVelExhale: 0.07,
        MoveJumpDownBias: 1,
        MoveJumpDownStartChargeRate: 0.1,
        MoveSpeedFullCharge: 0.07,
        MoveSpeedMinCharge: 0.09,
        ShotDirXZ_RotDegH: 2,
        ShotPitVel: 0.15
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0.1,
        YPlusRate: 0.5,
        ZRate: 0.5
      }
    },
    SpecialName: "SpBlower"
  },
  "9": {
    GameParameters: {
      spl__BulletSpMicroLaserBitParam: {
        $type: "spl__BulletSpMicroLaserBitParam",
        ChargeParam: {
          ChargeFrame: 36,
          InterpRate: 0.4,
          MaxAngularVel: 30
        },
        FollowParam: {
          LockonEndFrame: 15
        },
        LaserParam: {
          AfterLaserWaitFrame: 20,
          FreeMoveRotSpeed: 0.3,
          LaserDamage: 30,
          LaserDamageIntervalFrame: 5,
          LaserFrame: {
            High: 240,
            Low: 180,
            Mid: 210
          }
        }
      },
      spl__WeaponSpMicroLaserParam: {
        $type: "spl__WeaponSpMicroLaserParam",
        LaunchParam: {
          EnableDualLaunch: true,
          LaserBitCenterOffset: {
            X: 0,
            Y: 1.7,
            Z: -0.6
          },
          LaserBitRadius: 1.3,
          LockonDeg: 80,
          LockonRadius: 10
        },
        PlayerParam: {
          AfterShot_NoBombFrm: 40,
          AfterShot_NoShotFrm: 40,
          AfterShot_NoSquidFrm: 40
        }
      }
    },
    SpecialName: "SpMicroLaser"
  },
  "10": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DistanceDamage: [
          {
            Damage: 500,
            Distance: 2.1
          },
          {
            Damage: 300,
            Distance: 5
          }
        ],
        KnockBackParam: {
          Accel: 470,
          Bias: 0.6,
          Distance: 8
        },
        PaintRadius: 3.2,
        SplashAroundParam: {
          Num: 10,
          OffsetY: 0.3,
          PaintRadius: 0.63,
          PitchMax: 30,
          PitchMin: 5,
          VelocityMax: 0.33,
          VelocityMin: 0.49
        },
        SubSpecialSpecUpList: [
          {
            Value: {
              High: 4,
              Low: 3.2,
              Mid: 3.6
            }
          },
          {
            SpecUpType: "DistanceDamageDistanceRate",
            Value: {
              High: 1.3,
              Low: 1,
              Mid: 1.15
            }
          },
          {
            SpecUpType: "SplashAroundVelocityMin",
            Value: {
              High: 0.52,
              Low: 0.49,
              Mid: 0.505
            }
          },
          {
            SpecUpType: "SplashAroundVelocityMax",
            Value: {
              High: 0.35,
              Low: 0.33,
              Mid: 0.34
            }
          },
          {
            SpecUpType: "SplashAroundPaintRadius",
            Value: {
              High: 0.7,
              Low: 0.63,
              Mid: 0.665
            }
          }
        ]
      },
      JetParam: {
        $type: "spl__BulletSpJetpackJetParam"
      },
      LauncherCollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        ChangeFrameForPlayer: 0,
        EndRadiusForField: 0.3,
        EndRadiusForPlayer: 0.3,
        FriendThroughFrameForPlayer: 1e3,
        InitRadiusForField: 0.3,
        InitRadiusForPlayer: 0.3
      },
      MoveParam: {
        $type: "spl__BulletSpJetpackLauncherParam"
      },
      WeaponParam: {
        $type: "spl__WeaponSpJetpackParam",
        SpecialTotalFrame: {
          High: 510,
          Low: 450,
          Mid: 480
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YMax: 100,
        YMinusRate: 0,
        YPlusRate: 0,
        ZRate: 0
      }
    },
    SpecialName: "SpJetpack"
  },
  "11": {
    GameParameters: {
      SwingBigBlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageOffsetY: 0.2,
        DistanceDamage: [
          {
            Damage: 400,
            Distance: 2.8
          }
        ],
        KnockBackParam: {
          Accel: 460,
          Bias: 0.8,
          Distance: 8
        },
        PaintOffsetY: 0,
        PaintRadius: 0
      },
      SwingBulletWallParam: {
        $type: "spl__BulletSpUltraStampSwingBulletWallParam"
      },
      SwingParam: {
        $type: "spl__BulletSpUltraStampSwingParam",
        DefiladeHandSideOffsetLength: 0.1,
        StateSwingUpLateFrame: 2
      },
      SwingSmallBlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 0,
        CrossPaintRadius: 0,
        DamageAttackerPriority: true,
        DamageOffsetY: 0.2,
        DistanceDamage: [
          {
            Damage: 400,
            Distance: 2.8
          }
        ],
        KnockBackParam: {
          Accel: 460,
          Bias: 0.8,
          Distance: 6
        },
        PaintOffsetY: 0,
        PaintRadius: 0
      },
      SwingWallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusGround: 0.5
      },
      SwingWallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 70,
        FallPeriodFirstFrameMin: 50,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 20,
        FallPeriodSecondFrame: 5,
        FallPeriodSecondTargetSpeed: 0.08
      },
      ThrowBlastParam: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 2.5,
        CrossPaintRadius: 2.5,
        DistanceDamage: [
          {
            Damage: 600,
            Distance: 4
          },
          {
            Damage: 300,
            Distance: 8
          }
        ],
        KnockBackParam: {
          Accel: 460,
          Bias: 0.8,
          Distance: 8
        },
        PaintRadius: 5
      },
      ThrowMoveParam: {
        $type: "spl__BulletSpUltraStampThrowParam",
        DirectDamageValue: 2200,
        FlyGravity: 0.013,
        FlyPositionAirResist: 0.03,
        GuideHitCollisionType: "ThrowUltraStamp",
        GuideRadius: 1.1,
        SpawnSpeedY: 0.17,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 0.85,
          Low: 0.85,
          Mid: 0.85
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YPlusRate: 0,
        ZRate: 0
      },
      spl__WeaponSpUltraStampParam: {
        $type: "spl__WeaponSpUltraStampParam",
        BangDown_VelLimitY: 0.14,
        HoldSwingKnockBackParam: {
          Accel: 500,
          Bias: 0.8,
          Distance: 8
        },
        SpecialTotalFrame: {
          High: 660,
          Low: 540,
          Mid: 600
        },
        VelLimit_NoPaint: 0.144
      }
    },
    SpecialName: "SpUltraStamp"
  },
  "12": {
    GameParameters: {
      AdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        ZRate: 2
      },
      BodyParam: {
        $type: "spl__BulletSpChariotBodyParam",
        CollisionRadiusForField: 1.15,
        CollisionRadiusForPlayer: 1.45,
        KnockBackChariotPlayer: {
          AccelMax: 720,
          AccelMin: 480,
          MyVelocityRate: 4800,
          OpponentVelocityRate: 300
        },
        KnockBackOpponent: {
          AccelMax: 720,
          AccelMin: 480,
          MyVelocityRate: 5400,
          OpponentVelocityRate: 300
        }
      },
      CannonParam: {
        $type: "spl__BulletSpChariotCannonParam",
        BlastParam: {
          CrossPaintCheckLength: 0,
          CrossPaintRadius: 0,
          DamageOffsetY: 0.2,
          DistanceDamage: [
            {
              Damage: 300,
              Distance: 5.6
            }
          ],
          KnockBackParam: {
            Accel: 470,
            Bias: 0.8,
            Distance: 5
          },
          PaintOffsetY: 0.2,
          PaintRadius: 4.5
        },
        CollisionParam: {
          ChangeFrameForField: 4,
          ChangeFrameForPlayer: 5,
          EndRadiusForField: 0.25,
          EndRadiusForPlayer: 0.4,
          FriendThroughFrameForPlayer: 1e3,
          InitRadiusForField: 0.1,
          InitRadiusForPlayer: 0.04
        },
        DrawSize: 0.7,
        MoveParam: {
          BrakeAirResist: 0.1,
          BrakeGravity: 0.04,
          BrakeToFreeStateFrame: 1,
          BrakeToFreeVelocityXZ: 20,
          BrakeToFreeVelocityY: 10,
          FreeAirResist: 0.12,
          FreeGravity: 0.05,
          GoStraightToBrakeStateFrame: 8
        },
        SplashParam: {
          DrawSizeCollisionPaintParam: {
            CollisionParam: {
              EndRadiusForField: 0.15,
              EndRadiusForPlayer: 0,
              InitRadiusForField: 0.15,
              InitRadiusForPlayer: 0
            },
            DrawRadius: 0.1,
            PaintDepthScale: 2,
            PaintWidthHalf: 1.12
          },
          SpawnParam: {
            SpawnBetweenLength: 3.1,
            SpawnNum: 10
          }
        }
      },
      ShooterCollisionParam: {
        $type: "spl__BulletSimpleCollisionParam",
        ChangeFrameForField: 0,
        EndRadiusForField: 0.2,
        EndRadiusForPlayer: 0.2,
        FriendThroughFrameForPlayer: 0,
        InitRadiusForField: 0.2,
        InitRadiusForPlayer: 0.2
      },
      ShooterDamageParam: {
        $type: "spl__BulletShooterDamageParam",
        ReduceEndFrame: 25,
        ReduceStartFrame: 9,
        ValueMax: 320,
        ValueMin: 160
      },
      ShooterMoveParam: {
        $type: "spl__BulletSimpleMoveParam",
        FreeGravity: 0.016,
        GoStraightStateEndMaxSpeed: 2.232,
        GoStraightToBrakeStateFrame: 7,
        SpawnSpeed: 3.36
      },
      ShooterPaintParam: {
        $type: "spl__BulletShooterPaintParam",
        DistanceMiddle: 1.1,
        WidthHalfFar: 1.5,
        WidthHalfMiddle: 1.6,
        WidthHalfNear: 1.6
      },
      ShooterSplashPaintParam: {
        $type: "spl__BulletSplashShooterPaintParam",
        DepthMaxDropHeight: 3,
        DepthMinDropHeight: 10,
        WidthHalf: 1,
        WidthHalfNearest: 2.016
      },
      ShooterSplashSpawnParam: {
        $type: "spl__BulletSplashShooterSpawnParam",
        ForceSpawnNearestAddNumArray: [],
        SpawnBetweenLength: 10,
        SpawnNearestLength: 1,
        SpawnNum: 2.5,
        SplitNum: 8
      },
      ShooterWallDropCollisionPaintParam: {
        $type: "spl__BulletWallDropCollisionPaintParam",
        PaintRadiusFall: 0.65,
        PaintRadiusGround: 0.6,
        PaintRadiusShock: 1.3
      },
      ShooterWallDropMoveParam: {
        $type: "spl__BulletWallDropMoveParam",
        FallPeriodFirstFrameMax: 40,
        FallPeriodFirstFrameMin: 20,
        FallPeriodFirstTargetSpeed: 0.06,
        FallPeriodLastFrameMax: 35,
        FallPeriodLastFrameMin: 15,
        FallPeriodSecondFrame: 10,
        FallPeriodSecondTargetSpeed: 0.06,
        FreeGravityType: "value_0_008"
      },
      WeaponSpChariotParam: {
        $type: "spl__WeaponSpChariotParam",
        ArmorHP: 5e3,
        ArmorHP_BreakScissors: 2500,
        CannonNoShotFrame: 32,
        MoveSpeedCoef_Squid: 0.6,
        MoveSpeedX: 0.075,
        MoveSpeedX_SpongeEnemy: 0.024,
        MoveSpeedZ: 0.015,
        MoveSpeedZ_SpongeEnemy: 48e-4,
        RotDegLmt_ToHumanFrm: 20,
        ShooterRepeatFrame_Bias: 0.2,
        ShooterRepeatFrame_First: 12,
        ShooterRepeatFrame_Term: 90,
        ShotGuideCannonFrame: 0,
        ShotPitVelLmt: 0.015,
        SpecialTotalFrame: {
          High: 660,
          Low: 480,
          Mid: 570
        },
        StartDelayFrame_Cannon: 20,
        StartDelayFrame_Shooter: 20
      },
      spl__BulletShooterTailLengthParam: {
        $type: "spl__BulletShooterTailLengthParam",
        DelayShotFrame: 4,
        EndMaxLength: 2
      },
      spl__PaintMonitorSetParam: {
        $type: "spl__PaintMonitorSetParam",
        RelabilityMinTime: 0
      }
    },
    SpecialName: "SpChariot"
  },
  "13": {
    GameParameters: {
      BulletBlastParam: {
        $type: "spl__BulletBlastParam",
        DistanceDamage: [
          {
            Damage: 2200,
            Distance: 7.5
          },
          {
            Damage: 600,
            Distance: 11.5
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 12
        },
        PaintRadius: 0,
        PaintTexture: "Bomb00",
        SplashAroundParam: {
          Num: 15,
          OffsetY: 0.3,
          PaintRadius: 0,
          PitchMax: 30,
          VelocityMax: 0,
          VelocityMin: 0
        },
        SubSpecialSpecUpList: [
          {
            SpecUpType: "DistanceDamageDistanceRate",
            Value: {
              High: 1.2,
              Low: 1,
              Mid: 1.1
            }
          },
          {
            SpecUpType: "PaintRadius",
            Value: {
              High: 8.4,
              Low: 7,
              Mid: 7.7
            }
          },
          {
            SpecUpType: "SplashAroundVelocityMin",
            Value: {
              High: 0.6,
              Low: 0.5,
              Mid: 0.55
            }
          },
          {
            SpecUpType: "SplashAroundVelocityMax",
            Value: {
              High: 0.7,
              Low: 0.6,
              Mid: 0.65
            }
          },
          {
            SpecUpType: "SplashAroundPaintRadius",
            Value: {
              High: 1.2,
              Low: 1,
              Mid: 1.1
            }
          }
        ]
      },
      BulletParam: {
        $type: "spl__BulletSpSkewerParam",
        CollisionRadiusForPlayer: 0.8,
        DamageValue: 2200
      },
      WeaponParam: {
        $type: "spl__WeaponSpSkewerParam",
        ChargeFrame: 0,
        Distance_Afterglow: 5,
        GravityKf: 1.2,
        MoveAcc: 0.031,
        MoveBrk: 0.031,
        MoveCancelableFrame: 15,
        MoveFrame: 60,
        MoveFrameOmen: 27,
        MoveRotDeg: 0.5,
        MoveSpeed: 0.45,
        MoveSpeed_Aerial: 0.22,
        NoDamageFrame_AfterBurst: 28,
        OffsetLocal_DetectPlayer: {
          X: 0,
          Y: 0.8,
          Z: 1
        },
        PreBurstEmitFrame: 15,
        PreBurstFrame: 38,
        PreMoveFrame: 38,
        Radius_DetectPlayer: 1,
        RutPaintRadius: 1.2,
        UnrelaxFrame: 28
      }
    },
    SpecialName: "SpSkewer"
  },
  "14": {
    GameParameters: {
      BlastParam: {
        $type: "spl__BulletSpTripleTornadoBlastParam",
        DamageHeightUp: 20,
        DamageRadiusEnd: 7.7,
        DamageValueEnd: 75,
        DamageValueStart: 75,
        KnockBackParam: {
          Accel: 93.333,
          Bias: 0.8,
          Distance: 8
        },
        PaintRadiusEnd: 7,
        PaintRadiusStart: 0.5,
        PaintRotateDegree: 8.5,
        PaintSpanFrame: 2,
        RadiusSpreadFrame: 50
      },
      MissileParam: {
        $type: "spl__BulletSpTripleTornadoMissileParam",
        UseDirect: false,
        XZBias: 0.8
      },
      MotherParam: {
        $type: "spl__BulletSpTripleTornadoMotherParam",
        TargetHeight: 150
      },
      MoveParam: {
        $type: "spl__BulletSpTripleTornadoGuideDeviceMoveParam",
        GuideHitCollisionType: "TripleTornadoGuideDevice",
        SpawnSpeedY: 0.276,
        SpawnSpeedYWorldMin: -0.4,
        SpawnSpeedZSpecUp: {
          High: 2.6,
          Low: 2,
          Mid: 2.3
        }
      },
      WeaponParam: {
        $type: "spl__WeaponSpTripleTornadoParam",
        SpecialTotalFrame: 360
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 1.6,
        YMax: 0.16,
        YPlusRate: 4
      }
    },
    SpecialName: "SpTripleTornado"
  },
  "15": {
    GameParameters: {
      FridgeParam: {
        $type: "spl__BulletSpEnergyStandFridgeParam",
        PowerUpFrame: {
          High: 1500,
          Low: 900,
          Mid: 1200
        },
        PutFrame: 900,
        PutFrameOnYagura: 450,
        ServeAreaHeightDown: 0,
        ServeAreaHeightUp: 3,
        ServeAreaRadius: 3.5,
        VanishDistance: 1.8
      },
      MoveParam: {
        $type: "spl__BulletSpEnergyStandMoveParam",
        CanPlaceBoundDegree: 30,
        CanPlaceBoundVel: 0.09,
        CanPlaceCheckLength1: 0,
        CanPlaceCheckLength2: 0,
        CanPlaceHeight: 1,
        FlyGravity: 9e-3,
        FlyHitDeg50WallReboundMaxRt: 0.4,
        FlyHitVerticalWallReboundMaxRt: 0.3,
        FlyHitWallPitchToPlane: 5,
        FlyHitWallReboundResetFrame: 12,
        FlyPositionAirResist: 1e-3,
        GuideHitCollisionType: "EnemyOffFenceOnBlowerOffShieldOff",
        GuideRadius: 1.35,
        SpawnSpeedY: 0.07,
        SpawnSpeedYWorldMin: -0.5,
        SpawnSpeedZSpecUp: {
          High: 0.3,
          Low: 0.3,
          Mid: 0.3
        }
      },
      WeaponParam: {
        $type: "spl__WeaponSpEnergyStandParam",
        SpecialReduceFrame: 450
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YMax: 100,
        YPlusRate: 0,
        ZRate: 0
      }
    },
    SpecialName: "SpEnergyStand"
  },
  "20": {
    GameParameters: {
      BlastParamFullCharge: {
        $type: "spl__BulletBlastParam",
        CrossPaintCheckLength: 3,
        CrossPaintRadius: 3,
        DamageOffsetY: 0.5,
        DistanceDamage: [
          {
            Damage: 1800,
            Distance: 4.6
          },
          {
            Damage: 400,
            Distance: 7
          }
        ],
        KnockBackParam: {
          Accel: 700,
          Bias: 0.8,
          Distance: 12
        },
        PaintOffsetY: 0.5,
        PaintRadius: 5,
        SplashAroundParam: {
          Num: 15,
          PaintRadius: 1.44,
          PitchMax: 45,
          PitchMin: 10,
          VelocityMax: 0.52,
          VelocityMin: 0.45
        }
      },
      CollisionParam: {
        $type: "spl__BulletSpGachihokoCollisionParam"
      },
      DamageParam: {
        $type: "spl__BulletSpGachihokoDamageParam"
      },
      MoveParam: {
        $type: "spl__BulletSpGachihokoParam",
        GuideHitCollisionType: "EnemyOffFenceOff",
        GuideRadius: 0.16,
        SpawnSpeedY: 0.14,
        SpawnSpeedYFullCharge: 0.28,
        SpawnSpeedYMaxCharge: 0.21,
        SpawnSpeedZFullCharge: 1.5,
        SpawnSpeedZMaxCharge: 1.2,
        SpawnSpeedZSpecUp: {
          High: 0.8,
          Low: 0.8,
          Mid: 0.8
        }
      },
      SplashNearestParam: {
        $type: "spl__BulletSplashSpGachihokoNearestParam",
        PaintRadiusFullCharge: 2.4,
        PaintRadiusMaxCharge: 2.4,
        PaintRadiusMinCharge: 1.8,
        SpawnOffset: {
          X: 0,
          Y: -1.4
        }
      },
      SplashPaintSpawnParam: {
        $type: "spl__BulletSplashSpGachihokoPaintSpawnParam",
        PaintRadiusFullCharge: 2.4,
        PaintRadiusMaxCharge: 2.4,
        PaintRadiusMinCharge: 1.8
      },
      SplashWallHitParam: {
        $type: "spl__BulletSpGachihokoSplashWallHitParam",
        WallDropCollisionPaintParam: {
          FallPeriodFirstSecondTargetAlp: 1,
          PaintRadiusFall: 0.8,
          PaintRadiusGround: 0.7,
          PaintRadiusShock: 1.2
        },
        WallDropMoveParam: {
          FallPeriodFirstFrameMax: 40,
          FallPeriodFirstFrameMin: 20,
          FallPeriodFirstTargetSpeed: 0.05,
          FallPeriodLastFrameMax: 35,
          FallPeriodLastFrameMin: 15,
          FallPeriodSecondFrame: 20,
          FallPeriodSecondTargetSpeed: 0.06
        }
      },
      WeaponParam: {
        $type: "spl__WeaponSpGachihokoParam",
        KnockBackParamFullCharge: {
          AirBreakRt: 0.8,
          ImpactValue: 0.12,
          StickDownRt: 5
        },
        KnockBackParamMaxCharge: {
          AirBreakRt: 0.8,
          ImpactValue: 0.09,
          StickDownRt: 5
        },
        KnockBackParamMinCharge: {
          AirBreakRt: 0.8,
          ImpactValue: 0.06,
          StickDownRt: 5
        }
      },
      spl__SpawnBulletAdditionMovePlayerParam: {
        $type: "spl__SpawnBulletAdditionMovePlayerParam",
        XRate: 0,
        YPlusRate: 0,
        ZRate: 0
      }
    },
    SpecialName: "SpGachihoko"
  }
};
const params = {
  version,
  weapons,
  subs,
  specials
};
const Main = {
  Blaster_LightLong_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 25,
    DefaultDamageRateInfoRow: "Blaster",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_LightLong_00.engine__actor__ActorParam.gyml",
    Id: 250,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_LightLong.spl__LockerObjParam.gyml",
    Label: "Rブラスターエリート",
    LockerContentInfo: [
      "Work/Locker/Blaster_LightLong_00_Preset_00.byml"
    ],
    MatchingId: 250,
    NpcActor: "Work/Actor/WmnS_Blaster_LightLong_00.engine__actor__ActorParam.gyml",
    Range: 19.2,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_LightLong_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_LightLong_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_LightLong_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_LightLong_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 12800,
    ShopUnlockRank: 26,
    SpecActor: "Work/Actor/WeaponBlasterLightLong.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PoisonMist.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 72
      },
      {
        Type: "Explosion",
        Value: 35
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Blaster_LightLong_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Blaster_LightLong_00"
  },
  Blaster_LightShort_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 23,
    DefaultDamageRateInfoRow: "Blaster",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_LightShort_00.engine__actor__ActorParam.gyml",
    Id: 230,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_LightShort.spl__LockerObjParam.gyml",
    Label: "クラッシュブラスター",
    LockerContentInfo: [
      "Work/Locker/Blaster_LightShort_00_Preset_00.byml"
    ],
    MatchingId: 230,
    NpcActor: "Work/Actor/WmnS_Blaster_LightShort_00.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_LightShort_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_LightShort_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_LightShort_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_LightShort_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 18200,
    ShopUnlockRank: 22,
    SpecActor: "Work/Actor/WeaponBlasterLightShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpUltraShot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 21
      },
      {
        Type: "Explosion",
        Value: 25
      },
      {
        Type: "Blaze",
        Value: 65
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Blaster_LightShort_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Blaster_LightShort_00"
  },
  Blaster_Light_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 24,
    DefaultDamageRateInfoRow: "Blaster",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_Light_00.engine__actor__ActorParam.gyml",
    Id: 240,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_Light.spl__LockerObjParam.gyml",
    Label: "ラピッドブラスター",
    LockerContentInfo: [
      "Work/Locker/Blaster_Light_00_Preset_00.byml"
    ],
    MatchingId: 240,
    NpcActor: "Work/Actor/WmnS_Blaster_Light_00.engine__actor__ActorParam.gyml",
    Range: 16.7,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_Light_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_Light_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Light_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Light_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9800,
    ShopUnlockRank: 7,
    SpecActor: "Work/Actor/WeaponBlasterLight.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpTripleTornado.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Trap.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 62
      },
      {
        Type: "Explosion",
        Value: 35
      },
      {
        Type: "Blaze",
        Value: 40
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Blaster_Light_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Blaster_Light_00"
  },
  Blaster_Long_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 22,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Blaster_KillOneShot",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "Blaster",
        ExtraInfo: "ExtraBombCore"
      },
      {
        DamageRateInfoRow: "Blaster",
        ExtraInfo: "BlasterWeakBlast"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_Long_00.engine__actor__ActorParam.gyml",
    Id: 220,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_Long.spl__LockerObjParam.gyml",
    Label: "ロングブラスター",
    LockerContentInfo: [
      "Work/Locker/Blaster_Long_00_Preset_00.byml"
    ],
    MatchingId: 220,
    NpcActor: "Work/Actor/WmnS_Blaster_Long_00.engine__actor__ActorParam.gyml",
    Range: 17,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_Long_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_Long_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Long_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Long_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9300,
    ShopUnlockRank: 11,
    SpecActor: "Work/Actor/WeaponBlasterLong.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpShockSonar.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 56
      },
      {
        Type: "Explosion",
        Value: 70
      },
      {
        Type: "Blaze",
        Value: 10
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Blaster_Long_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Blaster_Long_00"
  },
  Blaster_Middle_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 21,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Blaster_KillOneShot",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "Blaster_BlasterMiddle",
        ExtraInfo: "ExtraBombCore"
      },
      {
        DamageRateInfoRow: "Blaster_BlasterMiddle",
        ExtraInfo: "BlasterWeakBlast"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_Middle_00.engine__actor__ActorParam.gyml",
    Id: 210,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_Middle.spl__LockerObjParam.gyml",
    Label: "ホットブラスター",
    LockerContentInfo: [
      "Work/Locker/Blaster_Middle_00_Preset_00.byml",
      "Work/Locker/Blaster_Middle_00_Preset_01.byml"
    ],
    MatchingId: 210,
    NpcActor: "Work/Actor/WmnS_Blaster_Middle_00.engine__actor__ActorParam.gyml",
    Range: 13.3,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_Middle_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_Middle_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Middle_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Middle_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 3e3,
    ShopUnlockRank: 3,
    SpecActor: "Work/Actor/WeaponBlasterMiddle.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpGreatBarrier.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Robot.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 27
      },
      {
        Type: "Explosion",
        Value: 70
      },
      {
        Type: "Blaze",
        Value: 20
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Blaster_Middle_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Blaster_Middle_00"
  },
  Blaster_Short_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 20,
    DefaultDamageRateInfoRow: "Blaster_BlasterShort",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_Short_00.engine__actor__ActorParam.gyml",
    Id: 200,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_Short.spl__LockerObjParam.gyml",
    Label: "ノヴァブラスター",
    LockerContentInfo: [
      "Work/Locker/Blaster_Short_00_Preset_00.byml"
    ],
    MatchingId: 200,
    NpcActor: "Work/Actor/WmnS_Blaster_Short_00.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_Short_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_Short_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Short_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Short_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 12100,
    ShopUnlockRank: 13,
    SpecActor: "Work/Actor/WeaponBlasterShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpSuperHook.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 18
      },
      {
        Type: "Explosion",
        Value: 70
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Blaster_Short_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Blaster_Short_00"
  },
  Blaster_Short_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 20,
    DefaultDamageRateInfoRow: "Blaster_BlasterShort",
    DefaultHitEffectorType: "Blaster",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      },
      {
        ExtraInfo: "BlasterWeakBlast",
        HitEffectorType: "Blaster_ExtraBombCoreWeak"
      }
    ],
    GameActor: "Work/Actor/WmnG_Blaster_Short_01.engine__actor__ActorParam.gyml",
    Id: 201,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Blaster_Short_Cstm01.spl__LockerObjParam.gyml",
    Label: "ノヴァブラスターネオ",
    LockerContentInfo: [
      "Work/Locker/Blaster_Short_01_Preset_00.byml"
    ],
    MatchingId: 200,
    NpcActor: "Work/Actor/WmnS_Blaster_Short_01.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Blaster_Short_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Blaster_Short_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Short_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Blaster_Short_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 13600,
    ShopUnlockRank: 24,
    SpecActor: "Work/Actor/WeaponBlasterShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpUltraStamp.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Fizzy.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 18
      },
      {
        Type: "Explosion",
        Value: 70
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Blaster_Short_01"
  },
  Brush_Mini_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 110,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "BrushSplash",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "BrushCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      }
    ],
    GameActor: "Work/Actor/WmnG_Brush_Mini_00.engine__actor__ActorParam.gyml",
    Id: 1100,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Brush_Mini.spl__LockerObjParam.gyml",
    Label: "パブロ",
    LockerContentInfo: [
      "Work/Locker/Brush_Mini_00_Preset_00.byml"
    ],
    MatchingId: 1100,
    NpcActor: "Work/Actor/WmnS_Brush_Mini_00.engine__actor__ActorParam.gyml",
    Range: 7,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Brush_Mini_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Brush_Mini_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Brush_Mini_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Brush_Mini_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9e3,
    ShopUnlockRank: 7,
    SpecActor: "Work/Actor/WeaponBrushMini.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpMicroLaser.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 5
      },
      {
        Type: "PaintSpeed",
        Value: 100
      },
      {
        Type: "Weight",
        Value: 100
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Brush_Mini_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Brush_Mini_00"
  },
  Brush_Mini_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 110,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "BrushSplash",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "BrushCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      }
    ],
    GameActor: "Work/Actor/WmnG_Brush_Mini_01.engine__actor__ActorParam.gyml",
    Id: 1101,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Brush_Mini_Cstm01.spl__LockerObjParam.gyml",
    Label: "パブロ・ヒュー",
    LockerContentInfo: [
      "Work/Locker/Brush_Mini_01_Preset_00.byml"
    ],
    MatchingId: 1100,
    NpcActor: "Work/Actor/WmnS_Brush_Mini_01.engine__actor__ActorParam.gyml",
    Range: 7,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Brush_Mini_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Brush_Mini_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Brush_Mini_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Brush_Mini_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 7e3,
    ShopUnlockRank: 15,
    SpecActor: "Work/Actor/WeaponBrushMini.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpUltraStamp.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Trap.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 5
      },
      {
        Type: "PaintSpeed",
        Value: 100
      },
      {
        Type: "Weight",
        Value: 100
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Brush_Mini_01"
  },
  Brush_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 111,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "BrushSplash",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "BrushCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      }
    ],
    GameActor: "Work/Actor/WmnG_Brush_Normal_00.engine__actor__ActorParam.gyml",
    Id: 1110,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Brush_Normal.spl__LockerObjParam.gyml",
    Label: "ホクサイ",
    LockerContentInfo: [
      "Work/Locker/Brush_Normal_00_Preset_00.byml",
      "Work/Locker/Brush_Normal_00_Preset_01.byml"
    ],
    MatchingId: 1110,
    NpcActor: "Work/Actor/WmnS_Brush_Normal_00.engine__actor__ActorParam.gyml",
    Range: 10.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Brush_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Brush_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Brush_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Brush_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 5e3,
    ShopUnlockRank: 4,
    SpecActor: "Work/Actor/WeaponBrushNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpSuperHook.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 23
      },
      {
        Type: "PaintSpeed",
        Value: 80
      },
      {
        Type: "Weight",
        Value: 85
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Brush_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Brush_Normal_00"
  },
  Charger_Keeper_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 206,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_Keeper_00.engine__actor__ActorParam.gyml",
    Id: 2060,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_Keeper.spl__LockerObjParam.gyml",
    Label: "ソイチューバー",
    LockerContentInfo: [
      "Work/Locker/Charger_Keeper_00_Preset_00.byml"
    ],
    MatchingId: 2060,
    NpcActor: "Work/Actor/WmnS_Charger_Keeper_00.engine__actor__ActorParam.gyml",
    Range: 21,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_Keeper_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_Keeper_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Keeper_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Keeper_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 13400,
    ShopUnlockRank: 25,
    SpecActor: "Work/Actor/WeaponChargerKeeper.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpMultiMissile.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Torpedo.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 78
      },
      {
        Type: "Charge",
        Value: 38
      },
      {
        Type: "Mobility",
        Value: 70
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Charger_Keeper_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Charger_Keeper_00"
  },
  Charger_Light_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 205,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger_Light",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull_Light",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_Light_00.engine__actor__ActorParam.gyml",
    Id: 2050,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_Light.spl__LockerObjParam.gyml",
    Label: "14式竹筒銃・甲",
    LockerContentInfo: [
      "Work/Locker/Charger_Light_00_Preset_00.byml"
    ],
    MatchingId: 2050,
    NpcActor: "Work/Actor/WmnS_Charger_Light_00.engine__actor__ActorParam.gyml",
    Range: 21,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_Light_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_Light_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Light_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Light_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9500,
    ShopUnlockRank: 23,
    SpecActor: "Work/Actor/WeaponChargerLight.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpMicroLaser.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Robot.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 78
      },
      {
        Type: "Charge",
        Value: 90
      },
      {
        Type: "Mobility",
        Value: 80
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Charger_Light_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Charger_Light_00"
  },
  Charger_LongScope_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 204,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger_Long",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull_Long",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_LongScope_00.engine__actor__ActorParam.gyml",
    Id: 2040,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_LongScope.spl__LockerObjParam.gyml",
    Label: "4Kスコープ",
    LockerContentInfo: [
      "Work/Locker/Charger_LongScope_00_Preset_00.byml"
    ],
    MatchingId: 2030,
    NpcActor: "Work/Actor/WmnS_Charger_LongScope_00.engine__actor__ActorParam.gyml",
    Range: 33,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_LongScope_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_LongScope_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_LongScope_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_LongScope_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 23200,
    ShopUnlockRank: 27,
    SpecActor: "Work/Actor/WeaponChargerLongScope.engine__actor__ActorParam.gyml",
    SpecialPoint: 210,
    SpecialWeapon: "Work/Gyml/SpShockSonar.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Trap.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 100
      },
      {
        Type: "Charge",
        Value: 20
      },
      {
        Type: "Mobility",
        Value: 5
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Charger_LongScope_00"
  },
  Charger_Long_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 203,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger_Long",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull_Long",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_Long_00.engine__actor__ActorParam.gyml",
    Id: 2030,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_Long.spl__LockerObjParam.gyml",
    Label: "リッター4K",
    LockerContentInfo: [
      "Work/Locker/Charger_Long_00_Preset_00.byml"
    ],
    MatchingId: 2030,
    NpcActor: "Work/Actor/WmnS_Charger_Long_00.engine__actor__ActorParam.gyml",
    Range: 31,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_Long_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_Long_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Long_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Long_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 13900,
    ShopUnlockRank: 18,
    SpecActor: "Work/Actor/WeaponChargerLong.engine__actor__ActorParam.gyml",
    SpecialPoint: 210,
    SpecialWeapon: "Work/Gyml/SpShockSonar.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Trap.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 96
      },
      {
        Type: "Charge",
        Value: 20
      },
      {
        Type: "Mobility",
        Value: 15
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Charger_Long_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Charger_Long_00"
  },
  Charger_NormalScope_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 202,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_NormalScope_00.engine__actor__ActorParam.gyml",
    Id: 2020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_NormalTScope.spl__LockerObjParam.gyml",
    Label: "スプラスコープ",
    LockerContentInfo: [
      "Work/Locker/Charger_NormalScope_00_Preset_00.byml"
    ],
    MatchingId: 2010,
    NpcActor: "Work/Actor/WmnS_Charger_NormalScope_00.engine__actor__ActorParam.gyml",
    Range: 28,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_NormalScope_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_NormalScope_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_NormalScope_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_NormalScope_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 11400,
    ShopUnlockRank: 10,
    SpecActor: "Work/Actor/WeaponChargerNormalScope.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 91
      },
      {
        Type: "Charge",
        Value: 50
      },
      {
        Type: "Mobility",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Charger_NormalScope_00"
  },
  Charger_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 201,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_Normal_00.engine__actor__ActorParam.gyml",
    Id: 2010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_NormalT.spl__LockerObjParam.gyml",
    Label: "スプラチャージャー",
    LockerContentInfo: [
      "Work/Locker/Charger_Normal_00_Preset_00.byml",
      "Work/Locker/Charger_Normal_00_Preset_01.byml"
    ],
    MatchingId: 2010,
    NpcActor: "Work/Actor/WmnS_Charger_Normal_00.engine__actor__ActorParam.gyml",
    Range: 26,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 2200,
    ShopUnlockRank: 2,
    SpecActor: "Work/Actor/WeaponChargerNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 88
      },
      {
        Type: "Charge",
        Value: 50
      },
      {
        Type: "Mobility",
        Value: 40
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Charger_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Charger_Normal_00"
  },
  Charger_Pencil_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 207,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger_Light",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull_Light",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_Pencil_00.engine__actor__ActorParam.gyml",
    Id: 2070,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_Pencil.spl__LockerObjParam.gyml",
    Label: "R-PEN/5H",
    LockerContentInfo: [
      "Work/Locker/Charger_Pencil_00_Preset_00.byml"
    ],
    MatchingId: 2070,
    NpcActor: "Work/Actor/WmnS_Charger_Pencil_00.engine__actor__ActorParam.gyml",
    Range: 25,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_Pencil_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_Pencil_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Pencil_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Pencil_00_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 9500,
    ShopUnlockRank: 14,
    SpecActor: "Work/Actor/WeaponChargerPencil.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpEnergyStand.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 91
      },
      {
        Type: "Charge",
        Value: 43
      },
      {
        Type: "Mobility",
        Value: 80
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Charger_Pencil_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Charger_Pencil_00"
  },
  Charger_Quick_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 200,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Charger",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Charger",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ChargerFull",
        ExtraInfo: "FullCharge"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "FullCharge",
        HitEffectorType: "Charger_FullCharge"
      },
      {
        ExtraInfo: "ExtraPaintSplash",
        HitEffectorType: "Charger_PaintSplash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Charger_Quick_00.engine__actor__ActorParam.gyml",
    Id: 2e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Charger_Quick.spl__LockerObjParam.gyml",
    Label: "スクイックリンα",
    LockerContentInfo: [
      "Work/Locker/Charger_Quick_00_Preset_00.byml"
    ],
    MatchingId: 2e3,
    NpcActor: "Work/Actor/WmnS_Charger_Quick_00.engine__actor__ActorParam.gyml",
    Range: 18.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Charger_Quick_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Charger_Quick_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Quick_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Charger_Quick_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 8900,
    ShopUnlockRank: 8,
    SpecActor: "Work/Actor/WeaponChargerQuick.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpGreatBarrier.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PointSensor.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 75
      },
      {
        Type: "Charge",
        Value: 70
      },
      {
        Type: "Mobility",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Charger_Quick_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Charger_Quick_00"
  },
  Maneuver_Dual_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 503,
    DefaultDamageRateInfoRow: "Maneuver",
    DefaultHitEffectorType: "Maneuver",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Maneuver_Dual_00.engine__actor__ActorParam.gyml",
    Id: 5030,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Maneuver_Dual.spl__LockerObjParam.gyml",
    Label: "デュアルスイーパー",
    LockerContentInfo: [
      "Work/Locker/Maneuver_Dual_00_Preset_00.byml"
    ],
    MatchingId: 5030,
    NpcActor: "Work/Actor/WmnS_Maneuver_Dual_00.engine__actor__ActorParam.gyml",
    Range: 17,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Maneuver_Dual_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Maneuver_Dual_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Dual_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Dual_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9800,
    ShopUnlockRank: 8,
    SpecActor: "Work/Actor/WeaponManeuverDual.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpShockSonar.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 70
      },
      {
        Type: "Power",
        Value: 22
      },
      {
        Type: "Mobility",
        Value: 70
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Maneuver_Dual_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Maneuver_Dual_00"
  },
  Maneuver_Gallon_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 502,
    DefaultDamageRateInfoRow: "Maneuver",
    DefaultHitEffectorType: "Maneuver",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Maneuver_Gallon_00.engine__actor__ActorParam.gyml",
    Id: 5020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Maneuver_Gallon.spl__LockerObjParam.gyml",
    Label: "ケルビン525",
    LockerContentInfo: [
      "Work/Locker/Maneuver_Gallon_00_Preset_00.byml"
    ],
    MatchingId: 5020,
    NpcActor: "Work/Actor/WmnS_Maneuver_Gallon_00.engine__actor__ActorParam.gyml",
    Range: 16,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Maneuver_Gallon_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Maneuver_Gallon_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Gallon_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Gallon_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 11800,
    ShopUnlockRank: 21,
    SpecActor: "Work/Actor/WeaponManeuverGallon.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpNiceBall.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Shield.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 66
      },
      {
        Type: "Power",
        Value: 76
      },
      {
        Type: "Mobility",
        Value: 35
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Maneuver_Gallon_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Maneuver_Gallon_00"
  },
  Maneuver_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 501,
    DefaultDamageRateInfoRow: "Maneuver",
    DefaultHitEffectorType: "Maneuver",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Maneuver_Normal_00.engine__actor__ActorParam.gyml",
    Id: 5010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Maneuver_NormalT.spl__LockerObjParam.gyml",
    Label: "スプラマニューバー",
    LockerContentInfo: [
      "Work/Locker/Maneuver_Normal_00_Preset_00.byml",
      "Work/Locker/Maneuver_Normal_00_Preset_01.byml"
    ],
    MatchingId: 5010,
    NpcActor: "Work/Actor/WmnS_Maneuver_Normal_00.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Maneuver_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Maneuver_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 2400,
    ShopUnlockRank: 3,
    SpecActor: "Work/Actor/WeaponManeuverNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpChariot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 50
      },
      {
        Type: "Power",
        Value: 29
      },
      {
        Type: "Mobility",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Maneuver_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Maneuver_Normal_00"
  },
  Maneuver_Short_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 500,
    DefaultDamageRateInfoRow: "Maneuver_Short",
    DefaultHitEffectorType: "Maneuver",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Maneuver_Short_00.engine__actor__ActorParam.gyml",
    Id: 5e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Maneuver_Short.spl__LockerObjParam.gyml",
    Label: "スパッタリー",
    LockerContentInfo: [
      "Work/Locker/Maneuver_Short_00_Preset_00.byml"
    ],
    MatchingId: 5e3,
    NpcActor: "Work/Actor/WmnS_Maneuver_Short_00.engine__actor__ActorParam.gyml",
    Range: 9.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Maneuver_Short_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Maneuver_Short_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Short_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Short_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 14700,
    ShopUnlockRank: 14,
    SpecActor: "Work/Actor/WeaponManeuverShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpEnergyStand.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Beacon.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 24
      },
      {
        Type: "Power",
        Value: 47
      },
      {
        Type: "Mobility",
        Value: 80
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Maneuver_Short_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Maneuver_Short_00"
  },
  Maneuver_Short_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 500,
    DefaultDamageRateInfoRow: "Maneuver_Short",
    DefaultHitEffectorType: "Maneuver",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Maneuver_Short_01.engine__actor__ActorParam.gyml",
    Id: 5001,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Maneuver_Short_Cstm01.spl__LockerObjParam.gyml",
    Label: "スパッタリー・ヒュー",
    LockerContentInfo: [
      "Work/Locker/Maneuver_Short_01_Preset_00.byml"
    ],
    MatchingId: 5e3,
    NpcActor: "Work/Actor/WmnS_Maneuver_Short_01.engine__actor__ActorParam.gyml",
    Range: 9.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Maneuver_Short_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Maneuver_Short_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Short_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Short_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 17500,
    ShopUnlockRank: 26,
    SpecActor: "Work/Actor/WeaponManeuverShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpSkewer.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Torpedo.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 24
      },
      {
        Type: "Power",
        Value: 47
      },
      {
        Type: "Mobility",
        Value: 80
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Maneuver_Short_01"
  },
  Maneuver_Stepper_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 504,
    DefaultDamageRateInfoRow: "Maneuver",
    DefaultHitEffectorType: "Maneuver",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Maneuver_Stepper_00.engine__actor__ActorParam.gyml",
    Id: 5040,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Maneuver_Stepper.spl__LockerObjParam.gyml",
    Label: "クアッドホッパーブラック",
    LockerContentInfo: [
      "Work/Locker/Maneuver_Stepper_00_Preset_00.byml"
    ],
    MatchingId: 5040,
    NpcActor: "Work/Actor/WmnS_Maneuver_Stepper_00.engine__actor__ActorParam.gyml",
    Range: 14,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Maneuver_Stepper_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Maneuver_Stepper_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Stepper_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Maneuver_Stepper_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 10700,
    ShopUnlockRank: 17,
    SpecActor: "Work/Actor/WeaponManeuverStepper.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpSkewer.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Robot.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 58
      },
      {
        Type: "Power",
        Value: 22
      },
      {
        Type: "Mobility",
        Value: 90
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Maneuver_Stepper_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Maneuver_Stepper_00"
  },
  Roller_Compact_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 100,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "RollerSplash_Compact",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "RollerCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      },
      {
        ExtraInfo: "RollerInkNoDamage",
        HitEffectorType: "Roller_NoDamage"
      }
    ],
    GameActor: "Work/Actor/WmnG_Roller_Compact_00.engine__actor__ActorParam.gyml",
    Id: 1e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Roller_Compact.spl__LockerObjParam.gyml",
    Label: "カーボンローラー",
    LockerContentInfo: [
      "Work/Locker/Roller_Compact_00_Preset_00.byml"
    ],
    MatchingId: 1e3,
    NpcActor: "Work/Actor/WmnS_Roller_Compact_00.engine__actor__ActorParam.gyml",
    Range: 9.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Roller_Compact_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Roller_Compact_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Compact_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Compact_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 6200,
    ShopUnlockRank: 6,
    SpecActor: "Work/Actor/WeaponRollerCompact.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpSuperHook.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Robot.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 20
      },
      {
        Type: "PaintSpeed",
        Value: 63
      },
      {
        Type: "Weight",
        Value: 65
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Roller_Compact_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Roller_Compact_00"
  },
  Roller_Compact_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 100,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "RollerSplash_Compact",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "RollerCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      },
      {
        ExtraInfo: "RollerInkNoDamage",
        HitEffectorType: "Roller_NoDamage"
      }
    ],
    GameActor: "Work/Actor/WmnG_Roller_Compact_01.engine__actor__ActorParam.gyml",
    Id: 1001,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Roller_Compact_Cstm01.spl__LockerObjParam.gyml",
    Label: "カーボンローラーデコ",
    LockerContentInfo: [
      "Work/Locker/Roller_Compact_01_Preset_00.byml"
    ],
    MatchingId: 1e3,
    NpcActor: "Work/Actor/WmnS_Roller_Compact_01.engine__actor__ActorParam.gyml",
    Range: 9.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Roller_Compact_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Roller_Compact_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Compact_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Compact_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 8500,
    ShopUnlockRank: 22,
    SpecActor: "Work/Actor/WeaponRollerCompact.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpUltraShot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Quick.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 20
      },
      {
        Type: "PaintSpeed",
        Value: 63
      },
      {
        Type: "Weight",
        Value: 65
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Roller_Compact_01"
  },
  Roller_Heavy_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 102,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "RollerSplash_Heavy",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "RollerCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      },
      {
        ExtraInfo: "RollerInkNoDamage",
        HitEffectorType: "Roller_NoDamage"
      }
    ],
    GameActor: "Work/Actor/WmnG_Roller_Heavy_00.engine__actor__ActorParam.gyml",
    Id: 1020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Roller_Heavy.spl__LockerObjParam.gyml",
    Label: "ダイナモローラー",
    LockerContentInfo: [
      "Work/Locker/Roller_Heavy_00_Preset_00.byml"
    ],
    MatchingId: 1020,
    NpcActor: "Work/Actor/WmnS_Roller_Heavy_00.engine__actor__ActorParam.gyml",
    Range: 18.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Roller_Heavy_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Roller_Heavy_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Heavy_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Heavy_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 24500,
    ShopUnlockRank: 12,
    SpecActor: "Work/Actor/WeaponRollerHeavy.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpEnergyStand.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 76
      },
      {
        Type: "PaintSpeed",
        Value: 25
      },
      {
        Type: "Weight",
        Value: 20
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Roller_Heavy_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Roller_Heavy_00"
  },
  Roller_Hunter_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 103,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "RollerSplash_Hunter",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "RollerCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      },
      {
        ExtraInfo: "RollerInkNoDamage",
        HitEffectorType: "Roller_NoDamage"
      }
    ],
    GameActor: "Work/Actor/WmnG_Roller_Hunter_00.engine__actor__ActorParam.gyml",
    Id: 1030,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Roller_Hunter.spl__LockerObjParam.gyml",
    Label: "ヴァリアブルローラー",
    LockerContentInfo: [
      "Work/Locker/Roller_Hunter_00_Preset_00.byml"
    ],
    MatchingId: 1010,
    NpcActor: "Work/Actor/WmnS_Roller_Hunter_00.engine__actor__ActorParam.gyml",
    Range: 14,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Roller_Hunter_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Roller_Hunter_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Hunter_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Hunter_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 15700,
    ShopUnlockRank: 20,
    SpecActor: "Work/Actor/WeaponRollerHunter.engine__actor__ActorParam.gyml",
    SpecialPoint: 210,
    SpecialWeapon: "Work/Gyml/SpMultiMissile.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Trap.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 58
      },
      {
        Type: "PaintSpeed",
        Value: 45
      },
      {
        Type: "Weight",
        Value: 45
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Roller_Hunter_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Roller_Hunter_00"
  },
  Roller_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 101,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "RollerSplash",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "RollerCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      },
      {
        ExtraInfo: "RollerInkNoDamage",
        HitEffectorType: "Roller_NoDamage"
      }
    ],
    GameActor: "Work/Actor/WmnG_Roller_Normal_00.engine__actor__ActorParam.gyml",
    Id: 1010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Roller_NormalT.spl__LockerObjParam.gyml",
    Label: "スプラローラー",
    LockerContentInfo: [
      "Work/Locker/Roller_Normal_00_Preset_00.byml",
      "Work/Locker/Roller_Normal_00_Preset_01.byml"
    ],
    MatchingId: 1010,
    NpcActor: "Work/Actor/WmnS_Roller_Normal_00.engine__actor__ActorParam.gyml",
    Range: 11.8,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Roller_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Roller_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 1800,
    ShopUnlockRank: 2,
    SpecActor: "Work/Actor/WeaponRollerNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpGreatBarrier.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Curling.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 48
      },
      {
        Type: "PaintSpeed",
        Value: 45
      },
      {
        Type: "Weight",
        Value: 55
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Roller_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Roller_Normal_00"
  },
  Roller_Wide_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 104,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Roller",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "RollerSplash_Compact",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "RollerCore",
        ExtraInfo: "RollerCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "RollerCore",
        HitEffectorType: "Roller"
      },
      {
        ExtraInfo: "RollerInkNoDamage",
        HitEffectorType: "Roller_NoDamage"
      }
    ],
    GameActor: "Work/Actor/WmnG_Roller_Wide_00.engine__actor__ActorParam.gyml",
    Id: 1040,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Roller_Wide.spl__LockerObjParam.gyml",
    Label: "ワイドローラー",
    LockerContentInfo: [
      "Work/Locker/Roller_Wide_00_Preset_00.byml"
    ],
    MatchingId: 1040,
    NpcActor: "Work/Actor/WmnS_Roller_Wide_00.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Roller_Wide_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Roller_Wide_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Wide_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Roller_Wide_00_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 6200,
    ShopUnlockRank: 16,
    SpecActor: "Work/Actor/WeaponRollerWide.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Shield.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 56
      },
      {
        Type: "PaintSpeed",
        Value: 54
      },
      {
        Type: "Weight",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Roller_Wide_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Roller_Wide_00"
  },
  Saber_Lite_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 801,
    DefaultDamageRateInfoRow: "Saber",
    DefaultHitEffectorType: "Saber",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Saber_Shot",
        ExtraInfo: "SaberShot"
      },
      {
        DamageRateInfoRow: "Saber_ChargeShot",
        ExtraInfo: "SaberChargeShot"
      },
      {
        DamageRateInfoRow: "Saber_Slash",
        ExtraInfo: "SaberSlash"
      },
      {
        DamageRateInfoRow: "Saber_ChargeSlash",
        ExtraInfo: "SaberChargeSlash"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SaberShot",
        HitEffectorType: "Saber_Shot"
      },
      {
        ExtraInfo: "SaberChargeShot",
        HitEffectorType: "Saber_ChargeShot"
      },
      {
        ExtraInfo: "SaberSlash",
        HitEffectorType: "Saber_Slash"
      },
      {
        ExtraInfo: "SaberChargeSlash",
        HitEffectorType: "Saber_ChargeSlash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Saber_Lite_00.engine__actor__ActorParam.gyml",
    Id: 8010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Saber_Light.spl__LockerObjParam.gyml",
    Label: "ドライブワイパー",
    LockerContentInfo: [
      "Work/Locker/Saber_Lite_00_Preset_00.byml"
    ],
    MatchingId: 8e3,
    NpcActor: "Work/Actor/WmnS_Saber_Lite_00.engine__actor__ActorParam.gyml",
    Range: 13,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Saber_Lite_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Saber_Lite_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Saber_Lite_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Saber_Lite_00_Lv01.spl__BadgeInfo.gyml",
    Season: 1,
    ShopPrice: 1e3,
    ShopUnlockRank: 5,
    SpecActor: "Work/Actor/WeaponSaberLite.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpUltraStamp.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Torpedo.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 58
      },
      {
        Type: "Power",
        Value: 29
      },
      {
        Type: "Weight",
        Value: 75
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Saber_Lite_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Saber_Lite_00"
  },
  Saber_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 800,
    DefaultDamageRateInfoRow: "Saber",
    DefaultHitEffectorType: "Saber",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Saber_Shot",
        ExtraInfo: "SaberShot"
      },
      {
        DamageRateInfoRow: "Saber_ChargeShot",
        ExtraInfo: "SaberChargeShot"
      },
      {
        DamageRateInfoRow: "Saber_Slash",
        ExtraInfo: "SaberSlash"
      },
      {
        DamageRateInfoRow: "Saber_ChargeSlash",
        ExtraInfo: "SaberChargeSlash"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SaberShot",
        HitEffectorType: "Saber_Shot"
      },
      {
        ExtraInfo: "SaberChargeShot",
        HitEffectorType: "Saber_ChargeShot"
      },
      {
        ExtraInfo: "SaberSlash",
        HitEffectorType: "Saber_Slash"
      },
      {
        ExtraInfo: "SaberChargeSlash",
        HitEffectorType: "Saber_ChargeSlash"
      }
    ],
    GameActor: "Work/Actor/WmnG_Saber_Normal_00.engine__actor__ActorParam.gyml",
    Id: 8e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Saber_Normal.spl__LockerObjParam.gyml",
    Label: "ジムワイパー",
    LockerContentInfo: [
      "Work/Locker/Saber_Normal_00_Preset_00.byml"
    ],
    MatchingId: 8e3,
    NpcActor: "Work/Actor/WmnS_Saber_Normal_00.engine__actor__ActorParam.gyml",
    Range: 16.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Saber_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Saber_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Saber_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Saber_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 1e3,
    ShopUnlockRank: 15,
    SpecActor: "Work/Actor/WeaponSaberNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpSuperHook.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Quick.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 75
      },
      {
        Type: "Power",
        Value: 43
      },
      {
        Type: "Weight",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Saber_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Saber_Normal_00"
  },
  Shelter_Compact_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 602,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Shelter",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "ShelterShot_Compact",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ShelterCanopy_Compact",
        ExtraInfo: "ShelterCanopy"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ShelterCanopy",
        HitEffectorType: "Shelter_Canopy"
      }
    ],
    GameActor: "Work/Actor/WmnG_Shelter_Compact_00.engine__actor__ActorParam.gyml",
    Id: 6020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shelter_Compact.spl__LockerObjParam.gyml",
    Label: "スパイガジェット",
    LockerContentInfo: [
      "Work/Locker/Shelter_Compact_00_Preset_00.byml"
    ],
    MatchingId: 6020,
    NpcActor: "Work/Actor/WmnS_Shelter_Compact_00.engine__actor__ActorParam.gyml",
    Range: 11.8,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shelter_Compact_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shelter_Compact_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shelter_Compact_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shelter_Compact_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9100,
    ShopUnlockRank: 18,
    SpecActor: "Work/Actor/WeaponShelterCompact.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpSkewer.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Trap.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 50
      },
      {
        Type: "Power",
        Value: 30
      },
      {
        Type: "Defence",
        Value: 25
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shelter_Compact_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shelter_Compact_00"
  },
  Shelter_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 600,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Shelter",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "ShelterShot",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ShelterCanopy",
        ExtraInfo: "ShelterCanopy"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ShelterCanopy",
        HitEffectorType: "Shelter_Canopy"
      }
    ],
    GameActor: "Work/Actor/WmnG_Shelter_Normal_00.engine__actor__ActorParam.gyml",
    Id: 6e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shelter_Normal.spl__LockerObjParam.gyml",
    Label: "パラシェルター",
    LockerContentInfo: [
      "Work/Locker/Shelter_Normal_00_Preset_00.byml"
    ],
    MatchingId: 6e3,
    NpcActor: "Work/Actor/WmnS_Shelter_Normal_00.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shelter_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shelter_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shelter_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shelter_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 8300,
    ShopUnlockRank: 5,
    SpecActor: "Work/Actor/WeaponShelterNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpTripleTornado.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 43
      },
      {
        Type: "Power",
        Value: 65
      },
      {
        Type: "Defence",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shelter_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shelter_Normal_00"
  },
  Shelter_Wide_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 601,
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Shelter",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "ShelterShot_Wide",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "ShelterCanopy_Wide",
        ExtraInfo: "ShelterCanopy"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ShelterCanopy",
        HitEffectorType: "Shelter_Canopy"
      }
    ],
    GameActor: "Work/Actor/WmnG_Shelter_Wide_00.engine__actor__ActorParam.gyml",
    Id: 6010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shelter_Wide.spl__LockerObjParam.gyml",
    Label: "キャンピングシェルター",
    LockerContentInfo: [
      "Work/Locker/Shelter_Wide_00_Preset_00.byml"
    ],
    MatchingId: 6010,
    NpcActor: "Work/Actor/WmnS_Shelter_Wide_00.engine__actor__ActorParam.gyml",
    Range: 15,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shelter_Wide_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shelter_Wide_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shelter_Wide_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shelter_Wide_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 14200,
    ShopUnlockRank: 16,
    SpecActor: "Work/Actor/WeaponShelterWide.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Beacon.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 62
      },
      {
        Type: "Power",
        Value: 85
      },
      {
        Type: "Defence",
        Value: 85
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shelter_Wide_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shelter_Wide_00"
  },
  Shooter_Blaze_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 3,
    DefaultDamageRateInfoRow: "Shooter_Blaze",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Blaze_00.engine__actor__ActorParam.gyml",
    Id: 30,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Blaze.spl__LockerObjParam.gyml",
    Label: "プロモデラーMG",
    LockerContentInfo: [
      "Work/Locker/Shooter_Blaze_00_Preset_00.byml"
    ],
    MatchingId: 30,
    NpcActor: "Work/Actor/WmnS_Shooter_Blaze_00.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Blaze_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Blaze_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Blaze_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Blaze_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 4900,
    ShopUnlockRank: 5,
    SpecActor: "Work/Actor/WeaponShooterBlaze.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpSkewer.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Fizzy.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 35
      },
      {
        Type: "Power",
        Value: 10
      },
      {
        Type: "Blaze",
        Value: 90
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Blaze_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Blaze_00"
  },
  Shooter_Blaze_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 3,
    DefaultDamageRateInfoRow: "Shooter_Blaze",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Blaze_01.engine__actor__ActorParam.gyml",
    Id: 31,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Blaze_Cstm01.spl__LockerObjParam.gyml",
    Label: "プロモデラーRG",
    LockerContentInfo: [
      "Work/Locker/Shooter_Blaze_01_Preset_00.byml"
    ],
    MatchingId: 30,
    NpcActor: "Work/Actor/WmnS_Shooter_Blaze_01.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Blaze_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Blaze_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Blaze_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Blaze_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 16900,
    ShopUnlockRank: 18,
    SpecActor: "Work/Actor/WeaponShooterBlaze.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpNiceBall.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 35
      },
      {
        Type: "Power",
        Value: 10
      },
      {
        Type: "Blaze",
        Value: 90
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Shooter_Blaze_01"
  },
  Shooter_Expert_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 7,
    DefaultDamageRateInfoRow: "Shooter_Expert",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Expert_00.engine__actor__ActorParam.gyml",
    Id: 70,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Expert.spl__LockerObjParam.gyml",
    Label: "プライムシューター",
    LockerContentInfo: [
      "Work/Locker/Shooter_Expert_00_Preset_00.byml"
    ],
    MatchingId: 70,
    NpcActor: "Work/Actor/WmnS_Shooter_Expert_00.engine__actor__ActorParam.gyml",
    Range: 17,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Expert_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Expert_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Expert_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Expert_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 20800,
    ShopUnlockRank: 9,
    SpecActor: "Work/Actor/WeaponShooterExpert.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpChariot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/LineMarker.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 70
      },
      {
        Type: "Power",
        Value: 60
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Expert_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Expert_00"
  },
  Shooter_Expert_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 7,
    DefaultDamageRateInfoRow: "Shooter_Expert",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Expert_01.engine__actor__ActorParam.gyml",
    Id: 71,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Expert_Cstm01.spl__LockerObjParam.gyml",
    Label: "プライムシューターコラボ",
    LockerContentInfo: [
      "Work/Locker/Shooter_Expert_01_Preset_00.byml"
    ],
    MatchingId: 70,
    NpcActor: "Work/Actor/WmnS_Shooter_Expert_01.engine__actor__ActorParam.gyml",
    Range: 17,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Expert_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Expert_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Expert_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Expert_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 21900,
    ShopUnlockRank: 20,
    SpecActor: "Work/Actor/WeaponShooterExpert.engine__actor__ActorParam.gyml",
    SpecialPoint: 210,
    SpecialWeapon: "Work/Gyml/SpNiceBall.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 70
      },
      {
        Type: "Power",
        Value: 60
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Shooter_Expert_01"
  },
  Shooter_First_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 1,
    DefaultDamageRateInfoRow: "Shooter_First",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_First_00.engine__actor__ActorParam.gyml",
    Id: 10,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_First.spl__LockerObjParam.gyml",
    Label: "わかばシューター",
    LockerContentInfo: [
      "Work/Locker/Shooter_First_00_Preset_00.byml",
      "Work/Locker/Shooter_First_00_Preset_01.byml"
    ],
    MatchingId: 10,
    NpcActor: "Work/Actor/WmnS_Shooter_First_00.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_First_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_First_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_First_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_First_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 0,
    ShopUnlockRank: -1,
    SpecActor: "Work/Actor/WeaponShooterFirst.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpGreatBarrier.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 35
      },
      {
        Type: "Power",
        Value: 22
      },
      {
        Type: "Blaze",
        Value: 75
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_First_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_First_00"
  },
  Shooter_First_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 1,
    DefaultDamageRateInfoRow: "Shooter_First",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_First_01.engine__actor__ActorParam.gyml",
    Id: 11,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_First_Cstm01.spl__LockerObjParam.gyml",
    Label: "もみじシューター",
    LockerContentInfo: [
      "Work/Locker/Shooter_First_01_Preset_00.byml"
    ],
    MatchingId: 10,
    NpcActor: "Work/Actor/WmnS_Shooter_First_01.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_First_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_First_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_First_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_First_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 1900,
    ShopUnlockRank: 6,
    SpecActor: "Work/Actor/WeaponShooterFirst.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpShockSonar.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Torpedo.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 35
      },
      {
        Type: "Power",
        Value: 22
      },
      {
        Type: "Blaze",
        Value: 75
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Shooter_First_01"
  },
  Shooter_Flash_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 40,
    DefaultDamageRateInfoRow: "Shooter",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Shooter_Flash",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "Shooter_FlashRepeat",
        ExtraInfo: "ShooterVariableRepeat"
      }
    ],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Flash_00.engine__actor__ActorParam.gyml",
    Id: 400,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Flash.spl__LockerObjParam.gyml",
    Label: "ボトルガイザー",
    LockerContentInfo: [
      "Work/Locker/Shooter_Flash_00_Preset_00.byml"
    ],
    MatchingId: 400,
    NpcActor: "Work/Actor/WmnS_Shooter_Flash_00.engine__actor__ActorParam.gyml",
    Range: 20,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Flash_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Flash_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Flash_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Flash_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9400,
    ShopUnlockRank: 19,
    SpecActor: "Work/Actor/WeaponShooterFlash.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpUltraShot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Shield.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 77
      },
      {
        Type: "Power",
        Value: 52
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Flash_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Flash_00"
  },
  Shooter_Gravity_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 5,
    DefaultDamageRateInfoRow: "Shooter_Gravity",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Gravity_00.engine__actor__ActorParam.gyml",
    Id: 50,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Gravity.spl__LockerObjParam.gyml",
    Label: ".52ガロン",
    LockerContentInfo: [
      "Work/Locker/Shooter_Gravity_00_Preset_00.byml"
    ],
    MatchingId: 50,
    NpcActor: "Work/Actor/WmnS_Shooter_Gravity_00.engine__actor__ActorParam.gyml",
    Range: 13.3,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Gravity_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Gravity_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Gravity_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Gravity_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9500,
    ShopUnlockRank: 11,
    SpecActor: "Work/Actor/WeaponShooterGravity.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpMicroLaser.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Shield.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 55
      },
      {
        Type: "Power",
        Value: 75
      },
      {
        Type: "Blaze",
        Value: 25
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Gravity_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Gravity_00"
  },
  Shooter_Heavy_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 8,
    DefaultDamageRateInfoRow: "Shooter_Heavy",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Heavy_00.engine__actor__ActorParam.gyml",
    Id: 80,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Heavy.spl__LockerObjParam.gyml",
    Label: ".96ガロン",
    LockerContentInfo: [
      "Work/Locker/Shooter_Heavy_00_Preset_00.byml"
    ],
    MatchingId: 80,
    NpcActor: "Work/Actor/WmnS_Shooter_Heavy_00.engine__actor__ActorParam.gyml",
    Range: 18,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Heavy_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Heavy_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Heavy_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Heavy_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 12600,
    ShopUnlockRank: 17,
    SpecActor: "Work/Actor/WeaponShooterHeavy.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 74
      },
      {
        Type: "Power",
        Value: 80
      },
      {
        Type: "Blaze",
        Value: 10
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Heavy_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Heavy_00"
  },
  Shooter_Long_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 9,
    DefaultDamageRateInfoRow: "Shooter_Long",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Long_00.engine__actor__ActorParam.gyml",
    Id: 90,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Long.spl__LockerObjParam.gyml",
    Label: "ジェットスイーパー",
    LockerContentInfo: [
      "Work/Locker/Shooter_Long_00_Preset_00.byml"
    ],
    MatchingId: 90,
    NpcActor: "Work/Actor/WmnS_Shooter_Long_00.engine__actor__ActorParam.gyml",
    Range: 22.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Long_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Long_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Long_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Long_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 11300,
    ShopUnlockRank: 15,
    SpecActor: "Work/Actor/WeaponShooterLong.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpBlower.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/LineMarker.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 82
      },
      {
        Type: "Power",
        Value: 35
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Long_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Long_00"
  },
  Shooter_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 4,
    DefaultDamageRateInfoRow: "Shooter",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Normal_00.engine__actor__ActorParam.gyml",
    Id: 40,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_NormalT.spl__LockerObjParam.gyml",
    Label: "スプラシューター",
    LockerContentInfo: [
      "Work/Locker/Shooter_Normal_00_Preset_00.byml",
      "Work/Locker/Shooter_Normal_00_Preset_01.byml"
    ],
    MatchingId: 40,
    NpcActor: "Work/Actor/WmnS_Shooter_Normal_00.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 900,
    ShopUnlockRank: 2,
    SpecActor: "Work/Actor/WeaponShooterNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpUltraShot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 50
      },
      {
        Type: "Power",
        Value: 47
      },
      {
        Type: "Blaze",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Normal_00"
  },
  Shooter_Normal_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 4,
    DefaultDamageRateInfoRow: "Shooter",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Normal_01.engine__actor__ActorParam.gyml",
    Id: 41,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_NormalT_Cstm01.spl__LockerObjParam.gyml",
    Label: "スプラシューターコラボ",
    LockerContentInfo: [
      "Work/Locker/Shooter_Normal_01_Preset_00.byml"
    ],
    MatchingId: 40,
    NpcActor: "Work/Actor/WmnS_Shooter_Normal_01.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Normal_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Normal_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Normal_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Normal_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 2100,
    ShopUnlockRank: 10,
    SpecActor: "Work/Actor/WeaponShooterNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpTripleTornado.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 50
      },
      {
        Type: "Power",
        Value: 47
      },
      {
        Type: "Blaze",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Shooter_Normal_01"
  },
  Shooter_Normal_H: {
    DebugDispColumn: 5,
    DebugDispOrder: 4,
    DefaultDamageRateInfoRow: "Shooter",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Normal_H.engine__actor__ActorParam.gyml",
    Id: 45,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Msn0Lv2.spl__LockerObjParam.gyml",
    Label: "ヒーローシューター レプリカ",
    LockerContentInfo: [
      "Work/Locker/Shooter_Normal_H_Preset_00.byml",
      "Work/Locker/Shooter_Normal_H_Preset_00.byml"
    ],
    MatchingId: 40,
    NpcActor: "Work/Actor/WmnS_Shooter_Normal_H.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Normal_H_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Normal_H_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Normal_H_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Normal_H_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 0,
    ShopUnlockRank: -1,
    SpecActor: "Work/Actor/WeaponShooterNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpUltraShot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 50
      },
      {
        Type: "Power",
        Value: 47
      },
      {
        Type: "Blaze",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Shooter_Normal_H"
  },
  Shooter_Precision_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 2,
    DefaultDamageRateInfoRow: "Shooter_Precision",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Precision_00.engine__actor__ActorParam.gyml",
    Id: 20,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Precision.spl__LockerObjParam.gyml",
    Label: "シャープマーカー",
    LockerContentInfo: [
      "Work/Locker/Shooter_Precision_00_Preset_00.byml"
    ],
    MatchingId: 20,
    NpcActor: "Work/Actor/WmnS_Shooter_Precision_00.engine__actor__ActorParam.gyml",
    Range: 11.7,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Precision_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Precision_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Precision_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Precision_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 11200,
    ShopUnlockRank: 16,
    SpecActor: "Work/Actor/WeaponShooterPrecision.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpChariot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Quick.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 42
      },
      {
        Type: "Power",
        Value: 22
      },
      {
        Type: "Blaze",
        Value: 75
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Precision_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Precision_00"
  },
  Shooter_QuickLong_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 10,
    DefaultDamageRateInfoRow: "Shooter",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_QuickLong_00.engine__actor__ActorParam.gyml",
    Id: 100,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_QuickLong.spl__LockerObjParam.gyml",
    Label: "スペースシューター",
    LockerContentInfo: [
      "Work/Locker/Shooter_QuickLong_00_Preset_00.byml"
    ],
    MatchingId: 100,
    NpcActor: "Work/Actor/WmnS_Shooter_QuickLong_00.engine__actor__ActorParam.gyml",
    Range: 16,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_QuickLong_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_QuickLong_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_QuickLong_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_QuickLong_00_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 7100,
    ShopUnlockRank: 8,
    SpecActor: "Work/Actor/WeaponShooterQuickLong.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpMicroLaser.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PointSensor.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 68
      },
      {
        Type: "Power",
        Value: 10
      },
      {
        Type: "Blaze",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_QuickLong_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_QuickLong_00"
  },
  Shooter_QuickMiddle_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 6,
    DefaultDamageRateInfoRow: "Shooter",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_QuickMiddle_00.engine__actor__ActorParam.gyml",
    Id: 60,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_QuickMiddle.spl__LockerObjParam.gyml",
    Label: "N-ZAP85",
    LockerContentInfo: [
      "Work/Locker/Shooter_QuickMiddle_00_Preset_00.byml"
    ],
    MatchingId: 60,
    NpcActor: "Work/Actor/WmnS_Shooter_QuickMiddle_00.engine__actor__ActorParam.gyml",
    Range: 12.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_QuickMiddle_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_QuickMiddle_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_QuickMiddle_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_QuickMiddle_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 7100,
    ShopUnlockRank: 6,
    SpecActor: "Work/Actor/WeaponShooterQuickMiddle.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpEnergyStand.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Suction.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 50
      },
      {
        Type: "Power",
        Value: 22
      },
      {
        Type: "Blaze",
        Value: 75
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_QuickMiddle_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_QuickMiddle_00"
  },
  Shooter_Short_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 0,
    DefaultDamageRateInfoRow: "Shooter_Short",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_Short_00.engine__actor__ActorParam.gyml",
    Id: 0,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_Short.spl__LockerObjParam.gyml",
    Label: "ボールドマーカー",
    LockerContentInfo: [
      "Work/Locker/Shooter_Short_00_Preset_00.byml"
    ],
    MatchingId: 0,
    NpcActor: "Work/Actor/WmnS_Shooter_Short_00.engine__actor__ActorParam.gyml",
    Range: 8,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_Short_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_Short_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Short_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_Short_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 9700,
    ShopUnlockRank: 9,
    SpecActor: "Work/Actor/WeaponShooterShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpUltraStamp.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Curling.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 12
      },
      {
        Type: "Power",
        Value: 52
      },
      {
        Type: "Blaze",
        Value: 75
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_Short_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_Short_00"
  },
  Shooter_TripleMiddle_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 31,
    DefaultDamageRateInfoRow: "Shooter_TripleMiddle",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "CriticalHit",
        HitEffectorType: "Shooter_CriticalHit"
      }
    ],
    GameActor: "Work/Actor/WmnG_Shooter_TripleMiddle_00.engine__actor__ActorParam.gyml",
    Id: 310,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_TripleMiddle.spl__LockerObjParam.gyml",
    Label: "H3リールガン",
    LockerContentInfo: [
      "Work/Locker/Shooter_TripleMiddle_00_Preset_00.byml"
    ],
    MatchingId: 310,
    NpcActor: "Work/Actor/WmnS_Shooter_TripleMiddle_00.engine__actor__ActorParam.gyml",
    Range: 17,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_TripleMiddle_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_TripleMiddle_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_TripleMiddle_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_TripleMiddle_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 17200,
    ShopUnlockRank: 24,
    SpecActor: "Work/Actor/WeaponShooterTripleMiddle.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpEnergyStand.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PointSensor.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 70
      },
      {
        Type: "Power",
        Value: 58
      },
      {
        Type: "Blaze",
        Value: 30
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_TripleMiddle_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_TripleMiddle_00"
  },
  Shooter_TripleQuick_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 30,
    DefaultDamageRateInfoRow: "Shooter_TripleQuick",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Shooter_TripleQuick_00.engine__actor__ActorParam.gyml",
    Id: 300,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Shooter_TripleQuick.spl__LockerObjParam.gyml",
    Label: "L3リールガン",
    LockerContentInfo: [
      "Work/Locker/Shooter_TripleQuick_00_Preset_00.byml"
    ],
    MatchingId: 300,
    NpcActor: "Work/Actor/WmnS_Shooter_TripleQuick_00.engine__actor__ActorParam.gyml",
    Range: 13.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Shooter_TripleQuick_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Shooter_TripleQuick_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_TripleQuick_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Shooter_TripleQuick_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 10400,
    ShopUnlockRank: 13,
    SpecActor: "Work/Actor/WeaponShooterTripleQuick.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpChariot.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Curling.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 62
      },
      {
        Type: "Power",
        Value: 25
      },
      {
        Type: "Blaze",
        Value: 65
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Shooter_TripleQuick_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Shooter_TripleQuick_00"
  },
  Slosher_Bathtub_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 303,
    DefaultDamageRateInfoRow: "Slosher_Bathtub",
    DefaultHitEffectorType: "Slosher_Bathtub",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Slosher_Bathtub_00.engine__actor__ActorParam.gyml",
    Id: 3030,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Slosher_Bathtub.spl__LockerObjParam.gyml",
    Label: "オーバーフロッシャー",
    LockerContentInfo: [
      "Work/Locker/Slosher_Bathtub_00_Preset_00.byml"
    ],
    MatchingId: 3030,
    NpcActor: "Work/Actor/WmnS_Slosher_Bathtub_00.engine__actor__ActorParam.gyml",
    Range: 15,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Slosher_Bathtub_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Slosher_Bathtub_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Bathtub_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Bathtub_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 1e4,
    ShopUnlockRank: 19,
    SpecActor: "Work/Actor/WeaponSlosherBathtub.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpInkStorm.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 85
      },
      {
        Type: "Power",
        Value: 29
      },
      {
        Type: "Weight",
        Value: 50
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Slosher_Bathtub_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Slosher_Bathtub_00"
  },
  Slosher_Diffusion_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 301,
    DefaultDamageRateInfoRow: "Slosher",
    DefaultHitEffectorType: "Slosher",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SlosherBig",
        HitEffectorType: "Slosher_Big"
      }
    ],
    GameActor: "Work/Actor/WmnG_Slosher_Diffusion_00.engine__actor__ActorParam.gyml",
    Id: 3010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Slosher_Diffusion.spl__LockerObjParam.gyml",
    Label: "ヒッセン",
    LockerContentInfo: [
      "Work/Locker/Slosher_Diffusion_00_Preset_00.byml",
      "Work/Locker/Slosher_Diffusion_00_Preset_01.byml"
    ],
    MatchingId: 3010,
    NpcActor: "Work/Actor/WmnS_Slosher_Diffusion_00.engine__actor__ActorParam.gyml",
    Range: 11,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Slosher_Diffusion_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Slosher_Diffusion_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Diffusion_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Diffusion_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 10200,
    ShopUnlockRank: 10,
    SpecActor: "Work/Actor/WeaponSlosherDiffusion.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpJetpack.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PoisonMist.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 31
      },
      {
        Type: "Power",
        Value: 75
      },
      {
        Type: "Weight",
        Value: 70
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Slosher_Diffusion_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Slosher_Diffusion_00"
  },
  Slosher_Launcher_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 302,
    DefaultDamageRateInfoRow: "Slosher",
    DefaultHitEffectorType: "Slosher_LauncherLeader",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SlosherLauncherFollower",
        HitEffectorType: "Slosher_LauncherFollower"
      }
    ],
    GameActor: "Work/Actor/WmnG_Slosher_Launcher_00.engine__actor__ActorParam.gyml",
    Id: 3020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Slosher_Launcher.spl__LockerObjParam.gyml",
    Label: "スクリュースロッシャー",
    LockerContentInfo: [
      "Work/Locker/Slosher_Launcher_00_Preset_00.byml"
    ],
    MatchingId: 3020,
    NpcActor: "Work/Actor/WmnS_Slosher_Launcher_00.engine__actor__ActorParam.gyml",
    Range: 14.7,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Slosher_Launcher_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Slosher_Launcher_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Launcher_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Launcher_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 12600,
    ShopUnlockRank: 14,
    SpecActor: "Work/Actor/WeaponSlosherLauncher.engine__actor__ActorParam.gyml",
    SpecialPoint: 220,
    SpecialWeapon: "Work/Gyml/SpNiceBall.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Fizzy.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 60
      },
      {
        Type: "Power",
        Value: 90
      },
      {
        Type: "Weight",
        Value: 40
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Slosher_Launcher_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Slosher_Launcher_00"
  },
  Slosher_Strong_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 300,
    DefaultDamageRateInfoRow: "Slosher",
    DefaultHitEffectorType: "Slosher",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SlosherBig",
        HitEffectorType: "Slosher_Big"
      }
    ],
    GameActor: "Work/Actor/WmnG_Slosher_Strong_00.engine__actor__ActorParam.gyml",
    Id: 3e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Slosher_StrongT.spl__LockerObjParam.gyml",
    Label: "バケットスロッシャー",
    LockerContentInfo: [
      "Work/Locker/Slosher_Strong_00_Preset_00.byml",
      "Work/Locker/Slosher_Strong_00_Preset_01.byml"
    ],
    MatchingId: 3e3,
    NpcActor: "Work/Actor/WmnS_Slosher_Strong_00.engine__actor__ActorParam.gyml",
    Range: 14.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Slosher_Strong_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Slosher_Strong_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Strong_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Strong_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 2500,
    ShopUnlockRank: 3,
    SpecActor: "Work/Actor/WeaponSlosherStrong.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpTripleTornado.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Splash.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 58
      },
      {
        Type: "Power",
        Value: 85
      },
      {
        Type: "Weight",
        Value: 50
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Slosher_Strong_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Slosher_Strong_00"
  },
  Slosher_Strong_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 300,
    DefaultDamageRateInfoRow: "Slosher",
    DefaultHitEffectorType: "Slosher",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SlosherBig",
        HitEffectorType: "Slosher_Big"
      }
    ],
    GameActor: "Work/Actor/WmnG_Slosher_Strong_01.engine__actor__ActorParam.gyml",
    Id: 3001,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Slosher_StrongT_Cstm01.spl__LockerObjParam.gyml",
    Label: "バケットスロッシャーデコ",
    LockerContentInfo: [
      "Work/Locker/Slosher_Strong_01_Preset_00.byml"
    ],
    MatchingId: 3e3,
    NpcActor: "Work/Actor/WmnS_Slosher_Strong_01.engine__actor__ActorParam.gyml",
    Range: 14.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Slosher_Strong_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Slosher_Strong_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Strong_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Strong_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 8e3,
    ShopUnlockRank: 12,
    SpecActor: "Work/Actor/WeaponSlosherStrong.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpSuperHook.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/LineMarker.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 58
      },
      {
        Type: "Power",
        Value: 85
      },
      {
        Type: "Weight",
        Value: 50
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Slosher_Strong_01"
  },
  Slosher_Washtub_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 304,
    DefaultDamageRateInfoRow: "Slosher_Washtub",
    DefaultHitEffectorType: "Slosher",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Slosher_WashtubBombCore",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Slosher_WashtubBombCore"
      },
      {
        ExtraInfo: "SlosherBig",
        HitEffectorType: "Slosher_Big"
      }
    ],
    GameActor: "Work/Actor/WmnG_Slosher_Washtub_00.engine__actor__ActorParam.gyml",
    Id: 3040,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Slosher_Washtub.spl__LockerObjParam.gyml",
    Label: "エクスプロッシャー",
    LockerContentInfo: [
      "Work/Locker/Slosher_Washtub_00_Preset_00.byml"
    ],
    MatchingId: 3040,
    NpcActor: "Work/Actor/WmnS_Slosher_Washtub_00.engine__actor__ActorParam.gyml",
    Range: 20.7,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Slosher_Washtub_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Slosher_Washtub_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Washtub_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Slosher_Washtub_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 10800,
    ShopUnlockRank: 29,
    SpecActor: "Work/Actor/WeaponSlosherWashtub.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpInkStorm.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PointSensor.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 77
      },
      {
        Type: "Power",
        Value: 65
      },
      {
        Type: "Weight",
        Value: 20
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Slosher_Washtub_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Slosher_Washtub_00"
  },
  Spinner_Downpour_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 403,
    DefaultDamageRateInfoRow: "Spinner",
    DefaultHitEffectorType: "Spinner",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Spinner_Downpour_00.engine__actor__ActorParam.gyml",
    Id: 4030,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Spinner_Downpour.spl__LockerObjParam.gyml",
    Label: "クーゲルシュライバー",
    LockerContentInfo: [
      "Work/Locker/Spinner_Downpour_00_Preset_00.byml"
    ],
    MatchingId: 4030,
    NpcActor: "Work/Actor/WmnS_Spinner_Downpour_00.engine__actor__ActorParam.gyml",
    Range: 24.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Spinner_Downpour_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Spinner_Downpour_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Downpour_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Downpour_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 11600,
    ShopUnlockRank: 30,
    SpecActor: "Work/Actor/WeaponSpinnerDownpour.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpJetpack.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Fizzy.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 84
      },
      {
        Type: "Charge",
        Value: 18
      },
      {
        Type: "Mobility",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Spinner_Downpour_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Spinner_Downpour_00"
  },
  Spinner_Hyper_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 402,
    DefaultDamageRateInfoRow: "Spinner",
    DefaultHitEffectorType: "Spinner",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Spinner_Hyper_00.engine__actor__ActorParam.gyml",
    Id: 4020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Spinner_HyperT.spl__LockerObjParam.gyml",
    Label: "ハイドラント",
    LockerContentInfo: [
      "Work/Locker/Spinner_Hyper_00_Preset_00.byml"
    ],
    MatchingId: 4020,
    NpcActor: "Work/Actor/WmnS_Spinner_Hyper_00.engine__actor__ActorParam.gyml",
    Range: 24.5,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Spinner_Hyper_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Spinner_Hyper_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Hyper_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Hyper_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 18500,
    ShopUnlockRank: 20,
    SpecActor: "Work/Actor/WeaponSpinnerHyper.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpNiceBall.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Robot.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 85
      },
      {
        Type: "Charge",
        Value: 10
      },
      {
        Type: "Mobility",
        Value: 20
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Spinner_Hyper_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Spinner_Hyper_00"
  },
  Spinner_Quick_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 400,
    DefaultDamageRateInfoRow: "Spinner",
    DefaultHitEffectorType: "Spinner",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Spinner_Quick_00.engine__actor__ActorParam.gyml",
    Id: 4e3,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Spinner_QuickT.spl__LockerObjParam.gyml",
    Label: "スプラスピナー",
    LockerContentInfo: [
      "Work/Locker/Spinner_Quick_00_Preset_00.byml"
    ],
    MatchingId: 4e3,
    NpcActor: "Work/Actor/WmnS_Spinner_Quick_00.engine__actor__ActorParam.gyml",
    Range: 15,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Spinner_Quick_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Spinner_Quick_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Quick_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Quick_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 12300,
    ShopUnlockRank: 12,
    SpecActor: "Work/Actor/WeaponSpinnerQuick.engine__actor__ActorParam.gyml",
    SpecialPoint: 180,
    SpecialWeapon: "Work/Gyml/SpUltraStamp.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Quick.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 62
      },
      {
        Type: "Charge",
        Value: 80
      },
      {
        Type: "Mobility",
        Value: 90
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Spinner_Quick_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Spinner_Quick_00"
  },
  Spinner_Quick_01: {
    DebugDispColumn: 1,
    DebugDispOrder: 400,
    DefaultDamageRateInfoRow: "Spinner",
    DefaultHitEffectorType: "Spinner",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Spinner_Quick_01.engine__actor__ActorParam.gyml",
    Id: 4001,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Spinner_QuickT_Cstm01.spl__LockerObjParam.gyml",
    Label: "スプラスピナーコラボ",
    LockerContentInfo: [
      "Work/Locker/Spinner_Quick_01_Preset_00.byml"
    ],
    MatchingId: 4e3,
    NpcActor: "Work/Actor/WmnS_Spinner_Quick_01.engine__actor__ActorParam.gyml",
    Range: 15,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Spinner_Quick_01_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Spinner_Quick_01_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Quick_01_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Quick_01_Lv01.spl__BadgeInfo.gyml",
    Season: 2,
    ShopPrice: 15400,
    ShopUnlockRank: 25,
    SpecActor: "Work/Actor/WeaponSpinnerQuick.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpGreatBarrier.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PoisonMist.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 62
      },
      {
        Type: "Charge",
        Value: 80
      },
      {
        Type: "Mobility",
        Value: 90
      }
    ],
    WeaponInfoForCoop: "",
    __RowId: "Spinner_Quick_01"
  },
  Spinner_Serein_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 404,
    DefaultDamageRateInfoRow: "Spinner",
    DefaultHitEffectorType: "Spinner",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Spinner_Serein_00.engine__actor__ActorParam.gyml",
    Id: 4040,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Spinner_Serein.spl__LockerObjParam.gyml",
    Label: "ノーチラス47",
    LockerContentInfo: [
      "Work/Locker/Spinner_Serein_00_Preset_00.byml"
    ],
    MatchingId: 4040,
    NpcActor: "Work/Actor/WmnS_Spinner_Serein_00.engine__actor__ActorParam.gyml",
    Range: 18,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Spinner_Serein_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Spinner_Serein_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Serein_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Serein_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 14700,
    ShopUnlockRank: 28,
    SpecActor: "Work/Actor/WeaponSpinnerSerein.engine__actor__ActorParam.gyml",
    SpecialPoint: 190,
    SpecialWeapon: "Work/Gyml/SpInkStorm.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PointSensor.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 74
      },
      {
        Type: "Charge",
        Value: 37
      },
      {
        Type: "Mobility",
        Value: 70
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Spinner_Serein_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Spinner_Serein_00"
  },
  Spinner_Standard_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 401,
    DefaultDamageRateInfoRow: "Spinner",
    DefaultHitEffectorType: "Spinner",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    GameActor: "Work/Actor/WmnG_Spinner_Standard_00.engine__actor__ActorParam.gyml",
    Id: 4010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Spinner_StandardT.spl__LockerObjParam.gyml",
    Label: "バレルスピナー",
    LockerContentInfo: [
      "Work/Locker/Spinner_Standard_00_Preset_00.byml",
      "Work/Locker/Spinner_Standard_00_Preset_01.byml"
    ],
    MatchingId: 4010,
    NpcActor: "Work/Actor/WmnS_Spinner_Standard_00.engine__actor__ActorParam.gyml",
    Range: 21,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Spinner_Standard_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Spinner_Standard_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Standard_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Spinner_Standard_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 7800,
    ShopUnlockRank: 4,
    SpecActor: "Work/Actor/WeaponSpinnerStandard.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpShockSonar.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Sprinkler.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 78
      },
      {
        Type: "Charge",
        Value: 38
      },
      {
        Type: "Mobility",
        Value: 55
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Spinner_Standard_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Spinner_Standard_00"
  },
  Stringer_Normal_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 701,
    DefaultDamageRateInfoRow: "Stringer",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "CriticalHit",
        HitEffectorType: "Shooter_CriticalHit"
      }
    ],
    GameActor: "Work/Actor/WmnG_Stringer_Normal_00.engine__actor__ActorParam.gyml",
    Id: 7010,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Stringer_Normal.spl__LockerObjParam.gyml",
    Label: "トライストリンガー",
    LockerContentInfo: [
      "Work/Locker/Stringer_Normal_00_Preset_00.byml",
      "Work/Locker/Stringer_Normal_00_Preset_01.byml"
    ],
    MatchingId: 7010,
    NpcActor: "Work/Actor/WmnS_Stringer_Normal_00.engine__actor__ActorParam.gyml",
    Range: 25,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Stringer_Normal_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Stringer_Normal_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Stringer_Normal_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Stringer_Normal_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 1e3,
    ShopUnlockRank: 4,
    SpecActor: "Work/Actor/WeaponStringerNormal.engine__actor__ActorParam.gyml",
    SpecialPoint: 200,
    SpecialWeapon: "Work/Gyml/SpMicroLaser.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/PoisonMist.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 88
      },
      {
        Type: "Charge",
        Value: 40
      },
      {
        Type: "Mobility",
        Value: 40
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Stringer_Normal_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Stringer_Normal_00"
  },
  Stringer_Short_00: {
    DebugDispColumn: 0,
    DebugDispOrder: 702,
    DefaultDamageRateInfoRow: "Stringer_Short",
    DefaultHitEffectorType: "Shooter",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "CriticalHit",
        HitEffectorType: "Shooter_CriticalHit"
      }
    ],
    GameActor: "Work/Actor/WmnG_Stringer_Short_00.engine__actor__ActorParam.gyml",
    Id: 7020,
    IsCoopRare: false,
    LObjParam: "Work/Gyml/LObj_Wmn_Stringer_Short.spl__LockerObjParam.gyml",
    Label: "LACT-450",
    LockerContentInfo: [
      "Work/Locker/Stringer_Short_00_Preset_00.byml"
    ],
    MatchingId: 7020,
    NpcActor: "Work/Actor/WmnS_Stringer_Short_00.engine__actor__ActorParam.gyml",
    Range: 15,
    RewardLv2: "Work/Gyml/Stc_Sti_Wst_Stringer_Short_00_Lv00.spl__LockerGoodsStickerInfo.gyml",
    RewardLv3: "Work/Gyml/Hla_Sti_Wst_Stringer_Short_00_Lv01.spl__LockerGoodsStickerInfo.gyml",
    RewardLv4: "Work/Gyml/BadgeInfo_WeaponLevel_Stringer_Short_00_Lv00.spl__BadgeInfo.gyml",
    RewardLv5: "Work/Gyml/BadgeInfo_WeaponLevel_Stringer_Short_00_Lv01.spl__BadgeInfo.gyml",
    Season: 0,
    ShopPrice: 5e3,
    ShopUnlockRank: 10,
    SpecActor: "Work/Actor/WeaponStringerShort.engine__actor__ActorParam.gyml",
    SpecialPoint: 210,
    SpecialWeapon: "Work/Gyml/SpMultiMissile.spl__WeaponInfoSpecial.gyml",
    SubWeapon: "Work/Gyml/Bomb_Curling.spl__WeaponInfoSub.gyml",
    Type: "Versus",
    UIParam: [
      {
        Type: "Range",
        Value: 60
      },
      {
        Type: "Charge",
        Value: 77
      },
      {
        Type: "Mobility",
        Value: 60
      }
    ],
    WeaponInfoForCoop: "Work/Gyml/Stringer_Short_Coop.spl__WeaponInfoMain.gyml",
    __RowId: "Stringer_Short_00"
  }
};
const Sub = {
  Beacon: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 8,
    Label: "ジャンプビーコン",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Flag.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Beacon.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBeacon.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Beacon"
  },
  Bomb_Curling: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Bomb_CurlingBullet",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "Bomb",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "CurlingDirectHit",
        HitEffectorType: "Bomb_Curling"
      }
    ],
    Id: 6,
    Label: "カーリングボム",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Curling.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Curling.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombCurling.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Curling"
  },
  Bomb_Fizzy: {
    DefaultDamageRateInfoRow: "Bomb_Fizzy",
    DefaultHitEffectorType: "Bomb_Fizzy",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 5,
    Label: "タンサンボム",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Piyo.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Fizzy.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombFizzy.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Fizzy"
  },
  Bomb_Quick: {
    DefaultDamageRateInfoRow: "Bomb_DirectHit",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Bomb",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Blaster_ExtraBombCore"
      }
    ],
    Id: 2,
    Label: "クイックボム",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Handy.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Quick.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombQuick.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Quick"
  },
  Bomb_Robot: {
    DefaultDamageRateInfoRow: "Bomb_DirectHit",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Bomb",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [],
    Id: 7,
    Label: "ロボットボム",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Robo.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Robot.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombRobot.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Robot"
  },
  Bomb_Splash: {
    DefaultDamageRateInfoRow: "Bomb_DirectHit",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Bomb",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [],
    Id: 0,
    Label: "スプラッシュボム",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Splash.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Splash.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombSplash.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Splash"
  },
  Bomb_Suction: {
    DefaultDamageRateInfoRow: "Bomb_Suction",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 1,
    Label: "キューバンボム",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Hold.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Suction.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombSuction.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Suction"
  },
  Bomb_Torpedo: {
    DefaultDamageRateInfoRow: "Bomb_TorpedoBullet",
    DefaultHitEffectorType: "Bomb_Torpedo",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Bomb_TorpedoSplashBurst",
        ExtraInfo: "ExtraPaintSplashExplosion"
      }
    ],
    ExtraHitEffectorInfoSet: [],
    Id: 13,
    Label: "トーピード",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Bomb_Tako.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Bomb_Torpedo.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponBombTorpedo.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Bomb_Torpedo"
  },
  LineMarker: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "LineMarker",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 12,
    Label: "ラインマーカー",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_LinMarker.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_LineMarker.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponLineMarker.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "LineMarker"
  },
  PointSensor: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 9,
    Label: "ポイントセンサー",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_MarkingBall.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_PointSensor.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponPointSensor.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "PointSensor"
  },
  PoisonMist: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 11,
    Label: "ポイズンミスト",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_DevillBall.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_PoisonMist.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponPoisonMist.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "PoisonMist"
  },
  Shield: {
    DefaultDamageRateInfoRow: "Shield",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 4,
    Label: "スプラッシュシールド",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Shield.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Shield.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponShield.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Shield"
  },
  Sprinkler: {
    DefaultDamageRateInfoRow: "Sprinkler",
    DefaultHitEffectorType: "Sprinkler",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "SprinklerInk",
        HitEffectorType: "Sprinkler_Ink"
      }
    ],
    Id: 3,
    Label: "スプリンクラー",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Sprinkler.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Sprinkler.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSprinkler.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Sprinkler"
  },
  Trap: {
    DefaultDamageRateInfoRow: "Bomb_Trap",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 10,
    Label: "トラップ",
    LockerGoodsSubWeaponInfo: "Work/Gyml/Wsb_Trap.spl__LockerGoodsSubWeaponInfo.gyml",
    NpcActor: "Work/Actor/WsbN_Trap.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponTrap.engine__actor__ActorParam.gyml",
    Type: "Versus",
    __RowId: "Trap"
  }
};
const Special = {
  SpBlower: {
    DefaultDamageRateInfoRow: "BlowerExhale",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "BlowerInhale",
        ExtraInfo: "BlowerInhale"
      },
      {
        DamageRateInfoRow: "BlowerExhale_BombCore",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "BlowerInhale",
        HitEffectorType: "Blower_Inhale"
      }
    ],
    Id: 8,
    Label: "キューインキ",
    NpcActor: "Work/Actor/WspN_SpBlower.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpBlower.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpBlower"
  },
  SpChariot: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Chariot_Body",
        ExtraInfo: "ChariotBody"
      },
      {
        DamageRateInfoRow: "Chariot_Cannon",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [],
    Id: 12,
    Label: "カニタンク",
    NpcActor: "Work/Actor/WspN_SpChariot.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpChariot.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpChariot"
  },
  SpEnergyStand: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 15,
    Label: "エナジースタンド",
    NpcActor: "Work/Actor/WspN_SpEnergyStand.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpEnergyStand.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpEnergyStand"
  },
  SpGachihoko: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Gachihoko_Bullet",
        ExtraInfo: "Normal"
      },
      {
        DamageRateInfoRow: "Gachihoko_BombCore",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Bomb"
      }
    ],
    Id: 20,
    Label: "ガチホコ",
    NpcActor: "Work/Actor/WspN_SpGachihoko.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpGachihoko.engine__actor__ActorParam.gyml",
    StandAlone: false,
    Type: "Versus",
    __RowId: "SpGachihoko"
  },
  SpGreatBarrier: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 2,
    Label: "グレートバリア",
    NpcActor: "Work/Actor/WspN_SpGreatBarrier.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpGreatBarrier.engine__actor__ActorParam.gyml",
    StandAlone: false,
    Type: "Versus",
    __RowId: "SpGreatBarrier"
  },
  SpInkStorm: {
    DefaultDamageRateInfoRow: "InkStorm",
    DefaultHitEffectorType: "InkStorm",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "InkStormRain",
        ExtraInfo: "ExtraPaintSplash"
      }
    ],
    ExtraHitEffectorInfoSet: [],
    Id: 5,
    Label: "アメフラシ",
    NpcActor: "Work/Actor/WspN_SpInkStorm.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpInkStorm.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpInkStorm"
  },
  SpJetpack: {
    DefaultDamageRateInfoRow: "Jetpack_Bullet",
    DefaultHitEffectorType: "Jetpack_Launcher",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Jetpack_Jet",
        ExtraInfo: "JetpackJet"
      },
      {
        DamageRateInfoRow: "Jetpack_BombCore",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Bomb"
      }
    ],
    Id: 10,
    Label: "ジェットパック",
    NpcActor: "Work/Actor/WspN_SpJetpack.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpJetpack.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpJetpack"
  },
  SpMicroLaser: {
    DefaultDamageRateInfoRow: "MicroLaser",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 9,
    Label: "メガホンレーザー5.1ch",
    NpcActor: "Work/Actor/WspN_SpMicroLaser.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpMicroLaser.engine__actor__ActorParam.gyml",
    StandAlone: false,
    Type: "Versus",
    __RowId: "SpMicroLaser"
  },
  SpMultiMissile: {
    DefaultDamageRateInfoRow: "MultiMissile_BombCore",
    DefaultHitEffectorType: "MultiMissile_BombCore",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "MultiMissile_Bullet",
        ExtraInfo: "MultiMissileDirectHit"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "MultiMissileDirectHit",
        HitEffectorType: "MultiMissile_Bullet"
      }
    ],
    Id: 4,
    Label: "マルチミサイル",
    NpcActor: "Work/Actor/WspN_SpMultiMissile.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpMultiMissile.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpMultiMissile"
  },
  SpNiceBall: {
    DefaultDamageRateInfoRow: "NiceBall",
    DefaultHitEffectorType: "NiceBall",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 6,
    Label: "ナイスダマ",
    NpcActor: "Work/Actor/WspN_SpNiceBall.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpNiceBall.engine__actor__ActorParam.gyml",
    StandAlone: false,
    Type: "Versus",
    __RowId: "SpNiceBall"
  },
  SpShockSonar: {
    DefaultDamageRateInfoRow: "Default",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "ShockSonar_Wave",
        ExtraInfo: "ShockSonarWave"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ShockSonarWave",
        HitEffectorType: "ShockSonar_Wave"
      }
    ],
    Id: 7,
    Label: "ホップソナー",
    NpcActor: "Work/Actor/WspN_SpShockSonar.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpShockSonar.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpShockSonar"
  },
  SpSkewer: {
    DefaultDamageRateInfoRow: "Skewer_Body",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "Skewer",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Skewer_BombCore"
      }
    ],
    Id: 13,
    Label: "サメライド",
    NpcActor: "Work/Actor/WspN_SpSkewer.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpSkewer.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpSkewer"
  },
  SpSuperHook: {
    DefaultDamageRateInfoRow: "SuperHook",
    DefaultHitEffectorType: "Default",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Bomb"
      }
    ],
    Id: 3,
    Label: "ショクワンダー",
    NpcActor: "Work/Actor/WspN_SpSuperHook.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpSuperHook.engine__actor__ActorParam.gyml",
    StandAlone: false,
    Type: "Versus",
    __RowId: "SpSuperHook"
  },
  SpTripleTornado: {
    DefaultDamageRateInfoRow: "TripleTornado",
    DefaultHitEffectorType: "Bomb",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 14,
    Label: "トリプルトルネード",
    NpcActor: "Work/Actor/WspN_SpTripleTornado.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpTripleTornado.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpTripleTornado"
  },
  SpUltraShot: {
    DefaultDamageRateInfoRow: "UltraShot",
    DefaultHitEffectorType: "UltraShot",
    ExtraDamageRateInfoRowSet: [],
    ExtraHitEffectorInfoSet: [],
    Id: 1,
    Label: "ウルトラショット",
    NpcActor: "Work/Actor/WspN_SpUltraShot.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpUltraShot.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpUltraShot"
  },
  SpUltraStamp: {
    DefaultDamageRateInfoRow: "UltraStamp_Throw",
    DefaultHitEffectorType: "UltraStamp",
    ExtraDamageRateInfoRowSet: [
      {
        DamageRateInfoRow: "UltraStamp_Swing",
        ExtraInfo: "UltraStampSwing"
      },
      {
        DamageRateInfoRow: "UltraStamp_Throw_BombCore",
        ExtraInfo: "ExtraBombCore"
      }
    ],
    ExtraHitEffectorInfoSet: [
      {
        ExtraInfo: "ExtraBombCore",
        HitEffectorType: "Bomb"
      }
    ],
    Id: 11,
    Label: "ウルトラハンコ",
    NpcActor: "Work/Actor/WspN_SpUltraStamp.engine__actor__ActorParam.gyml",
    SpecActor: "Work/Actor/WeaponSpUltraStamp.engine__actor__ActorParam.gyml",
    StandAlone: true,
    Type: "Versus",
    __RowId: "SpUltraStamp"
  }
};
const Hml = {
  ConsumeRt_Main: [
    0.55,
    0.775,
    1
  ],
  ConsumeRt_Sub_Lv0: [
    0.8,
    0.9,
    1
  ],
  ConsumeRt_Sub_Lv1: [
    0.7,
    0.85,
    1
  ],
  ConsumeRt_Sub_Lv2: [
    0.65,
    0.825,
    1
  ],
  ConsumeRt_Sub_Lv3: [
    0.6,
    0.8,
    1
  ],
  DamageRt_BombH: [
    0.5,
    0.75,
    1
  ],
  DamageRt_BombL: [
    0.6,
    0.8,
    1
  ],
  DamageRt_LineMarker: [
    0.5,
    0.75,
    1
  ],
  DamageRt_Shield: [
    0.5,
    0.75,
    1
  ],
  DamageRt_Sprinkler: [
    0.5,
    0.75,
    1
  ],
  Dying_AroundFrm: [
    30,
    60,
    90
  ],
  Dying_ChaseFrm: [
    90,
    180,
    270
  ],
  IncreaseRt_Special: [
    1.3,
    1.15,
    1
  ],
  InkRecoverFrm_Std: [
    220,
    410,
    600
  ],
  InkRecoverFrm_Stealth: [
    117,
    148.5,
    180
  ],
  MarkingTimeRt: [
    0.1,
    0.43,
    1
  ],
  MarkingTimeRt_Trap: [
    0.1,
    0.55,
    1
  ],
  MoveDownRt_PoisonMist: [
    0.5,
    0.75,
    1
  ],
  MoveVelRt_Shot: [
    1.25,
    1.125,
    1
  ],
  MoveVel_Human: [
    0.144,
    0.12,
    0.096
  ],
  MoveVel_Human_Fast: [
    0.144,
    0.124,
    0.104
  ],
  MoveVel_Human_Slow: [
    0.144,
    0.116,
    0.088
  ],
  MoveVel_Stealth: [
    0.24,
    0.216,
    0.192
  ],
  MoveVel_Stealth_Fast: [
    0.24,
    0.2208,
    0.2016
  ],
  MoveVel_Stealth_Slow: [
    0.24,
    0.216,
    0.1728
  ],
  OpInk_ArmorHP: [
    39,
    26,
    0
  ],
  OpInk_DamageLmt: [
    0.2,
    0.3,
    0.4
  ],
  OpInk_DamagePerFrame: [
    15e-4,
    225e-5,
    3e-3
  ],
  OpInk_JumpVel: [
    0.11,
    0.098,
    0.08
  ],
  OpInk_MoveVel: [
    0.0768,
    0.0557,
    0.024
  ],
  OpInk_MoveVel_Shot: [
    0.042,
    0.033,
    0.012
  ],
  OpInk_MoveVel_ShotK: [
    1,
    0.75,
    0.5
  ],
  Overwrite_ConsumeRt_Main: [
    -1,
    -1,
    -1
  ],
  Overwrite_MoveVelRt_Shot: [
    -1,
    -1,
    -1
  ],
  Somersault_MoveVelKd: [
    1,
    0.925,
    0.85
  ],
  SpecialGaugeRt_Restart: [
    1,
    0.8,
    0.5
  ],
  SuperJump_ChargeFrm: [
    20,
    35,
    80
  ],
  SuperJump_MoveFrm: [
    96.6,
    132.3,
    138
  ],
  WallJumpChargeFrm: [
    0,
    0,
    0
  ],
  ReduceJumpSwerveRate: [
    1,
    0.75,
    0
  ]
};
const infoHml = {
  Main,
  Sub,
  Special,
  Hml
};
const weaponParams = params.weapons;
const subParams = params.subs;
const weaponInfo = infoHml.Main;
const hmlData = infoHml.Hml;
class LeannyService {
  // sploosh-o-matic, rapid blaster, splat roller, splat charger, splat dulies, ink brush, heavy splatling, slosher, tenta brella, splatana wiper
  weaponIds = [0, 240, 1010, 2010, 5010, 1100, 4010, 3e3, 6010, 8010];
  allAPs = [0, 10, 13];
  skillAps = {};
  selectedWeaponName = "Blaster_LightLong_00";
  stats = [];
  printData = [];
  constructor() {
  }
  printEffect(effects, numOfAps, weaponId) {
    const data = {
      weaponId,
      APs: numOfAps,
      effects
    };
    this.printData.push(data);
  }
  calc(inputtedSkills, weaponName) {
    this.stats = [];
    this.prepInputtedSkills(inputtedSkills);
    this.selectedWeaponName = weaponName;
    Object.keys(this.skillAps).forEach((skillAp) => {
      switch (skillAp) {
        case "MainInk_Save":
          this.calcIsm();
          break;
        case "SubInk_Save":
          this.calcIss();
          break;
        case "InkRecovery_Up":
          this.calcIru();
          break;
        case "HumanMove_Up":
          this.calcRsu();
          break;
        case "SquidMove_Up":
          this.calcSsu();
          break;
      }
    });
    return this.stats;
  }
  prepInputtedSkills(inputtedSkills) {
    let inputtedSkillNames = [];
    let inputtedSkillObjs = [];
    inputtedSkills.forEach((inputtedSkill) => {
      if (inputtedSkillNames.includes(inputtedSkill.id)) {
        inputtedSkillObjs = inputtedSkillObjs.map((skillObj) => {
          if (skillObj.name === inputtedSkill.id) {
            const isMain = inputtedSkill.isMain ? 1 : 0;
            const isSub = inputtedSkill.isMain ? 0 : 1;
            skillObj.numOfMain += isMain;
            skillObj.numOfSubs += isSub;
          }
          return skillObj;
        });
      } else {
        inputtedSkillNames.push(inputtedSkill.id);
        const isMain = inputtedSkill.isMain ? 1 : 0;
        const isSub = inputtedSkill.isMain ? 0 : 1;
        inputtedSkillObjs.push({ name: inputtedSkill.id, numOfMain: isMain, numOfSubs: isSub });
      }
    });
    this.skillAps = {};
    inputtedSkillObjs.forEach((skillObj) => {
      const aps = this.getAPs(skillObj.numOfMain, skillObj.numOfSubs);
      this.skillAps[skillObj.name] = aps;
    });
  }
  getSelectedWeaponId() {
    return weaponInfo[this.selectedWeaponName].Id;
  }
  calcIsm() {
    const effectName = "MainInk_Save";
    const hml = hmlData["ConsumeRt_Main"];
    const APs = this.skillAps[effectName];
    const selectedWeaponId = this.getSelectedWeaponId();
    let inkConsume;
    switch (weaponParams[selectedWeaponId].WeaponName.split("_")[0]) {
      case "Roller":
        inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponVerticalSwingParam.InkConsume;
        break;
      case "Charger":
        inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponParam.InkConsumeFullCharge;
        break;
      case "Brush":
        inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponSwingParam.InkConsume;
        break;
      case "Shelter":
        inkConsume = weaponParams[selectedWeaponId].GameParameters.spl__WeaponShelterShotgunParam.InkConsume;
        break;
      case "Saber":
        inkConsume = weaponParams[selectedWeaponId].GameParameters.spl__WeaponSaberParam.ChargeParam.InkConsumeFullCharge;
        break;
      default:
        inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponParam.InkConsume;
        break;
    }
    const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
    const effects = [
      {
        name: "Max Number of Shots",
        value: parseFloat((1 / (result[0] * inkConsume)).toFixed(2)),
        // TODO: fetch inkConsume || InkConsumeFullCharge (charger)
        percent: parseFloat((result[1] * 100).toFixed(2))
      }
    ];
    this.stats.push({ name: effectName, effects });
    this.printEffect(effects, APs, this.selectedWeaponName);
    return this.printData;
  }
  calcIss() {
    const effectName = "SubInk_Save";
    const APs = this.skillAps[effectName];
    const selectedWeaponId = this.getSelectedWeaponId();
    let consumeLvl = 2;
    let inkConsume = 0.7;
    const weaponInfoArr = Object.values(weaponInfo);
    for (let obj of weaponInfoArr) {
      if (obj.Id === selectedWeaponId) {
        const subFullName = obj.SubWeapon.split(".");
        const subName = subFullName[0].split("/")[2];
        Object.keys(params.subs).forEach((subId) => {
          const sub = subParams[subId];
          if (sub.SubName === subName) {
            if ("SubWeaponSetting" in sub.GameParameters) {
              consumeLvl = sub.GameParameters.SubWeaponSetting.SubInkSaveLv ?? 2;
            }
            if ("WeaponParam" in sub.GameParameters) {
              inkConsume = sub.GameParameters.WeaponParam.InkConsume ?? 0.7;
            }
          }
        });
        break;
      }
    }
    const hml = hmlData["ConsumeRt_Sub_Lv" + consumeLvl.toString()];
    const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
    const effects = [
      {
        name: "Ink Consumption",
        value: parseFloat((result[0] * inkConsume * 100).toFixed(2)),
        percent: parseFloat((result[1] * 100).toFixed(2))
      }
    ];
    this.stats.push({ name: effectName, effects });
    this.printEffect(effects, APs, this.selectedWeaponName);
    return this.printData;
  }
  calcIru() {
    const effectName = "InkRecovery_Up";
    const hmlSquid = hmlData["InkRecoverFrm_Std"];
    const hmlHuman = hmlData["InkRecoverFrm_Stealth"];
    const APs = this.skillAps[effectName];
    const resultSquid = this.calculateAbilityEffect(APs, hmlSquid[0], hmlSquid[1], hmlSquid[2]);
    const resultHuman = this.calculateAbilityEffect(APs, hmlHuman[0], hmlHuman[1], hmlHuman[2]);
    const effects = [
      {
        name: "Recovery Time in Ink - Seconds",
        value: parseFloat((Math.ceil(resultSquid[0]) / 60).toFixed(2)),
        percent: parseFloat((resultSquid[1] * 100).toFixed(2))
      },
      {
        name: "Recovery Time Standing - Seconds",
        value: parseFloat((Math.ceil(resultHuman[0]) / 60).toFixed(2)),
        percent: parseFloat((resultHuman[1] * 100).toFixed(2))
      }
    ];
    this.stats.push({ name: effectName, effects });
    this.printEffect(effects, APs, this.selectedWeaponName);
    return this.printData;
  }
  calcRsu() {
    const effectName = "HumanMove_Up";
    const APs = this.skillAps[effectName];
    const selectedWeaponId = this.getSelectedWeaponId();
    const moveVel = weaponParams[selectedWeaponId].GameParameters.MainWeaponSetting.WeaponSpeedType ?? "Mid";
    const moveVelKey = `MoveVel_Human${moveVel !== "Mid" ? "_" + moveVel : ""}`;
    const hmlMoving = hmlData[moveVelKey];
    const gameParams = weaponParams[selectedWeaponId].GameParameters;
    const shootingVel = gameParams.WeaponParam ? gameParams.WeaponParam.MoveSpeed ?? gameParams.WeaponParam.MoveSpeedFullCharge : gameParams.spl__WeaponShelterShotgunParam ? gameParams.spl__WeaponShelterShotgunParam.MoveSpeed : null;
    const hmlShooting = !weaponParams[selectedWeaponId].WeaponName.includes("Spinner") ? hmlData["MoveVelRt_Shot"] : [
      gameParams.MainWeaponSetting.Overwrite_MoveVelRt_Shot_High,
      gameParams.MainWeaponSetting.Overwrite_MoveVelRt_Shot_Mid,
      gameParams.MainWeaponSetting.Overwrite_MoveVelRt_Shot_Low
    ];
    let effects = [];
    const resultMoving = this.calculateAbilityEffect(APs, hmlMoving[0], hmlMoving[1], hmlMoving[2]);
    const runSpeedEffect = {
      name: "Run Speed (DU/Frame)",
      value: parseFloat((resultMoving[0] * 10).toFixed(3)),
      percent: parseFloat((resultMoving[1] * 100).toFixed(2))
    };
    effects.push(runSpeedEffect);
    if (shootingVel !== null) {
      const resultShooting = this.calculateAbilityEffect(APs, hmlShooting[0], hmlShooting[1], hmlShooting[2]);
      const runSpeedEffectShooting = {
        name: "Run Speed (Shooting) (DU/Frame)",
        value: parseFloat((resultShooting[0] * shootingVel * 10).toFixed(3)),
        percent: parseFloat((resultShooting[1] * 100).toFixed(2))
      };
      effects.push(runSpeedEffectShooting);
    }
    this.stats.push({ name: effectName, effects });
    this.printEffect(effects, APs, this.selectedWeaponName);
    return this.printData;
  }
  // TODO add rainmaker?
  calcSsu() {
    const effectName = "SquidMove_Up";
    const APs = this.skillAps[effectName];
    const selectedWeaponId = this.getSelectedWeaponId();
    const moveVel = weaponParams[selectedWeaponId].GameParameters.MainWeaponSetting.WeaponSpeedType ?? "Mid";
    const moveVelKey = `MoveVel_Stealth${moveVel !== "Mid" ? "_" + moveVel : ""}`;
    const hml = hmlData[moveVelKey];
    const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
    const ns = 1;
    let effects = [];
    const swimSpeedEffect = {
      name: "Swim Speed (DU/Frame)",
      value: parseFloat((result[0] * ns * 10).toFixed(3)),
      percent: parseFloat((result[1] * 100).toFixed(2))
    };
    effects.push(swimSpeedEffect);
    this.stats.push({ name: effectName, effects });
    this.printEffect(effects, APs, this.selectedWeaponName);
    return this.printData;
  }
  calcScu() {
    const effectName = "IncreaseRt_Special";
    const hml = hmlData[effectName];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcSsv() {
    const effectName = "SpecialGaugeRt_Restart";
    const hml = hmlData[effectName];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcSpu() {
    const effectName = [
      "InkVacRadiusMin",
      "InkVacRadiusMax",
      "CrabTankSpecialTotalFrame",
      "TacticoolerPowerUpFrame",
      "BigBubblerMaxFieldHP",
      "BigBubblerMaxHP",
      "InkStormRainyFrame",
      "InkStormSpawnSpeedZSpecUp",
      "InkjetSpecialTotalFrame",
      "InkjetBurstPaintRadius",
      "InkjetDistanceDamageDistanceRate",
      "InkjetSplashAroundVelocityMin",
      "InkjetSplashAroundVelocityMax",
      "InkjetSplashAroundPaintRadius",
      "KillerWailLaserFrame",
      "TentaMissilesTargetIncircleRadius",
      "TentaMissilesBurstPaintRadius",
      "BooyahBombChargeRateAutoPerFrame",
      "WaveBreakerMaxFrame",
      "WaveBreakerMaxRadius",
      "ReefsliderDistanceDamageDistanceRate",
      "ReefsliderPaintRadius",
      "ReefsliderSplashAroundVelocityMin",
      "ReefsliderSplashAroundVelocityMax",
      "ReefsliderSplashAroundPaintRadius",
      "ZipcasterInkConsume_Hook",
      "ZipcasterInkConsume_PerSec",
      "TripleInkstrikeSpawnSpeedZSpecUp",
      "TrizookaSpecialDurationFrame",
      "TrizookaPaintRadius",
      "TrizookaDistanceDamageDistanceRate",
      "UltraStampSpecialDurationFrame"
    ];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcQrs() {
    const effectName = ["Dying_AroundFrm", "Dying_ChaseFrm"];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcQsj() {
    const effectName = ["SuperJump_ChargeFrm", "SuperJump_MoveFrm"];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcSubpu() {
    const effectName = [
      "BeakonJumpFrame",
      "CurlingZSpecUp",
      "FizzyZSpecUp",
      "BurstZSpecUp",
      "AutoZSpecUp-table",
      "SplatZSpecUp-table",
      "SuctionZSpecUp-table",
      "TorpedoZSpecUp-table",
      "AngleMarkingFrm-table",
      "AngleZSpecUp-table",
      "PointSensorMarkingFrm-table",
      "PointSensorZSpecUp-table",
      "ToxicMistZSpecUp-table",
      "SplashWallMaxHP-table",
      "SprinklerFirstFrm-table",
      "SprinklerSecondFrm-table",
      "MineDistance-table",
      "MineMarkingFrm-table",
      "MineDistanceDamageDistanceRate-table",
      "MineSensorRadius-table"
    ];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcIresistu() {
    const effectName = [
      "OpInk_ArmorHP-table",
      "OpInk_DamageLmt-table",
      "OpInk_DamagePerFrame-table",
      "OpInk_JumpVel-table",
      "OpInk_MoveVel-table",
      "OpInk_MoveVel_Shot-table",
      "OpInk_MoveVel_ShotK-table"
    ];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcSru() {
    const effectName = [
      "DamageRt_BombH-table",
      "DamageRt_BombL-table",
      "DamageRt_LineMarker-table",
      "DamageRt_Shield-table",
      "DamageRt_Sprinkler-table",
      "MarkingTimeRt-table",
      "MarkingTimeRt_Trap-table",
      "MoveDownRt_PoisonMist-table"
    ];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcIta() {
    const effectName = [
      "Somersault_MoveVelKd-table",
      "WallJumpChargeFrm-table",
      "ReduceJumpSwerveRate-table",
      "ReduceJumpSwerveRate-Blaster-table"
    ];
    const hml = hmlData[effectName[0]];
    this.allAPs.forEach((APs) => {
      const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
      console.log(`APs: ${APs} - ${result}`);
    });
  }
  calcOpg() {
    this.calcRsu();
    this.calcSsu();
    this.calcIresistu();
  }
  calcLde() {
    this.calcIsm();
    this.calcIss();
    this.calcIru();
  }
  calcCbk() {
    this.calcIsm();
    this.calcIss();
    this.calcIru();
    this.calcRsu();
    this.calcSsu();
    this.calcScu();
  }
  calcNjs() {
  }
  calcRsp() {
  }
  calcOjs() {
  }
  calcDrl() {
  }
  calculateAbilityEffect(APs, high, mid, low, ninjaSquid = false) {
    var percentage = this.getPercentage(APs);
    if (ninjaSquid)
      percentage *= 0.8;
    var slope = this.getSlope(high, mid, low);
    var lerpN = this.getLerpN(percentage / 100, slope);
    var result = this.getResult(high, low, lerpN);
    if (ninjaSquid)
      result *= 0.9;
    return [result, lerpN];
  }
  // main, sub to AP points
  getAPs(numOfMains, numOfSubs) {
    return 10 * numOfMains + 3 * numOfSubs;
  }
  // percent difference
  getPercentage(AP) {
    return Math.min(3.3 * AP - 0.027 * Math.pow(AP, 2), 100);
  }
  // slope
  getSlope(high, mid, low) {
    if (mid === low)
      return 0;
    return (mid - low) / (high - low);
  }
  // lerpN
  getLerpN(percentage, slope) {
    if (parseInt(slope.toFixed(3)) == 0.5 || percentage === 0 || percentage === 1) {
      return percentage;
    } else {
      return Math.pow(
        Math.E,
        -1 * (Math.log(percentage) * Math.log(slope) / Math.log(2))
      );
    }
  }
  // result
  getResult(high, low, lerpN) {
    return low + (high - low) * lerpN;
  }
  getHML_MWPUG(data, key) {
    var high = 0;
    var mid = 0;
    var low = 0;
    if (data[key + "_MWPUG_High"] === 0 || data[key + "_MWPUG_High"] === 0 || data["Stand_" + key + "_MWPUG_High"] === 0 || data["Jump_" + key + "_MWPUG_High"] === 0 || data["Stand_" + key + "_MWPUG_High"] === 0 || data["Jump_" + key + "_MWPUG_High"] === 0) {
      high = 0;
    } else {
      high = data[key + "_MWPUG_High"] || data["Stand_" + key + "_MWPUG_High"] || data["Jump_" + key + "_MWPUG_High"];
    }
    if (data[key + "_MWPUG_Mid"] === 0 || data[key + "_MWPUG_Mid"] === 0 || data["Stand_" + key + "_MWPUG_Mid"] === 0 || data["Jump_" + key + "_MWPUG_Mid"] === 0 || data["Stand_" + key + "_MWPUG_Mid"] === 0 || data["Jump_" + key + "_MWPUG_Mid"] === 0) {
      mid = 0;
    } else {
      mid = data[key + "_MWPUG_Mid"] || data["Stand_" + key + "_MWPUG_Mid"] || data["Jump_" + key + "_MWPUG_Mid"];
    }
    if (data[key] === 0 || data[key] === 0 || data["Stand_" + key] === 0 || data["Jump_" + key] === 0 || data["Stand_" + key] === 0 || data["Jump_" + key] === 0) {
      low = 0;
    } else {
      low = data[key] || data["Stand_" + key] || data["Jump_" + key] || 1;
    }
    return [high, mid, low];
  }
  // convert AP to main and sub points
  getMainSubPoints(ap) {
    var main = 0;
    var sub = 0;
    while (ap >= 10) {
      main++;
      ap -= 10;
    }
    sub = ap / 3;
    return [main, sub];
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const LeannyService$1 = new LeannyService();
  let skillBubbles = data.skillBubbles;
  let selectedHeadGear = data.selectedHeadGear;
  let selectedClothesGear = data.selectedClothesGear;
  let selectedShoesGear = data.selectedShoesGear;
  let selectedGears = [selectedHeadGear, selectedClothesGear, selectedShoesGear];
  const gearTypes = ["head", "clothes", "shoes"];
  let selectedWeapon = data.selectedWeapon;
  let stats = LeannyService$1.calc(skillBubbles, selectedWeapon.id);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<form action="${""}" method="${"post"}" class="${"w-full md:w-3/4 lg:w-2/3 px-4 md:px-0 md:mx-auto"}"><div class="${"mb-8"}"><h2 class="${"text-2xl font-bold text-center"}">Create Loadout</h2></div>

    <div class="${"grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4"}">
        <div class="${"mb-4"}"><label for="${"loadout-title"}" class="${"block"}">Loadout title:</label>
            <input type="${"text"}" name="${"loadout-title"}" id="${"loadout-title"}" class="${"w-full rounded focus:ring-primary-400 focus:border-primary-400"}"></div>

        
        <div class="${"row-start-2 mb-4 md:mb-0"}"><label for="${"loadout-desc"}" class="${"block"}">Loadout description:</label>
            <textarea name="${"loadout-desc"}" id="${"loadout-desc"}" class="${"w-full rounded focus:ring-primary-400 focus:border-primary-400"}"></textarea></div>

        
        <div class="${"row-span-2"}"><label for="${"mode"}" class="${"block"}">Game mode:</label>

            <div><input type="${"checkbox"}" name="${"loadout-mode-rm"}" value="${"1"}" class="${"rounded-sm text-secondary-700 focus:ring-primary-400"}">
                <label for="${"loadout-mode-rm"}">Rainmaker</label></div>

            <div><input type="${"checkbox"}" name="${"loadout-mode-cb"}" value="${"1"}" class="${"rounded-sm text-secondary-700 focus:ring-primary-400"}">
                <label for="${"loadout-mode-cb"}">Clam Blitz</label></div>

            <div><input type="${"checkbox"}" name="${"loadout-mode-sz"}" value="${"1"}" class="${"rounded-sm text-secondary-700 focus:ring-primary-400"}">
                <label for="${"loadout-mode-sz"}">Splat Zones</label></div>

            <div><input type="${"checkbox"}" name="${"loadout-mode-tc"}" value="${"1"}" class="${"rounded-sm text-secondary-700 focus:ring-primary-400"}">
                <label for="${"loadout-mode-tc"}">Tower Control</label></div></div></div>

    
    <div class="${"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"}">
        <div>
            ${each(gearTypes, (gearType, i) => {
    return `<div class="${"w-full pb-6"}">${data.userGearsSorted[i].length > 0 ? `
                        <label for="${"gear-" + escape(gearType, true) + "-id"}" class="${"block"}">${escape(gearType)} gear</label>
                        ${validate_component(SearchSelect, "SearchSelect").$$render(
      $$result,
      {
        itemList: data.userGearsSorted[i],
        selectedItemId: selectedGears[i]?.id,
        selectedItemName: selectedGears[i]?.name,
        itemType: gearType
      },
      {},
      {}
    )}
                    
                        
                        <div class="${"p-4"}"><img src="${"/gears/" + escape(selectedGears[i]?.name, true) + ".png"}"${add_attribute("alt", selectedGears[i]?.localizedName, 0)} class="${"gear-img mx-auto"}"></div>

                        
                        <div class="${"flex justify-evenly items-baseline"}">${validate_component(SkillBubble, "SkillBubble").$$render(
      $$result,
      {
        skill: {
          number: 1,
          id: selectedGears[i]?.skill1.name,
          name: selectedGears[i]?.skill1.localizedName,
          isMain: true
        }
      },
      {},
      {}
    )}
                            ${validate_component(SkillBubble, "SkillBubble").$$render(
      $$result,
      {
        skill: {
          number: 2,
          id: selectedGears[i]?.skill2.name,
          name: selectedGears[i]?.skill2.localizedName,
          isMain: false
        }
      },
      {},
      {}
    )}
                            ${validate_component(SkillBubble, "SkillBubble").$$render(
      $$result,
      {
        skill: {
          number: 3,
          id: selectedGears[i]?.skill3.name,
          name: selectedGears[i]?.skill3.localizedName,
          isMain: false
        }
      },
      {},
      {}
    )}
                            ${validate_component(SkillBubble, "SkillBubble").$$render(
      $$result,
      {
        skill: {
          number: 4,
          id: selectedGears[i]?.skill4.name,
          name: selectedGears[i]?.skill4.localizedName,
          isMain: false
        }
      },
      {},
      {}
    )}
                        </div>` : `<p>No ${escape(gearType)} gears yet...</p>`}
                </div>`;
  })}

            
            <input type="${"submit"}" value="${"Create"}" class="${"p-2 bg-transparent text-primary-700 rounded-md border border-primary-700 mb-2 cursor-pointer transition-colors hover:bg-primary-500 hover:text-white hover:border-primary-500"}"></div>

        
        <div><div class="${"mb-6"}">
                <div><h4>Weapon stats:</h4>
                    ${validate_component(SearchSelect, "SearchSelect").$$render(
    $$result,
    {
      itemList: data.weapons,
      itemType: "weapon",
      selectedItemId: selectedWeapon.id,
      selectedItemName: selectedWeapon.name
    },
    {},
    {}
  )}

                    
                    <div id="${"weapon-container"}" class="${"grid grid-cols-1 grid-cols-2 gap-x-4"}"><img id="${"weapon-img"}" class="${"justify-self-center"}" src="${"/weapon_flat/Path_Wst_" + escape(selectedWeapon.id, true) + ".png"}"${add_attribute("alt", selectedWeapon.name, 0)} width="${"128px"}" height="${"128px"}">
                        <div class="${"grid grid-cols-2 items-center gap-x-2"}"><img id="${"sub-img"}" src="${"/subspe/Wsb_" + escape(selectedWeapon.subId, true) + "00.png"}"${add_attribute("alt", selectedWeapon.subName, 0)} class="${"justify-self-center"}" width="${"64px"}" height="${"64px"}">
                            <img id="${"special-img"}" src="${"/subspe/Wsp_" + escape(selectedWeapon.specialId, true) + "00.png"}"${add_attribute("alt", selectedWeapon.specialName, 0)} class="${"justify-self-center"}" width="${"64px"}" height="${"64px"}"></div></div></div>

                
                <div><h4>Loadout stats:</h4>

                    ${stats.length > 0 ? `${each(stats, (stat) => {
    return `
                            <div class="${"flex justify-start items-center gap-1 mt-4"}"><img src="${"/skills/" + escape(stat.name, true) + ".png"}"${add_attribute("alt", stat.name, 0)} width="${"32px"}">

                                <h5>${escape(stat.name)}</h5></div>

                            
                            <div class="${"grid grid-cols-2 gap-2 items-end"}">${each(stat.effects, (effect) => {
      return `${validate_component(EffectStat, "EffectStat").$$render($$result, { effect }, {}, {})}`;
    })}
                            </div>`;
  })}` : ``}</div></div></div></div></form>`;
});
export {
  Page as default
};
