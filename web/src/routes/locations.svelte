<script>
  import MapCard from "../components/MapCard.svelte";

  const uptownLocation = {
    link:
      "https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/",
    image: "/svelte-image/staticmapTriCities.png",
    alt: "Google Map of 270 Williams Blvd, Richland, WA 99354",
    title: "uptown",
    address: "270 Williams Boulevard, Richland, WA 99354",
    phone: "509-851-7186",
    hours: "Monday – Sunday: 7am to 5pm",
  };

  const spokaneLocation = {
    link:
      "https://www.google.com/maps/place/915+E+Hawthorne+Rd,+Spokane,+WA+99218/",
    image: "/svelte-image/staticmapSpokane.png",
    alt: "915 E Hawthorne Rd, Spokane WA 99218",
    title: "spokane",
    address: "915 E Hawthorne Rd, Spokane, WA 99218",
    phone: "509-413-1363",
    hours: "Sunday – Saturday: 7am to 5pm",
  };
</script>

<svelte:head>
  <title>Kagens Coffee & Crepes | Locations</title>
</svelte:head>

<div class="banner">
  <h1 class="banner-text">LOCATIONS</h1>
</div>
<section>
  <div class="cards">
    <div class="card">
      <MapCard {...uptownLocation} />
    </div>
    <div class="card">
      <MapCard {...spokaneLocation} />
    </div>
  </div>
</section>

<style>
  h1 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: clamp(1rem, 10px + 3vw, var(--h1));
  }

  .banner {
    position: relative;
    margin-top: 40px;
    width: 100%;
    height: 40vh;
    background-image: url("/espresso.jpg");
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

  .banner-text {
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border-radius: 40px;
    color: #fcc24c;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: left;
    box-sizing: border-box;
    margin: 3rem 0;
  }

  .card {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    margin-bottom: 2rem;
    padding: 1rem;
    background: var(--elevated);
    box-shadow: var(--box-shadow);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    text-align: left;
  }
</style>
