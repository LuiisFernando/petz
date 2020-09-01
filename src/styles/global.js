import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

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
        font: 14px 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;