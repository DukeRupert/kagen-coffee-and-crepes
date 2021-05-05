<script>
  import { dropdown } from "../store";
  import { fly } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import NavLogo from "./NavLogo.svelte";
  import NavItem from "./NavItem.svelte";
  import NavSubmenu from "./NavSubmenu.svelte";
  import BurgerMenu from "./BurgerMenu.svelte";

  let items = [
    { name: "Tri-Cities", route: "/" },
    { name: "Spokane", route: "/" },
  ];

  function toggleDropdown() {
    dropdown.update((value) => !value);
  }

  function closeDropdown() {
    dropdown.update((value) => (value = false));
  }
</script>

<nav>
  <ul class="menu">
    <!-- Logo -->
    <NavLogo
      src="/logoRooster.svg"
      alt="A logo of a rooster crowing drawn with elegant black lines"
      name="Kagen's Coffee & Crepes"
      onClick={closeDropdown}
    />
    <!-- Locations -->
    <NavItem name="Menu" route="/">
      <NavSubmenu {items} />
    </NavItem>
    <NavItem name="Locations" route="/" />
    <NavItem name="About Us" route="/" />
    <BurgerMenu />
  </ul>
  {#if $dropdown}
    <div
      transition:fly={{
        duration: 300,
        x: 300,
        opacity: 0.5,
        easing: quadInOut,
      }}
      class="overlay"
    >
      <ul class="mobile-menu">
        <li class="mobile-menu-item title">
          <a href="/guides" on:click={toggleDropdown}>Games</a>
        </li>
        <li class="mobile-menu-item">
          <a href="/guides/baldurs-gate-1" on:click={toggleDropdown}>
            <img src="bg1.png" alt="Baldur's Gate 1 logo" />
            Baldur's Gate 1
          </a>
        </li>
        <li class="mobile-menu-item">
          <a href="/guides/baldurs-gate-3" on:click={toggleDropdown}>
            <img src="bg3.png" alt="Baldur's Gate 3 logo" />
            Baldur's Gate 3
          </a>
        </li>
        <li class="mobile-menu-item title">
          <a href="/about" on:click={toggleDropdown}>About Me</a>
        </li>
      </ul>
    </div>
  {/if}
</nav>

<style>
  nav {
    z-index: 100;
    box-shadow: var(--nav-box-shadow);
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
    background: var(--background);
    z-index: 10;
  }

  .mobile-menu {
    height: var(--nav-size);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-menu-item {
    flex: 1 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 2.5rem;
    border-top: 1px var(--purple-faded) solid;
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

  .mobile-menu-item > a > img {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }

  .title {
    font-size: var(--h3);
    padding: 0 2rem;
  }
  .menu {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }
</style>
