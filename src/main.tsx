import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "https://localhost:3000/sign-in",
  signOutRedirectURL: "https://localhost:3000/dashboard",
  clientID: "c1PygEGq7_5SIKf5t_6fzmZ1u3Aa",
  baseUrl: "https://api.asgardeo.io/t/interntest",
  scope: ["openid", "profile"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
