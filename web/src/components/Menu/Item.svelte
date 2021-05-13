<script>
  export let name;
  export let route;
</script>

<li class="menu-item">
  <a href={route}>{name}</a>
  <slot />
</li>

<style>
  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  .menu-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1rem;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .menu-item:hover {
    color: var(--custard);
  }
</style>
