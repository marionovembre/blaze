self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('blaze-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/burnout.html',
        '/brainfog.html',
        '/turkish.html',
        '/styles/style.css',
        '/icon-192x192.png',
        '/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
