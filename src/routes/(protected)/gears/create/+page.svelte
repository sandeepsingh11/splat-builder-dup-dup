<script lang="ts">
import type { PageServerData } from "./$types";

export let data: PageServerData;
export let selectedGearId: string = 'Hed_ACC003';

function updateSelect() {
    console.log(selectedGearId);
}
</script>

Create!
<select name="" id="" bind:value={selectedGearId} on:change={updateSelect}>
    {#each data.gears as gearType}
        {#each gearType as gear}
            <option value="{gear.Id}">{ data.gearTranslations[gear.Id] }</option>
        {/each}
    {/each}
</select>
<img src="/gears/{ selectedGearId }.png" alt="{ data.gearTranslations[selectedGearId] }">