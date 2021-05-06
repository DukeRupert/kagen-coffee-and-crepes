<script>
  import MobileMenu from "./MobileMenu.svelte";

  import { dropdown } from "../../store";
  import { fly } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import Logo from "./Logo.svelte";
  import Item from "./Item.svelte";
  import FocusItem from "./FocusItem.svelte";
  import SubMenu from "./SubMenu.svelte";
  import BurgerMenu from "./BurgerMenu.svelte";

  let menus = [
    { name: "Tri-Cities", route: "/" },
    { name: "Spokane", route: "/" },
  ];

  let abouts = [
    { name: "About Us", route: "/" },
    { name: "Join Our Team", route: "/" },
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
    <Logo
      src="/logoRooster.svg"
      alt="A logo of a rooster crowing drawn with elegant black lines"
      name="Kagen's Coffee & Crepes"
      onClick={closeDropdown}
    />
    <Item name="Menu" route="/">
      <SubMenu items={menus} />
    </Item>
    <Item name="Locations" route="/" />
    <Item name="About" route="/">
      <SubMenu items={abouts} />
    </Item>
    <FocusItem name="Order Online" route="/" />
    <FocusItem name="Shop" route="/" />
    <BurgerMenu />
  </ul>
  {#if $dropdown}
    <MobileMenu />
  {/if}
</nav>

<style>
  nav {
    z-index: 100;
    box-shadow: var(--nav-box-shadow);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .menu {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }
</style>
