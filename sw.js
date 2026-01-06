const CACHE_NAME = "rteam-cache-v1";

/* Install immediately */
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

/* Take control immediately */
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

/*
  IMPORTANT:
  - Do NOT intercept POST requests (attendance logs)
  - Only handle GET safely
*/
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return; // let POST go directly to network
  }

  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(
        "Offline mode active",
        { headers: { "Content-Type": "text/plain" } }
      );
    })
  );
});
