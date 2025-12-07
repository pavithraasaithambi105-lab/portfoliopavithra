import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add more routes here if you have other pages */}
    </Routes>
  </HashRouter>
);
