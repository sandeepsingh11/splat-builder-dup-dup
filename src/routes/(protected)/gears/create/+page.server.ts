import type { PageServerLoad } from './$types';
import Gears from "$lib/Leanny/latest/gears.json";
import Translations from "$lib/Leanny/translations.json";

export const load = (async () => {
    const gears = [
        ...Gears.Head,
        ...Gears.Clothes,
        ...Gears.Shoes,
    ];

    const translations = Translations['USen'];

    const gearTranslations: { [key: string]: string } = {
        ...translations.GearName_Head,
        ...translations.GearName_Clothes,
        ...translations.GearName_Shoes
    };
    let gearList: { id: string, name: string }[] = [];
    const translatedGearEntries = Object.entries(gearTranslations);
    translatedGearEntries.forEach(gearEntry => {
        gearList.push({ id: gearEntry[0], name: gearEntry[1] });
    });

    let weaponList: { id: string, name: string }[] = [];
    const translatedWeaponEntries = Object.entries(translations.WeaponName_Main);
    translatedWeaponEntries.forEach(weaponEntry => {
        weaponList.push({ id: weaponEntry[0], name: weaponEntry[1] });
    });
    

    return {
        gearList,
        weaponList
    };
}) satisfies PageServerLoad;