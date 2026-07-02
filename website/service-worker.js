const CACHE_NAME = 'marine-platform-v3';
const ASSETS = ['./','./index.html','./styles.css','./search-index.js','./search-data.json','./parts-database.json','./trainer-data.json','./manifest.webmanifest','./offline.html','./icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./offline.html'))));
});
self.addEventListener('sync', event => {
  if (event.tag === 'marine-local-sync') event.waitUntil(self.clients.matchAll().then(clients => clients.forEach(client => client.postMessage({type:'sync-complete'}))));
});
