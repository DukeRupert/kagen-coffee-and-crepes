<script>
  export let name;
  export let route;
</script>

<!-- About -->
<li class="menu-item">
  <a href={route}>{name}</a>
  <slot />
</li>

<style>
  a {
    text-decoration: none;
  }

  .menu-item {
    position: relative;
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
</style>
