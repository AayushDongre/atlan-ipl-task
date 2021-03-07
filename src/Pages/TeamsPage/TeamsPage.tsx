import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import TeamCard from "../../Components/TeamCard/TeamCard";
import { teams } from "../../data/teams";

import "./TeamsPage.scss";

const TeamsPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  return (
    <div>
      <CustomDrawer isOpen={drawerState} setDrawerState={setDrawerState}>
        <div className="teamDrawer">
          <div className="drawerTeamName">{selectedTeam.team}</div>
          <div className="progressBars">
            <div className="home">
              Home Wins
              <CircularProgressbar
                className="homeBar"
                value={selectedTeam.homeWins}
                maxValue={selectedTeam.homeMatches}
                text={`${selectedTeam.homeWins}/${selectedTeam.homeMatches}`}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                })}
              />
              <span className="winPercent">{`+${selectedTeam.home_win_percentage.toFixed(
                2
              )}%`}</span>
            </div>
            <div className="away">
              Away Wins
              <CircularProgressbar
                className="awayBar"
                value={selectedTeam.awayWins}
                maxValue={selectedTeam.awayMatches}
                text={`${selectedTeam.awayWins}/${selectedTeam.awayMatches}`}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                })}
              />
              <span className="winPercent">{`+${selectedTeam.away_win_percentage.toFixed(
                2
              )}%`}</span>
            </div>
          </div>
        </div>
      </CustomDrawer>

      <div className="inputBar">
        <input type="text" placeholder="Team Name" />
        <input type="number" placeholder="Home Wins" />
        <input type="number" placeholder="Away Wins" />
      </div>

      <div className="teamCardList">
        {teams.map((team, index) => (
          <div
            onClick={() => {
              setDrawerState(true);
              setSelectedTeam(team);
            }}
          >
            <TeamCard {...team} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
