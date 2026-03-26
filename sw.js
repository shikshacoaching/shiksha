const cacheName = 'shiksha-v2';
const files = ['./', './index.html', './assets/css/style.css', './assets/js/script.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
