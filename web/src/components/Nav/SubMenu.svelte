<script>
  export let items = [];
</script>

<ul class="dropdown-menu">
  {#each items as item, i}
    <li class="dropdown-item-{i}">
      <a href={item.route}> {item.name} </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  li {
    display: flex;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 8px;
    align-items: center;
    background-color: var(--nav-bg);
    opacity: 0;
    transition: all var(--dark-mode-timing) ease-in;
  }

  li:hover {
    background-color: var(--nav-hover-bg);
    color: var(--nav-hover-color);
  }

  a {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
  }

  .menu-item:hover > .dropdown-menu {
    display: flex;
    flex-direction: column;
    opacity: 1;
  }

  .dropdown-menu {
    position: absolute;
    display: none;
    z-index: 3;
    top: 100%;
    left: 0px;
    width: 180%;
    perspective: 1000px;
    color: var(--color);
    text-transform: uppercase;
    transition: all var(--dark-mode-timing);
  }

  .dropdown-item-0 {
    animation: growDown 200ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }
  .dropdown-item-1 {
    animation: growDown 300ms 200ms ease-in-out forwards;
    transform-origin: top center;
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
