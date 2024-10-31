import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./Components/loginpage/loginpage.jsx";
import Dashboard from "./Components/dashboard/dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dashboard role='Reception'/>
  </StrictMode>,
)