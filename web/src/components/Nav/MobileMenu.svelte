<script>
  import { dropdown } from "../../store";

  let subMenu = false;

  let items = [
    { name: "menu", route: "/", onclick: toggleSubmenu },
    { name: "locations", route: "/locations", onclick: toggleDropdown },
    { name: "about us", route: "/about-us", onclick: toggleDropdown },
    { name: "join our team", route: "/join-our-team", onclick: toggleDropdown },
    { name: "contact us", route: "/contact-us", onclick: toggleDropdown },
  ];

  let focusItems = [
    { name: "order online", route: "", onclick: toggleDropdown },
    { name: "shop", route: "", onclick: toggleDropdown },
  ];

  let menus = [
    { name: "Tri-Cities", route: "/", onclick: toggleDropdown },
    { name: "Spokane", route: "/", onclick: toggleDropdown },
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
        <a class="standard-item" href={item.route} on:click={item.onclick}
          >{item.name}</a
        >
      </li>
    {/each}
    {#each focusItems as item}
      <li class="mobile-menu-item">
        <a class="focus-item" href={item.route} on:click={item.onclick}
          >{item.name}</a
        >
      </li>
    {/each}
  </ul>
</div>
{#if subMenu}
  <div class="overlay-submenu">
    <ul class="mobile-menu">
      {#each menus as menu}
        <li class="mobile-menu-item">
          <a href={menu.route} on:click={menu.onclick}>{menu.name}</a>
        </li>
      {/each}
    </ul>
  </div>
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
