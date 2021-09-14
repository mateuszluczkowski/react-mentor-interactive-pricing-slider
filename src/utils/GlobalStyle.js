import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    box-sizing:border-box;
    font-family: ${(props) => props.theme.font.family};
}
`;
export default GlobalStyle;
