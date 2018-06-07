//registering a service woker, 
if (('serviceWorker' in navigator)) {

	navigator.serviceWorker.register('/serviceWorker.js')
	.then(registration => {
		console.log('service worker registered.', registration);
	})
	.catch(err => {
		console.log('service worker failed :(', err);
	});
}