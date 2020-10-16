import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import {
  HeroWrapper,
  HeroCenter,
  HeroInfo,
} from "../elements/HeaderElements"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)


  return (
    <HeroWrapper >
    <HeroCenter>
      <HeroInfo>
        <div>
          <h1>Jag är Hampus</h1>
          <div className="underline"></div>
          <h4>Studernade på TUC Sweden linköping</h4>
          - 🔭 I’m currently working on my own Portfolio site
          <br />
          - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi
          <br />
          - 🤔 I’m looking for help with anything frontend :)
          <br />
          - 💬 Ask me about Rhodesian Ridgebacks
          <br />
          - 😄 Pronouns: Inquisitive, break the mold.. <br />- 💜{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://strapi.io/documentation/v3.x/getting-started/introduction.html"
          >
            Strapi
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/getting-started.html"
          >
            React
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gatsbyjs.org/docs/"
          >
            Gatsby
          </a>{" "}
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://styled-components.com/docs"
          >
            Styled Components
          </a>
          <br />
          - ⚡ Fun fact: I used to fly planes
          <br />
          - 📫 How to reach me: use the link below :)
          <br />
          <Link to="/contact" className="btn">
            kontakta mig
          </Link>
          <SocialLinks />
        </div>
      </HeroInfo>
      <Image fluid={fluid} className="hero-img" />
    </HeroCenter>
  </HeroWrapper>
  )
}
export default Hero

