import styled from "styled-components"

const ContactWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 40px 0;
`
const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  padding: 10px;
`
const Title = styled.h2`
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.heading};
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-top: 45px;
  &:before {
    content: "";
    height: 30px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.green};
    margin-right: 10px;
  }
`

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: center;
    height: 250px;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 20px;
`
const GreenBox = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 27px;
  padding: 5px 15px;
  @media (max-width: 900px) {
    font-size: 23px;
  }
`
const Icon = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  height: 100%;
  width: 35px;
`
const Animation = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`
const FormInfoBox = styled.div`
  display: flex;
  margin: 20px 0 40px 0;
`
const Text = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.dark};
`
const FormBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const FormSvg = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`

ContactWrap.Container = Container
ContactWrap.Title = Title
ContactWrap.InfoBox = InfoBox
ContactWrap.Info = Info
ContactWrap.Box = Box
ContactWrap.GreenBox = GreenBox
ContactWrap.Icon = Icon
ContactWrap.Animation = Animation
ContactWrap.FormInfoBox = FormInfoBox
ContactWrap.Text = Text
ContactWrap.FormBox = FormBox

ContactWrap.FormSvg = FormSvg
export default ContactWrap
