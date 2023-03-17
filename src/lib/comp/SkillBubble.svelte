<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let skill: {
        number: number,
        id: string,
        name: string,
        isMain: boolean
    };

    const dispatch = createEventDispatcher();
</script>

<div 
    id="skill-sub-{ skill.number }" 
    class="{ skill.isMain ? 'skill-bubble-main' : '' } skill-bubble drag-into border-2 border-r-0 border-b-0 border-solid border-gray-400 rounded-full bg-gray-900" 
    data-source="slot"
>
    <img 
        src="/skills/{ skill.id }.png" 
        alt="{ skill.name }" 
        class="slot-img draggable slot" 
        draggable="true"
        on:click={ () => dispatch('bubbleClicked', skill) }
        on:keyup={ () => dispatch('bubbleClicked', skill) }
    >
</div>

<style>
    .skill-bubble {
        width: 50px; 
        height: 50px; 
        box-shadow: 0 0 0 1px #000;
    }

    .skill-bubble-main {
        width: 64px; 
        height: 64px; 
    }
</style>
