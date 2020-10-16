import styled from "styled-components"


export const HeroWrapper = styled.header`
margin-top: -5rem;
padding-top: 5rem;
height: 100vh;
background: var(--clr-primary-10);
position: relative;

    .underline {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    .btn {
        margin-top: 1.25rem;
    }

    @media screen and (min-width: 992px) {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 65%;
          right: 0;
          bottom: 0;
          background: var(--clr-white);
        }
        h4 {
            font-size: 0.85rem;
          }
    }
    @media screen and (min-width: 1170px) {
        h4 {
            font-size: 1rem;
            line-height: 1;
          }
    }

`
export const HeroCenter = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    @media screen and (min-width: 676px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
    @media screen and (min-width: 992px) {
      width: 95vw;
      .services-center {
        grid-template-columns: 1fr 1fr 1fr;
      }
      grid-template-columns: repeat(12, 1fr);
    }
   

`
export const HeroInfo = styled.div`
    background: var(--clr-primary-10);  

    h4 {
        color: var(--clr-grey-5);
      }
    @media screen and (min-width: 992px) {
        grid-row: 1/1;
        grid-column: 1 / span 8;
    }
    @media screen and (min-width: 1170px) {
        grid-column: 1 / span 8;
    }
`

