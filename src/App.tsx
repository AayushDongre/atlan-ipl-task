import React, { useState } from "react";
import TopBar from "./Components/NavBar/NavBar";
import "./App.scss";
import TeamCard from "./Components/TeamCard/TeamCard";
import PlayersPage from "./Pages/PlayersPage";
import MatchesPage from "./Pages/MatchesPage";

function App() {
  const [currentPath, setCurrentPath] = useState("players");

  return (
    <div className="App">
      <div className="wrapper">
        <TopBar currentPath={currentPath} setCurrentPath={setCurrentPath} />
        <div className="cardList">
          {currentPath === "players" && <PlayersPage />}
          {currentPath === "teams" &&
            [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <TeamCard
                teamName="Kings XI Punjab"
                awayPercent={47.2}
                homePercent={62.5}
              />
            ))}
          {currentPath === "matches" && <MatchesPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
