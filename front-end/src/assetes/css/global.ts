import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    Body {
        font-family: 'Playfair Display', serif;
    }
    #root{
        display: flex;
        flex-direction: column;
    }
    #root > main {
        flex: 1;
    }
    html, body, #root {
      height: 100%;
      min-height: 100%;
    }
`