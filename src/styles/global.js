import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html,
    body,
    #root {
        height: 100%;
        max-height: 100%;
    }
    body {
        overflow: auto;
        -webkit-font-smoothing: antialiased;
        background: #eee;
    }
`;

export default GlobalStyle;