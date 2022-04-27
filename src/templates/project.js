import React from "react"
import Layout from "../components/layout"
import { ProjectShowcase } from "../components/project-showcase/showcase"
import { ProjectDescription } from "../components/project-description/description"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const LoremEcomerce = ({ data }) => {
  const project = data.markdownRemark.frontmatter
  const screenShot = getImage(data.markdownRemark.frontmatter.mockupShowcase)
  console.log("w projects")
  console.log(project)
  return (
    <Layout>
      <Seo title={project.title} />
      <ProjectShowcase
        title={project.title}
        img={screenShot}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
      />
      <ProjectDescription description={project.description} />
    </Layout>
  )
}
export const query = graphql`
  query SiteData($sitePath: String) {
    markdownRemark(frontmatter: { moreUrl: { eq: $sitePath } }) {
      frontmatter {
        title
        description
        tag
        liveUrl
        githubUrl
        mockupShowcase {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`
export default LoremEcomerce
