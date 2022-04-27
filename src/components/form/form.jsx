import React from "react"
import FormWrap from "./form-style"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactForm = () => (
  <FormWrap name="contact" method="POST" data-netlify="true" action="/sukces">
    <FormWrap.Label>
      Email:
      <FormWrap.Input type="email" name="email" />
    </FormWrap.Label>
    <FormWrap.Label>
      Wiadomość:
      <FormWrap.Message name="message" />
    </FormWrap.Label>
    <FormWrap.Btn type="submit">
      <FormWrap.BtnIcon>
        <FontAwesomeIcon icon={faPaperPlane} />
      </FormWrap.BtnIcon>
      Wyślij
    </FormWrap.Btn>
  </FormWrap>
)

export default ContactForm
