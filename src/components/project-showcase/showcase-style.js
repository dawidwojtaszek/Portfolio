import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Showcase = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  height: 450px;
  @media (max-width: 900px) {
    height: 100%;
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  padding: 15px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 40px;
  max-width: 440px;
  text-transform: uppercase;
  margin-bottom: 30px;
`
const BtnBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  @media (max-width: 900px) {
    justify-content: center;
  }
`
const BtnLink = styled(Link)`
  text-decoration: none;
`
const Button = styled.button`
  border: none;
  width: 170px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: #fff;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`
const ScreanShot = styled(GatsbyImage)`
  height: 100%;
  width: auto;
  @media (max-width: 1200px) {
    width: 500px;
    height: auto;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`

Showcase.Container = Container
Showcase.TitleBox = TitleBox
Showcase.Title = Title
Showcase.BtnBox = BtnBox
Showcase.BtnLink = BtnLink
Showcase.Button = Button
Showcase.ScreanShot = ScreanShot

export default Showcase
