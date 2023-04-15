import params from '$lib/Leanny/latest/params.json';
import infoHml from '$lib/Leanny/latest/infoHml.json';


const version = 210;

const weaponParams: {[index: string]: any} = params.weapons;
const subParams: {[index: string]: any} = params.subs;
const specialParams: {[index: string]: any} = params.specials;

const weaponInfo: {[key: string]: any} = infoHml.Main;
const subInfo = infoHml.Sub;
const specialInfo = infoHml.Special;
const hmlData: {[index: string]: number[]} = infoHml.Hml;

export interface effect {
    name: string,
    value: number,
    percent: number
};

export interface stat {
    name: string,
    effects: effect[]
}

export class LeannyService {
    // sploosh-o-matic, rapid blaster, splat roller, splat charger, splat dulies, ink brush, heavy splatling, slosher, tenta brella, splatana wiper
    weaponIds = [0, 240, 1010, 2010, 5010, 1100, 4010, 3000, 6010, 8010];
    allAPs = [0, 10, 13];

    skillAps: {[key: string]: number} = {};
    selectedWeaponName: string = 'Blaster_LightLong_00';
    stats: stat[] = [];

    printData: {weaponId: string, APs: number, effects: any}[] = [];
    
    constructor() {
        // power ups
        // this.calcIsm();
        // this.calcIss();
        // this.calcIru();
        // this.calcRsu();
        // this.calcSsu();
    }

    printEffect(effects: any, numOfAps: number, weaponId: string) {
        const data = {
            weaponId: weaponId,
            APs: numOfAps,
            effects: effects
        };
        this.printData.push(data);
    }

    calc(inputtedSkills: {id: string, isMain: boolean}[], weaponName: string) {
        // reset stats
        this.stats = [];        

        // get APs from inputted skills
        this.prepInputtedSkills(inputtedSkills);
        this.selectedWeaponName = weaponName;

        Object.keys(this.skillAps).forEach(skillAp => {
            switch (skillAp) {
                case 'MainInk_Save':
                    this.calcIsm();
                    break;
            
                case 'SubInk_Save':
                    this.calcIss();
                    break;
            
                case 'InkRecovery_Up':
                    this.calcIru();
                    break;
            
                case 'HumanMove_Up':
                    this.calcRsu();
                    break;
            
                case 'SquidMove_Up':
                    this.calcSsu();
                    break;
            
                default:
                    break;
            }
        });

        return this.stats;
    }

    prepInputtedSkills(inputtedSkills: {id: string, isMain: boolean}[]) {
        // map the number of mains and subs per inputted skill
        let inputtedSkillNames: string[] = [];
        let inputtedSkillObjs: {
            name: string,
            numOfMain: number,
            numOfSubs: number
        }[] = [];
        inputtedSkills.forEach(inputtedSkill => {
            // if duplicate inputted skill, add on
            if (inputtedSkillNames.includes(inputtedSkill.id)) {
                inputtedSkillObjs = inputtedSkillObjs.map(skillObj => {
                    if (skillObj.name === inputtedSkill.id) {
                        const isMain = inputtedSkill.isMain ? 1 : 0;
                        const isSub = inputtedSkill.isMain ? 0 : 1;

                        skillObj.numOfMain += isMain;
                        skillObj.numOfSubs += isSub;
                    }

                    return skillObj;
                });
            }
            // else record the value and push
            else {
                inputtedSkillNames.push(inputtedSkill.id);

                const isMain = inputtedSkill.isMain ? 1 : 0;
                const isSub = inputtedSkill.isMain ? 0 : 1;
                inputtedSkillObjs.push({name: inputtedSkill.id, numOfMain: isMain, numOfSubs: isSub});
            }
        });

        // get APs per inputted skill
        inputtedSkillObjs.forEach(skillObj => {
            const aps = this.getAPs(skillObj.numOfMain, skillObj.numOfSubs);
            
            this.skillAps[skillObj.name] = aps;
            // this.skillAps.push({[skillObj.name]: aps});
        });
    }

    getSelectedWeaponId(): number {
        return weaponInfo[this.selectedWeaponName].Id;
    }

