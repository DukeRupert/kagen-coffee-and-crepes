<script>
  export let name = "FIXME";
  export let route = "/";
  export let right = false;
</script>

<div class="button-container" class:right>
  <a href={route} class="button">{name}</a>
</div>

<style>
  .button-container {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5rem 2rem;
    margin: 0 0.5rem;
    background-color: transparent;
    border: 2px solid var(--bg);
    border-radius: 40px;
    color: var(--bg);
    font-size: var(--h3);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .right {
    left: 50%;
    top: 0;
  }

  @media (max-width: 900px) {
    .button {
      font-size: var(--h5);
      letter-spacing: normal;
    }
  }

  @media (max-width: 600px) {
    .button-container {
      left: 0;
      width: 100%;
      justify-content: flex-start;
    }

    .button {
      margin: 0 2rem;
    }

    .right {
      left: 0;
      justify-content: flex-end;
    }
  }

  @media (max-width: 490px) {
    .button {
      font-size: 1rem;
    }
  }

  .button:hover {
    background-color: var(--button-bg);
    color: var(--button-hover-color);
    border-color: var(--button-bg);
  }
</style>
