import type { PageServerLoad } from './$types';
import Gears from "$lib/Leanny/latest/gears.json";
import Weapons from "$lib/Leanny/latest/weapons.json";
import Translations from "$lib/Leanny/translations.json";

export const load = (async () => {
    const gears = [
        ...Gears.Head,
        ...Gears.Clothes,
        ...Gears.Shoes,
    ];

    const translations = Translations['USen'];



    // get gear translations
    const gearTranslations: { [key: string]: string } = {
        ...translations.GearName_Head,
        ...translations.GearName_Clothes,
        ...translations.GearName_Shoes
    };

    // get gear list for search-select comp
    let gearList: { id: string, name: string }[] = [];
    const translatedGearEntries = Object.entries(gearTranslations);
    translatedGearEntries.forEach(gearEntry => {
        gearList.push({ id: gearEntry[0], name: gearEntry[1] });
    });



    // prep for weapon, sub, special translations
    const weapons: {[key: string]: {
        Sub: string, 
        Special: string
    }} = Weapons;
    const subTranslations: {[key: string]: string} = translations.WeaponName_Sub;
    const specialTranslations: {[key: string]: string} = translations.WeaponName_Special;
    let weaponList: { 
        id: string, 
        name: string,
        subId: string,
        subName: string, 
        specialId: string,
        specialName: string, 
    }[] = [];

    // get weapon list for search-select
    const translatedWeaponEntries = Object.entries(translations.WeaponName_Main);
    translatedWeaponEntries.forEach(weaponEntry => {
        // since the Leanny translations isnt versioned, we check here
        if (weapons[weaponEntry[0]]) {
            weaponList.push({ 
                id: weaponEntry[0], 
                name: weaponEntry[1],
                subId: weapons[weaponEntry[0]]['Sub'],
                subName: subTranslations[weapons[weaponEntry[0]]['Sub']],
                specialId: weapons[weaponEntry[0]]['Special'],
                specialName: specialTranslations[weapons[weaponEntry[0]]['Special']]
            });
        }
    });



    return {
        gearList,
        weaponList
    };
}) satisfies PageServerLoad;