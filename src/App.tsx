import React, { useState } from "react";

import PlayersPage from "./Pages/PlayersPage";
import MatchesPage from "./Pages/MatchesPage";
import TeamsPage from "./Pages/TeamsPage";
import TopBar from "./Components/NavBar/NavBar";

import "./App.scss";

function App() {
  const [currentPath, setCurrentPath] = useState("players");

  return (
    <div className="App">
      <div className="wrapper">
        <TopBar currentPath={currentPath} setCurrentPath={setCurrentPath} />
        <div className="cardList">
          {currentPath === "players" && <PlayersPage />}
          {currentPath === "teams" && <TeamsPage />}
          {currentPath === "matches" && <MatchesPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
