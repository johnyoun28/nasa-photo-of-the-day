import React from "react";
import "./App.css";
import PhotoData from "./components/PhotoData";

function App() {
  return (
    <div className="App">
      <PhotoData />

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
