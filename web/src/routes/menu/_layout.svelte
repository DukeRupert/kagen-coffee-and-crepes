<!-- src/routes/menu/_layout.svelte -->
<script>
  import Navbar from "../../components/Menu/Navbar.svelte";

  export let segment;
</script>

<Navbar {segment} />

<slot {segment} />
