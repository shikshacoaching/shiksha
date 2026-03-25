const CACHE_NAME = 'shiksha-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  'https://iili.io/qkieRf9.png'
];

// Install Event - Caches local assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // Forces the waiting service worker to become the active service worker
});

// Activate Event
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim()); // Allows the service worker to take control of the page immediately
});

// Fetch Event - Network first, then Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
