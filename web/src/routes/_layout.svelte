<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import { dropdown } from "../store";
  export let segment;
</script>

<div
  class="parent dark-mode-transition {$dropdown ? 'stop-scroll' : ''}"
  id="parent"
>
  <header />
  <main>
    <Nav {segment} />
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

<style>
  .parent {
    height: 100vh;

    /* grid container settings */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header"
      "main"
      "footer";
    background-color: var(--background);
    overflow-x: hidden;
  }

  .parent > header {
    grid-area: header;
  }

  .parent > main {
    grid-area: main;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .parent > footer {
    grid-area: footer;
  }

  .stop-scroll {
    overflow-y: hidden;
  }
</style>
