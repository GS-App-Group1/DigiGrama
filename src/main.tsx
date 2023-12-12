import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:5173/redirect",
  signOutRedirectURL: "http://localhost:5173",
  clientID: "b0TkHLKo_A3MtQxxLWT2spMw6m8a",
  baseUrl: "https://api.asgardeo.io/t/interntest",
  scope: ["openid", "profile", "app_roles", "groups", "phone"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
