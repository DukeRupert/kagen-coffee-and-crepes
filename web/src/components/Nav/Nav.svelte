<script>
  import MobileMenu from "./MobileMenu.svelte";
  import { dropdown } from "../../store";
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
    { name: "About Us", route: "/about-us" },
    { name: "Join Our Team", route: "/join-our-team" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  function closeDropdown() {
    dropdown.update((value) => (value = false));
  }
</script>

<nav id="#nav">
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
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    background: var(--nav-bg);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0 1rem;
  }

  .menu {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }
</style>
