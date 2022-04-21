import React from "react"
import PortfolioCard from "../portfolio-card/portfolio-card"
import PortfolioSection from "./portfolio-style"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query projects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___id }
      ) {
        nodes {
          frontmatter {
            title
            tag
            shortDescription
            moreUrl
            liveUrl
            githubUrl
            description
            mockupPreview {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
            id
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes
  console.log("asdfasdfasdfasdfasd")
  console.log(projects)
  return (
    <PortfolioSection id="portfolio">
      <PortfolioSection.Title>Portfolio</PortfolioSection.Title>
      {projects.map(project => (
        <PortfolioCard
          key={project.frontmatter.id}
          img={getImage(project.frontmatter.mockupPreview)}
          tagList={project.frontmatter.tag}
          title={project.frontmatter.title}
          description={project.frontmatter.shortDescription}
          moreUrl={project.frontmatter.moreUrl}
          liveUrl={project.frontmatter.liveUrl}
          githubUrl={project.frontmatter.githubUrl}
        />
      ))}
    </PortfolioSection>
  )
}

export default Portfolio
