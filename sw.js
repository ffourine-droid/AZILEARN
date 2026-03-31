const CACHE_NAME = 'azilearn-v1';

self.addEventListener('install', (event) => {
  // Skip waiting to activate the service worker immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim clients to start controlling them immediately
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Basic fetch handler required for PWA installation prompt
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
