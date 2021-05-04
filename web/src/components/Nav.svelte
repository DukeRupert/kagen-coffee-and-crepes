<script>
  import BurgerMenu from "./BurgerMenu.svelte";

  import { dropdown } from "../store";
  import { fly } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import NavLogo from "./NavLogo.svelte";

  export let segment;

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
    <!-- Dropdown Menu for Guides -->
    <li class="dropdown menu-item">
      <a href="guides">Guides</a>
      <ul class="dropdown-menu">
        <li class="dropdown-item-1">
          <a href="/guides/baldurs-gate-1">
            <img src="bg1.png" alt="Baldur's Gate 1 logo" />
            Baldur's Gate 1
          </a>
        </li>
        <li class="dropdown-item-2">
          <a href="/guides/baldurs-gate-3">
            <img src="bg3.png" alt="Baldur's Gate 3 logo" />
            Baldur's Gate 3
          </a>
        </li>
      </ul>
    </li>
    <!-- About -->
    <li class="menu-item">
      <a href="about">About</a>
    </li>
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
  /* Mobile Menu */
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

  /* Generic Styles */
  nav {
    border-bottom: 1px solid var(--purple-faded);
    font-weight: 300;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  /* Menu Styles */
  .menu {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }

  .menu-item {
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 2rem;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .menu-item:hover {
    background-color: var(--card-background);
  }

  /* Dropdown Styles */
  .dropdown {
    position: relative;
  }

  .dropdown:hover > .dropdown-menu {
    display: flex;
    flex-direction: column;
    opacity: 1;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 3;
    top: 100%;
    left: 0px;
    width: 180%;
    perspective: 1000px;
    display: none;
    transition: all var(--dark-mode-timing);
  }

  .dropdown-menu > li {
    display: flex;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 8px;
    align-items: center;
    background-color: var(--background);
    opacity: 0;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .dropdown-menu > li:hover {
    background-color: var(--card-background);
  }

  .dropdown-menu > li > a {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
  }
  .dropdown-menu > li > a > img {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }

  .dropdown-item-1 {
    animation: translateX 200ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }
  .dropdown-item-2 {
    animation: translateX 300ms 200ms ease-in-out forwards;
    transform-origin: top center;
  }
  /* .dropdown-item-3 {
	  animation: translateX 300ms 300ms ease-in-out forwards;
	  transform-origin: top center;
	}
  
	.dropdown-item-4 {
	  animation: translateX 300ms 400ms ease-in-out forwards;
	  transform-origin: top center;
	} */

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

  /* Slide-In Animation */
  @keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    80% {
      transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  /* Burger Menu */
  .burger {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    .menu-item {
      display: none;
    }
    .burger {
      display: flex;
    }
  }
</style>
