import React, { useState } from "react";

import PlayersPage from "./Pages/PlayersPage";
import MatchesPage from "./Pages/MatchesPage";
import TeamsPage from "./Pages/TeamsPage";
import TopBar from "./Components/NavBar/NavBar";

import "./App.scss";

function App() {
  const [currentPath, setCurrentPath] = useState(
    localStorage.getItem("path") ?? "matches"
  );

  return (
    <div className="wrapper">
      <TopBar currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <div className="cardList">
        {currentPath === "players" && <PlayersPage />}
        {currentPath === "teams" && <TeamsPage />}
        {currentPath === "matches" && <MatchesPage />}
      </div>
    </div>
  );
}

export default App;
