<script>
</script>

<div>
  <div class="links">
    <h4>LINKS</h4>
    <a href="/feedback"><p>Contact Us</p></a>
    <a href="/join-our-team"><p>Join Our Team</p></a>
  </div>
  <div class="socialMedia">
    <h4>FOLLOW US</h4>
    <a href="https://www.facebook.com/kagencoffeeandcrepes/">
      <img src="facebook.svg" alt="facebook logo" />
    </a>
    <a href="https://www.instagram.com/kagencoffeeandcrepes/">
      <img src="instagram.svg" alt="instagram logo" />
    </a>
  </div>
  <p class="copyright">&copy The Crepe Shop 2020</p>
</div>

<style>
  a {
    text-decoration: none;
  }
  div {
    position: relative;
    width: 100%;
    padding: 1em;
    background-color: var(--footer-bg);
    color: var(--footer-color);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  img {
    width: 60px;
  }

  .links {
    width: 50%;
    margin: 0;
    padding: 0 2%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
  }

  .socialMedia {
    width: 50%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
  }

  h4 {
    margin: 0;
    margin-bottom: 0.5em;
    width: 100%;
    font-size: 2em;
    letter-spacing: 2px;
    color: var(--footer-title-color);
  }

  p {
    margin: 0;
    margin-bottom: 0.5em;
    width: 100%;
    font-size: 1.5em;
  }

  .copyright {
    position: absolute;
    bottom: 2%;
    right: 2%;
    width: auto;
  }

  @media only screen and (max-width: 655px) {
    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>
