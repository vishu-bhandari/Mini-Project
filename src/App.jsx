import React from "react";
import Navbar from "./Components/Navbar";
import SearchComponent from "./Components/SearchComponent";
import AboutSection from "./Components/AboutSection";
import Alpine from "alpinejs";

// Initialize Alpine.js globally for the app
if (typeof window !== "undefined") {
  window.Alpine = Alpine;
  Alpine.start();
}

export default function App() {
  return (
    <>
      <Navbar />
      <SearchComponent />
      <AboutSection />
    </>
  );
}
