'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "45011c492b7f30c98a8a69d2b0251710",
"main.dart.js": "a68003acaf99a6de8df814fd67685cc7",
"assets/NOTICES": "64461033b26d9545478ccb71fc8180bc",
"assets/assets/images/students.jpg": "5d2b4549b51265de3d08a064fd3b7402",
"assets/assets/images/manpower.jpg": "89dc8c79ee1e00206a7dbb527ee9b927",
"assets/assets/images/consultancy.jpg": "d98c84949e79a4cd9178250c207ee565",
"assets/assets/images/consultant.jpg": "c99d5b73709f5e63e570c103f94c5768",
"assets/assets/images/quality_certification.jpg": "7bdcc7ee2de1f805d35e421ead5a3981",
"assets/assets/images/email.svg": "49c44c45b070e686edfebc4bcd00e6eb",
"assets/assets/images/graduation.jpg": "e265f6429a9155c255e0a8afa5510ebe",
"assets/assets/icons/nba_logo.png": "a8a9e3d85d4af42ae288fad010559ce9",
"assets/assets/icons/staffing.json": "fe5c1f5ea3feb09564f9c2272eeaf76c",
"assets/assets/icons/ce_logo.png": "14585dccfa68ef4bad3d2de465022254",
"assets/assets/icons/1.json": "2fafa10ea5fb6dc8b8c908145cf34798",
"assets/assets/icons/4.json": "8d4c30870582e760db13bf24a72b7ae0",
"assets/assets/icons/2.json": "858555f78acbeaeaf2e44f3591797724",
"assets/assets/icons/nabh_logo.png": "47e07eed63784bd2dc5d1700a25a9189",
"assets/assets/icons/hr.json": "1436c55af76266a12bfac719d257af54",
"assets/assets/icons/youtube.svg": "46b8eec1e8516127dab858c2a4a416c8",
"assets/assets/icons/recruitment.json": "1a4395e270d8f27dc303db142255d77d",
"assets/assets/icons/project.json": "2e0123e427ac1c9285766165c74a91f5",
"assets/assets/icons/leadership.json": "743418d6a157b8a9240a62038a58521a",
"assets/assets/icons/nabl_logo.png": "b89b3e5828d27cef3a4d18bcbf208f07",
"assets/assets/icons/naac_logo.png": "e8dc70b1306891de7518973b11923b85",
"assets/assets/icons/senior.json": "4e0a79b17025cba97de75720dd279189",
"assets/assets/icons/github.svg": "9b12d9fadcdffa67acf9a50713fcdafa",
"assets/assets/icons/iso_logo.png": "564bc02affffe113c4bd764e2196b11d",
"assets/assets/icons/nirf_logo.png": "5ee209a618797986076599d26f6ef037",
"assets/assets/icons/facebook.svg": "cf7690e6d248b21d555ac49aac58cd6b",
"assets/assets/icons/institutes.json": "d3a9ab43c70cf6c3d3cb2b99a25db386",
"assets/assets/icons/walking.json": "6af59bdbc154422b2f3b02eb23297cf3",
"assets/assets/icons/arrow.json": "8d98f9522abe2ab7524af8a681ef208a",
"assets/assets/icons/3.json": "9fbb4d3b54267368b5fdff7d982284e1",
"assets/assets/icons/campus.json": "4456723eb5b1e8470948e470577a6dd7",
"assets/assets/icons/twitter.svg": "09d816899909b453af0cfdc03d7bdd64",
"assets/assets/icons/instagram.svg": "327f1777771d332863b4a68439168481",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "2b93fa87dc75fb06cd05bcc24a007cfe",
"assets/shaders/ink_sparkle.frag": "10870ac84e2415604b0562593a7892d9",
"assets/FontManifest.json": "279b2364b12e714d24c60650920043ee",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "6626568e489ed2d29f27c8280498cf88",
"/": "6626568e489ed2d29f27c8280498cf88",
"version.json": "9e0d76748dc194dc6e00649c0881b8fb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
