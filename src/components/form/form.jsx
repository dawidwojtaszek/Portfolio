import React from "react"
import FormWrap from "./form-style"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactForm = () => (
  <FormWrap method="POST" data-netlify="true">
    <FormWrap.InputGroup>
      <FormWrap.Label>Email:</FormWrap.Label>
      <FormWrap.Input type="email" name="email"></FormWrap.Input>
    </FormWrap.InputGroup>
    <FormWrap.InputGroup>
      <FormWrap.Label>Wiadomość:</FormWrap.Label>
      <FormWrap.Message name="message"></FormWrap.Message>
    </FormWrap.InputGroup>
    <FormWrap.Btn type="submit">
      <FormWrap.BtnIcon>
        <FontAwesomeIcon icon={faPaperPlane} />
      </FormWrap.BtnIcon>
      Wyślij
    </FormWrap.Btn>
  </FormWrap>
)

export default ContactForm
