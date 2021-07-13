module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-loadable-components-ssr/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/Mykola/IT/smt-prof/src/containers/layout/layout.js"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1200},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"SMT PROF","short_name":"SMT PROF","theme_color":"#086ad8","background_color":"#ffffff","display":"standalone","scope":"/","start_url":"/","icon":"src/assets/images/favicon.png","icons":[{"src":"/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-breadcrumb/gatsby-browser.js'),
      options: {"plugins":[],"useAutoGen":true,"autoGenHomeLabel":"Home","exclude":["/dev-404-page","/404","/404.html"],"useClassNames":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/about-us/","/case-studies/","/contact-us/","/index-appointment/","/index-infotechno/","/index-processing/","/index-resolutions/","/index-services/","/it-services/","/it-solutions/","/leadership/","/it-service/*","/case-study/*","/case-study/*","/blogs/*"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
