import React from "react"
import Description from "./description-style"

export const ProjectDescription = ({ description }) => (
  <Description>
    <Description.Container>
      <Description.Title>O projekcie</Description.Title>
      <Description.Info>{description}</Description.Info>
    </Description.Container>
  </Description>
)
