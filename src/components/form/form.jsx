import React from "react"
import FormWrap from "./form-style"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactForm = () => (
  <FormWrap>
    <FormWrap.InputGroup>
      <FormWrap.Label>Email:</FormWrap.Label>
      <FormWrap.Input></FormWrap.Input>
    </FormWrap.InputGroup>
    <FormWrap.InputGroup>
      <FormWrap.Label>Wiadomość:</FormWrap.Label>
      <FormWrap.Message></FormWrap.Message>
    </FormWrap.InputGroup>
    <FormWrap.Btn>
      <FormWrap.BtnIcon>
        <FontAwesomeIcon icon={faPaperPlane} />
      </FormWrap.BtnIcon>
      Wyślij
    </FormWrap.Btn>
  </FormWrap>
)

export default ContactForm
