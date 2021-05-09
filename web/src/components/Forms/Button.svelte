<script>
  // FIXME: Validation
</script>

<button type="submit">SUBMIT</button>

<style>
  button {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin: 3rem auto;
    font-size: var(--h5);
    text-transform: uppercase;
    background-color: var(--nav-hover-bg);
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: var(--button-box-shadow);
    transition: all var(--dark-mode-timing) ease-in;
  }

  button:hover {
    box-shadow: var(--button-box-shadow-hover);
    border-color: rgba(223, 225, 229, 0);
  }

  button:active {
    box-shadow: inset;
  }
</style>
