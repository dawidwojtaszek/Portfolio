import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Wrap = styled.header`
  height: 80px;
  background: #fff;
`
const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  height: 80px;
  margin: auto;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`
const Logo = styled.img`
  @media (max-width: 900px) {
    width: 80px;
    height: auto;
  }
`

const LogoLink = styled.a`
  text-decoration: none;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`
const LinkList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`
const LinkElement = styled.li`
  text-transform: uppercase;
  font-size: 22px;
  padding: 1rem;
  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`
const Link = styled(AnchorLink)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`

Wrap.Container = Container
Wrap.Logo = Logo
Wrap.LogoLink = LogoLink
Wrap.Navigation = Navigation
Wrap.LinkList = LinkList
Wrap.LinkElement = LinkElement
Wrap.Link = Link
export default Wrap
