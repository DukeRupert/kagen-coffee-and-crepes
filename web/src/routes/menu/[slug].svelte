<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/menu/${params.slug}`);
      const { data } = await res.json();
      return { data };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  import Crepe from "../../components/Menu/Crepe.svelte";
  import Coffee from "../../components/Menu/Coffee.svelte";
  import Drink from "../../components/Menu/Drink.svelte";
  export let data;

  const { location, sweet, savory, coffees, drinks } = data.menu;
</script>

<svelte:head>
  <title>Tri-Cities Menu</title>
</svelte:head>

<section class="restricted page-wrapper navbar-margin">
  {#if sweet}
    <!-- Sweet Crepes -->
    <div class="wrapper">
      <a class="anchor" id="sweet" />
      {#each sweet as crepe}
        <Crepe {crepe} />
      {/each}
    </div>
  {/if}
  {#if savory}
    <!-- Savory Crepes -->
    <div class="wrapper">
      <a class="anchor" id="savory" />
      {#each savory as crepe}
        <Crepe {crepe} />
      {/each}
    </div>
  {/if}
  {#if coffees}
    <!-- Coffee -->
    <div class="wrapper">
      <a class="anchor" id="coffee" />
      {#each coffees as coffee}
        <Coffee {coffee} />
      {/each}
    </div>
  {/if}
  {#if drinks}
    <!-- Drink -->
    <div class="wrapper">
      <a class="anchor" id="drinks" />
      {#each drinks as drink}
        <Drink {drink} />
      {/each}
    </div>
  {/if}
</section>

<style>
  .anchor {
    /* Adjust for fixed headers + standard 3rem page padding */
    position: absolute;
    left: 0;
    top: calc(-2 * var(--nav-size) - 3rem);
  }

  .navbar-margin {
    margin-top: calc(2 * var(--nav-size));
  }

  .wrapper {
    position: relative;
    width: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 3em;
    margin-bottom: 4em;
  }

  @media (max-width: 800px) {
    .wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>
