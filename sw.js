// Service Worker for KMC Student Committee Website
// Enables offline functionality and improved performance

const CACHE_NAME = 'kmc-student-committee-v1.0.0';
const urlsToCache = [
    '/',
    '/index_new.html',
    '/gallery_new.html',
    '/computerclub_new.html',
    '/css/modern-style.css',
    '/js/modern-script.js',
    '/logo.jpg',
    '/img/indeximg3.jpg',
    '/img/index2.jpg',
    '/img/bg2.jpg',
    // Add more critical assets as needed
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
