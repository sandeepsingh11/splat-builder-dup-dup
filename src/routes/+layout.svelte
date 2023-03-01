<script lang="ts">
  import "../app.postcss";
  import type { LayoutServerData } from "./$types";

  export let data: LayoutServerData;
  export let showDropdown = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function logout() {

  }
</script>

<nav class="relative bg-primary-500 text-white flex justify-between">
  <!-- logo -->
  <ul class="flex items-center">
    <li>
      <a 
        href="/"
        class="block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"
      >
        SB
      </a>
    </li>
  </ul>

  <!-- nav items -->
  <ul class="md:flex items-center hidden">
    <!-- guest routes -->
    {#if !data?.username}
      {#each data.guestRoutes as route}
        <a 
          href="{ route.url }"
          class="block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"
        >
          { route.name }
        </a>
      {/each}
    {/if}

    <!-- auth routes -->
    {#if data?.username}
      {#each data.authRoutes as route}
        <a 
          href="{ route.url }"
          class="block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors"
        >
          { route.name }
        </a>
      {/each}

      <!-- dropdown -->
      <div
        on:click={toggleDropdown}
        on:keyup={toggleDropdown}
        class="relative"
      >
        <button class="block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors">
          Profile
        </button>

        {#if showDropdown}
          <ul class="absolute top-full right-0 bg-primary-500 mt-1 rounded text-left z-20">
            {#each data.dropdownRoutes as route}
              <a 
                href="{ route.url }"
                class="block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors py-2 px-4 rounded-t-md"
              >
                { route.name }
              </a>
            {/each}
            <button 
              class="block p-3 hover:bg-primary-600 focus:hover:bg-primary-600 transition-colors py-2 px-4 rounded-t-md w-full text-left"
              on:click={logout}
            >
              Logout
            </button>
          </ul>
        {/if}
      </div>
    {/if}
  </ul>
</nav>

<slot />
