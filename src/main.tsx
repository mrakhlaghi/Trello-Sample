import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
// import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router-dom";

// const oidcConfig = {
//   authority: "https://sso.narinsoft.ir",
//   client_id: "TestApp",
//   redirect_uri: `${window.location.protocol}//${window.location.host}/test`,
//   // silent_redirect_uri: `${window.location.protocol}//${window.location.host}/dashboard`,
//   onSigninCallback: () => {
//     window.history.replaceState({}, document.title, window.location.pathname);
//   },
//   // automaticSilentRenew: true,
// };
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider {...oidcConfig}> */}
      <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>
);
