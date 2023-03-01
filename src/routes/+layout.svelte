<script lang="ts">
  import "../app.postcss";
  import type { LayoutServerData } from "./$types";

  export let data: LayoutServerData;
</script>

Hello 
  {#if data?.username}
    {data.username}
  {:else}
    guest
  {/if}

<slot />
