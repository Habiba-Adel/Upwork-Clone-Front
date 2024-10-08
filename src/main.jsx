import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/signup/SignupPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignupForm from "./components/signup/SignupForm";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
