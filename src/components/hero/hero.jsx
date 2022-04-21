import React from "react"
import Hero from "./hero-style"
import HeroSvg from "../../svg/hero-animation"
const HeroSection = () => (
  <Hero>
    <Hero.Container>
      <Hero.Info>
        <Hero.Title>Dawid Wojtaszek</Hero.Title>
        <Hero.SubTitle>Front-End Developer</Hero.SubTitle>
      </Hero.Info>
      <Hero.AnimationBox>
        <HeroSvg />
      </Hero.AnimationBox>
    </Hero.Container>
  </Hero>
)

export default HeroSection
