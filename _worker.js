import { createFetch } from "@cloudflare/next-on-pages/worker"

// Create a fetch handler for the worker
export default {
  async fetch(request, env, ctx) {
    const fetch = createFetch({
      request,
      env,
      ctx,
      // Enable node.js compatibility
      useNodeCompat: true,
    })

    return await fetch()
  },
}
