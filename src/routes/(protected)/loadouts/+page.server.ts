import { db } from "$lib/server/database";
import type { PageServerLoad } from "./$types";

import _translations from "$lib/Leanny/translations.json";
import _weapons from "$lib/Leanny/latest/weapons.json";

interface loadoutObj {
    id: number,
    title: string | null,
    description: string | null,
    rm: boolean,
    cb: boolean,
    sz: boolean,
    tc: boolean,
    weaponName: string,
    weaponLocalName: string,
    subName: string,
    subLocalName: string,
    specialName: string,
    specialLocalName: string,
    createdAt: Date,
    updatedAt: Date,
    gears: {
        skill1: string,
        skill2: string,
        skill3: string,
        skill4: string,
        gear: string
    }[] | null[]
};

export const load: PageServerLoad = async ({locals}) => {
    const weaponLocal: {[key: string]: string} = _translations.USen.WeaponName_Main;
    const subLocal: {[key: string]: string} = _translations.USen.WeaponName_Sub;
    const specialLocal: {[key: string]: string} = _translations.USen.WeaponName_Special;
    
    const weapons = Object.entries(_weapons);
    const weaponNames = Object.keys(_weapons);


    // get user's loadouts, join gears
    const loadoutsWithGears = await db.loadout.findMany({
        where: {
            userId: locals.id
        },
        include: {
            gears: {
                select: {
                    gear: {
                        select: {
                            skill1: true,
                            skill2: true,
                            skill3: true,
                            skill4: true,
                            gear: true
                        }
                    },
                    gearType: true
                },
            }
        },
        orderBy: {id: 'desc'}
    })

    // map out the loadout data
    let loadouts: loadoutObj[] = [];
    loadoutsWithGears.forEach(loadout => {
        let gears: {}[] | null[] = [null, null, null];

        // get loadout's gear data to map
        loadout.gears.forEach(gear => {
            const gearObj = {
                skill1: gear.gear.skill1,
                skill2: gear.gear.skill2,
                skill3: gear.gear.skill3,
                skill4: gear.gear.skill4,
                gear: gear.gear.gear
            };

            if (gear.gearType === 'H') {
                gears.splice(0, 1, gearObj);
            }
            else if (gear.gearType === 'C') {
                gears.splice(1, 1, gearObj);
            }
            else if (gear.gearType === 'S') {
                gears.splice(2, 1, gearObj);
            }
        });
        
        // get loadout's weapon data to map
        let weaponObj = {
            weaponName: loadout.weapon,
            weaponLocalName: '',
            subName: '',
            subLocalName: '',
            specialName: '',
            specialLocalName: '',
        };
        const weaponIndex = weaponNames.findIndex(weaponName => loadout.weapon === weaponName);
        if (weaponIndex !== -1) {
            weaponObj = {
                weaponName: loadout.weapon,
                weaponLocalName: weaponLocal[loadout.weapon],
                subName: weapons[weaponIndex][1].Sub,
                subLocalName: subLocal[weapons[weaponIndex][1].Sub],
                specialName: weapons[weaponIndex][1].Special,
                specialLocalName: specialLocal[weapons[weaponIndex][1].Special],
            }
        }

        // map loadout data
        loadouts.push({
            id: loadout.id,
            title: loadout.title,
            description: loadout.description,
            rm: loadout.rm,
            cb: loadout.cb,
            sz: loadout.sz,
            tc: loadout.tc,
            ...weaponObj,
            createdAt: loadout.createdAt,
            updatedAt: loadout.updatedAt,
            gears: gears
        });
    });


    return {
        locals,
        loadouts,
    }
};
