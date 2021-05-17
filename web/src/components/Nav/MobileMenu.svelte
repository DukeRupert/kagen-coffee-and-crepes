<script>
  import MobileItem from "./MobileItem.svelte";

  import { submenuLocation, mobileItems, focusItems } from "../../store";
</script>

<div class="overlay">
  <ul class="mobile-menu">
    {#each $mobileItems as item}
      <MobileItem {...item} />
    {/each}
  </ul>
</div>

<style>
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
