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
    
    
    const translatedEntries = Object.entries(gearTranslations);
    let gearList: { gearId: string, gearName: string }[] = [];
    translatedEntries.forEach(gearEntry => {
        gearList.push({ gearId: gearEntry[0], gearName: gearEntry[1] });
    });
    

    return { 
        gears,
        gearTranslations,
        gearList
    };
}) satisfies PageServerLoad;