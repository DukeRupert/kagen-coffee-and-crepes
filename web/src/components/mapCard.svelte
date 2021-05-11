<script>
  export let link = "";
  export let image = "";
  export let alt = "";
  export let title = "";
  export let address = "";
  export let phone = "";
  export let hours = "";

  let phoneNumber = "tel:" + phone;
</script>

<a href={link}><img src={image} {alt} /></a>
<h4>{title}</h4>
<a href={link}><p>{@html address}</p></a>
<a id="phone" href={phoneNumber}><p>{phone}</p></a>
<p>{hours}</p>

<style>
  img {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  h4 {
    font-weight: bold;
    text-transform: uppercase;
  }

  #phone {
    font-weight: bold;
  }
</style>
