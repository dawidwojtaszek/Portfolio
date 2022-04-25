import React from "react"
import Logo from "../../images/logo.png"
import Wrap from "./header-style"

export const Header = () => (
  <Wrap>
    <Wrap.Container>
      <Wrap.LogoLink href="/">
        <Wrap.Logo src={Logo} />
      </Wrap.LogoLink>
      <Wrap.Navigation>
        <Wrap.LinkList>
          <Wrap.LinkElement>
            <Wrap.Link to="/#portfolio">Portfolio</Wrap.Link>
          </Wrap.LinkElement>
          <Wrap.LinkElement>
            <Wrap.Link to="/#contact">Kontakt</Wrap.Link>
          </Wrap.LinkElement>
        </Wrap.LinkList>
      </Wrap.Navigation>
    </Wrap.Container>
  </Wrap>
)
