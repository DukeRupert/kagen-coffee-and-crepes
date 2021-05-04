<script lang="typescript">
  import Image from "svelte-image";
</script>

<div class="banner-image">
  <Image
    src="/svelte-image/crepe_strawberry.jpg"
    alt="A latte"
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
</div>
<div class="banner-image">
  <Image
    src="/svelte-image/latte_large.jpg"
    alt="A ham and cheese crepe."
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
</div>
<div class="banner-image">
  <Image
    src="/svelte-image/crepe_ham.jpg"
    alt="A strawberry crepe."
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
</div>

<style>
  .banner-image {
    position: relative;
    width: 100%;
  }

  :global(.banner) {
    display: block !important;
    max-width: 100%;
  }
</style>
