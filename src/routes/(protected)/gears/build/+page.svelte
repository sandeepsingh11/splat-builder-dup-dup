<script lang="ts">
    import type { PageServerData } from "./$types";
    import { LeannyService as _LeannyService, type stat } from "$lib/Leanny/LeannyService";
    import SearchSelect from "$lib/comp/SearchSelect.svelte";
    import SkillBubble from "$lib/comp/SkillBubble.svelte";
    import SkillIcon from "$lib/comp/SkillIcon.svelte";
    import EffectStat from "$lib/comp/EffectStat.svelte";

    const LeannyService = new _LeannyService();

    export let data: PageServerData;

    export let selectedGearId: string = 'Hed_ACC003';
    export let selectedGearName: string = 'Tentaclinger Earring';

    export let selectedWeaponId: string = 'Blaster_LightLong_00';
    export let selectedWeaponName: string = 'Rapid Blaster Pro';
    export let selectedSubId: string = 'PoisonMist';
    export let selectedSubName: string = 'Toxic Mist';
    export let selectedSpecialId: string = 'SpBlower';
    export let selectedSpecialName: string = 'Ink Vac';

    export let skillBubbles = data.skillBubbles;
    export let mainSkills = data.mainSkills;
    export let nonMainSkills = data.nonMainSkills;

    let stats: stat[] = [];

    function searchSelectChanged(event: CustomEvent) {
        const searchSelectEvent = event.detail;

        // update skill stats if weapon changed
        if (searchSelectEvent.type === 'weapon') updateStats();
    }

    function bubbleClicked(event: CustomEvent) {    
        const clickedBubble = event.detail;

        skillBubbles[clickedBubble.number - 1].id = 'Unknown';
        skillBubbles[clickedBubble.number - 1].name = 'Unknown';

        // trigger reactive reload
        skillBubbles = skillBubbles;

        // update skill stats
        updateStats();
    }

    function skillClicked(event: CustomEvent) {
        const clickedSkill = event.detail;
        const nextIndex = getNextSkillBubble();

        // if there is an un-inputted skill bubble, set
        if (nextIndex !== -1) {
            // if a main skill was clicked, only set if 1st bubble is next
            // or if non main skill, set
            if (
                (clickedSkill.isMain &&
                nextIndex === 0) ||
                !clickedSkill.isMain
            ) {
                skillBubbles[nextIndex].id = clickedSkill.key;
                skillBubbles[nextIndex].name = clickedSkill.value;

                // trigger reactive reload
                skillBubbles = skillBubbles;
            }

            // update skill stats
            updateStats();
        }
    }

    function getNextSkillBubble() {
        let nextBubbleIndex = -1;

        skillBubbles.every((bubble, i) => {
            if (bubble.name === 'Unknown') {
                nextBubbleIndex = i;
                return false;
            }
            else return true;
        });

        return nextBubbleIndex;
    }

    function updateStats() {
        stats = LeannyService.calc(skillBubbles, selectedWeaponId);
    }
</script>

<form method="post" class="w-full md:w-1/2 lg:w-4/5 px-4 md:px-0 md:mx-auto">
    <div class="mb-8">
        <h1 class="text-2xl font-bold text-center">Create Gear</h1>
    </div>

    <!-- gear name -->
    <div class="mb-4 lg:w-2/5 mx-auto">
        <label for="gear-title" class="block">Gear name:</label>
        <input 
            type="text" 
            name="gear-title" 
            id="gear-title" 
            class="w-full rounded focus:ring-primary-400 focus:border-primary-400"
        >
    </div>

    <!-- gear desc -->
    <div class="mb-4 lg:w-2/5 mx-auto">
        <label for="gear-desc" class="block">Gear description:</label>
        <textarea 
            name="gear-desc" 
            id="gear-desc" 
            cols="30" 
            rows="3" 
            class="w-full rounded focus:ring-primary-400 focus:border-primary-400" 
            style="height: 110px;"
        ></textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <!-- gear and skills -->
        <div class="mb-6">
            <!-- gear selection -->
            <div>
                <!-- search / select -->
                <SearchSelect 
                    itemList={data.gearList}
                    itemType="gear"
                    bind:selectedItemId={selectedGearId}
                    bind:selectedItemName={selectedGearName}
                />

                <!-- selected gear img -->
                <div>
                    <img 
                        src="/gears/{ selectedGearId }.png" 
                        alt="{ selectedGearName }"
                        class="mx-auto"
                    >
                </div>
                                
            </div>

            <!-- skills input -->
            <div class="grid grid-cols-4 justify-items-center items-end mb-4">
                {#each skillBubbles as skillBubble}
                    <SkillBubble 
                        skill={skillBubble}
                        on:bubbleClicked={bubbleClicked}
                    />
                {/each}
            </div>

            <!-- non main skills -->
            <div class="grid grid-cols-7 mb-6">
                {#each nonMainSkills as nonMainSkill}
                    <SkillIcon
                        skill={nonMainSkill}
                        isMain={false}
                        on:skillClicked={skillClicked}
                    />
                {/each}
            </div>

            <hr class="w-4/5 mx-auto border-primary-400 border-t-2">

            <!-- main skills -->
            <div class="grid grid-cols-7 mt-6">
                {#each mainSkills as mainSkill}
                    <SkillIcon
                        skill={mainSkill}
                        isMain={true}
                        on:skillClicked={skillClicked}
                    />
                {/each}
            </div>

            <!-- submit button -->
            <input 
                type="submit" 
                class="p-2 bg-transparent text-primary-700 rounded-md border border-primary-700 mb-2 cursor-pointer transition-colors hover:bg-primary-500 hover:text-white hover:border-primary-500" 
                value="Create"
            >
        </div>

        <!-- weapon selection and stats -->
        <div>
            <!-- weapon selection -->
            <div>
                <!-- search / select -->
                <SearchSelect 
                    itemList={data.weaponList}
                    itemType="weapon"
                    bind:selectedItemId={selectedWeaponId}
                    bind:selectedItemName={selectedWeaponName}
                    bind:selectedSubId
                    bind:selectedSubName
                    bind:selectedSpecialId
                    bind:selectedSpecialName
                    on:searchSelectChanged={searchSelectChanged}
                />

                <!-- selected weapon, sub, special img -->
                <div 
                    id="weapon-container" 
                    class="grid grid-cols-1 grid-cols-2 gap-x-4"
                >
                    <img 
                        id="weapon-img"
                        class="justify-self-center" 
                        src="/weapon_flat/Path_Wst_{ selectedWeaponId }.png" 
                        alt="{ selectedWeaponName }"
                        width="128px" 
                        height="128px"
                    >
                    <div class="grid grid-cols-2 items-center gap-x-2">
                        <img 
                            id="sub-img" 
                            src="/subspe/Wsb_{ selectedSubId }00.png" 
                            alt="{ selectedSubName }" 
                            class="justify-self-center"
                            width="64px" 
                            height="64px"
                        >
                        <img 
                            id="special-img" 
                            src="/subspe/Wsp_{ selectedSpecialId }00.png" 
                            alt="{ selectedSpecialName }" 
                            class="justify-self-center"
                            width="64px" 
                            height="64px"
                        >
                    </div>
                </div>
            </div>

            <!-- stats -->
            <div>
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
</form>

<style>
    /* add an outline to the sub and special pngs */
    #sub-img,
    #special-img {
        -webkit-filter: drop-shadow(1px 1px 0 black)
                        drop-shadow(-1px -1px 0 white);
        filter: drop-shadow(1px 1px 0 black)
                drop-shadow(-1px -1px 0 white);
    }
</style>