    calcIsm() {
        const effectName: string = 'MainInk_Save';
        const hml = hmlData['ConsumeRt_Main'];
        const APs = this.skillAps[effectName];
        const selectedWeaponId = this.getSelectedWeaponId();

        let inkConsume: number;
        switch (weaponParams[selectedWeaponId].WeaponName.split('_')[0]) {
            case 'Roller':
                inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponVerticalSwingParam.InkConsume;
                break;
            case 'Charger':
                inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponParam.InkConsumeFullCharge;
                break;
            case 'Brush':
                inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponSwingParam.InkConsume;
                break;
            case 'Shelter':
                inkConsume = weaponParams[selectedWeaponId].GameParameters.spl__WeaponShelterShotgunParam.InkConsume; // shots TODO: nonextistant for 6000
                // inkConsume = weaponParams[selectedWeaponId].GameParameters.spl__WeaponShelterCanopyParam.InkConsumeUmbrella; // shield launches
                break;
            case 'Saber':
                inkConsume = weaponParams[selectedWeaponId].GameParameters.spl__WeaponSaberParam.ChargeParam.InkConsumeFullCharge;
                // inkConsume = weaponParams[selectedWeaponId].GameParameters.spl__WeaponSaberParam.SwingParam.InkConsume; // TODO enable both
                break;
            default:
                inkConsume = weaponParams[selectedWeaponId].GameParameters.WeaponParam.InkConsume;
                break;
        }

        const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);        
        const effects = [
            {
                name: 'Max Number of Shots',
                value: parseFloat((1.0 / (result[0] * inkConsume)).toFixed(2)), // TODO: fetch inkConsume || InkConsumeFullCharge (charger)
                percent: parseFloat((result[1] * 100).toFixed(2)),
            },
        ];

        this.stats.push({name: effectName, effects: effects});
        this.printEffect(effects, APs, this.selectedWeaponName);

