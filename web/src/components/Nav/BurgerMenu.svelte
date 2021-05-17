<script>
  import { dropdown, submenuLocation } from "../../store";

  function toggleDropdown() {
    dropdown.update((value) => !value);
    submenuLocation.set(false);
  }
</script>

<li class="burger">
  <button
    on:click={toggleDropdown}
    class="{$dropdown ? 'is-active' : ''} hamburger hamburger--spin"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</li>

<style>
  .burger {
    display: none;
  }

  @media only screen and (max-width: 975px) {
    .burger {
      display: flex;
    }
  }
</style>
