import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, pathname, keywords }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          defaultKeywords
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}/${image || defaultImage}`,
        url: `${siteUrl}/${pathname || "/"}`,
        keywords: keywords || defaultKeywords
      }
      return (
        <>
          <Helmet title={titleTemplate} titleTemplate={`${seo.title} | %s`}>
            <html lang="ua" />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <link rel="canonical" href={seo.url} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.string
}
SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEOUA {
    site {
      siteMetadata {
        defaultTitle: title
        defaultKeywords: keywords
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`