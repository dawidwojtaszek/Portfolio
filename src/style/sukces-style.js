import styled from "styled-components"

const Success = styled.div`
  min-height: calc(100vh - 200px);
`
const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  padding: 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Heading = styled.h2`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 26px;
`
const BackLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  margin-top: 40px;
  font-family: ${({ theme }) => theme.font.body};
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`
Success.Container = Container
Success.Heading = Heading
Success.BackLink = BackLink
export default Success
