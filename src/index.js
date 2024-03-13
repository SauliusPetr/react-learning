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
import { Toolbar, AlertButton, SendEmail } from "./CustomButtons.js";
import { MessageForm, DisplayFormInput, UpdateObjInForm } from "./Form.js";
import {
  NormalThenUpdater,
  UpdaterThenNormal,
  UpdaterFunctionEx,
} from "./UpdaterFunctions.js";
import { CursorHighlight } from "./ObjectsInState.js";
import { AddArrayItems, DeleteArrayItems } from "./ArrayManipulation.js";

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
        <Toolbar
          onClikToolbar={() => alert("propfunction passed to Toolbar")}
        />
      </Card>
      <Card>
        <MessageForm />
        <hr />
        <DisplayFormInput />
      </Card>
      <Card>
        <h3>Adding 3 updater functions</h3>
        <UpdaterFunctionEx />
        <h3>Adding updater function and then a normal</h3>
        <UpdaterThenNormal />
        <h3>Adding normal function and then an updater func</h3>
        <NormalThenUpdater />
      </Card>
      <Card>
        <CursorHighlight />
      </Card>
      <Card>
        <UpdateObjInForm />
      </Card>
      <Card>
        <AddArrayItems />
        <DeleteArrayItems />
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
