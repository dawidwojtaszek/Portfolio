import * as React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/hero/hero"
import Portfolio from "../components/portforlio/portfolio"
import Contact from "../components/contact/contact"
import Seo from "../components/seo"
import { useEffect } from "react"
import { ScrollToTop } from "../components/scroll-to-top/scroll-to-top"

const IndexPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Layout>
      <Seo title="Strona Główna" />
      <ScrollToTop />
      <HeroSection />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
export default IndexPage
