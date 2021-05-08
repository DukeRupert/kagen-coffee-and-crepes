<script>
  import Image from "svelte-image";
</script>

<svelte:head>
  <title>Kagens Coffee & Crepes | About Us</title>
</svelte:head>

<section>
  <div class="page-wrapper">
    <h1>OUR STORY</h1>
    <p>
      Families and friends need a place to gather. A place to visit, catch up
      and simply enjoy life together. At KCC we believe in togetherness and
      community. My family’s best conversations growing up happened around a
      table while snacking on tasty food.
    </p>
    <p>
      When my wife and I would travel our favorite thing to do was visit crepe
      shops. It was then that we realized what we wanted to create for our
      community - a gathering place. A fun place to visit a friend, a quiet
      place to do homework, a warm place to meet up with your small group. Here,
      we bring you our heart and passion through our love of crepes, coffee,
      locally sourced ciders and wine. So come on down, order a crepe and start
      making memories.
    </p>
    <p>
      Keep following us here, Facebook, and Instagram to see our future growth
      plans!
    </p>
    <div class="image-wrapper">
      <Image
        class="portrait"
        wrapperClass="portrait"
        placeholderClass="portrait"
        src="portraitKagen.jpg"
        alt="A photo of Kagen Cox"
      />
    </div>
  </div>
</section>

<style>
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
  }

  .image-wrapper {
    margin-top: 3rem;
  }

  :global(.portrait) {
    border-radius: 50%;
    align-self: center;
    max-width: 30vw;
    min-width: 300px;
  }

  @media only screen and (max-width: 655px) {
    :global(.portrait) {
      max-width: 60vw;
    }
  }
</style>
