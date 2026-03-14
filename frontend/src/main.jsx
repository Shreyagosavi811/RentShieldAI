import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
<<<<<<< HEAD
=======
import { AuthProvider } from "./context/AuthContext";
>>>>>>> cef01d5e23e96ee5d77c5ef86bc4f0857d389990

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
