import * as React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../style/global"
import { ThemeProvider } from "styled-components"
import { theme } from "../style/theme"
import { Header } from "./header/header"
import Footer from "./footer/footer"
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
