import styled from "styled-components"

export const FooterWrapper = styled.footer`
  height: 9rem;
  background: var(--clr-primary-11);
  text-align: center;
  display: grid;
  place-items: center;
  h4 {
    margin-top: 0.5rem;
    color: black;
    font-weight: normal;
    text-transform: uppercase;
  }
  @media screen and (min-width: 800px) {
    h4 {
      font-size: 1rem;
    }
  }
`
export const FooterContent = styled.div`
  span {
    color: black;
  }
  .social-link {
      color: black;
      &:hover {
      color: yellowgreen;
    }
  }
`