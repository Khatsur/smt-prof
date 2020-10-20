var plugins = [{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-loadable-components-ssr/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/Mykola/IT/smt-prof/src/containers/layout/layout.js"},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Mitech","short_name":"mitech","theme_color":"#086ad8","background_color":"#ffffff","display":"standalone","scope":"/","start_url":"/","icon":"src/assets/images/favicon.png","icons":[{"src":"/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-breadcrumb/gatsby-ssr'),
      options: {"plugins":[],"useAutoGen":true,"autoGenHomeLabel":"Home","exclude":["/dev-404-page","/404","/404.html"],"useClassNames":true},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["/about-us/","/case-studies/","/contact-us/","/index-appointment/","/index-infotechno/","/index-processing/","/index-resolutions/","/index-services/","/it-services/","/it-solutions/","/leadership/","/it-service/*","/case-study/*","/case-study/*","/blogs/*"]},
    },{
      plugin: require('/Users/Mykola/IT/smt-prof/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Rubik","subsets":["cyrillic"],"variants":["100","300","400","500","700","900","100i","300i","400i","500i","700i","900i"]},{"family":"Open Sans","subsets":["cyrillic"],"variants":["300","400","600","700","800","300i","400i","600i","700i","800i"]}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
