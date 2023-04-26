<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let itemList: {
        id: string, 
        name: string,
        subId?: string,
        subName?: string, 
        specialId?: string,
        specialName?: string, 
    }[];
    export let selectedItemId: string;
    export let selectedItemName: string;
    export let itemType: string; // 'gear' | 'weapon' | 'head' | 'clothes' | 'shoes'
    
    export let selectedSubId: string = '';
    export let selectedSubName: string = '';
    export let selectedSpecialId: string = '';
    export let selectedSpecialName: string = '';
    
    export let searchTerm: string = '';
    export let filteredItemList = itemList;


    // on select input change
    function selectUpdate() {
        selectedItemName = getItemName();

        dispatch('searchSelectChanged', {type: itemType, selectedId: selectedItemId});
    }

    // on search input change
    function searchUpdate() {
        filterList();
        selectedItemName = getItemName();

        dispatch('searchSelectChanged', {type: itemType, selectedId: selectedItemId});
    }

    // filter list by search term
    function filterList() {
        if (searchTerm) {
            filteredItemList = itemList.filter(itemObj => 
                itemObj.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            );

            if (filteredItemList.length > 0) selectedItemId = filteredItemList[0].id;
        }
        else {
            filteredItemList = itemList;
            selectedItemId = filteredItemList[0].id;
        }
    }

    // get the updated selected item's translated name
    function getItemName() {
        let name = '';
        
        itemList.every(itemObj => {
            if (itemObj.id === selectedItemId) {
                name = itemObj.name;

                if (itemType === 'weapon') updateSubSpecial(itemObj);

                return false; // break out of every()
            }
            else return true; // continue to next iteration
        });

        return name;
    }

    // get the updated sub and special translated name
    function updateSubSpecial(weaponObj: {
        id: string, 
        name: string,
        subId?: string,
        subName?: string, 
        specialId?: string,
        specialName?: string, 
    }) {
        selectedSubId = weaponObj.subId!;
        selectedSubName = weaponObj.subName!;
        selectedSpecialId = weaponObj.specialId!;
        selectedSpecialName = weaponObj.specialName!;
    }
</script>

<!-- search / select -->
<div class="flex">
    <input 
        type="text"
        class="search-input w-1/2 sm:w-full rounded-tl rounded-bl pl-7 focus:ring-primary-400 focus:border-primary-400"
        bind:value={searchTerm}
        on:input={searchUpdate}
    >
    <select
        class="w-1/2 sm:w-full rounded-tr rounded-br focus:ring-primary-400 focus:border-primary-400"
        name="select-{ itemType }"
        id="select-{ itemType }"
        bind:value={selectedItemId} 
        on:change={selectUpdate}
    >
        {#each filteredItemList as item}
            <option value="{item.id}">{ item.name }</option>
        {/each}
    </select>
</div>