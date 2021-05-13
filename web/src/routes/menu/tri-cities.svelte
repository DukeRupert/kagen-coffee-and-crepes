<script>
  import Card from "../../components/Menu/Card.svelte";
  import { sweetCrepes } from "../../store";
</script>

<svelte:head>
  <title>Tri-Cities Menu</title>
</svelte:head>

<section class="restricted page-wrapper navbar-margin">
  <!-- Sweet Crepes -->
  <div class="wrapper">
    <a class="anchor" id="sweet" />
    {#each $sweetCrepes as crepe}
      <Card {...crepe} />
    {/each}
  </div>
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
