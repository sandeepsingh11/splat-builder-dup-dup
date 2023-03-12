<script lang="ts">
import type { PageServerData } from "./$types";
import SearchSelect from "$lib/comp/SearchSelect.svelte";

export let data: PageServerData;
export let selectedGearId: string = 'Hed_ACC003';
export let selectedGearName: string = 'Tentaclinger Earring';
export let selectedWeaponId: string = 'Blaster_LightLong_00';
export let selectedWeaponName: string = 'Rapid Blaster Pro';

</script>

<form action="" method="post" class="w-full md:w-1/2 lg:w-4/5 px-4 md:px-0 md:mx-auto">
    <div class="mb-8">
        <h1 class="text-2xl font-bold text-center">Create Gear</h1>
    </div>

    <!-- gear name -->
    <div class="mb-4 lg:w-2/5 mx-auto">
        <label for="gear-title" class="block">Gear name:</label>
        <input 
            type="text" 
            name="gearTitle" 
            id="gear-title" 
            class="w-full rounded focus:ring-primary-400 focus:border-primary-400"
        >
    </div>

    <!-- gear desc -->
    <div class="mb-4 lg:w-2/5 mx-auto">
        <label for="gear-desc" class="block">Gear description:</label>
        <textarea 
            name="gearDesc" 
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
                
                <!-- https://github.com/sandeepsingh11/splat-build/blob/add-angular/resources/frontend/angular/src/app/pages/gear/gear-form/gear-form.component.html -->
                <!-- TODO GET SKILLS AND HANDLE CLICKING / UNCLICKING SKILLS -->
                <!-- search / select -->
                <!-- https://github.com/sandeepsingh11/splat-build/blob/add-angular/resources/frontend/angular/src/app/comp/search-select/search-select.component.html -->
            </div>
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
                />

                <!-- selected weapon img -->
                <div>
                    <img 
                        src="/weapon_flat/Path_Wst_{ selectedWeaponId }.png" 
                        alt="{ selectedWeaponName }"
                        class="mx-auto"
                    >
                </div>
            </div>
        </div>
    </div>
</form>
