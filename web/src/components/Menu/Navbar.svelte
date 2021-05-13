<script>
  import Item from "./Item.svelte";
  export let segment;
</script>

<nav>
  <Item name="Sweet" route="/menu/{segment}#sweet" />
  <Item name="Savory" route="/menu/{segment}#savory" />
  <Item name="Coffee" route="/menu/{segment}#coffee" />
  <Item name="Drinks" route="/menu/{segment}#drinks" />
  <Item name="21+" route="/menu/{segment}#adult" />
</nav>

<style>
  nav {
    position: fixed;
    top: 80px;
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    box-shadow: rgba(59, 59, 58, 0.5) 0 0 10px;
    z-index: 99;

    /*Horizontal Scolling*/
    overflow-x: auto;
  }

  @media (max-width: 500px) {
    nav {
      justify-content: start;
    }
  }
</style>
