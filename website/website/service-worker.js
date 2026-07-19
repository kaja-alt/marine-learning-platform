const CACHE_NAME = 'marine-platform-legacy-website-v18';

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => /^(marine-platform|marineTraining|marine-learning)/.test(key) && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => {
        const target = new URL('../index.html?v=18', self.registration.scope).toString();
        return Promise.all(clients.map(client => client.navigate(target)));
      })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(Response.redirect(new URL('../index.html?v=18', self.registration.scope).toString(), 302));
  }
});
