import React from "react";
import TopBar from "./Components/NavBar/NavBar";
import "./App.scss";
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import TeamCard from "./Components/TeamCard/TeamCard";
import MatchCard from "./Components/MatchCard/MatchCard";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TopBar />
        <div className="cardList">
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
          <PlayerCard
            country="India"
            name="V. Kohli"
            dob="05-07-2017"
            dominantArm="Right"
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <TeamCard
            teamName="Kings XI Punjab"
            awayPercent={47.2}
            homePercent={62.5}
          />
          <MatchCard
            winningTeam="Sunrisers Hyderabad"
            losingTeam="Royal Challengers Bangalore"
            loaction="Hyderabad"
            date="05-04-2017"
          />
          <MatchCard
            winningTeam="Sunrisers Hyderabad"
            losingTeam="Royal Challengers Bangalore"
            loaction="Hyderabad"
            date="05-04-2017"
          />
          <MatchCard
            winningTeam="Sunrisers Hyderabad"
            losingTeam="Royal Challengers Bangalore"
            loaction="Hyderabad"
            date="05-04-2017"
          />
          <MatchCard
            winningTeam="Sunrisers Hyderabad"
            losingTeam="Royal Challengers Bangalore"
            loaction="Hyderabad"
            date="05-04-2017"
          />
          <MatchCard
            winningTeam="Sunrisers Hyderabad"
            losingTeam="Royal Challengers Bangalore"
            loaction="Hyderabad"
            date="05-04-2017"
          />
          <MatchCard
            winningTeam="Sunrisers Hyderabad"
            losingTeam="Royal Challengers Bangalore"
            loaction="Hyderabad"
            date="05-04-2017"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
