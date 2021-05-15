import client from "../../../sanityClient";

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get(req, res) {
  try {
    const posts = await client.fetch(
      '*[_type == "menu" && defined(name.location)][0]'
    );
    res.end(JSON.stringify({ menu }));
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
