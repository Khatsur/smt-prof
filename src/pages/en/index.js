import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three-en'
import Footer from '../../containers/layout/footer/footer-one'
import Hero from '../../containers/landing/hero-en'
import Feature from '../../containers/landing/feature-en'
import Demos from '../../containers/landing/demo-area'
import InnerDemos from '../../containers/landing/inner-demo-area'
import CaseStudy from '../../containers/landing/case-study'
import HeaderLayout from '../../containers/landing/header-layout-en'
import HeaderLayoutSpeed from '../../containers/landing/header-layout-2'
import CaseStudyAdvan from '../../containers/landing/case-study-2'

import BlogLayout from '../../containers/landing/blog-layout'
import Plugins from '../../containers/landing/plugins'
import ExtraFeature from '../../containers/landing/extra-features'
import BlogArea from '../../containers/index-services/blog-area'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header transparent/>
    <main className="site-wrapper-reveal">
      <Hero/>
      <Feature/>
      <HeaderLayout/>
      <CaseStudy/>
      <HeaderLayoutSpeed/>
      <CaseStudyAdvan />
      
      <Plugins/>
      <ExtraFeature/>
      <BlogArea />
    </main>
    <Footer/>
  </Layout>
)
 
export default IndexPage
