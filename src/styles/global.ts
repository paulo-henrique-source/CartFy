import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --background: ##E5E5E5;
    --white: #FFFFFF;
    --blue: #2664D1;
    --gren: #459E31;
    --orange:#FB8200;
    --blue-light: #9DC2FF;
    --text: #19191D;
    --text-bold: #000000;
    --grey: #F9F9F9;
    --grey-dark: #EDEDF0
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html  {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }
  @media(max-width: 720px) {
    font-size: 87.5%
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`
