import React, { useState } from "react";

import Header from "./Cards_React/components/Header.jsx";
import Cards from "./Cards_React/components/Cards.jsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Cards />
    </>
  );
}
