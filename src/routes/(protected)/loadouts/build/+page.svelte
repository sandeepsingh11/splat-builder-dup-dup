<script lang="ts">
    import type { PageServerData } from "./$types";
    import SearchSelect from "$lib/comp/SearchSelect.svelte";
    import SkillBubble from "$lib/comp/SkillBubble.svelte";

    export let data: PageServerData;

    let selectedHeadGear = data.selectedHeadGear;
    let selectedClothesGear = data.selectedClothesGear;
    let selectedShoesGear = data.selectedShoesGear;
    let selectedGears = [
        selectedHeadGear,
        selectedClothesGear,
        selectedShoesGear
    ];
    const gearTypes = ['head', 'clothes', 'shoes'];

    function searchSelectUpdate(event: CustomEvent) {
        const searchSelectEvent = event.detail;
        const selectedGear = data.userGears.find(userGear => userGear.id === searchSelectEvent.selectedId);

        if (searchSelectEvent.type === 'head') {
            selectedHeadGear = selectedGear;
        }
        else if (searchSelectEvent.type === 'clothes') {
            selectedClothesGear = selectedGear;
        }
        else if (searchSelectEvent.type === 'shoes') {
            selectedShoesGear = selectedGear;
        }

        // re-assign to trigger reactivity
        selectedGears = [
            selectedHeadGear,
            selectedClothesGear,
            selectedShoesGear
        ];
    }
</script>
<!-- https://github.com/sandeepsingh11/splat-build/blob/master/resources/views/users/gearsets/create.blade.php -->
<!-- https://github.com/sandeepsingh11/splat-build/blob/master/resources/views/livewire/base-gear-select.blade.php -->

<form 
    action="" 
    method="post" 
    class="w-full md:w-3/4 lg:w-2/3 px-4 md:px-0 md:mx-auto"
>
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-center">Create Gearset</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4">
        <!-- gearset title -->
        <div class="mb-4">
            <label for="gearset-title" class="block">Gearset title:</label>
            <input type="text" name="gearset-title" id="gearset-title"  class="w-full rounded focus:ring-primary-400 focus:border-primary-400">
        </div>

        <!-- gearset desc -->
        <div class="row-start-2 mb-4 md:mb-0">
            <label for="gearset-desc" class="block">Gearset description:</label>
            <textarea 
                name="gearset-desc" 
                id="gearset-desc" 
                class="w-full rounded focus:ring-primary-400 focus:border-primary-400"
            ></textarea>
        </div>

        <!-- gearset mode -->
        <div class="row-span-2">
            <label for="mode" class="block">Game mode:</label>

            <div>
                <input 
                    type="checkbox" 
                    name="gearset-mode-rm" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="gearset-mode-rm">Rainmaker</label>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="gearset-mode-cb" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="gearset-mode-cb">Clam Blitz</label>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="gearset-mode-sz" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="gearset-mode-sz">Splat Zones</label>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="gearset-mode-tc" 
                    value="1" 
                    class="rounded-sm text-secondary-700 focus:ring-primary-400"
                >
                <label for="gearset-mode-tc">Tower Control</label>
            </div>
        </div>
    </div>

    <!-- gears, skills, and stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
    </div>
</form>
