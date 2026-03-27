self.addEventListener('install', event => {
  console.log('Service Worker installiert!');
});

self.addEventListener('activate', event => {
  console.log('Service Worker aktiviert!');
});

self.addEventListener('push', event => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/427/427735.png'
    })
  );
});