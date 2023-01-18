import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundTitle } from "./components/404Page";
import CharacterPage from "./components/CharacterPage";
import Context from "./components/context";
import HomePage from "./components/HomePage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<CharacterPage />} />
          <Route path="*" element={<NotFoundTitle />} />
        </Routes>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
