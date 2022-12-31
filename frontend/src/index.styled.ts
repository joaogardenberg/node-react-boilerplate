import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

export default styled.createGlobalStyle`
  html,
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`