        return this.printData;
    }

    calcIss() {
        const effectName: string = 'SubInk_Save';
        const APs = this.skillAps[effectName];
        const selectedWeaponId = this.getSelectedWeaponId();

        let consumeLvl = 2;
        let inkConsume = 0.7;

        const weaponInfoArr = Object.values(weaponInfo);
        for (let obj of weaponInfoArr) {
            if (obj.Id === selectedWeaponId) {
                const subFullName = obj.SubWeapon.split('.');
                const subName = subFullName[0].split('/')[2];

                Object.keys(params.subs).forEach(subId => {
                    const sub = subParams[subId];
                    
                    if (sub.SubName === subName) {
                        if ('SubWeaponSetting' in sub.GameParameters) {
                            consumeLvl = sub.GameParameters.SubWeaponSetting.SubInkSaveLv ?? 2;
                        }

                        if ('WeaponParam' in sub.GameParameters) {
                            inkConsume = sub.GameParameters.WeaponParam.InkConsume ?? 0.7;
                        }

                    }
                });
                break;
            }
        };

        const hml = hmlData['ConsumeRt_Sub_Lv' + consumeLvl.toString()];

        const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
        const effects = [
            {
                name: 'Ink Consumption',
                value: parseFloat((result[0] * inkConsume * 100).toFixed(2)),
                percent: parseFloat((result[1] * 100).toFixed(2)),
            },
        ];

        this.stats.push({name: effectName, effects: effects});
        this.printEffect(effects, APs, this.selectedWeaponName);

        return this.printData;
    }

    calcIru() {
        const effectName = 'InkRecovery_Up';
        const hmlSquid = hmlData['InkRecoverFrm_Std'];
        const hmlHuman = hmlData['InkRecoverFrm_Stealth'];
        const APs = this.skillAps[effectName];

        const resultSquid = this.calculateAbilityEffect(APs, hmlSquid[0], hmlSquid[1], hmlSquid[2]);
        const resultHuman = this.calculateAbilityEffect(APs, hmlHuman[0], hmlHuman[1], hmlHuman[2]);
        
        const effects = [
            {
                name: 'Recovery Time in Ink - Seconds',
                value: parseFloat((Math.ceil(resultSquid[0]) / 60).toFixed(2)),
                percent: parseFloat((resultSquid[1] * 100).toFixed(2)),
            },
            {
                name: 'Recovery Time Standing - Seconds',
                value: parseFloat((Math.ceil(resultHuman[0]) / 60).toFixed(2)),
                percent: parseFloat((resultHuman[1] * 100).toFixed(2)),
            }
        ];

        this.stats.push({name: effectName, effects: effects});
        this.printEffect(effects, APs, this.selectedWeaponName);

        return this.printData;
    }

    calcRsu() {
        const effectName: string = 'HumanMove_Up';
        const APs = this.skillAps[effectName];
        const selectedWeaponId = this.getSelectedWeaponId();

        // run speed
        const moveVel = weaponParams[selectedWeaponId].GameParameters.MainWeaponSetting.WeaponSpeedType ?? 'Mid';
        const moveVelKey = `MoveVel_Human${(moveVel !== 'Mid') ? '_' + moveVel : ''}`;
        const hmlMoving = hmlData[moveVelKey];
        
        // run speed shooting
        const gameParams = weaponParams[selectedWeaponId].GameParameters;
        const shootingVel = (gameParams.WeaponParam) 
            ? gameParams.WeaponParam.MoveSpeed ??
                gameParams.WeaponParam.MoveSpeedFullCharge
            : (gameParams.spl__WeaponShelterShotgunParam)
                ? gameParams.spl__WeaponShelterShotgunParam.MoveSpeed 
                : null
        const hmlShooting = (!(weaponParams[selectedWeaponId].WeaponName.includes('Spinner')))
            ? hmlData['MoveVelRt_Shot']
            : [
                gameParams.MainWeaponSetting.Overwrite_MoveVelRt_Shot_High,
                gameParams.MainWeaponSetting.Overwrite_MoveVelRt_Shot_Mid,
                gameParams.MainWeaponSetting.Overwrite_MoveVelRt_Shot_Low,
            ];

        let effects = [];
            
        // run speed
        const resultMoving = this.calculateAbilityEffect(APs, hmlMoving[0], hmlMoving[1], hmlMoving[2]);
        const runSpeedEffect = {
            name: 'Run Speed (DU/Frame)',
            value: parseFloat((resultMoving[0] * 10).toFixed(3)),
            percent: parseFloat((resultMoving[1] * 100).toFixed(2))
        };
        effects.push(runSpeedEffect);

        // run speed shooting (if applicable)
        if (shootingVel !== null) {
            const resultShooting = this.calculateAbilityEffect(APs, hmlShooting[0], hmlShooting[1], hmlShooting[2]);
            const runSpeedEffectShooting = {
                name: 'Run Speed (Shooting) (DU/Frame)',
                value: parseFloat((resultShooting[0] * shootingVel * 10).toFixed(3)),
                percent: parseFloat((resultShooting[1] * 100).toFixed(2))
            };
            effects.push(runSpeedEffectShooting);
        }

        this.stats.push({name: effectName, effects: effects});
        this.printEffect(effects, APs, this.selectedWeaponName);

        return this.printData;
    }

    // TODO add rainmaker?
    calcSsu() {
        const effectName: string = 'SquidMove_Up';
        const APs = this.skillAps[effectName];
        const selectedWeaponId = this.getSelectedWeaponId();

        const moveVel = weaponParams[selectedWeaponId].GameParameters.MainWeaponSetting.WeaponSpeedType ?? 'Mid';
        const moveVelKey = `MoveVel_Stealth${(moveVel !== 'Mid') ? '_' + moveVel : ''}`;
        const hml = hmlData[moveVelKey];

        const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
        const ns = (false) ? 0.9 : 1; // TODO handle ninja squid
        let effects = [];
    
        const swimSpeedEffect = {
            name: 'Swim Speed (DU/Frame)',
            value: parseFloat((result[0] * ns * 10).toFixed(3)),
            percent: parseFloat((result[1] * 100).toFixed(2)),
        };
        effects.push(swimSpeedEffect);

        this.stats.push({name: effectName, effects: effects});
        this.printEffect(effects, APs, this.selectedWeaponName);

        return this.printData;
    }

    calcScu() {
        const effectName = 'IncreaseRt_Special';
        const hml = hmlData[effectName];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcSsv() {
        const effectName = 'SpecialGaugeRt_Restart';
        const hml = hmlData[effectName];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcSpu() {
        const effectName = [
            'InkVacRadiusMin',
            'InkVacRadiusMax',
            'CrabTankSpecialTotalFrame',
            'TacticoolerPowerUpFrame',
            'BigBubblerMaxFieldHP',
            'BigBubblerMaxHP',
            'InkStormRainyFrame',
            'InkStormSpawnSpeedZSpecUp',
            'InkjetSpecialTotalFrame',
            'InkjetBurstPaintRadius',
            'InkjetDistanceDamageDistanceRate',
            'InkjetSplashAroundVelocityMin',
            'InkjetSplashAroundVelocityMax',
            'InkjetSplashAroundPaintRadius',
            'KillerWailLaserFrame',
            'TentaMissilesTargetIncircleRadius',
            'TentaMissilesBurstPaintRadius',
            'BooyahBombChargeRateAutoPerFrame',
            'WaveBreakerMaxFrame',
            'WaveBreakerMaxRadius',
            'ReefsliderDistanceDamageDistanceRate',
            'ReefsliderPaintRadius',
            'ReefsliderSplashAroundVelocityMin',
            'ReefsliderSplashAroundVelocityMax',
            'ReefsliderSplashAroundPaintRadius',
            'ZipcasterInkConsume_Hook',
            'ZipcasterInkConsume_PerSec',
            'TripleInkstrikeSpawnSpeedZSpecUp',
            'TrizookaSpecialDurationFrame',
            'TrizookaPaintRadius',
            'TrizookaDistanceDamageDistanceRate',
            'UltraStampSpecialDurationFrame'
        ];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcQrs() {
        const effectName = ['Dying_AroundFrm','Dying_ChaseFrm'];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcQsj() {
        const effectName = ['SuperJump_ChargeFrm','SuperJump_MoveFrm'];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcSubpu() {
        const effectName = [
            'BeakonJumpFrame',
            'CurlingZSpecUp',
            'FizzyZSpecUp',
            'BurstZSpecUp',
            'AutoZSpecUp-table',
            'SplatZSpecUp-table',
            'SuctionZSpecUp-table',
            'TorpedoZSpecUp-table',
            'AngleMarkingFrm-table',
            'AngleZSpecUp-table',
            'PointSensorMarkingFrm-table',
            'PointSensorZSpecUp-table',
            'ToxicMistZSpecUp-table',
            'SplashWallMaxHP-table',
            'SprinklerFirstFrm-table',
            'SprinklerSecondFrm-table',
            'MineDistance-table',
            'MineMarkingFrm-table',
            'MineDistanceDamageDistanceRate-table',
            'MineSensorRadius-table',
        ];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcIresistu() {
        const effectName = [
            'OpInk_ArmorHP-table',
            'OpInk_DamageLmt-table',
            'OpInk_DamagePerFrame-table',
            'OpInk_JumpVel-table',
            'OpInk_MoveVel-table',
            'OpInk_MoveVel_Shot-table',
            'OpInk_MoveVel_ShotK-table',
        ];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcSru() {
        const effectName = [
            'DamageRt_BombH-table',
            'DamageRt_BombL-table',
            'DamageRt_LineMarker-table',
            'DamageRt_Shield-table',
            'DamageRt_Sprinkler-table',
            'MarkingTimeRt-table',
            'MarkingTimeRt_Trap-table',
            'MoveDownRt_PoisonMist-table',
        ];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcIta() {
        const effectName = [
            'Somersault_MoveVelKd-table',
            'WallJumpChargeFrm-table',
            'ReduceJumpSwerveRate-table',
            'ReduceJumpSwerveRate-Blaster-table',
        ];
        const hml = hmlData[effectName[0]];
        this.allAPs.forEach((APs) => {
            const result = this.calculateAbilityEffect(APs, hml[0], hml[1], hml[2]);
            console.log(`APs: ${APs} - ${result}`);
        });
    }

    calcOpg() {
        this.calcRsu(); // 30ap
        this.calcSsu(); // 30ap
        this.calcIresistu(); // 30ap
    }

    calcLde() {
        this.calcIsm(); // depends...
        this.calcIss(); // depends...
        this.calcIru(); // depends...
    }

    calcCbk() {
        this.calcIsm(); // 10ap
        this.calcIss(); // 10ap
        this.calcIru(); // 10ap
        this.calcRsu(); // 10ap
        this.calcSsu(); // 10ap
        this.calcScu(); // 10ap
    }

    calcNjs() {
        // ssu -10%
    }

    calcRsp() {
        // ...
    }

    calcOjs() {
        // TODO
    }

    calcDrl() {
        // TODO
    }







    calculateAbilityEffect(
        APs: number,
        high: number,
        mid: number,
        low: number,
        ninjaSquid = false
        ) {
        var percentage = this.getPercentage(APs);        
        if (ninjaSquid) percentage *= 0.8;
        var slope = this.getSlope(high, mid, low);
        var lerpN = this.getLerpN(percentage / 100, slope);
        var result = this.getResult(high, low, lerpN);
        if (ninjaSquid) result *= 0.9;

        return [result, lerpN];
    }

    // main, sub to AP points
    getAPs(numOfMains: number, numOfSubs: number) {
        return (10 * numOfMains) + (3 * numOfSubs);
    }

    // percent difference
    getPercentage(AP: number) {
        return Math.min(3.3 * AP - 0.027 * Math.pow(AP, 2), 100);
    }

    // slope
    getSlope(high: number, mid: number, low: number) {
        if (mid === low) return 0;

        return (mid - low) / (high - low);
    }

    // lerpN
    getLerpN(percentage: number, slope: number) {
        if (
            parseInt(slope.toFixed(3)) == 0.5 ||
            percentage === 0.0 ||
            percentage === 1.0
        ) {
            return percentage;
        } else {
            // slope != 0.5
            return Math.pow(
                Math.E,
                -1 * ((Math.log(percentage) * Math.log(slope)) / Math.log(2))
            );
        }
    }

    // result
    getResult(high: number, low: number, lerpN: number) {
        return low + (high - low) * lerpN;
    }

    getHML_MWPUG(data: any, key: string) {
        var high = 0;
        var mid = 0;
        var low = 0;

        if (
            data[key + '_MWPUG_High'] === 0 ||
            data[key + '_MWPUG_High'] === 0.0 ||
            data['Stand_' + key + '_MWPUG_High'] === 0 ||
            data['Jump_' + key + '_MWPUG_High'] === 0 ||
            data['Stand_' + key + '_MWPUG_High'] === 0.0 ||
            data['Jump_' + key + '_MWPUG_High'] === 0.0
        ) {
            high = 0.0;
        } else {
            high =
            data[key + '_MWPUG_High'] ||
            data['Stand_' + key + '_MWPUG_High'] ||
            data['Jump_' + key + '_MWPUG_High'];
        }

        if (
            data[key + '_MWPUG_Mid'] === 0 ||
            data[key + '_MWPUG_Mid'] === 0.0 ||
            data['Stand_' + key + '_MWPUG_Mid'] === 0 ||
            data['Jump_' + key + '_MWPUG_Mid'] === 0 ||
            data['Stand_' + key + '_MWPUG_Mid'] === 0.0 ||
            data['Jump_' + key + '_MWPUG_Mid'] === 0.0
        ) {
            mid = 0.0;
        } else {
            mid =
            data[key + '_MWPUG_Mid'] ||
            data['Stand_' + key + '_MWPUG_Mid'] ||
            data['Jump_' + key + '_MWPUG_Mid'];
        }

        if (
            data[key] === 0 ||
            data[key] === 0.0 ||
            data['Stand_' + key] === 0 ||
            data['Jump_' + key] === 0 ||
            data['Stand_' + key] === 0.0 ||
            data['Jump_' + key] === 0.0
        ) {
            low = 0.0;
        } else {
            low = data[key] || data['Stand_' + key] || data['Jump_' + key] || 1.0;
        }

        return [high, mid, low];
    }

    // convert AP to main and sub points
    getMainSubPoints(ap: number) {
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