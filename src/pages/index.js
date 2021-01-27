import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/landing/hero'
import Feature from '../containers/landing/feature'
import CaseStudy from '../containers/landing/case-study'
import HeaderLayout from '../containers/landing/header-layout'
import HeaderLayoutSpeed from '../containers/landing/header-layout-2'
import CaseStudyAdvan from '../containers/landing/case-study-2'
import Plugins from '../containers/landing/plugins'
import ExtraFeature from '../containers/landing/extra-features'
import BlogArea from '../containers/index-services/blog-area'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Оборудование для SMT" description="SMT PROF- оборудование для поверхностного монтажа, оборудование для SMT, SMT PROF – первый украинский проект по оснащению производств монтажа печатных плат, Оборудование для поверхностного монтажа  SMT" pathname="SMT-PROF"/>
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
