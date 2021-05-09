<script>
  let links = [
    { name: "locations", route: "/" },
    { name: "merchandise", route: "/" },
    { name: "about us", route: "/about-us" },
    { name: "join our team", route: "/join-our-team" },
    { name: "contact us", route: "/contact-us" },
  ];
</script>

<div class="container">
  <div>
    <h5>LINKS</h5>
    {#each links as link}
      <a href={link.route}>{link.name}</a>
    {/each}
  </div>
  <div>
    <h5>FOLLOW US</h5>
    <div class="social-media">
      <a href="https://www.facebook.com/kagencoffeeandcrepes/">
        <img src="facebook.svg" alt="facebook logo" />
      </a>
      <a href="https://www.instagram.com/kagencoffeeandcrepes/">
        <img src="instagram.svg" alt="instagram logo" />
      </a>
    </div>
  </div>
  <div>
    <img class="logo" src="logoKCC.svg" alt="Kagens Coffee and Crepes logo" />
  </div>
  <div>
    <h5>INSTAGRAM</h5>
  </div>
  <p class="copyright">&copy The Crepe Shop 2020</p>
</div>

<style>
  a {
    text-decoration: none;
    text-transform: capitalize;
  }

  h5 {
    color: var(--footer-title-color);
    margin-top: 0;
  }

  .container {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    box-sizing: border-box;
    padding: 3em 1em;
    background-color: var(--footer-bg);
    color: var(--footer-color);
  }

  .container > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    width: 240px;
    margin-bottom: 3rem;
  }

  .social-media {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .social-media > a {
    margin: 0 0.5rem;
    filter: var(--gray-filter);
  }

  .social-media > a:nth-child(1) {
    margin-left: 0;
  }

  .social-media img {
    width: 40px;
  }

  .logo {
    width: 100%;
    max-height: 100%;
    filter: var(--custard-filter);
  }

  .copyright {
    position: absolute;
    bottom: 2%;
    right: 2%;
    width: auto;
  }

  @media only screen and (max-width: 535px) {
    .container {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }

    .container > div {
      align-items: center;
    }

    .social-media {
      justify-content: center;
    }
  }
</style>
