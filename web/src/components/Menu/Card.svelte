<script>
  import { slide, fade } from "svelte/transition";

  export let src;
  export let alt = "";
  export let title = "";
  export let ingredients = ["Coming soon"];
  export let price = {};

  // controls for ingredients dropdown list
  let ingredientsToggle = false;
  $: iStatus = ingredientsToggle; // reactive toggle to update caret orientation
  function toggleIngredients() {
    ingredientsToggle = !ingredientsToggle;
  }

  //imports for fontawesome caret symbols used in dropdown menu
  // import Fa from "svelte-fa";
  // import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="card">
  <img {src} {alt} in:fade />
  {#if price}
    <!-- content here -->
    <h1>{title}</h1>
    <div class="price-container">
      {#each Object.entries(price) as [size, price]}
        <h1 class="price">{size} ${price}</h1>
      {/each}
    </div>
  {:else}
    <!-- else content here -->
    <h1>{price}</h1>
  {/if}

  <button on:click={toggleIngredients}>INGREDIENTS </button>
  {#if ingredientsToggle}
    <p transition:slide>
      {#each ingredients as ingredient}
        {ingredient} <br />
      {/each}
    </p>
  {/if}
</div>

<style>
  .card {
    vertical-align: top;
    text-align: left;
  }

  img {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px black solid;
    border-radius: 20px;
  }

  h1 {
    font-size: 19px;
    font-weight: medium;
  }
  button {
    display: block;
    color: gray;
    background: none;
    border: none;
    margin: 0px;
    padding: 0px;
    margin-top: 0.5em;
  }

  p {
    color: black;
    font-size: 1em;
    margin: 0px;
    padding-left: 0.5em;
  }

  .price-container {
    display: flex;
    width: 100%;
    justify-content: left;
  }

  .price {
    margin: 0;
    padding-right: 1em;
    font-size: 1em;
    text-transform: capitalize;
    font-weight: normal;
  }

  @media only screen and (max-width: 655px) {
    button {
      margin: 0.5em auto 0;
    }

    .price-container {
      justify-content: space-around;
    }

    .price {
      padding-right: 0;
    }
  }
</style>
