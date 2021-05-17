<script>
  import { submenuLocation } from "../../store";
  export let name = "Error";
  export let route = "/";
  export let onclick;
  export let submenu;
  export let focus = false;
  export let external = false;
</script>

<li class="mobile-menu-item">
  <!-- mobileItem with submenu must not be treated as external links -->
  <a
    class={focus ? "focus-item" : "standard-item"}
    rel={external ? "external" : ""}
    href={route}
    on:click={onclick}>{name}</a
  >
</li>
{#if submenu}
  {#if $submenuLocation}
    <div class="overlay-submenu">
      <ul class="mobile-menu">
        {#each submenu as { name, route, onclick }}
          <li class="mobile-menu-item">
            <a rel={external ? "external" : ""} href={route} on:click={onclick}
              >{name}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  {/if}
{/if}

<style>
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .mobile-menu {
    height: var(--nav-size);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-item {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: var(--nav-mobile-bg);
    color: var(--nav-mobile-color);
    font-size: var(--h4);
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .mobile-menu-item:active {
    background-color: var(--card-background);
  }

  .standard-item {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .focus-item {
    background: var(--nav-mobile-color);
    color: var(--nav-mobile-bg);
    padding: 0 1rem;
    border-radius: 20px;
  }

  .overlay-submenu {
    display: flex;
    position: absolute;
    top: calc(var(--nav-size) + 1);
    width: 100vw;
    height: calc(100vh - var(--nav-size));
    background: var(--nav-mobile-bg);
    z-index: 11;
    animation: slideLeft var(--animation-timing) ease-in-out forwards;
  }

  /* Dropdown Animation */
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(100%);
      border-left: 3px black solid;
    }

    80% {
      transform: translateX(-10%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
      border-left: transparent;
    }
  }
</style>
