self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '../',
          '../video-store-offline.html',
          'video-store-offline.js',
          '../styles/video-store-offline.css'
         ]);
      })
    );
   });
   
   self.addEventListener('fetch', e => {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(response => response || fetch(e.request))
     );
   });
