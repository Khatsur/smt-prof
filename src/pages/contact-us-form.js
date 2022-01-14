import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import ContactFormArea from '../containers/contact-us/contact-form-area-ru'

const path =
  "contact-us-form";
const ContactUsPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Contact Us"/>
        <Header path={path}/>
       
        <main className="site-wrapper-reveal">
            <ContactFormArea/>
            
        </main>
        <Footer/>
    </Layout>
  )
   
  export default ContactUsPage