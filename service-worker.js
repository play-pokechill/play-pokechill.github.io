const CACHE_NAME = 'pokechill-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './scripts/HackTimer.js',
  './scripts/fuse.js',
  './scripts/moveDictionary.js',
  './scripts/itemDictionary.js',
  './scripts/pkmnDictionary.js',
  './scripts/areasDictionary.js',
  './scripts/script.js',
  './scripts/teams.js',
  './scripts/explore.js',
  './scripts/shop.js',
  './scripts/dictionarySearch.js',
  './scripts/tooltip.js',
  './scripts/save.js',
  './scripts/PR/autoTeamBuilding.js',
  './scripts/PR/movesetGenerator.js',
  './scripts/PR/teamDuplicate.js',
  './scripts/PR/updateCheck.js'
];

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Pokechill: Cache opened');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Pokechill: Cache failed', err);
      })
  );
  self.skipWaiting();
});

// Fetch event - Network First strategy for HTML/JS, Cache First for assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // For HTML, JS, CSS: Network First (to get updates)
  if (request.destination === 'document' || 
      request.destination === 'script' || 
      request.destination === 'style' ||
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.css')) {
    
    event.respondWith(
      fetch(request)
        .then(response => {
          // Clone and cache the fresh version
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // Network failed, serve from cache
          return caches.match(request);
        })
    );
    return;
  }

  // For images, fonts: Cache First (faster loading)
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });

          return response;
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Pokechill: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
