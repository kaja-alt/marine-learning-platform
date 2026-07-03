const CACHE_NAME = 'marine-platform-v11';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=11',
  './search-index.js?v=11',
  './search-data.json',
  './parts-database.json',
  './trainer-data.json',
  './manifest.webmanifest',
  './offline.html',
  './icon.svg'
];
const APP_SHELL_PATTERNS = [
  /\/$/,
  /\/index\.html(?:\?.*)?$/,
  /\/styles\.css(?:\?.*)?$/,
  /\/search-index\.js(?:\?.*)?$/
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => /^(marine-platform|marineTraining|marine-learning)/.test(key) && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(client => client.navigate(client.url)))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isAppShell = APP_SHELL_PATTERNS.some(pattern => pattern.test(url.pathname + url.search));
  if (isAppShell) {
    event.respondWith(networkFirst(event.request));
    return;
  }
  event.respondWith(cacheFirst(event.request));
});

function networkFirst(request) {
  return fetch(request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    return response;
  }).catch(() => caches.match(request).then(cached => cached || caches.match('./offline.html')));
}

function cacheFirst(request) {
  return caches.match(request).then(cached => cached || fetch(request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    return response;
  }).catch(() => caches.match('./offline.html')));
}

self.addEventListener('sync', event => {
  if (event.tag === 'marine-local-sync') event.waitUntil(self.clients.matchAll().then(clients => clients.forEach(client => client.postMessage({ type: 'sync-complete' }))));
});
