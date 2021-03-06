'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "74a9abd418863134af06467ea0781dae",
".git/config": "3fce54417b52799c102c47a682a964d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9a28b55450bb94baeeb3c6f8d32b34e3",
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
".git/index": "fe7911cf117c540526386828f55b73b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f6ee95b5b27e2d6a811781df7105421",
".git/logs/refs/heads/master": "2f6ee95b5b27e2d6a811781df7105421",
".git/logs/refs/remotes/origin/master": "3fe0533e866eca972041ade47822a96d",
".git/objects/01/c2c4f97b80a0f525728cb1d1e84e6ed940f28f": "b07d355a057cc673f220a584da98cb74",
".git/objects/02/69b674ed09b4079b44e303bbfc6b35f8a14b1b": "7387d6227e8b9dbe08c4e524ea5c5b0c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/8755b794f6ae295fd1d6b7017a1f5d0190a5b5": "5d11cbe3f46153dc19493a3ce64bd45b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/b9839cf1a1235d333696790557fcb504b50364": "7cc4d886db9c9f08e303313d9824bafa",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/d9093e86d5afc6afd31a1aff5b2789276b60ea": "efa8c46b795e3510fad439b332f15a96",
".git/objects/16/88e44fdb63e24e5457f231fd72d61c9633041e": "b877d58cbee453eaa502795b667f45b8",
".git/objects/18/cda5e32e3d407b59a71b9a9c4ea1316f4998d1": "e57490c5e13fba820eaa54e0af973226",
".git/objects/1f/3826171863d2dd8c85619c2d5eb1e1383bc10e": "23468482ebad193c0033cc97a47f3d9b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/2146c0a8c7efb6e0f2226230edc031fbccd325": "3c6a83c81b1f64b972a35dcc5e61e52f",
".git/objects/3a/46edda19e1dadd3404cf646a273c239845ccc9": "13b37a08434fbec895d1dea403ecc134",
".git/objects/3e/76916ff573e7826a4356d0e70304c368a0d3a0": "d81be9b7d717e5f2bf35068cd71cc02a",
".git/objects/4c/a4302e8d648ecd56c62dd8dc84d48372097dc5": "d3d456131d82dc2dc71440db24994667",
".git/objects/58/0c9e5c4968b0851ce5a94a55b0846ac31af3dc": "71f03ad8338909f68e938ec0f4601d88",
".git/objects/5a/4cacc059f354470022c3a90e2a45dfc312cc97": "0c987688bdf5eab7ae1b57ddec82d616",
".git/objects/61/8f304d8d6d114bd8ed9cddefd7ad19d41c4c43": "119eaf1deb4c580d3e121c45a4f1e926",
".git/objects/66/c692440dad5955f3fc192d2afe0367c0834352": "184e5bcd543896b7b3aab95eacf0b9c2",
".git/objects/68/648d5525ab268a5f9a82d7f83c6110dacdb658": "08d249dcd6f163bf3be42bb22496ad7f",
".git/objects/69/4252be28710c24bd0479f60f4f7202d06576ed": "a19d3de48aaecef6170a1b8c9bf17a96",
".git/objects/71/0cb1a2a2c8d18f65faa0a87b9d58cb68583b51": "f112dc7b96bd09dd42387d07fcdc6f3c",
".git/objects/78/315776c4f5796b731119dd9e10cb00e7070bdd": "59818ce1ec6fdd1791f50cdc147fc45b",
".git/objects/78/5c62744ef9efbeb6ca58b76c29abeb6f930040": "8562f0a0243202da14d7c804165a0a19",
".git/objects/7e/482690baee76638b21b5364637cde12c2f48a7": "98eb8d6a61bd502a7f9743c614969a77",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/95ef2120e80b4ca1bc87fd5eeb863b9e42760c": "89aac7d8d2dc884917730cfbcacf608e",
".git/objects/8a/7239fa672a3e4b8919495bb25d56442b1fd826": "af84ca0a421875203f27825c726d59ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/38795991406e1c741302c85e53b47e8c2326d7": "5391c0f2e98d7a8c96ccd47d4d099d06",
".git/objects/8f/5454a0120021a73c2c9f3fab98ac1a0dd390fb": "c03002ee9a26328610a074e7ce7c549d",
".git/objects/94/6fd484ec614c9cba24f0adc66e008ab7850ad3": "b552a8fab643b27b0e698270a361380e",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a3/59ad6099c8200153892b8ca58d2961b7e3e805": "d12a5908fbf1bcca2431a4c04ff9f854",
".git/objects/a5/71efd228262f9eabf9ec176138d0226b2e6aab": "f9a11438ac7e354cb42630972c84ef7b",
".git/objects/a9/28e8c0e01ff5b3c0ae069ad8ad259c281d44e2": "27d9fc97b83f45724b32e56aaa30ab37",
".git/objects/ae/f8af58caf4b2780306b7c515452aab7320e4cb": "d83575b4f026040f7645a74bd8d2b624",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc024e83f402168d54a308082f619cf7e08489": "c35a7748ba5d4e8800d87b91e501d556",
".git/objects/b9/72b469169ea59bef3f7db4f58087a6c175cef0": "7532607835a83ade143c55b40aed8920",
".git/objects/ba/9a2742129927640c942a06a6a7ca54b4fa8756": "f6e62f98a4d08b6ec1e158bc530a4a41",
".git/objects/be/9697316aa36c4a4e0d2fa8adbb45fccd933032": "497df1fe8e78ff124570a46537dd5d05",
".git/objects/c3/582411182618c28ef55490def38837503defb8": "49154e950ca7098c8a67a11d4489e531",
".git/objects/c7/ad177a28ba59a2bd8ae9b41627e7693f20c377": "47a5bea02d6a80728e894ae14cbb8967",
".git/objects/cb/eb2032d69212227cbfe661932d6d97df5ddde0": "6acf7ad17f8feff05e776fd7807acfbb",
".git/objects/ce/d18e22eed70a7efbde97efa23e8da49686ff64": "d80f4323f00e7d840d55510d443b2d6b",
".git/objects/d2/a7535613b9520a9f9bfbb63af02a910651bf2a": "f273a6e8da668d5ad34c22a43deb00fd",
".git/objects/d5/51d05c234fa689ff45c098a71a78aa8ea22256": "4d2e4e1e54f241262e436267befd0e14",
".git/objects/d9/b397711d28d51c5e92380c776c1b1ac7361bf0": "796c1e18ea0f2274e4e53371fa0fbd44",
".git/objects/db/ff3f5a5d868a642cbb2e3966cd4e20963b108a": "d55670c6d1ff9324833dfb718493401c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/d5a83d8318ca29cd43f0bbf0dbd6de32d4fbcd": "93a55e23ee4258e8908094babf5394f6",
".git/objects/e4/7cb649b3df10e65e73cd7746633d80d0a75e02": "78721eba5814c2348481b98418774ef5",
".git/objects/e6/0986bafee4138650d64925da4b184889b4584c": "af283ee13e6facc16ea7d11ab318e691",
".git/objects/e6/cda830456fd48ab0794bc1e7d58af253382378": "77e6b67a3a6ac80e6bda93ed21b2f4c4",
".git/objects/e9/acdc77b48036a255e7af9c7d9079d80d1ec583": "561f07a5db93148b5bb2adb5533f16b6",
".git/objects/ea/1ec4cf2d113b61587920f1886e73d8cfdd4221": "d41106c7068e830d481f832f2ab9b59c",
".git/objects/ea/a709d458fce656311c512cb1348649cd35f922": "f485507f6fcc3b7033001d1712d68a27",
".git/objects/ef/5b6086faaea490cfb7776aff68495d0bdf65c7": "3adef861f370beeade1cf5a4345fe060",
".git/objects/f2/9a8ff2e4de4fc49ed789abe01478653c4d81e6": "795889c460559dcccea2b606003b1faa",
".git/objects/f4/b495007007951f03c39dcc7c0683421ef228b5": "ee254a98db9e66d09950b1a36508e811",
".git/objects/f8/519c2763ced4697a34006116248077f44caa33": "f16abdd5a8d459c13117477492dd4921",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "6d00a8749822bbcbaa6b57f8746c6989",
".git/refs/heads/master": "5001b1c3b7127e9e2d83ba3423c97cc7",
".git/refs/remotes/origin/master": "5001b1c3b7127e9e2d83ba3423c97cc7",
"assets/AssetManifest.json": "12257c8edbf62efcacb0c4e22d1e5d04",
"assets/assets/img/img.jpg": "de02a86b4820b37cfa8c488abd73bbf3",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "30e0ea689aa1d662e2b9d58032f7c5cf",
"/": "30e0ea689aa1d662e2b9d58032f7c5cf",
"main.dart.js": "a5053974c015ec2a33f92ec6152f3912",
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
