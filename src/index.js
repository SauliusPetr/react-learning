import React, { useState } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Profile from "./Profile.js";
import { ProfileList } from "./Profile.js";
import FancyText from "./FancyText.js";
import GenerateQuote from "./GenerateQuote.js";
import { Card } from "./Profile.js";
import ArtDisplay from "./ArtDisplay.js";
import Copyright from "./Copyright.js";
import { AlertButton, SendEmail } from "./CustomButtons.js";

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          recognitions: [
            { title: "Profession:", description: "physicist and chemist" },
            {
              title: "Awards: 4",
              description:
                "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,Matteucci Medal",
            },
            {
              title: "Discovered:",
              description: "polonium (chemical element)",
            },
          ],
        }}
        size={70}
      />
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          recognitions: [
            { title: "Profession:", description: "geochemist" },
            {
              title: "Awards: 2",
              description: "(Miyake Prize for geochemistry, Tanaka Prize)",
            },
            {
              title: "Discovered:",
              description: "a method for measuring carbon dioxide in seawater",
            },
          ],
        }}
        size={90}
      />
      <h2>Chemists</h2>
      <ProfileList profession={"chemist"} />
      <h2>Everyone Else</h2>
      <ProfileList profession={"chemist"} exclude={true} />
      <Card>
        <FancyText title text={"Inspirational quote generator"} />
        <GenerateQuote>
          <Copyright year={new Date().getFullYear()} />
        </GenerateQuote>
      </Card>
      <Card>
        <ArtDisplay />
      </Card>
      <Card>
        <AlertButton message={"ALERRRT!"} />
        <SendEmail messageTo={"name@domain.net"} />
      </Card>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
