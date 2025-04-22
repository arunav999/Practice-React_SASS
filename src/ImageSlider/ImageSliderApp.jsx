import React from "react";
import ImageSlider from "./components/imageSlider.jsx";

export default function ImageSliderApp() {
  return (
    <>
      <ImageSlider
        url={"http://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}
