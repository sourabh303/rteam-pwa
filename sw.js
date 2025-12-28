const CACHE_NAME = 'rteam-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// THIS IS THE MOST IMPORTANT PART FOR THE INSTALL BUTTON
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Offline mode active");
    })
  );
});
