import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
  delay: 100,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
