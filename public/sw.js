/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-217bd66c64fd4f96151c.js"
  },
  {
    "url": "styles.b2ddbf2b7d7e7022e167.css"
  },
  {
    "url": "styles-45b6b6df39625cd365bb.js"
  },
  {
    "url": "commons-8eab9da726c17b40d406.js"
  },
  {
    "url": "app-df3aae05ecb087fd724e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "04978cc45755fb22a8f31cd7fa9317f9"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOVuhp.woff2",
    "revision": "862115d3e88e5d27287c837aa0291cab"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN8rsOVuhp.woff2",
    "revision": "13ec7981f932f0aacd6db95c1fbee57b"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OVuhp.woff2",
    "revision": "fb7dc293d500f1966f15b29450c71e7e"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhp.woff2",
    "revision": "c8696f38f823e82d8c9142839d0e5d5f"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0ddc0.woff2",
    "revision": "756076c9a5657dd1d6e5997f6e50663e"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0b.woff2",
    "revision": "aeb4b1bfc96bce2be7d95d9917d8cccb"
  },
  {
    "url": "google-fonts/s/opensans/v17/memnYaGs126MiZpBA-UFUKW-U9hvIqM.woff2",
    "revision": "af5d9ca79b29ee5ec4972e1b6130ff4a"
  },
  {
    "url": "google-fonts/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhvIqM.woff2",
    "revision": "689fecaf9ef739eb5f868ad5b2a9b5cd"
  },
  {
    "url": "google-fonts/s/opensans/v17/memnYaGs126MiZpBA-UFUKXGUdhvIqM.woff2",
    "revision": "c6fb4cc31135400dcd7c4d453fb7d421"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5bebfd176d299dae5551.js"
  },
  {
    "url": "component---src-pages-about-us-js-36c4cf14e2db5b1f3b33.js"
  },
  {
    "url": "page-data/about-us/page-data.json",
    "revision": "682f15b9db8fcb190f7058f1502a6f9b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5f704fc981ea00e29b743edc10d13b6d"
  },
  {
    "url": "component---src-pages-case-studies-js-52945feaff3d911b4bb5.js"
  },
  {
    "url": "page-data/case-studies/page-data.json",
    "revision": "0f40757aaf6053a48643c15befd7435d"
  },
  {
    "url": "component---src-pages-contact-us-js-a46b21351e7ae4997ee5.js"
  },
  {
    "url": "page-data/contact-us/page-data.json",
    "revision": "64e62511d676c1d3be53944de1c77e9e"
  },
  {
    "url": "component---src-pages-index-appointment-js-8731b2ea65c6eba424b0.js"
  },
  {
    "url": "page-data/index-appointment/page-data.json",
    "revision": "766698309598a77d152de9b3cf1e4265"
  },
  {
    "url": "component---src-pages-index-infotechno-js-af59733e269e6f8c380d.js"
  },
  {
    "url": "page-data/index-infotechno/page-data.json",
    "revision": "cefcf753bf383113ca6142566ce642e2"
  },
  {
    "url": "component---src-pages-index-processing-js-526c8f55cd15542d7a2c.js"
  },
  {
    "url": "page-data/index-processing/page-data.json",
    "revision": "be8d0f3209dfd72e16e4cf5e7acfa5f0"
  },
  {
    "url": "component---src-pages-index-resolutions-js-4b1b7827de0df65daa13.js"
  },
  {
    "url": "page-data/index-resolutions/page-data.json",
    "revision": "e855a63a2072c305528126ffd01d07cb"
  },
  {
    "url": "component---src-pages-index-services-js-33d904b5b37ef3da797d.js"
  },
  {
    "url": "page-data/index-services/page-data.json",
    "revision": "d1524ce3b0fdbde49bed044fe822c416"
  },
  {
    "url": "component---src-pages-it-services-js-6ac374eda90f1655f274.js"
  },
  {
    "url": "page-data/it-services/page-data.json",
    "revision": "fd1b0e7bc1d23dfd85d2b7392ba4bd24"
  },
  {
    "url": "component---src-pages-it-solutions-js-f84c17a03c54d244b632.js"
  },
  {
    "url": "page-data/it-solutions/page-data.json",
    "revision": "4cbd8bd571c00aada6b49a64809cafcf"
  },
  {
    "url": "component---src-pages-leadership-js-631f4759cdf13280e599.js"
  },
  {
    "url": "page-data/leadership/page-data.json",
    "revision": "0a21406818ad1f99ab88e0ea3700f50b"
  },
  {
    "url": "component---src-templates-service-template-service-template-js-568777e3f2591e9a7ed6.js"
  },
  {
    "url": "page-data/it-service/business-reform/page-data.json",
    "revision": "57dd446117f90947ae3364c1ca72d255"
  },
  {
    "url": "page-data/it-service/data-security/page-data.json",
    "revision": "2cd4d965f9e98b8cc426a528ad00937b"
  },
  {
    "url": "page-data/it-service/firewall-advance/page-data.json",
    "revision": "bce800672f2bbe65da52324112394bc1"
  },
  {
    "url": "page-data/it-service/highly-professional-staffs/page-data.json",
    "revision": "20e94aee0bbf49c0668fc1659ce9f08b"
  },
  {
    "url": "page-data/it-service/info-security/page-data.json",
    "revision": "00d1b9b2824457a50a3d0c7a294da10f"
  },
  {
    "url": "page-data/it-service/infrastructure-plan/page-data.json",
    "revision": "48321b20f0da78bfe01fb3f07ab2003e"
  },
  {
    "url": "page-data/it-service/it-design/page-data.json",
    "revision": "3e11c2ad860627fb785b71d6b2f267bc"
  },
  {
    "url": "page-data/it-service/it-management/page-data.json",
    "revision": "a37c581bb570746d83adce4e7065d172"
  },
  {
    "url": "page-data/it-service/quality-assurance-system/page-data.json",
    "revision": "0c503d3519792095b8dd49ecf85bb08b"
  },
  {
    "url": "component---src-templates-case-study-template-case-study-template-js-5e39dc571993ab78b9aa.js"
  },
  {
    "url": "page-data/case-study/a-freeserve-case-study/page-data.json",
    "revision": "d6b089540a679dd57a9ed8620e0fe0ce"
  },
  {
    "url": "page-data/case-study/a-sixbase-typical-case-study/page-data.json",
    "revision": "1585f0781af62e55adb8d2df8caf38f8"
  },
  {
    "url": "page-data/case-study/aqua-research-and-energy/page-data.json",
    "revision": "b0fb357a08ec9c887032aa2ed711d381"
  },
  {
    "url": "page-data/case-study/arden-internal-networking/page-data.json",
    "revision": "96ccf9b956b2133905733a30ca643452"
  },
  {
    "url": "page-data/case-study/healsoul-technology-health/page-data.json",
    "revision": "d8004ace95af2adce9d83265eb77802b"
  },
  {
    "url": "page-data/case-study/mitech-smart-vision/page-data.json",
    "revision": "023ca25182d12219bfc8ae23d9826d5c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d629209900784aa48eb666ce98157166"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-df3aae05ecb087fd724e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
