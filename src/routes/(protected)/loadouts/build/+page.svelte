<script lang="ts">
    import type { PageServerData } from "./$types";
    import EffectStat from "$lib/comp/EffectStat.svelte";
    import SearchSelect from "$lib/comp/SearchSelect.svelte";
    import SkillBubble from "$lib/comp/SkillBubble.svelte";
    import { LeannyService as _LeannyService, type stat } from "$lib/Leanny/LeannyService";

    export let data: PageServerData;

    const LeannyService = new _LeannyService();
    let skillBubbles = data.skillBubbles;

    let selectedHeadGear = data.selectedHeadGear;
    let selectedClothesGear = data.selectedClothesGear;
    let selectedShoesGear = data.selectedShoesGear;
    let selectedGears = [
        selectedHeadGear,
        selectedClothesGear,
        selectedShoesGear
    ];
    const gearTypes = ['head', 'clothes', 'shoes'];

    let selectedWeapon = data.selectedWeapon;

    let stats: stat[] = LeannyService.calc(skillBubbles, selectedWeapon.id);

    function searchSelectUpdate(event: CustomEvent) {
        const searchSelectEvent = event.detail;
        let selectedGear;

        if (
            searchSelectEvent.type === 'head' ||
            searchSelectEvent.type === 'clothes' ||
            searchSelectEvent.type === 'shoes'
        ) {
            selectedGear = data.userGears.find(userGear => userGear.id === searchSelectEvent.selectedId);
        }

        if (searchSelectEvent.type === 'head') {
            selectedHeadGear = selectedGear;

            if (selectedHeadGear) {
                for (let i = 0; i < 4; i++) {
                    const r = i % 4;
                    const skillIndex = (r === 0) ? 'skill1' : (r === 1) ? 'skill2' : (r === 3) ? 'skill3' : 'skill4';

                    skillBubbles[i] = {
                        number: i + 1,
                        id: selectedHeadGear[skillIndex].name,
                        name: selectedHeadGear[skillIndex].localizedName,
                        isMain: (r === 0) ? true : false
                    }
                }
            }
        }
        else if (searchSelectEvent.type === 'clothes') {
            selectedClothesGear = selectedGear;

            if (selectedClothesGear) {
                for (let i = 4; i < 8; i++) {
                    const r = i % 4;
                    const skillIndex = (r === 0) ? 'skill1' : (r === 1) ? 'skill2' : (r === 3) ? 'skill3' : 'skill4';
                    
                    skillBubbles[i] = {
                        number: i + 1,
                        id: selectedClothesGear[skillIndex].name,
                        name: selectedClothesGear[skillIndex].localizedName,
                        isMain: (r === 0) ? true : false
                    }
                }
            }
        }
        else if (searchSelectEvent.type === 'shoes') {
            selectedShoesGear = selectedGear;

            if (selectedShoesGear) {
                for (let i = 8; i < 12; i++) {
                    const r = i % 4;
                    const skillIndex = (r === 0) ? 'skill1' : (r === 1) ? 'skill2' : (r === 3) ? 'skill3' : 'skill4';
                    
                    skillBubbles[i] = {
                        number: i + 1,
                        id: selectedShoesGear[skillIndex].name,
                        name: selectedShoesGear[skillIndex].localizedName,
                        isMain: (r === 0) ? true : false
                    }
                }
            }
        }
        else if (searchSelectEvent.type === 'weapon') {
            const tmpSelectedWeapon = data.weapons.find(weapon => weapon.id === searchSelectEvent.selectedId);

            if (tmpSelectedWeapon) selectedWeapon = tmpSelectedWeapon;
        }

        // re-assign to trigger reactivity
        selectedGears = [
            selectedHeadGear,
            selectedClothesGear,
            selectedShoesGear
        ];

        // update stats
        stats = LeannyService.calc(skillBubbles, selectedWeapon.id);
    }
</script>

<form 
    action="" 
    method="post" 
    class="w-full md:w-3/4 lg:w-2/3 px-4 md:px-0 md:mx-auto"
