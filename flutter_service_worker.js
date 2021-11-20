'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2b05d3a6a922c4498fd9f6997582c26a",
".git/config": "d3ca895e0347f9204b939a1bfad1c50d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "408601a6196d8c85583b8b449538962d",
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
".git/index": "25f83466f1c0b3f66298cbf47fa987c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "593e179c9b54d65f4081a612ad25bdc5",
".git/logs/refs/heads/main": "593e179c9b54d65f4081a612ad25bdc5",
".git/logs/refs/remotes/origin/main": "d0da2457bfa31ae82936db88cb955e3a",
".git/objects/00/ba39c5a8ccea26487b9503d244080986d96fb5": "1d9a4be170d2d170f900a18a5b9c0205",
".git/objects/08/007bd493cc607a004deb4ef30fd256912b6605": "f27b2545f1b41c04c5130639b4dde904",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "fd4ef62e3de637b2e51ef92caf1601d7",
".git/objects/09/5351f068f6f84cc20c2fd087da374368440758": "358acbb1ce4221024019da8d415d5e32",
".git/objects/0b/66c2499d60760448156bb9176a58aea650ba4d": "84d0c90337cdae9c3e5847444937dc28",
".git/objects/0b/8f4eda39eb7ce5fe046e28fd374f2fc112d342": "46fab2b20d7ea997bc6162623b466488",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "b529124d5eb3af85ff90c103416a5446",
".git/objects/12/9aff990b07f6e5bcb62efffe4cfdea6a895b9f": "ae1530c015a9aae0e64b10eb4411ec1f",
".git/objects/16/16e85bb333ef3c6618e9d5afccd84a435264b5": "b8e3074bec19120151cc5c04123d113d",
".git/objects/16/fc061d5e8608e5b340748ae6b85f157668ef74": "9d701db5fde4750cd728d6c8ea63e0a5",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "85a548d75c0dc5fe08765814cefef5a4",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1e/ab628569e90038db333ec49876bb5bfefcfff7": "417851095bbdd43777dd1be80b3495e2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "6358728b0f5f1027eeb127e5833b5abb",
".git/objects/21/239e3d3832aa1ad994fdb8e97bf4f926226853": "1030a1e75c20ec9e31fad21c01e12122",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/2d/101b59abd81ff148ae8a74ab2292ff28d17d8a": "8b0696994fb7715b811783764dac5d0a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "352867978a346c506bb3faab4ed092f0",
".git/objects/37/675f064a2d49ea5071cd46f15ac8bcae97fe9d": "71d01c957ac7ff0c8ef91cd6f9d7060a",
".git/objects/38/91f9a092e0265a942da5ce54abffd9896dfe0a": "7e3150a721ad3ca8e104b66788e07c65",
".git/objects/42/e9cc28923718c8db08c96dd39d77df2e9ea93b": "92d2e68093b5bf12814e3409e2a1d54a",
".git/objects/43/05db384d488714bae2b22372e0873afdaa100a": "612720b7205fad58ba16218df8f620e6",
".git/objects/43/c1c11737ac805d8576fb2590e5d9f6668582e0": "e06614b0944bc2316c96e3c316c19b43",
".git/objects/49/7d09ce413633f05037361661ae431913ae1064": "76cd11bc1766a9d261b21d46b7334732",
".git/objects/4a/c763724f3cd392617b72fe9e5a2e2b49b88d50": "8d43f6d2d7479a62401ba2c870988708",
".git/objects/4c/33bf6e9a16b731cab5069e9277ff01189ccf61": "a30115094438a0bc6c5cb369aec3a5ca",
".git/objects/5c/9e89c1d65974101e0b9ff9543d3646239713cb": "3bec535fa68149a82f8368500fae3d45",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "03ec891da840f91b860f2816fc32ef88",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "d501b3be4bebb30b597dc883f68785c9",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "bd00bc8771acb68a6427bb2b44ba6e20",
".git/objects/67/2674a334009d508571f06cb4d30f1a7e5107ee": "a9b44e6ebb0d39d635637bcda1c7ed6a",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "d3207b6e7853d04c407564d74d364281",
".git/objects/6e/664de3d6dcc7239749cce0e3a6137454d17d9c": "302156a4b8bcb4a2fd1ac1177376d201",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "afc368b55162403fdc7fd89a0674a9f8",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "7b44ba9fe47935a69d73ee8303190564",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "3f12d994c5c2ccab0a8fe583a12067b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/7c/a1b64946b6a14c1d5ee0bfe6a7397c89b065ff": "6ba517db9183af5f65d67a4d52d900fa",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "bffa5ae7d204cf64d894d3cd7b0af05c",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "7ebb349171414250826b1e52ed1078b2",
".git/objects/87/1a89a27ada257918704c25c4aecc972418dcf0": "67477826a0f2254310ef2919e17b438e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/61c3652180a5182eb06e2b2ff8eb256952f96d": "7ebd74a33bbbb642a146558f0ea37536",
".git/objects/8c/e4fef72853844f6fb21dd70e71d8ae628269ec": "f8a169c99de9347a7ad8e517ec667e89",
".git/objects/8f/d906202508083af3ba8bc772c94416fba5b285": "a54e40f20c2b1b814cb92a68ca441f8a",
".git/objects/92/c33977268f7d9271452921dd631766e59e0a33": "000721846fbf72f49380e6aee7ec0662",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "fe82cb5d1dc87fa940fe30e6a69718f7",
".git/objects/9c/41ab84863e38b4dc8b2878d489584cd784e213": "5951a7ebd866a32552cd1f32a711a369",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "073a64c1b93d2a1a0e65dfe7af75f1ca",
".git/objects/a6/d3f8f92ccdbe7ec105f1f5aeb346393d3e474c": "f847edad44f09fcad7298c6cd991abb4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "74a5ec35adc4e11c71619fa7b961b7d6",
".git/objects/a8/dc1958ba4800ad7f76689e56d861d55aeddb08": "78c3b0825907010200281866508b6006",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "b30e263f57756ee50715304c86bcc63b",
".git/objects/ab/28e6bca82e1a232d84e259581c8d7530314e3d": "63403f28237196a47d8a4c8c3ba4fb72",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "4baa6499fc13a25b33f8a73f13a4c9ec",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "e63bee6e4f2848a3a58ce68527bffd83",
".git/objects/c8/53d6ce3d18d233b4771c3508124e8db6bbe2eb": "a88afd531fbc7e207ce382feffaa1615",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "3bedc9ee97a529723c645f042ebffb23",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "28f53f6738e356ef507d56965df0a2fe",
".git/objects/d8/102feae76014f4513b9a26150f47aa7b712c58": "9de1d974eeae7b4f25fb6bd2d3d76460",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "5602d52c883a38d21379d5535a14ba30",
".git/objects/e1/ceeb8277f6f3aa299abecc209e8c3a7ce4558f": "618f9cf256be05b6c717c591306e598c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/f1/2c8cf89cf11f9b738e18f03581730e9557fb36": "fc9ea71be79b5224ea6861a1f4d2a51c",
".git/objects/f6/6384c7e6fdbbed3072b936509359178f7d2790": "722891201546b90f48a4bce9625171cd",
".git/objects/f7/b08e0783cce84ae0881b0b7c9a39167098e84f": "3a2971bb4c38ab2d1394ae92a1584b9e",
".git/objects/f8/8550c316904a2bfe7f42f995156c5c1ffcf597": "fd988becec75d15d5d9feacfbfe08057",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "e0c072043f8b9c7d70b637b3b856eee1",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "bcc060f0a05fdcc2b0dd8d83914b04ff",
".git/refs/heads/main": "bdba7f57f41b0c22231d435812f33724",
".git/refs/remotes/origin/main": "bdba7f57f41b0c22231d435812f33724",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "91e2ce9c12c0acf3be71b96ae9dec4e2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/logo_mustakis.png": "2b08ca0f663e4d72b691f4213fe2f312",
"assets/NOTICES": "4a26581e3fb70d56d2a775abf9bed99e",
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
"index.html": "8af253605084c44aa3a111907542dc5d",
"/": "8af253605084c44aa3a111907542dc5d",
"main.dart.js": "faffdee92417201306ee77f0058ad0da",
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
