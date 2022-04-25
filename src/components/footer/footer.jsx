import React from "react"
import FooterWrap from "./footer-style"
const Footer = () => {
  return (
    <FooterWrap>
      <FooterWrap.Info>
        © {new Date().getFullYear()} Dawid Wojtaszek
      </FooterWrap.Info>
    </FooterWrap>
  )
}

export default Footer
