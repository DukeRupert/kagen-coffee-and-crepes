<script>
  import { slide, fade } from "svelte/transition";

  export let src;
  export let alt = "";
  export let title = "";
  export let ingredients = ["Coming soon"];
  export let price = {};

  // controls for ingredients dropdown list
  let showIngredients = false;
  $: iStatus = showIngredients; // reactive toggle to update caret orientation
  function toggleIngredients() {
    showIngredients = !showIngredients;
  }
</script>

<div class="card">
  <img class="card-img" {src} {alt} in:fade />
  <div class="details">
    <h4>{title}</h4>
    {#if price}
      <div class="price-container">
        {#each Object.entries(price) as [size, price]}
          <p class="price">{size} ${price}</p>
        {/each}
      </div>
    {/if}

    <button on:click={toggleIngredients}
      >ingredients
      <img
        class="triangle"
        class:showIngredients
        src="/triangle.svg"
        alt="triangle"
      /></button
    >
    {#if showIngredients}
      <p transition:slide>
        {#each ingredients as ingredient}
          {ingredient} <br />
        {/each}
      </p>
    {/if}
  </div>
</div>

<style>
  .card {
    vertical-align: top;
    text-align: center;
    background: var(--elevated);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
  }

  .details {
    display: flex;
    flex-direction: column;
    padding: var(--spacer-md);
    box-sizing: border-box;
  }

  h4 {
    margin-top: 0;
  }

  .card-img {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px black solid;
    border-radius: var(--card-border-radius) var(--card-border-radius) 0px 0px;
  }

  .triangle {
    display: inline-block;
    width: 0.75rem;
    filter: var(--gray-filter);
    transition: 200ms ease-in;
  }

  .showIngredients {
    transform: rotateX(-180deg);
  }

  button {
    display: block;
    color: var(--light-gray);
    margin: 1rem 0 0;
    text-transform: uppercase;
    font-size: 1rem;
    background: none;
    border: none;
  }

  p {
    color: black;
    font-size: 1em;
    margin-block-end: 0;
    padding-left: 0.5em;
  }

  .price-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .price {
    margin: 0;
    padding-right: 1rem;
    text-transform: capitalize;
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
