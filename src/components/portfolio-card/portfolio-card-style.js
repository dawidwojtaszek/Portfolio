import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Card = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: 50px auto;
  height: 345px;
  border: solid 4px ${({ theme }) => theme.colors.darkBlue};
  -webkit-box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  -moz-box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  display: flex;
  justify-content: space-between;
`
const ImgBox = styled.div`
  height: 100%;
  max-width: 500px;
  overflow: hidden;
  @media (max-width: 900px) {
    display: none;
  }
`
const Img = styled(GatsbyImage)`
  height: 345px;
  width: auto;
  object-fit: cover;
`
const InfoBox = styled.div`
  margin: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const InfoText = styled.div`
  padding: 35px 35px 20px 35px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 1200px) {
    padding: 15px;
  }
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 35px;
  color: ${({ theme }) => theme.colors.darkBlue};
  @media (max-width: 1200px) {
    font-size: 25px;
  }
`
const TagBox = styled.div`
  display: flex;
  margin: 15px 0;
  @media (max-width: 1200px) {
    margin: 10px;
  }
`
const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  font-family: ${({ theme }) => theme.font.body};
  font-size: 16px;
  padding: 4px;
  border-radius: 5px;
  margin-right: 12px;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`
const Description = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 19px;
  color: ${({ theme }) => theme.colors.dark};
  @media (max-width: 1200px) {
    font-size: 17px;
  }
`
const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 5px;
`
const BtnLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 33.3%;
  height: 100%;
`
const Btn = styled(motion.button)`
  border: none;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: #fff;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`
const BtnIcon = styled.div`
  margin-right: 5px;
`

Card.ImgBox = ImgBox
Card.Img = Img
Card.InfoBox = InfoBox
Card.InfoText = InfoText
Card.ButtonBox = ButtonBox
Card.BtnLink = BtnLink
Card.Btn = Btn
Card.BtnIcon = BtnIcon
Card.Title = Title
Card.TagBox = TagBox
Card.Tag = Tag
Card.Description = Description
export default Card
