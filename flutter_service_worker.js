'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c1b6554d4500504160777efb6cc398dc",
"/": "c1b6554d4500504160777efb6cc398dc",
"main.dart.js": "d909a9fdb3e8e7ac0afdd471b24a2223",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "490a68d2e8b7c1bd74dd53782e711f79",
"assets/images/tierraPT2.png": "f4b87340495c7fbd28ba4838a907ae17",
"assets/images/swiftLogo.png": "78fa05da29af429bc8e9dbc31bf3a703",
"assets/images/GDGUNAM.jpeg": "ad5db08af18bab80936717ba5106ff12",
"assets/images/AppMemes.png": "61c97a78416a6529e64ae24c38abd50e",
"assets/images/Polymer.png": "bbfc642d7a8cc451e6b65a37913936f9",
"assets/images/Python.png": "845911950eaecb871b1e9403976ae1ab",
"assets/images/javaLogo.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/images/AppSalonFI.png": "e6891502aacf53372df90cdce49fd514",
"assets/images/israCode2.png": "8ed5c279552ab63a7fcb0a0772a4949b",
"assets/images/space.jpeg": "156956cf12e1118065b90039b4590760",
"assets/images/AppAquadoro.png": "99bd4deede37a5a95bed11f7f73c03ae",
"assets/images/spaceman2.flr": "871e55dc7fbc29a6fa0d5bfc1325cc40",
"assets/images/java.png": "f95206adf93d38ac9591c00b29571691",
"assets/images/WatsonChef2.png": "9ddfddfed365eb6f98f0e3aeedaa6ad6",
"assets/images/AppisraCode.png": "41de6d51a37910e480c021d50206bcdf",
"assets/images/tierraP.png": "dd8016f8743c894efb1ca5a2d12ecdb9",
"assets/images/AppLuchapedia.png": "1726a42eb0ca1c745271a68640b4e5d9",
"assets/images/PolymerGoogle.jpg": "6cf465fff92932f6c06e94da517981eb",
"assets/images/PythonLogo.png": "dc199ecc9e90e4bc7e9ed9b31e3c2b5f",
"assets/images/tierraP1.png": "a8bb32bf79e947b0246b8cc2dea45c0b",
"assets/images/FlutterLogo.png": "c2761ae8804ee8ffa0266b02f039b7d8",
"assets/images/AppLMB.png": "3153d2122d874492c214f6f3ac86230e",
"assets/images/CppLogo.png": "8f42e018a9340b6e4e20161b06525308",
"assets/images/FlutterMediaLab.png": "d14eb44360e04bf7bb5f56a59b924eba",
"assets/images/aerodeslizador.png": "74222e36e99b19bd3dc913df21ca8b1a",
"assets/images/spacee1.png": "47c398791f27986a99fce895146cdc04",
"assets/images/spacee2.png": "2ed50b6795c8a35424dfb05b35b8be76",
"assets/images/isra.png": "f56d76b3836a81ccc611134f37015b87",
"assets/AssetManifest.json": "fa81009f5ada53bc0e517ce232671a19",
"assets/NOTICES": "f09b85f92b85f15d17a6a2c360158f99",
"assets/FontManifest.json": "4d54e3b567a3c4acb79462b2d23b55a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Goldman-Regular.ttf": "eeb9425bc9ad4d7d1f56849d3b90ecf4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Goldman-Bold.ttf": "74f6b4fefa4a726e098dd9eab0432638"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
