import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./setting/mui.setting.js"
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter >
  <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
  </ThemeProvider>
    </BrowserRouter>
);
