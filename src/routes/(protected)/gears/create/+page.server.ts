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
    let gearList: { id: string, name: string }[] = [];
    translatedEntries.forEach(gearEntry => {
        gearList.push({ id: gearEntry[0], name: gearEntry[1] });
    });
    

    return { 
        gears,
        gearTranslations,
        gearList
    };
}) satisfies PageServerLoad;