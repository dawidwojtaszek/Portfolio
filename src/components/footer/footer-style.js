import styled from "styled-components"

const FooterWrap = styled.footer`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Info = styled.p`
  color: white;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.body};
`
FooterWrap.Info = Info

export default FooterWrap
