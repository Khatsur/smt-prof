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
    "url": "webpack-runtime-5641cded9768f562b963.js"
  },
  {
    "url": "styles.b2ddbf2b7d7e7022e167.css"
  },
  {
    "url": "styles-45b6b6df39625cd365bb.js"
  },
  {
    "url": "commons-0808cbaf6fa6d2fda5e1.js"
  },
  {
    "url": "app-cc890e9fc0efa75b553e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c90c906b9104b89b3c7aaafb9f0c25b0"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5bebfd176d299dae5551.js"
  },
  {
    "url": "component---src-pages-about-us-js-01d4df018f8c3fa1c3af.js"
  },
  {
    "url": "page-data/about-us/page-data.json",
    "revision": "682f15b9db8fcb190f7058f1502a6f9b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "42826eb0a659fca56338ad034b2ecb0b"
  },
  {
    "url": "component---src-pages-case-studies-js-544e022167ff2cbe8ff1.js"
  },
  {
    "url": "page-data/case-studies/page-data.json",
    "revision": "0f40757aaf6053a48643c15befd7435d"
  },
  {
    "url": "component---src-pages-contact-us-js-89aabeb170db1a16fc3b.js"
  },
  {
    "url": "page-data/contact-us/page-data.json",
    "revision": "64e62511d676c1d3be53944de1c77e9e"
  },
  {
    "url": "component---src-pages-index-appointment-js-99430f5d51cd9d757da1.js"
  },
  {
    "url": "page-data/index-appointment/page-data.json",
    "revision": "766698309598a77d152de9b3cf1e4265"
  },
  {
    "url": "component---src-pages-index-infotechno-js-e0bf8456083854054a5d.js"
  },
  {
    "url": "page-data/index-infotechno/page-data.json",
    "revision": "cefcf753bf383113ca6142566ce642e2"
  },
  {
    "url": "component---src-pages-index-processing-js-17a30c34ee346fb66ceb.js"
  },
  {
    "url": "page-data/index-processing/page-data.json",
    "revision": "be8d0f3209dfd72e16e4cf5e7acfa5f0"
  },
  {
    "url": "component---src-pages-index-services-js-6015cf094c8657d7383e.js"
  },
  {
    "url": "page-data/index-services/page-data.json",
    "revision": "d1524ce3b0fdbde49bed044fe822c416"
  },
  {
    "url": "component---src-pages-it-services-js-096fb842f0059ffaf6b2.js"
  },
  {
    "url": "page-data/it-services/page-data.json",
    "revision": "fd1b0e7bc1d23dfd85d2b7392ba4bd24"
  },
  {
    "url": "component---src-pages-it-solutions-js-16fc9b0393272c2236b3.js"
  },
  {
    "url": "page-data/it-solutions/page-data.json",
    "revision": "4cbd8bd571c00aada6b49a64809cafcf"
  },
  {
    "url": "component---src-pages-leadership-js-e6e8868abe1f4606a33d.js"
  },
  {
    "url": "page-data/leadership/page-data.json",
    "revision": "0a21406818ad1f99ab88e0ea3700f50b"
  },
  {
    "url": "component---src-templates-service-template-service-template-js-3e29ed4479e703e84812.js"
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
    "url": "component---src-templates-case-study-template-case-study-template-js-8f9cd3e9dac7c04a9edd.js"
  },
  {
    "url": "page-data/case-study/a-freeserve-case-study/page-data.json",
    "revision": "e758d831dc80bee840b0e9cf6eef119d"
  },
  {
    "url": "page-data/case-study/a-sixbase-typical-case-study/page-data.json",
    "revision": "58abf85c21a01a5d7f4ab377b8f4f159"
  },
  {
    "url": "page-data/case-study/aqua-research-and-energy/page-data.json",
    "revision": "dd4b06fee160dc286cd92533de6b3a0b"
  },
  {
    "url": "page-data/case-study/arden-internal-networking/page-data.json",
    "revision": "2694e80b1497a2a46c3894c0cb17d33a"
  },
  {
    "url": "page-data/case-study/healsoul-technology-health/page-data.json",
    "revision": "a94c3aa5c8ecd4669b1505e281523197"
  },
  {
    "url": "page-data/case-study/mitech-smart-vision/page-data.json",
    "revision": "83f74e47a11c2a6a4c16c3998183d9d4"
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
  if (!resources || !(await caches.match(`/app-cc890e9fc0efa75b553e.js`))) {
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
