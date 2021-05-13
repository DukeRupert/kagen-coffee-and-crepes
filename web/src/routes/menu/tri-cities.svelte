<script>
  import Card from "../../components/Menu/Card.svelte";
  import { sweetCrepes } from "../../store";
</script>

<svelte:head>
  <title>Tri-Cities Menu</title>
</svelte:head>

<section class="restricted page-wrapper navbar-margin">
  <a class="anchor" id="sweet" />

  <!-- Sweet Crepes -->
  <div class="wrapper">
    <!-- <img class="banner" src="/images/sweet.png" alt="sweet" /> -->
    {#each $sweetCrepes as crepe}
      <Card {...crepe} />
    {/each}
  </div>
</section>

<style>
  .anchor {
    margin-top: -200px;
    padding-top: 200px;
  }

  .navbar-margin {
    margin-top: calc(2 * var(--nav-size));
  }

  .wrapper {
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
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>
