import React from "react"
import Showcase from "./showcase-style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const ProjectShowcase = ({ title, img, liveUrl, githubUrl }) => (
  <Showcase>
    <Showcase.Container>
      <Showcase.TitleBox>
        <Showcase.Title>{title}</Showcase.Title>
        <Showcase.BtnBox>
          <Showcase.BtnLink to={liveUrl}>
            <Showcase.Button>
              <FontAwesomeIcon icon={faEye} />
              Podgląd
            </Showcase.Button>
          </Showcase.BtnLink>
          <Showcase.BtnLink to={githubUrl}>
            <Showcase.Button>
              <FontAwesomeIcon icon={faGithub} />
              Github
            </Showcase.Button>
          </Showcase.BtnLink>
        </Showcase.BtnBox>
      </Showcase.TitleBox>
      <Showcase.ScreanShot image={img} alt="ScreenShot" />
    </Showcase.Container>
  </Showcase>
)
