<script>
  import { submenuLocation, mobileItems, focusItems } from "../../store";
  console.log($submenuLocation);
</script>

<div class="overlay">
  <ul class="mobile-menu">
    {#each $mobileItems as { name, route, onclick, submenu, internal }}
      <li class="mobile-menu-item">
        <!-- mobileItem with submenu must not be treated as external links -->
        <a
          class="standard-item"
          rel={internal ? "" : "external"}
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
                  <a rel="external" href={route} on:click={onclick}>{name}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      {/if}
    {/each}
    {#each $focusItems as item}
      <li class="mobile-menu-item">
        <a
          class="focus-item"
          rel="external"
          href={item.route}
          on:click={item.onclick}>{item.name}</a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .overlay {
    display: flex;
    position: absolute;
    top: calc(var(--nav-size) + 1);
    width: 100vw;
    height: calc(100vh - var(--nav-size));
    background: var(--nav-mobile-bg);
    z-index: 10;
    animation: growDown var(--animation-timing) ease-in-out forwards;
    transform-origin: top center;
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
  @keyframes growDown {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }

    80% {
      transform: scaleY(1.1);
    }

    100% {
      opacity: 1;
      transform: scaleY(1);
    }
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
