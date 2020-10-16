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
          - 🔭 Jobbar på massa spännande projekt!
          <br />
          - 🌱 Lär mig just nu C# Balzor
          <br />
          - 🤔 Jag behöver hjälp med frontend!
          <br />
          - 💬 Fråga mig något om bilar ;)
          
          <br />
          - ⚡ Jag gillar att sladda med bilar :D
          <br />
          - 📫Kontakat mig här nedan! :)
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

