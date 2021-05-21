import client from "../../../sanityClient";

export async function get(req, res) {
  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  try {
    // We have access to req.params.slug because the filename has [slug] in it.
    const { slug } = req.params;
    const location = titleCase(slug);
    const filter = '*[_type == "location" && name == $location][0]';
    const projection = `{
      "menu" : *[_type =='menu' && references(^._id)][0]
        {
          "location" : name.location->{name},
          "sweet" : sweet[].crepe->{image,name,price,ingredients},
          "savory" : savory[].crepe->{image,name,price,ingredients},
          "coffees" : coffee[].coffee->{name, price},
          "drinks" : drink[].drink->{name,price}
        }
    }`;

    const query = filter + projection;
    const data = await client.fetch(query, { location });
    res.end(JSON.stringify({ data }));
  } catch (err) {
    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: err.message,
      })
    );
  }
}
