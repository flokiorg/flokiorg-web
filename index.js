// The flokicoin.org Worker: every request is served from the static export (ASSETS).
// Assets that match are served before this runs; a path with none gets 404.html,
// like the Caddyfile's handle_errors.
export default {
  async fetch(req, env) {
    const res = await env.ASSETS.fetch(req);
    if (res.status !== 404) return res;
    const page = await env.ASSETS.fetch(new URL("/404.html", req.url));
    return new Response(page.body, { status: 404, headers: page.headers });
  },
};
