import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three-ua'
import Footer from '../../containers/layout/footer/footer-one-ua'
import Hero from '../../containers/landing/hero-ua'
import Feature from '../../containers/landing/feature-ua'
import CaseStudy from '../../containers/landing/case-study-ua'
import HeaderLayout from '../../containers/landing/header-layout-ua'
import HeaderLayoutSpeed from '../../containers/landing/header-layout-2-ua'
import CaseStudyAdvan from '../../containers/landing/case-study-2-ua'
import Plugins from '../../containers/landing/plugins-ua'
import ExtraFeature from '../../containers/landing/extra-features-ua'
import BlogArea from '../../containers/index-services/blog-area-ua'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Обладнання для SMT" description="SMT PROF - обладнання для поверхневого монтажу, обладнання для SMT, SMT PROF - перший український проект з оснащення виробництв монтажу друкованих плат, устаткування для поверхневого монтажу SMT " pathname="ua"/>
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
