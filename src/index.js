import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext";

import App from './App';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
