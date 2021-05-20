<script>
  export let name = "Error";
  export let route = "/";
  export let focus = false;
  export let external = false;
</script>

<li class={focus ? "focus-item" : "menu-item"}>
  <a href={route} rel={external ? "external" : ""}>{name}</a>
  <slot />
</li>

<style>
  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  .menu-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1rem;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .menu-item:hover {
    color: var(--custard);
  }

  .focus-item {
    position: relative;
    height: 50%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1rem;
    margin: 0 0.5rem;
    background-color: var(--nav-hover-bg);
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: var(--button-box-shadow);
    transition: all var(--dark-mode-timing) ease-in;
  }

  .focus-item:hover {
    box-shadow: var(--button-box-shadow-hover);
    border-color: rgba(223, 225, 229, 0);
  }

  .focus-item:active {
    box-shadow: inset;
  }

  @media only screen and (max-width: 975px) {
    .menu-item {
      display: none;
    }

    .focus-item {
      display: none;
    }
  }
</style>
