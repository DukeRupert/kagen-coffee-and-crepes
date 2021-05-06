<script>
  import { dropdown } from "../../store";

  let subMenu = false;

  let items = [
    { name: "menu", route: "/", onclick: toggleSubmenu },
    { name: "locations", route: "/", onclick: toggleDropdown },
    { name: "about us", route: "/", onclick: toggleDropdown },
    { name: "join our team", route: "", onclick: toggleDropdown },
    { name: "contact us", route: "", onclick: toggleDropdown },
    { name: "order online", route: "", onclick: toggleDropdown },
    { name: "shop", route: "", onclick: toggleDropdown },
  ];

  function toggleDropdown() {
    dropdown.update((value) => !value);
  }

  function toggleSubmenu() {
    subMenu = !subMenu;
  }
</script>

<div class="overlay">
  <ul class="mobile-menu">
    {#each items as item}
      <li class="mobile-menu-item">
        <a href={item.route} on:click={item.onclick}>{item.name}</a>
      </li>
    {/each}
  </ul>
</div>
{#if subMenu}
  <div class="overlay-red">
    <ul class="mobile-menu">
      {#each items as item}
        <li class="mobile-menu-item">
          <a href={item.route} on:click={item.onclick}>{item.name}</a>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .overlay-red {
    background: red !important;
    display: flex;
    position: absolute;
    top: calc(var(--nav-size) + 1);
    width: 100vw;
    height: calc(100vh - var(--nav-size));
    background: var(--nav-mobile-bg);
    z-index: 11;
    animation: growDown var(--animation-timing) ease-in-out forwards;
    transform-origin: top center;
  }

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

  .mobile-menu-item > a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
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
</style>
