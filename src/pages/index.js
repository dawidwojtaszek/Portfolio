import * as React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/hero/hero"
import Portfolio from "../components/portforlio/portfolio"
import Contact from "../components/contact/contact"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
