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
    "url": "webpack-runtime-e971dc75585086e7e2a7.js"
  },
  {
    "url": "styles.b2ddbf2b7d7e7022e167.css"
  },
  {
    "url": "styles-45b6b6df39625cd365bb.js"
  },
  {
    "url": "commons-4fe0131337aecc06fff1.js"
  },
  {
    "url": "app-96a69bad5c1c7601b145.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7efb77b19e2cf67e517ff06722725714"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5bebfd176d299dae5551.js"
  },
  {
    "url": "component---src-pages-about-us-js-e63c2fe053dbdf57fc9a.js"
  },
  {
    "url": "page-data/about-us/page-data.json",
    "revision": "682f15b9db8fcb190f7058f1502a6f9b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6a0363a78d3ffe1eadc00b09337caaa4"
  },
  {
    "url": "component---src-pages-case-studies-js-245e26a52ec83fd5ded4.js"
  },
  {
    "url": "page-data/case-studies/page-data.json",
    "revision": "0f40757aaf6053a48643c15befd7435d"
  },
  {
    "url": "component---src-pages-contact-us-js-0ad5eb0c7d015a5dd500.js"
  },
  {
    "url": "page-data/contact-us/page-data.json",
    "revision": "64e62511d676c1d3be53944de1c77e9e"
  },
  {
    "url": "component---src-pages-index-appointment-js-db25b276619e9fc55aa8.js"
  },
  {
    "url": "page-data/index-appointment/page-data.json",
    "revision": "766698309598a77d152de9b3cf1e4265"
  },
  {
    "url": "component---src-pages-index-infotechno-js-c99b7194fbfea731d50b.js"
  },
  {
    "url": "page-data/index-infotechno/page-data.json",
    "revision": "cefcf753bf383113ca6142566ce642e2"
  },
  {
    "url": "component---src-pages-index-processing-js-e7150e1c1f28b65c4ace.js"
  },
  {
    "url": "page-data/index-processing/page-data.json",
    "revision": "be8d0f3209dfd72e16e4cf5e7acfa5f0"
  },
  {
    "url": "component---src-pages-index-services-js-71bcc8deef2ee1d6cf02.js"
  },
  {
    "url": "page-data/index-services/page-data.json",
    "revision": "d1524ce3b0fdbde49bed044fe822c416"
  },
  {
    "url": "component---src-pages-it-services-js-564341b167dc8035598a.js"
  },
  {
    "url": "page-data/it-services/page-data.json",
    "revision": "fd1b0e7bc1d23dfd85d2b7392ba4bd24"
  },
  {
    "url": "component---src-pages-it-solutions-js-5e69d412c3f6fa86ecc6.js"
  },
  {
    "url": "page-data/it-solutions/page-data.json",
    "revision": "4cbd8bd571c00aada6b49a64809cafcf"
  },
  {
    "url": "component---src-pages-leadership-js-4da7bb0004ff3d50d999.js"
  },
  {
    "url": "page-data/leadership/page-data.json",
    "revision": "0a21406818ad1f99ab88e0ea3700f50b"
  },
  {
    "url": "component---src-templates-service-template-service-template-js-25bbc2e72e3e03148a02.js"
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
    "url": "component---src-templates-case-study-template-case-study-template-js-f947b8cc54d8362c6eae.js"
  },
  {
    "url": "page-data/case-study/a-freeserve-case-study/page-data.json",
    "revision": "d0820141854ada39eefd1ecadb590b6f"
  },
  {
    "url": "page-data/case-study/a-sixbase-typical-case-study/page-data.json",
    "revision": "9db4c47f1ef9451f20d6d00f57105597"
  },
  {
    "url": "page-data/case-study/aqua-research-and-energy/page-data.json",
    "revision": "90cd9b031618476f01de2dda90fc09da"
  },
  {
    "url": "page-data/case-study/arden-internal-networking/page-data.json",
    "revision": "32a30a4a9a577dc9bc24fa5f1ef147a0"
  },
  {
    "url": "page-data/case-study/healsoul-technology-health/page-data.json",
    "revision": "83730545c18b27b6d14a3654943cac1b"
  },
  {
    "url": "page-data/case-study/mitech-smart-vision/page-data.json",
    "revision": "fbf0f2d57ea4a34c1d13b7731bc232bc"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6262677810e6b41fc2ae32a05aa3e4aa"
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
  if (!resources || !(await caches.match(`/app-96a69bad5c1c7601b145.js`))) {
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
