import styled from "styled-components"

const Hero = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`
const Container = styled.div`
  max-width: 990px;
  margin: auto;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 40px;
  font-family: ${({ theme }) => theme.font.heading};
  text-transform: uppercase;
`
const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 25px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.body};
`
const AnimationBox = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

Hero.Info = Info
Hero.AnimationBox = AnimationBox
Hero.Title = Title
Hero.SubTitle = SubTitle
Hero.Container = Container
export default Hero
