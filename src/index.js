import React from "react";
import ReactDOM from "react-dom/client";



//*components
import App from "./App";

//* Styled components
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";


const root = ReactDOM.createRoot(document.getElementById("root"));
let ComponentCondition = true

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App  condition ={ComponentCondition}/>
    </ThemeProvider>
  </React.StrictMode>
);
