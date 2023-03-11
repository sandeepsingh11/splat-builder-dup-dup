<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<p>Lookin' fresh { data.username }</p>