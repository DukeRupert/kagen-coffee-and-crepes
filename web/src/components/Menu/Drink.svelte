<!-- src/components/Menu/Coffee.svelte -->
<script>
  export let drink;

  function convertToPrice(number) {
    try {
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (err) {
      return "Missing price information";
    }
  }

  const price = (2).toLocaleString;
</script>

<div class="card">
  <div class="details">
    <h4>{drink.name}</h4>
    {#if drink.price}
      <div class="price-container">
        <p class="price">{convertToPrice(drink.price)}</p>
      </div>
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
