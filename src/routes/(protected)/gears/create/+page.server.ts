import type { Actions, PageServerLoad } from './$types';
import Gears from "$lib/Leanny/latest/gears.json";
import Weapons from "$lib/Leanny/latest/weapons.json";
import Translations from "$lib/Leanny/translations.json";
import { PUBLIC_API_URL } from '$env/static/public';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database';

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

export const actions: Actions = {
    default: async ({request, locals}) => {
        const formData = await request.formData();
        let title = formData.get('gear-title');
        let desc = formData.get('gear-desc');
        const skill1 = formData.get('skill-1');
        const skill2 = formData.get('skill-2');
        const skill3 = formData.get('skill-3');
        const skill4 = formData.get('skill-4');
        const gear = formData.get('select-gear');
        const weapon = formData.get('select-weapon');

        // const header = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         'title': title,
        //         'desc': desc,
        //         'skill1': skill1,
        //         'skill2': skill2,
        //         'skill3': skill3,
        //         'skill4': skill4,
        //         'gear': gear,
        //         'weapon': weapon,
        //     })
        // };
        // const res = await fetch(`${PUBLIC_API_URL}/gears/create`, header);

        // if (!res.ok) {
        //     return fail(res.status, { error: true });
        // }

        // const text = await res.text();
        // const json = text ? JSON.parse(text) : {};

        title = (title) ? title : '';
        desc = (desc) ? desc : '';

        if (
            !skill1 ||
            !skill2 ||
            !skill3 ||
            !skill4 ||
            !gear ||
            !weapon ||
            typeof skill1 !== 'string' ||
            typeof skill2 !== 'string' ||
            typeof skill3 !== 'string' ||
            typeof skill4 !== 'string' ||
            typeof gear !== 'string' ||
            typeof weapon !== 'string' ||
            typeof title !== 'string' ||
            typeof desc !== 'string'
        )
        {
            return fail(400, { invalid: true });
        }

        await db.gear.create({
            data: {
                userId: locals.id,
                title,
                description: desc,
                skill1,
                skill2,
                skill3,
                skill4,
                gear,
                weapon
            }
        });
        
        // redirect the user
        throw redirect(302, '/gears')
    }
};
