'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cd0586699e2bc9c9a521b36d76579582",
".git/config": "3fce54417b52799c102c47a682a964d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e22d0341cb1eb91a8e413a887882d6e0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "dead733d3c50e4024913ad7516f5df2b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80163c6bf3927ce43dc0a4934bd09ad1",
".git/logs/refs/heads/master": "80163c6bf3927ce43dc0a4934bd09ad1",
".git/logs/refs/remotes/origin/master": "3e1833279551ea1e8210d11b1cd5f604",
".git/objects/01/c2c4f97b80a0f525728cb1d1e84e6ed940f28f": "b07d355a057cc673f220a584da98cb74",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/8755b794f6ae295fd1d6b7017a1f5d0190a5b5": "5d11cbe3f46153dc19493a3ce64bd45b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/d9093e86d5afc6afd31a1aff5b2789276b60ea": "efa8c46b795e3510fad439b332f15a96",
".git/objects/16/88e44fdb63e24e5457f231fd72d61c9633041e": "b877d58cbee453eaa502795b667f45b8",
".git/objects/18/cda5e32e3d407b59a71b9a9c4ea1316f4998d1": "e57490c5e13fba820eaa54e0af973226",
".git/objects/1f/3826171863d2dd8c85619c2d5eb1e1383bc10e": "23468482ebad193c0033cc97a47f3d9b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/3a/46edda19e1dadd3404cf646a273c239845ccc9": "13b37a08434fbec895d1dea403ecc134",
".git/objects/4c/a4302e8d648ecd56c62dd8dc84d48372097dc5": "d3d456131d82dc2dc71440db24994667",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7239fa672a3e4b8919495bb25d56442b1fd826": "af84ca0a421875203f27825c726d59ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/9697316aa36c4a4e0d2fa8adbb45fccd933032": "497df1fe8e78ff124570a46537dd5d05",
".git/objects/c3/582411182618c28ef55490def38837503defb8": "49154e950ca7098c8a67a11d4489e531",
".git/objects/cb/eb2032d69212227cbfe661932d6d97df5ddde0": "6acf7ad17f8feff05e776fd7807acfbb",
".git/objects/ce/d18e22eed70a7efbde97efa23e8da49686ff64": "d80f4323f00e7d840d55510d443b2d6b",
".git/objects/d5/51d05c234fa689ff45c098a71a78aa8ea22256": "4d2e4e1e54f241262e436267befd0e14",
".git/objects/d9/b397711d28d51c5e92380c776c1b1ac7361bf0": "796c1e18ea0f2274e4e53371fa0fbd44",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ea/1ec4cf2d113b61587920f1886e73d8cfdd4221": "d41106c7068e830d481f832f2ab9b59c",
".git/objects/ea/a709d458fce656311c512cb1348649cd35f922": "f485507f6fcc3b7033001d1712d68a27",
".git/objects/ef/5b6086faaea490cfb7776aff68495d0bdf65c7": "3adef861f370beeade1cf5a4345fe060",
".git/objects/f8/519c2763ced4697a34006116248077f44caa33": "f16abdd5a8d459c13117477492dd4921",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "a7ed2ae43397a766dd965d46f6abd077",
".git/refs/heads/master": "6d00a8749822bbcbaa6b57f8746c6989",
".git/refs/remotes/origin/master": "6d00a8749822bbcbaa6b57f8746c6989",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "30e0ea689aa1d662e2b9d58032f7c5cf",
"/": "30e0ea689aa1d662e2b9d58032f7c5cf",
"main.dart.js": "2f1b18689e28a133ceb53f725ce6fa92",
"manifest.json": "669161665398f5f17ad9dfca8271f3e7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
