self.addEventListener('install', (e) => {
  console.log('SW Installed');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Even an empty fetch handler satisfies Chrome's PWA requirement
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Offline mode");
    })
  );
});
