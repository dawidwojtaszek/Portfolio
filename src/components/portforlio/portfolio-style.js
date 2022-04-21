import styled from "styled-components"

const PortfolioSection = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: 50px auto;
  padding: 10px;
`
const Title = styled.h2`
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.heading};
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    height: 30px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.green};
    margin-right: 10px;
  }
`

PortfolioSection.Title = Title

export default PortfolioSection
