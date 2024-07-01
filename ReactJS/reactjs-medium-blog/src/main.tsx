import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* If you are using createBrowserRouter then remove BrowserRouter as Router from App Wrapper */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
