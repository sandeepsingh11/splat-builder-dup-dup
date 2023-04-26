import type { PageServerLoad } from "./$types";
import _translations from "$lib/Leanny/translations.json";
import { db } from "$lib/server/database";

type userGear = {
    id: string,
    name: string,
    localizedName: string,
    skill1: skill,
    skill2: skill,
    skill3: skill,
    skill4: skill,
}

type skill = {
    name: string,
    localizedName: string
}

type searchSelectObj = {
    id: string,
    name: string
}

export const load: PageServerLoad = async ({ locals }) => {
    const localization = _translations['USen'];
    const headLocalization: {[key: string]: string} = localization.GearName_Head;
    const clothesLocalization: {[key: string]: string} = localization.GearName_Clothes;
    const shoesLocalization: {[key: string]: string} = localization.GearName_Shoes;
    const skillLocalization: {[key: string]: string} = localization.GearPowerName;

    const userGearsDb = await db.gear.findMany({
        where: {userId: locals.id},
        orderBy: {id: 'desc'}
    });
    let userGears: userGear[] = []; // modified userGearsDb
    let headGears: searchSelectObj[] = [];
    let clothesGears: searchSelectObj[] = [];
    let shoesGears: searchSelectObj[] = [];
    
    userGearsDb.forEach(gear => {
        if (gear.gear.includes('Hed_')) {
            userGears.push({
                id: gear.id.toString(),
                name: gear.gear,
                localizedName: headLocalization[gear.gear],
                skill1: {name: gear.skill1, localizedName: skillLocalization[gear.skill1]},
                skill2: {name: gear.skill2, localizedName: skillLocalization[gear.skill2]},
                skill3: {name: gear.skill3, localizedName: skillLocalization[gear.skill3]},
                skill4: {name: gear.skill4, localizedName: skillLocalization[gear.skill4]},
            });

            headGears.push({
                id: gear.id.toString(),
                name: (gear.title) ? gear.title : '(no title)'
            });
        }
        else if (gear.gear.includes('Clt_')) {
            userGears.push({
                id: gear.id.toString(),
                name: gear.gear,
                localizedName: clothesLocalization[gear.gear],
                skill1: {name: gear.skill1, localizedName: skillLocalization[gear.skill1]},
                skill2: {name: gear.skill2, localizedName: skillLocalization[gear.skill2]},
                skill3: {name: gear.skill3, localizedName: skillLocalization[gear.skill3]},
                skill4: {name: gear.skill4, localizedName: skillLocalization[gear.skill4]},
            });

            clothesGears.push({
                id: gear.id.toString(),
                name: (gear.title) ? gear.title : '(no title)'
            });
        }
        else {
            userGears.push({
                id: gear.id.toString(),
                name: gear.gear,
                localizedName: shoesLocalization[gear.gear],
                skill1: {name: gear.skill1, localizedName: skillLocalization[gear.skill1]},
                skill2: {name: gear.skill2, localizedName: skillLocalization[gear.skill2]},
                skill3: {name: gear.skill3, localizedName: skillLocalization[gear.skill3]},
                skill4: {name: gear.skill4, localizedName: skillLocalization[gear.skill4]},
            });

            shoesGears.push({
                id: gear.id.toString(),
                name: (gear.title) ? gear.title : '(no title)'
            });
        }
    });

    const userGearsSorted = [
        headGears,
        clothesGears,
        shoesGears
    ];

    const selectedHeadGear = (userGearsSorted[0].length > 0)
        ? userGears.find(headGear => headGear.id === userGearsSorted[0][0].id)
        : null;
    const selectedClothesGear = (userGearsSorted[1].length > 0)
        ? userGears.find(clothesGear => clothesGear.id === userGearsSorted[1][0].id)
        : null;
    const selectedShoesGear = (userGearsSorted[2].length > 0)
        ? userGears.find(shoesGear => shoesGear.id === userGearsSorted[2][0].id)
        : null;

    return {
        userGears,
        userGearsSorted,
        selectedHeadGear,
        selectedClothesGear,
        selectedShoesGear,
    };
};