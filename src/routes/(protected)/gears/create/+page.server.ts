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


    // default skill bubbles
    const skillBubbles = [
        {
            number: 1,
            id: 'Unknown',
            name: 'Unknown',
            isMain: true
        },
        {
            number: 2,
            id: 'Unknown',
            name: 'Unknown',
            isMain: false
        },
        {
            number: 3,
            id: 'Unknown',
            name: 'Unknown',
            isMain: false
        },
        {
            number: 4,
            id: 'Unknown',
            name: 'Unknown',
            isMain: false
        }
    ];

    // prep skills
    let mainSkills: {[key: string]: string}[] = [];
    let nonMainSkills: {[key: string]: string}[] = [];
    const skillEntries = Object.entries(translations.GearPowerName);
    skillEntries.forEach(skillEntry => {
        // main skills
        if (
            skillEntry[0] === 'Action_Up' ||
            skillEntry[0] === 'ComeBack' ||
            skillEntry[0] === 'DeathMarking' ||
            skillEntry[0] === 'EndAllUp' ||
            skillEntry[0] === 'Exorcist' ||
            skillEntry[0] === 'ExSkillDouble' ||
            skillEntry[0] === 'MinorityUp' ||
            skillEntry[0] === 'ObjectEffect_Up' ||
            skillEntry[0] === 'SomersaultLanding' ||
            skillEntry[0] === 'SquidMoveSpatter_Reduction' ||
            skillEntry[0] === 'StartAllUp' ||
            skillEntry[0] === 'SuperJumpSign_Hide' ||
            skillEntry[0] === 'ThermalInk'
        ) {
            mainSkills.push({[skillEntry[0]]: skillEntry[1]});
        }
        // exclude 'none
        else if (skillEntry[0] === 'None') {}
        // non main skills
        else {
            nonMainSkills.push({[skillEntry[0]]: skillEntry[1]});
        }
    });
    


    return {
        gearList,
        weaponList,
        skillBubbles,
        mainSkills,
        nonMainSkills
    };
}) satisfies PageServerLoad;