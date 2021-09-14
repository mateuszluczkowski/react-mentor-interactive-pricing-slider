import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import theme from "utils/theme";
import App from "./App";

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         {" "}
         <Normalize />
         <App />
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
