<script>
  import MobileMenu from "./MobileMenu.svelte";
  import { dropdown, navItems } from "../../store";
  import Logo from "./Logo.svelte";
  import NavItem from "./NavItem.svelte";
  import SubMenu from "./SubMenu.svelte";
  import BurgerMenu from "./BurgerMenu.svelte";

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
    {#each $navItems as { name, route, focus, submenu }}
      <NavItem {name} {route} {focus}>
        {#if submenu}
          <SubMenu items={submenu} />
        {/if}
      </NavItem>
    {/each}
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
