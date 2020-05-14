import React from "react";
import logo from "./logo.svg";
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
}

export default App;
