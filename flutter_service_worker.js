'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "608798874ac91e706c165c3c7240fc26",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "097f53a0e806010e88a7516d8875081e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7a0225f4ccf43b5c749ffae8a0e29fb5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d670b303c8fb676b8228c116dd23a7d8",
".git/logs/refs/heads/main": "d670b303c8fb676b8228c116dd23a7d8",
".git/logs/refs/remotes/origin/main": "6c4d0573e8b89fbe48f3a841d239a016",
".git/objects/00/ba39c5a8ccea26487b9503d244080986d96fb5": "1d9a4be170d2d170f900a18a5b9c0205",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "fd4ef62e3de637b2e51ef92caf1601d7",
".git/objects/0b/66c2499d60760448156bb9176a58aea650ba4d": "84d0c90337cdae9c3e5847444937dc28",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "b529124d5eb3af85ff90c103416a5446",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "85a548d75c0dc5fe08765814cefef5a4",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1e/ab628569e90038db333ec49876bb5bfefcfff7": "417851095bbdd43777dd1be80b3495e2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "6358728b0f5f1027eeb127e5833b5abb",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "352867978a346c506bb3faab4ed092f0",
".git/objects/5c/9e89c1d65974101e0b9ff9543d3646239713cb": "3bec535fa68149a82f8368500fae3d45",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "03ec891da840f91b860f2816fc32ef88",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "d501b3be4bebb30b597dc883f68785c9",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "bd00bc8771acb68a6427bb2b44ba6e20",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "d3207b6e7853d04c407564d74d364281",
".git/objects/6e/664de3d6dcc7239749cce0e3a6137454d17d9c": "302156a4b8bcb4a2fd1ac1177376d201",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "afc368b55162403fdc7fd89a0674a9f8",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "7b44ba9fe47935a69d73ee8303190564",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "3f12d994c5c2ccab0a8fe583a12067b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/7c/a1b64946b6a14c1d5ee0bfe6a7397c89b065ff": "6ba517db9183af5f65d67a4d52d900fa",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "bffa5ae7d204cf64d894d3cd7b0af05c",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "7ebb349171414250826b1e52ed1078b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/e4fef72853844f6fb21dd70e71d8ae628269ec": "f8a169c99de9347a7ad8e517ec667e89",
".git/objects/92/c33977268f7d9271452921dd631766e59e0a33": "000721846fbf72f49380e6aee7ec0662",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "fe82cb5d1dc87fa940fe30e6a69718f7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "073a64c1b93d2a1a0e65dfe7af75f1ca",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "74a5ec35adc4e11c71619fa7b961b7d6",
".git/objects/a8/dc1958ba4800ad7f76689e56d861d55aeddb08": "78c3b0825907010200281866508b6006",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "b30e263f57756ee50715304c86bcc63b",
".git/objects/ab/28e6bca82e1a232d84e259581c8d7530314e3d": "63403f28237196a47d8a4c8c3ba4fb72",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "4baa6499fc13a25b33f8a73f13a4c9ec",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "e63bee6e4f2848a3a58ce68527bffd83",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "3bedc9ee97a529723c645f042ebffb23",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "28f53f6738e356ef507d56965df0a2fe",
".git/objects/d8/102feae76014f4513b9a26150f47aa7b712c58": "9de1d974eeae7b4f25fb6bd2d3d76460",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "5602d52c883a38d21379d5535a14ba30",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/f6/6384c7e6fdbbed3072b936509359178f7d2790": "722891201546b90f48a4bce9625171cd",
".git/objects/f7/b08e0783cce84ae0881b0b7c9a39167098e84f": "3a2971bb4c38ab2d1394ae92a1584b9e",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "e0c072043f8b9c7d70b637b3b856eee1",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "bcc060f0a05fdcc2b0dd8d83914b04ff",
".git/refs/heads/main": "c67abf3890784d10f877f13eb77d23bd",
".git/refs/remotes/origin/main": "c67abf3890784d10f877f13eb77d23bd",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "91e2ce9c12c0acf3be71b96ae9dec4e2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/logo_mustakis.png": "2b08ca0f663e4d72b691f4213fe2f312",
"assets/NOTICES": "7d823da1b887168cb5abeab64d779076",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "20db26d032907d1a907653791e1c2419",
"/": "20db26d032907d1a907653791e1c2419",
"main.dart.js": "aac521f86a58529a315bbaf491f20874",
"manifest.json": "16c48ac7cb2a378951be3f3dd495daff",
"version.json": "de16756c445b98f7cc540ab0ed5778c5"
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
