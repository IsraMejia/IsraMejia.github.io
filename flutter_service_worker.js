'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c1b6554d4500504160777efb6cc398dc",
"/": "c1b6554d4500504160777efb6cc398dc",
"main.dart.js": "1f70141fb3f1f1464cef7b66aa2c2417",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "490a68d2e8b7c1bd74dd53782e711f79",
".git/config": "fc497413e3b6d2e1633c3b9c2b1f659d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/b018eb0499f7594bb084641c70edab4f1ab8b4": "43edf31cbbc028777877073a897e775d",
".git/objects/6f/09e0bb9818c817d78699fa7ba747f5e5354c1c": "36d2ebd38b709e207cf9dc9818ee0d7e",
".git/objects/9e/5260772ce2b469703242033c65a55730a4c079": "401a15ec8dd8b0d49ca1051431704bef",
".git/objects/35/13e078a65ee505c4e62554e1efc6187fc1a75b": "0012a58a22026ddf00e8ba3334fe3718",
".git/objects/56/420bb3168d54a57d8ff667a0b508f2dd9fc000": "e2d168b79de0339e9149c305fa222f23",
".git/objects/d0/687a690c0117166f1a45df06469c08869d53c1": "660b58b2ca107b9388b04c1010e71216",
".git/objects/be/170de4e8e21c8b7f776a9679858f3cfa68f108": "87caad862b5d51f986fa16fb682aff0e",
".git/objects/a2/534305d49cebb886bcdb09e7ec37315c3b55ca": "7d44419450f63f1ddcdc527930ea86e2",
".git/objects/a2/15d687b662d4a105fc116492d0a3add6435cfb": "465e04e6ca52ae0238c420f575f27413",
".git/objects/a2/d3a6e08b4c6245426289f3d4d1e5940271923d": "bf2bd178615155403cfb703838209203",
".git/objects/a5/c6c99073bc0805d8e89ca36cf8b81b0f7c14a7": "d873d5c0c595b00bc8200a34bebfa60b",
".git/objects/ae/e576b86231a031e2056534425f6517fc3e2b81": "457c63945d37fdd624502f47a2df2441",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f5/0f4b20f53605cc01e9b4ab1d577406a388c3ba": "6e0525fcda05d81bc9ecb4ce3641b435",
".git/objects/cf/7ad49464df65eaade45dbb819bbf1b2a2d7665": "ad1b5c0f2fc6e15f2ddaaa7ac9e331aa",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/80943189911544cecfd29313eacb3f24c025cf": "d11334f1d629bda0df6511f2e71793f9",
".git/objects/74/64f20bdf606b4964c0775c043ca6200655e2a9": "a647f5eff1ca34b6efef244863cbc5c9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a5e18eac2e77d8ea9ead224fc32fcdba2f4c79": "3b8787274100693e3833a394140ba43b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/69d375484cee4c950a792dc9048b0b4146097a": "b2f4a6d03f2ac2b2b46e6ec18260fd70",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/54/1b86f420eff69623f1890aaa085d59ba844db2": "141a8f11682d939189b509672d79e9e6",
".git/objects/6d/7d311a5183eaec367db9a6b02c7c315e2af9e7": "0c8fde9187bc942f70d3bfaa262c5f3f",
".git/objects/6d/fae81898d1ec22105a057feb835d3b67919e0f": "d09c0aa326a33d7937cc05c64a2ff13e",
".git/objects/39/6ace852cc409fc98e6f95279c421ad8ca53aa8": "b4a0c82184048703ce55f3a2b4b5758b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d4/3a33c07fc3853e89b3b5b60f8d66205d04a25f": "4b88bc0893f0d69b534a5e59f3086bf7",
".git/objects/b1/8036dbbbb846294c31e58a0a3de5bc44ed76d4": "4f5ee88e4c15648972638543796dea67",
".git/objects/a9/e50602765fff1a5da1762cd6880eac7dea860b": "ea3de9ef69627cea9c131d9f5c41f5fc",
".git/objects/b7/47b17766acc9b9df3a162fb18a3faef8565d8b": "a2c018a89331d510c1582de56d8c711b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/e162b323b1cea7e81d8e1410b61a9923677f77": "0a361174ca4802d97fd6f86c32f2cf1d",
".git/objects/c4/9be185551113722be237f8430cd319909e5b5d": "07880f7caadb60fab1e4db9635b61ee4",
".git/objects/ea/b0902a810f0ca45655503090992de7f11bc59f": "7a870ae2e308c9526f314e7f9f07317b",
".git/objects/cd/ff0ef83f36aa6b836c7b9db9d1ead4d807b5c0": "7db15fdd7f2623533593aabea7dffa72",
".git/objects/cc/d1ae969f3b1d2d5115040053658e2a00a93e46": "fe11fb7b5a5fd5f6f2c21fc95d351d2d",
".git/objects/cc/4615da4d1c64d84ca7396b4b2b049559e7b257": "d47917d58af9f3647c83a3bee7e6b203",
".git/objects/f1/32ff5b965a32509c9865352a7d9c85e76b3407": "602b4c2bec4697be7ffd47f574959640",
".git/objects/46/41bcbe271f76d342f9128809290957f8a36b2b": "0a635f81eadbb9d19305f6332c96229f",
".git/objects/2c/e369785db0d5bd9ad9c2212d87b9485d7e4d16": "726c7cebbe935a2afa03ddd44e70bbff",
".git/objects/79/5538a3f5522a4139f2d58c2df347e09167557e": "ba1f1ca3bb0b1899de314f1993417444",
".git/objects/2d/2e028e6f61b78ea24c8f5a2a0e25f3f5d87eef": "4c869b9082ef194ade084f34304104d6",
".git/objects/41/bba47b722305e3d3de76f244edd6f8b405c2a4": "d6e6bc9862e8a6e1f3f99335c2612b35",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/48/6b1c32d6873993905e0ba7b22ec8f7f495eccd": "64d41b28da005f898cea9d99031bb4dd",
".git/objects/1e/1b1b55a3578f0bd51ae3b85c0b758c8ba3e3ff": "9af7209d4a467906c6eaf1cf36066596",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/ab3240d206fc052a514a8946429c72d3890c29": "4b062557dac9d8fce597ebf6a9da182e",
".git/objects/82/f9118e1be77c895a7313a353b6767ee492f5a7": "10bf3fe2257a420528a8c82be8a653d4",
".git/objects/13/738b21d1a75eac1c24b0966a72c2dd01c4a9e7": "f0e5907a6a3eca8fad3ed30298794f27",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cebf07d972daf29938e6e58d3284d5b7",
".git/logs/refs/heads/master": "cebf07d972daf29938e6e58d3284d5b7",
".git/logs/refs/remotes/origin/master": "cd79f94c00a732bfb4b318732665df8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "034bec9c7c9cc583fdbdc2e6be710bfc",
".git/refs/remotes/origin/master": "034bec9c7c9cc583fdbdc2e6be710bfc",
".git/index": "70f3c4d22e909fb53b6de2bf82666346",
".git/COMMIT_EDITMSG": "3de5581565d7e8f9de4fd0b9a353e34c",
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
