export default {
  async fetch(request, env, ctx) {
    // This is a simple pass-through worker that enables Node.js compatibility
    try {
      // Get the URL from the request
      const url = new URL(request.url)

      // Construct a new request to the same URL
      const newRequest = new Request(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: request.redirect,
      })

      // Add a header to indicate Node.js compatibility is enabled
      newRequest.headers.set("X-Nodejs-Compat", "enabled")

      // Fetch the resource
      return fetch(newRequest)
    } catch (err) {
      return new Response(`Error in worker: ${err.message}`, { status: 500 })
    }
  },
}
