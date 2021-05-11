<script lang="typescript">
  import BannerButton from "./BannerButton.svelte";

  import Image from "svelte-image";
</script>

<div id="top-banner" class="banner-image">
  <Image
    src="/svelte-image/crepe_strawberry.jpg"
    alt="A latte"
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
  <BannerButton name="order online" route="/" right />
</div>
<div class="banner-image">
  <Image
    src="/svelte-image/latte_large.jpg"
    alt="A ham and cheese crepe."
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
  <BannerButton name="menu" route="/" />
</div>
<div class="banner-image">
  <Image
    src="/svelte-image/crepe_ham.jpg"
    alt="A strawberry crepe."
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
  <BannerButton name="locations" route="/" right />
</div>

<style>
  .banner-image {
    position: relative;
    width: 100%;
    max-width: 1920px;
  }

  @media (max-width: 975px) {
    #top-banner {
      margin-top: var(--nav-size);
    }
  }

  :global(.banner) {
    display: block !important;
    max-width: 100%;
    object-fit: cover;
  }
</style>
