'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "45011c492b7f30c98a8a69d2b0251710",
"main.dart.js": "12e2b748d509df5e7f409b58b3c68940",
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
".git/config": "cd828ab7685d2b9e13bb46e395dd8a1b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "cf50063bd1845008d6517fc11c9caecd",
".git/index": "056130cf201a69d328810b8f96f8979b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/objects/7f/c1f3571f53daa966afaa22caa94250552a4e71": "3769a4242581c09a583312b2658b08b5",
".git/objects/7e/c3df3e3ef2eb242b285777ecf7c4e087d42e6b": "251603d092efae6e2e5d1f348358ab25",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/35/d70acce31ece6a340e94988b0a68d01c668865": "838ed580dad07e939dda777531e1824e",
".git/objects/45/91b6fd62017bf324718cc427011e8baaea1833": "367c28ccb1653e665830152c43868d59",
".git/objects/45/d279c65cf5c8b83f254947c65c516a2c1aff0f": "df47dbdf99b2401c382d71092abddcbd",
".git/objects/d0/8491c38e4c1fb520d64823984074f8ac898e33": "159f0c1565de830e1e0f7634c187de01",
".git/objects/a8/e69e40a37fd227670e150e3cfe314b05cb3e52": "d9a8c3bba14b34838a34f7a01ab13832",
".git/objects/a8/862ed9656d9208d7bee950bfd6053a833fb7f9": "384e0d9514558742637636c1f8e8b6a4",
".git/objects/18/83ebce51115523879f4795a9b81b54fdee1911": "716956267f8dd447c240ef2c15ce86bd",
".git/objects/a1/0cc7ce3767f5a432f4519dcd965bfc6b968eff": "14900dea5c4d6795a367975fec91c933",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/874272de6f8d5471c6a08d08b012a6fc90d44b": "ce9568d685965920f2e8e18a1d5c2153",
".git/objects/bf/8ea4f70e0dd614ec8484339dfa5b82d066d01b": "27523a18d4aad6f626055aa55f0bba3d",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/e3/1da6fd92833e70c22eae35c3b5e5c8a28b25ce": "3d35fcbc33a85b513eedc1a2c23c53a5",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/20/07755641ba5b733b05270917fdd4c4172c846a": "3ed4d726d2b95bd8cacbe2164794cf12",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/04/3c2661188d7b434029a622e84d79e965eeb5fa": "e0a94f355174d02e4722fcce05f31eb4",
".git/objects/7c/c55df356e52ad4fe7fb8944f7958702e2f5045": "64e503efd9eaba779ac82f5e168e6577",
".git/objects/7b/7692a16236dd5d88d8bb5ed1779ea9dbc9475f": "c80cb3f4bd4834a31f7684f16ad3eea4",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/72/16ccd3134abf515d0aed816fb92ac7a31bbddc": "72bd7efc25ee557897a8563aeaa637a2",
".git/objects/39/2733c367c58f44260b565b83ac8de6d7e7005b": "25f64d2d7599eb4145504e582e56828b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/49/3b1882cb6b407e567df3fd3417335b1282b22d": "40c6c1dd9653f7989006d6e5d14f9776",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/44ae07217138e55307f6eeb0d65dd18094bee3": "6218ef150219ed9032fbc5b8d283b47d",
".git/objects/ef/59a87aa69e4e705b243a943d391a1abe3482df": "8f1e4359cb8e647551db65546eb728b0",
".git/objects/2a/f58e2de10f15daa395f2524aac474240de791e": "f6de25289e1bab2edce3568db71a359e",
".git/objects/a6/ca5aa9658b1391034d18e09c019b003c008a69": "a93d313aba27c3703ff722fc8912740c",
".git/objects/a6/f9fd9f506c1528bbb9e51d9ad8422c94676753": "b14cedf779a232d09b2a71237ff4135e",
".git/objects/ad/3db5e1ee526c710bb24c58463ffb1551b5a8a4": "78424e35a1a91cb5977475e015111734",
".git/objects/76/8ace7dcd18440be7cc236231d4d0c273bb2c16": "4449ed80261f814a60fda3a0edad8d6c",
".git/objects/76/f43d3381f2f0e056ac2eff4f8828be7701537b": "8b8bc2e5f05df63bd7ad203115930dcd",
".git/objects/9c/3d202f1fc87d9e49fef04a14ade1c1402b5613": "054f0e9b75765bea675136f85bdbfc34",
".git/objects/30/466cea95dc2cf85c2fb4ae387106f1a696adec": "e27f570208f1b825e098dcc27aa37095",
".git/objects/30/4125bb0ed1322c8c8c159e081633dbfcdc3aea": "18091468de4238438078c3418b2d8b0e",
".git/objects/f8/1c594b9a4e7bc4b632375006a8f1c4c5e08cca": "afb05b5acbde8057c15f2580bae645ea",
".git/objects/f6/a32e63b6e9847e378e1f82912deb7e4ee8484f": "9fd56ed5ba4b2997e00171a56437fa5e",
".git/objects/df/c8e7fa28fc1a68ebe024c76449c5739e846035": "082e5161ee5e534d51ffc22baae9d40e",
".git/objects/df/c9a69b4854632268a8d8fd8f4153ca58f88f54": "234329bcd6bdba26105590a8bce63d82",
".git/objects/c0/f65a2a2d8db85014f60e386be9de0ec239b7ef": "173e29da7d7c701e8d8f4f797af13a78",
".git/objects/c0/f21bde38e88625784be6e1522c1d4e6dc9dc84": "c4737d4b0689dfb96b8e7aff6583bb37",
".git/objects/88/f7565fd440357f4550d9c2f16130fce0230809": "32ca20bb39dd4cedb9f292eecaa62340",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/11/8bcfde8ce77106f653f71c6505ce4fe5cb7ffb": "5d63e99e81b706a72592e74d8366b640",
".git/objects/ff/75c1f95eca3673fdeca699d9db7ec9da39f126": "e8914e2686269aac1b23dee24e1e7409",
".git/objects/89/9e519687e3b3e2836720751de0f1ee0ed8478d": "3eec0d2347b26dda705af35b0536fbc9",
".git/objects/78/623a858ac5ca1f82185477d659e9c2881f35a3": "842d942983daacb77e738eee93c900f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/57c5ec77baef7c2467128755cda786ffdffe62": "7a5bef8b39e927037cb68a09192598f5",
".git/objects/60/952719918f4b38e82ba8ca1758771a43888abc": "3a267fd43f51c9da1e901f0ffa028e9a",
".git/objects/23/76c188397f1b110302c62bc0cac4b372c4dc91": "db3070e84c2594be574af89cdb5104c2",
".git/objects/07/264d459377111613bddf39cd1f6497dc742ae1": "7fffb29b94c30f1e3c03359f8e13e561",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b8/d1adce989fe0c2fec1e40ee0a02d43584f02d0": "9f1a6ff3a859c0b823fb9a32a9e2981d",
".git/objects/2f/658cd96fbab5b05202313f416bafbee7302990": "f4f2c3eba43acb2ace972ac9f1b649e7",
".git/objects/1a/9a4b786233924113c78e036325fe267fff51be": "be809b54158863a4b645eddc0eea3d0a",
".git/objects/33/7a399bb195dab22f606b15382feccceaed77ae": "ea712aff536ec1770aba470854c18b39",
".git/objects/33/8478889452aafbfd2dfd5c31cad1dca3dd5025": "c3a25687a0d50f8f463a19243066ea1d",
".git/objects/1f/66e1e826ac128bcaa3a7e6fb6f083ce5dae779": "bbdf600ddc5cad5f435fc24ed5205ddc",
".git/objects/1f/1e96b7d77de873425d77340fb4d0dfc87d13a1": "f826b8d7a5627a8fe9e2691cb8d8e548",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/a4c56a0e2bea98171658e19f12cfff3ee39514": "bb3b422869404c87d48a6eb03e7efc2f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/05/90f09fda293e9ee522586a1a1c1160e3c59e8a": "261f87c06fae723a84c8e4991d42b348",
".git/objects/05/cc08be77d65be63b742c6420acac133ebf150f": "1f297c17b567ac8a5486b3ce9776f107",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/85/938b7c2abd3dedd45b16933763710592ffcbb4": "94b5d142ac0117e64609cb003f103c2c",
".git/refs/heads/main": "059d38076145d66e960273c51838cf8e",
".git/refs/remotes/origin/main": "059d38076145d66e960273c51838cf8e",
".git/logs/HEAD": "877f1709bb64f6c74e857caa0653bbbc",
".git/logs/refs/heads/main": "7ddb915478ae657819f65adc7cbc8897",
".git/logs/refs/remotes/origin/main": "eb1167a6c25f15ab06b135069651b95f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "8d21315cc6e163bda1fcfff73be22534",
"/": "8d21315cc6e163bda1fcfff73be22534",
"version.json": "9e0d76748dc194dc6e00649c0881b8fb",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
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
