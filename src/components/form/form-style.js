import styled from "styled-components"

const FormWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Input = styled.input`
  border: solid 4px ${({ theme }) => theme.colors.darkBlue};
  -webkit-box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  -moz-box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  width: 90%;
  height: 50px;
  font-size: 18px;
  padding: 5px;
  @media (max-width: 900px) {
    width: 100%;
  }
`
const Message = styled.textarea`
  border: solid 4px ${({ theme }) => theme.colors.darkBlue};
  -webkit-box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  -moz-box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  box-shadow: 8px 8px 0px -1px rgba(12, 206, 107, 1);
  width: 90%;
  height: 250px;
  font-size: 18px;
  padding: 5px;
  @media (max-width: 900px) {
    width: 100%;
  }
`
const Label = styled.label`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 18px;
  margin-top: 30px;
`
const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  border: none;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.heading};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 50px;
  width: 170px;
  margin-top: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`
const BtnIcon = styled.div`
  margin-right: 5px;
`

FormWrap.Input = Input
FormWrap.Message = Message
FormWrap.Label = Label
FormWrap.Btn = Btn
FormWrap.BtnIcon = BtnIcon

export default FormWrap
