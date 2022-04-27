import React, { useState } from "react"
import FormWrap from "./form-style"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <FormWrap
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/sukces"
      onSubmit={handleSubmit}
    >
      <FormWrap.Label>Email:</FormWrap.Label>
      <FormWrap.Input type="email" name="email" onChange={handleChange} />

      <FormWrap.Label>Wiadomość:</FormWrap.Label>
      <FormWrap.Message name="message" onChange={handleChange} />
      <input type="hidden" name="contact" value="contact" />
      <FormWrap.Btn type="submit">
        <FormWrap.BtnIcon>
          <FontAwesomeIcon icon={faPaperPlane} />
        </FormWrap.BtnIcon>
        Wyślij
      </FormWrap.Btn>
    </FormWrap>
  )
}

export default ContactForm
