<script lang="ts">
    export let itemList: {id: string, name: string}[];
    export let selectedItemId: string;
    export let selectedItemName: string;
    export let itemType: 'gear' | 'weapon';

    export let searchTerm: string = '';
    export let filteredItemList = itemList;


    // on select input change
    function selectUpdate() {
        selectedItemName = getItemName();
    }

    // on search input change
    function searchUpdate() {
        filterList();
        selectedItemName = getItemName();
        
    }

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

    function getItemName() {
        let name = '';
        
        itemList.every(itemObj => {
            if (itemObj.id === selectedItemId) {
                name = itemObj.name;
                return false; // break out of every()
            }
            else return true; // continue to next iteration
        });

        return name;
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
        name=""
        id=""
        bind:value={selectedItemId} 
        on:change={selectUpdate}
    >
        {#each filteredItemList as item}
            <option value="{item.id}">{ item.name }</option>
        {/each}
    </select>
</div>