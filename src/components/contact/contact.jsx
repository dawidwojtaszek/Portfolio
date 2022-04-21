import React from "react"
import ContactWrap from "./contact-style"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMobileAlt, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SvgContact from "../contact-animation/contact-animation"
import PersonalEmailSvg from "../contact-svg/contact-svg"
import ContactForm from "../form/form"

const Contact = () => (
  <ContactWrap id="kontakt">
    <ContactWrap.Container>
      <ContactWrap.Title>Kontakt</ContactWrap.Title>
      <ContactWrap.InfoBox>
        <ContactWrap.Info>
          <ContactWrap.Box>
            <ContactWrap.Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </ContactWrap.Icon>
            <ContactWrap.GreenBox>dawidw22@gmail.com</ContactWrap.GreenBox>
          </ContactWrap.Box>
          <ContactWrap.Box>
            <ContactWrap.Icon>
              <FontAwesomeIcon icon={faMobileAlt} />
            </ContactWrap.Icon>
            <ContactWrap.GreenBox>609 156 740</ContactWrap.GreenBox>
          </ContactWrap.Box>
        </ContactWrap.Info>
        <ContactWrap.Animation>
          <SvgContact />
        </ContactWrap.Animation>
      </ContactWrap.InfoBox>
      <ContactWrap.FormInfoBox>
        <ContactWrap.Icon>
          <FontAwesomeIcon icon={faArrowDown} />
        </ContactWrap.Icon>
        <ContactWrap.Text>
          Możesz skorzystać również z poniższego formularza.
        </ContactWrap.Text>
      </ContactWrap.FormInfoBox>
      <ContactWrap.FormBox>
        <ContactForm />
        <ContactWrap.FormSvg>
          <PersonalEmailSvg />
        </ContactWrap.FormSvg>
      </ContactWrap.FormBox>
    </ContactWrap.Container>
  </ContactWrap>
)

export default Contact
