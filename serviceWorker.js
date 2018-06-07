//creating 2 constants for cache and directing URL
const staticCache = 'cache-v1';
const offlineFiles = [
	'/',
	'index.html',
	'restaurant.html',
	'data/restaurants.json',
	'css/styles.css',
	'css/res-info-styles.css',
	'css/index.css',
	'js/main.js',
	'js/dbhelper.js',
	'js/restaurant_info.js',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  	event.waitUntil(
    	caches.open(staticCache)
    	.then(cache => {
    		return cache.addAll(offlineFiles)
    	})
  	);
});

// the fetch handler serves responses from cache-v1
self.addEventListener('fetch', event => {
	event.respondWith(
  		caches.match(event.request,{ignoreSearch:true}).then(response => {
    		return response || fetch(event.request);
      	})
    );
});