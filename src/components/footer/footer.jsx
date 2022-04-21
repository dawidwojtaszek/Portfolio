import React from "react"
import FooterWrap from "./footer-style"
const Footer = () => (
  <FooterWrap>
    <FooterWrap.Info>
      © {new Date().getFullYear()} Dawid Wojtaszek
    </FooterWrap.Info>
  </FooterWrap>
)

export default Footer
