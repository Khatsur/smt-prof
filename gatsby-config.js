// All Of Your Site Conifuration

module.exports = {
	pathPrefix: `/`,
	siteMetadata: {
		title: "Все для SMT",
		titleTemplate: `SMT PROF`,
		description: `Поставка инновационного оборудования класса Hi-End для серийного и крупносерийного многономенклатурного производства монтажа печатных. Инновационное решение с большим запасом на развитие технологий сборки плат в будущем.`,
		author: `SMT PROF`,
		twitterUsername: `@SmtProfUkr`,
		image: 'landing.png',
		siteUrl: 'https://smt-prof.com.ua',
		keywords: 'smt-prof',
		lang: 'ru',
		getform: "https://getform.io/f/58c49e90-e767-4e18-959e-4fcd84bf8659",
		formspree: "https://formspree.io/f/mlezdppb",
		copyright: "SMT PROF. <a href='https://www.smt-prof.com.ua' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
		copyrightua: "SMT PROF. <a href='https://www.smt-prof.com.ua' target='_blank' rel='noopener noreferrer'>Всі права захищені</a>",
		social: {
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			instagram: "https://www.instagram.com",
			linkedin: "https://www.linkedin.com"
		},
		contact: {
			phone: '050.440.9925',
			address: "ул. Дегтяревская",
			email: 'smt-prof@smt-prof.com.ua',
			website: "https://www.smt-prof.com.ua",
			rating: "4.9",
			customers: "700",
			clients: "3200",
			addressInfos: [
				{
					"id": "san-francisco",
					"state": "Ukraine",
					"address": "ул. Дегтяревская",
					"email": "smt-prof@smt-prof.com.ua",
					"phone": "050.440.9925"
				},
				{
					"id": "new-york",
					"state": "Ukraine",
					"address": "ул. Дегтяревская",
					"email": "smt-prof@smt-prof.com.ua",
					"phone": "050.440.9925"
				},
				{
					"id": "ukraine",
					"state": "Ukraine",
					"address": "ул. Дегтяревская",
					"email": "smt-prof@smt-prof.com.ua",
					"phone": "050.440.9925"
				}
			]
		}
	},
	
	
	
	mapping: {
		"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-playground`,
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-loadable-components-ssr',
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/containers/layout/layout.js`),
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				tableOfContents: {
					heading: null,
					maxDepth: 6,
				},
				"excerpt_separator": `<!-- endexcerpt -->`,
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `fonts`,
				path: `${__dirname}/src/assets/fonts`,
				ignore: [`**/\.*`]
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
				ignore: [`**/\.*`]
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
				ignore: [`**/\.*`]
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				"name": "SMT PROF",
				"short_name": "SMT PROF",
				"theme_color": "#086ad8",
				"background_color": "#ffffff",
				"display": "standalone",
				"scope": "/",
				"start_url": "/",
				"icon": "src/assets/images/favicon.png",
				"icons": [
					{
						"src": "/icons/icon-72x72.png",
						"sizes": "72x72",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-96x96.png",
						"sizes": "96x96",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-128x128.png",
						"sizes": "128x128",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-144x144.png",
						"sizes": "144x144",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-152x152.png",
						"sizes": "152x152",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-384x384.png",
						"sizes": "384x384",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-512x512.png",
						"sizes": "512x512",
						"type": "image/png"
					}
				],
			},
		},
		{
			resolve: `gatsby-plugin-breadcrumb`,
			options: {
				useAutoGen: true,
				autoGenHomeLabel: `Home`,
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/404.html`,
				],
				useClassNames: true
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.smt-prof.com.ua',
				sitemap: 'https://www.smt-prof.com.ua/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [
					`/about-us/`,
					`/case-studies/`,
					`/contact-us/`,
					`/index-appointment/`,
					`/index-infotechno/`,
					`/index-processing/`,
					`/index-resolutions/`,
					`/index-services/`,
					`/it-services/`,
					`/it-solutions/`,
					`/leadership/`,
					`/it-service/*`,
					`/case-study/*`,
					`/case-study/*`,
					`/blogs/*`
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
            options: {
				fonts: [
				`roboto\:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i`,
				`open sans\:300,400,600,700,800,300i,400i,600i,700i,800i`
				],
				display: 'swap'
			}
      }

	]
}
