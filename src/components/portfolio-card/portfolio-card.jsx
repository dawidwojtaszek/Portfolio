import React from "react"
import Card from "./portfolio-card-style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsAlt, faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const PortfolioCard = ({
  img,
  title,
  tagList,
  description,
  moreUrl,
  liveUrl,
  githubUrl,
}) => {
  return (
    <Card>
      <Card.ImgBox>
        <Card.Img image={img} />
      </Card.ImgBox>

      <Card.InfoBox>
        <Card.InfoText>
          <Card.Title>{title}</Card.Title>
          <Card.TagBox>
            {tagList.map(tag => (
              <Card.Tag>{tag}</Card.Tag>
            ))}
          </Card.TagBox>
          <Card.Description>{description}</Card.Description>
        </Card.InfoText>

        <Card.ButtonBox>
          <Card.BtnLink to={`${moreUrl}`}>
            <Card.Btn whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Card.BtnIcon>
                <FontAwesomeIcon icon={faArrowsAlt} />
              </Card.BtnIcon>
              Więcej
            </Card.Btn>
          </Card.BtnLink>
          <Card.BtnLink to={`${liveUrl}`}>
            <Card.Btn whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Card.BtnIcon>
                <FontAwesomeIcon icon={faEye} />
              </Card.BtnIcon>
              Podgląd
            </Card.Btn>
          </Card.BtnLink>
          <Card.BtnLink to={`${githubUrl}`}>
            <Card.Btn whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Card.BtnIcon>
                <FontAwesomeIcon icon={faGithub} />
              </Card.BtnIcon>
              Github
            </Card.Btn>
          </Card.BtnLink>
        </Card.ButtonBox>
      </Card.InfoBox>
    </Card>
  )
}
export default PortfolioCard
