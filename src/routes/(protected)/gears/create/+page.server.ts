import type { PageServerLoad } from './$types';
import Gears from "$lib/Leanny/latest/gears.json";
import Translations from "$lib/Leanny/translations.json";

export const load = (async () => {
    const gears = [
        Gears.Head,
        Gears.Clothes,
        Gears.Shoes,
    ];

    const translations = Translations['USen'];
    const gearTranslations = {
        ...translations.GearName_Head,
        ...translations.GearName_Clothes,
        ...translations.GearName_Shoes
    };
    

    return { 
        gears,
        gearTranslations
    };
}) satisfies PageServerLoad;