>
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-center">Create Loadout</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4">
        <!-- loadout title -->
        <div class="mb-4">
            <label for="loadout-title" class="block">Loadout title:</label>
            <input type="text" name="loadout-title" id="loadout-title"  class="w-full rounded focus:ring-primary-400 focus:border-primary-400">
        </div>

        <!-- loadout desc -->
        <div class="row-start-2 mb-4 md:mb-0">
            <label for="loadout-desc" class="block">Loadout description:</label>
            <textarea 
                name="loadout-desc" 
                id="loadout-desc" 
                class="w-full rounded focus:ring-primary-400 focus:border-primary-400"
            ></textarea>
        </div>

        <!-- loadout mode -->
        <div class="row-span-2">
            <label for="mode" class="block">Game mode:</label>

            <div>
                <input 
                    type="checkbox" 
                    name="loadout-mode-rm" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="loadout-mode-rm">Rainmaker</label>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="loadout-mode-cb" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="loadout-mode-cb">Clam Blitz</label>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="loadout-mode-sz" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="loadout-mode-sz">Splat Zones</label>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="loadout-mode-tc" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="loadout-mode-tc">Tower Control</label>
            </div>
        </div>
    </div>

    <!-- user gears and weapons & stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <!-- user gears -->
        <div>
            <!-- markup for each gear type -->
            {#each gearTypes as gearType, i}
                <div class="w-full pb-6">
                    {#if data.userGearsSorted[i].length > 0}
                         <!-- search-select for this gear type -->
                        <label for="gear-{ gearType }-id" class="block">{ gearType } gear</label>
                        <SearchSelect
                            itemList={data.userGearsSorted[i]}
                            selectedItemId={selectedGears[i]?.id}
                            selectedItemName={selectedGears[i]?.name}
                            itemType={gearType}
                            on:searchSelectChanged={searchSelectUpdate}
                        />
                    
                        <!-- gear img -->
                        <div class="p-4">
                            <img 
                                src="/gears/{ selectedGears[i]?.name }.png" 
                                alt="{ selectedGears[i]?.localizedName }" 
                                class="gear-img mx-auto"
                            >
                        </div>

                        <!-- skills -->
                        <div class="flex justify-evenly items-baseline">
                            <SkillBubble
                                skill={{
                                    number: 1,
                                    id: selectedGears[i]?.skill1.name,
                                    name: selectedGears[i]?.skill1.localizedName,
                                    isMain: true
                                }}
                            />
                            <SkillBubble
                                skill={{
                                    number: 2,
                                    id: selectedGears[i]?.skill2.name,
                                    name: selectedGears[i]?.skill2.localizedName,
                                    isMain: false
                                }}
                            />
                            <SkillBubble
                                skill={{
                                    number: 3,
                                    id: selectedGears[i]?.skill3.name,
                                    name: selectedGears[i]?.skill3.localizedName,
                                    isMain: false
                                }}
                            />
                            <SkillBubble
                                skill={{
                                    number: 4,
                                    id: selectedGears[i]?.skill4.name,
                                    name: selectedGears[i]?.skill4.localizedName,
                                    isMain: false
                                }}
                            />
                        </div>
                    {:else}
                        <p>No {gearType} gears yet...</p>
                    {/if}
                </div>
            {/each}

            <!-- submit -->
            <input 
                type="submit" 
                value="Create" 
                class="p-2 bg-transparent text-primary-700 rounded-md border border-primary-700 mb-2 cursor-pointer transition-colors hover:bg-primary-500 hover:text-white hover:border-primary-500"
            >
        </div>

        <!-- weapons and stats -->
        <div>
            <div class="mb-6">
                <!-- weapons -->
                <div>
                    <h4>Weapon stats:</h4>
                    <SearchSelect 
                        itemList={data.weapons}
                        itemType="weapon"
                        selectedItemId={selectedWeapon.id}
                        selectedItemName={selectedWeapon.name}
                        on:searchSelectChanged={searchSelectUpdate}
                    />

                    <!-- selected weapon, sub, special img -->
                    <div 
                        id="weapon-container" 
                        class="grid grid-cols-1 grid-cols-2 gap-x-4"
                    >
                        <img 
                            id="weapon-img"
                            class="justify-self-center" 
                            src="/weapon_flat/Path_Wst_{ selectedWeapon.id }.png" 
                            alt="{ selectedWeapon.name }"
                            width="128px" 
                            height="128px"
                        >
                        <div class="grid grid-cols-2 items-center gap-x-2">
                            <img 
                                id="sub-img" 
                                src="/subspe/Wsb_{ selectedWeapon.subId }00.png" 
                                alt="{ selectedWeapon.subName }" 
                                class="justify-self-center"
                                width="64px" 
                                height="64px"
                            >
                            <img 
                                id="special-img" 
                                src="/subspe/Wsp_{ selectedWeapon.specialId }00.png" 
                                alt="{ selectedWeapon.specialName }" 
                                class="justify-self-center"
                                width="64px" 
                                height="64px"
                            >
                        </div>
                    </div>
                </div>

                <!-- stats -->
                <div>
                    <h4>Loadout stats:</h4>

                    {#if stats.length > 0}
                        {#each stats as stat}
                            <!-- skill title element -->
                            <div class="flex justify-start items-center gap-1 mt-4">
                                <img
                                    src="/skills/{ stat.name }.png"
                                    alt="{ stat.name }"
                                    width="32px"
                                >

                                <h5>{ stat.name }</h5>
                            </div>

                            <!-- effect stats -->
                            <div class="grid grid-cols-2 gap-2 items-end">
                                {#each stat.effects as effect}
                                    <EffectStat 
                                        effect={effect}
                                    />
                                {/each}
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </div>
    </div>
</form>
