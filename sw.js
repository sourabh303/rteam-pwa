self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Keeps the app working
  e.respondWith(fetch(e.request));
});