import React from "react";

import Header from "./Cards_React/components/Header.jsx";
import Cards from "./Cards_React/components/Cards.jsx";

// Accordian App
import AccordianApp from "./Accordion/AccordianApp.jsx";

// Random Color App
import RandomColorApp from "./Random_Color/RandomColorApp.jsx";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Cards /> */}
      <AccordianApp />
      <RandomColorApp />
    </>
  );
}
