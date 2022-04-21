import styled from "styled-components"

const Description = styled.div`
  min-height: 400px;
`
const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  padding: 15px;
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
const Info = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 20px;
  margin-top: 30px;
`

Description.Title = Title
Description.Container = Container
Description.Info = Info

export default Description
