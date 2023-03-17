<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let skill: {[key: string]: string};
    export let isMain: boolean;

    const skillKey = Object.keys(skill);

    const dispatch = createEventDispatcher();
</script>

<img 
    src="/skills/{ skillKey[0] }.png" 
    alt="{ skill[skillKey[0]] }" 
    class="draggable bank skill-icon"
    draggable="true"
    on:click={ () => dispatch('skillClicked', {key: skillKey[0], value: skill[skillKey[0]], isMain: isMain})}
    on:keyup={ () => dispatch('skillClicked', {key: skillKey[0], value: skill[skillKey[0]], isMain: isMain})}
>

<style>
    /* add an outline to the skill pngs */
    .skill-icon {
        -webkit-filter: drop-shadow(1px 1px 0 black)
                        drop-shadow(-1px -1px 0 white);
        filter: drop-shadow(1px 1px 0 black)
                drop-shadow(-1px -1px 0 white);
    }
</style>
