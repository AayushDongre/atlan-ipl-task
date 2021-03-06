import React, { useState } from "react";
import TopBar from "./Components/NavBar/NavBar";
import "./App.scss";
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import TeamCard from "./Components/TeamCard/TeamCard";
import MatchCard from "./Components/MatchCard/MatchCard";

function App() {
  const [currentPath, setCurrentPath] = useState("players");

  return (
    <div className="App">
      <div className="wrapper">
        <TopBar currentPath={currentPath} setCurrentPath={setCurrentPath} />
        <div className="cardList">
          {currentPath === "players" &&
            [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <PlayerCard
                country="India"
                name="V. Kohli"
                dob="05-07-2017"
                dominantArm="Right"
              />
            ))}
          {currentPath === "teams" &&
            [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <TeamCard
                teamName="Kings XI Punjab"
                awayPercent={47.2}
                homePercent={62.5}
              />
            ))}
          {currentPath === "matches" &&
            [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <MatchCard
                winningTeam="Sunrisers Hyderabad"
                losingTeam="Royal Challengers Bangalore"
                loaction="Hyderabad"
                date="05-04-2017"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
