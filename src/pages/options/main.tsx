import iframeSetup from "../../shared/dev/iframe-setup.ts";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./App";

iframeSetup()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
