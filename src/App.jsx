import React from "react";
import { Routes, Route } from "react-router-dom";

import HirePage from "./Components/HirePage/HirePage"; // Import HirePage component
import HomePage from "./Components/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/hire" element={<HirePage />} />
      </Routes>
    </>
  );
}
