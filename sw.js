self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Required by Chrome for PWA installation
  e.respondWith(fetch(e.request));
});
