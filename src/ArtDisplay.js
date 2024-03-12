import { useState } from "react";
import { sculptureList } from "./data";

export default function ArtDisplay() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const currentSculpture = sculptureList[index];

  const handleNextClick = () => {
    setIndex((index + 1) % sculptureList.length);
  };
  const handleToggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={handleNextClick}>next</button>
      <p>
        {currentSculpture.name} by {currentSculpture.artist}
      </p>
      <p>
        (Slide {index + 1} of {sculptureList.length})
      </p>
      <button onClick={handleToggleShow}>
        {show ? "Hide" : "Show"} description
      </button>
      <div>{show && <p>{currentSculpture.description}</p>}</div>
      <img
        src={currentSculpture.url}
        alt={currentSculpture.alt}
        style={{ width: "200px", height: "200px" }}
      />
    </>
  );
}
//next button
//  click on button
//      advance index and art details respectivley

//image name  made by
//art slide index
//image

//description close/open button
//  click button
//      toggle detail text

//needed state for index and toggle
//need to make setIndex and setShow functions
//increase slide index nuimber
//get indexed sculpture
