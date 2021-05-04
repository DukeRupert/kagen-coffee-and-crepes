<script>
  export let src;
  export let alt;
  export let onClick;
  export let name;
</script>

<li class="logo-container">
  <a class="logo-image" href="/" on:click={onClick}>
    <img {src} {alt} />
  </a>
  <a href="/" on:click={onClick} class="name">{name}</a>
</li>

<style>
  .logo-container {
    position: relative;
    height: 100%;
    margin-right: auto;
    display: flex;
  }

  .logo-image {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 5px;
  }

  img {
    max-height: 100%;
    width: 100%;
  }

  .name {
    display: flex;
    align-content: center;
    width: 100%;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: var(--h4);
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media (max-width: 600px) {
    .logo-container {
      width: 100%;
    }
    .name {
      font-size: var(--h5);
      letter-spacing: normal;
    }
  }
</style>
