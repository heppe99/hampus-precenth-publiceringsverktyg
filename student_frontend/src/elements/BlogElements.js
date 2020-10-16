import styled from "styled-components"

export const BlogPage = styled.section`
    background: ${props=> {
        switch (props.color) {
            case "dark1":
              return props.theme.colors.dark1
            case "dark2":
              return props.theme.colors.dark2
            case "dark3":
              return props.theme.colors.dark3
            case "light1":
              return props.theme.colors.light1
            case "light2":
              return props.theme.colors.light2
            default:
              return props.theme.colors.dark1

        }
    }};
    min-height: calc(100vh - 5rem - 9rem);
`