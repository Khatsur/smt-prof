import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/landing/hero'
import Feature from '../containers/landing/feature'
import Demos from '../containers/landing/demo-area'
import InnerDemos from '../containers/landing/inner-demo-area'
import CaseStudy from '../containers/landing/case-study'
import HeaderLayout from '../containers/landing/header-layout'
import BlogLayout from '../containers/landing/blog-layout'
import Plugins from '../containers/landing/plugins'
import ExtraFeature from '../containers/landing/extra-features'
import BlogArea from '../containers/index-services/blog-area'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header transparent/>
    <main className="site-wrapper-reveal">
      <Hero/>
      <Feature/>
      <HeaderLayout/>
      <CaseStudy/>
      <HeaderLayout/>
      <BlogLayout/>
      <Plugins/>
      <ExtraFeature/>
      <BlogArea />
    </main>
    <Footer/>
  </Layout>
)
 
export default IndexPage
