<script lang="ts">
import type { PageServerData } from "./$types";

export let data: PageServerData;
export let selectedGearId: string = 'Hed_ACC003';

export let searchSelectValue: string = '';
export let filteredGearList = data.gearList;


function searchSelectUpdate() {
    filterList();
}

function filterList() {
    if (searchSelectValue) {
        filteredGearList = data.gearList.filter(gearObj => 
            gearObj.gearName.toLowerCase().includes(searchSelectValue.toLowerCase()) 
        );

        if (filteredGearList.length > 0) selectedGearId = filteredGearList[0].gearId;
    }
    else {
        filteredGearList = data.gearList;
        selectedGearId = filteredGearList[0].gearId;
    }
}
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
                <div class="flex">
                    <input 
                        type="text"
                        class="search-input w-1/2 sm:w-full rounded-tl rounded-bl pl-7 focus:ring-primary-400 focus:border-primary-400"
                        bind:value={searchSelectValue}
                        on:input={searchSelectUpdate}
                    >
                    <select
                        class="w-1/2 sm:w-full rounded-tr rounded-br focus:ring-primary-400 focus:border-primary-400"
                        name=""
                        id=""
                        bind:value={selectedGearId} 
                    >
                        {#each filteredGearList as gear}
                            <option value="{gear.gearId}">{ data.gearTranslations[gear.gearId] }</option>
                        {/each}
                    </select>
                </div>
                <!-- https://github.com/sandeepsingh11/splat-build/blob/add-angular/resources/frontend/angular/src/app/pages/gear/gear-form/gear-form.component.html -->
                <!-- search / select -->
                <!-- https://github.com/sandeepsingh11/splat-build/blob/add-angular/resources/frontend/angular/src/app/comp/search-select/search-select.component.html -->
                <!-- <app-search-select 
                    [list]="baseGears" 
                    [type]="'gear'" 
                    (newOption)="updateSelectedValue($event)"
                >
                </app-search-select> -->

                <!-- selected gear img -->
                <div>
                    <img 
                        src="/gears/{ selectedGearId }.png" 
                        alt="{ data.gearTranslations[selectedGearId] }"
                        class="mx-auto"
                    >
                </div>
            </div>
        </div>
    </div>
</form>
