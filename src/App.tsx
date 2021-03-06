import React from "react";
import TopBar from "./Components/NavBar/NavBar";
import "./App.scss";
import PlayerCard from "./Components/PlayerCard/PlayerCard";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TopBar />
        <div style={{ padding: "1rem" }}>
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
