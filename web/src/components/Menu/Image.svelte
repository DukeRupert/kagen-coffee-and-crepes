<!-- src/components/Menu/Image.svelte -->
<script>
  export let url;
  export let alt;
</script>

<img src={url} {alt} loading="lazy" />

<style>
  img {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px black solid;
    border-radius: var(--card-border-radius) var(--card-border-radius) 0px 0px;
  }

</style>

