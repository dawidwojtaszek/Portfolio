import React from "react"
import FormWrap from "./form-style"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactForm = () => (
  <FormWrap
    method="POST"
    data-netlify="true"
    name="ContactForm"
    action="/sukces"
  >
    <FormWrap.Label>Email:</FormWrap.Label>
    <FormWrap.Input type="email" name="email"></FormWrap.Input>
    <FormWrap.Label>Wiadomość:</FormWrap.Label>
    <FormWrap.Message name="message"></FormWrap.Message>
    <FormWrap.Btn type="submit">
      <FormWrap.BtnIcon>
        <FontAwesomeIcon icon={faPaperPlane} />
      </FormWrap.BtnIcon>
      Wyślij
    </FormWrap.Btn>
  </FormWrap>
)

export default ContactForm
