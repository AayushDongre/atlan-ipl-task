import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import { Team } from "../../data/teams";

export interface PlayersDrawerProps {
  selectedTeam: Team;
  drawerState: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamsDrawer: React.FC<PlayersDrawerProps> = (props) => {
  return (
    <CustomDrawer
      isOpen={props.drawerState}
      setDrawerState={props.setDrawerState}
    >
      <div className="teamDrawer">
        <div className="drawerTeamName">{props.selectedTeam.team}</div>
        <div className="progressBars">
          <div className="home">
            Home Wins
            <CircularProgressbar
              className="homeBar"
              value={props.selectedTeam.homeWins}
              maxValue={props.selectedTeam.homeMatches}
              text={`${props.selectedTeam.homeWins}/${props.selectedTeam.homeMatches}`}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
              })}
            />
            <span className="winPercent">{`+${props.selectedTeam.home_win_percentage.toFixed(
              2
            )}%`}</span>
          </div>
          <div className="away">
            Away Wins
            <CircularProgressbar
              className="awayBar"
              value={props.selectedTeam.awayWins}
              maxValue={props.selectedTeam.awayMatches}
              text={`${props.selectedTeam.awayWins}/${props.selectedTeam.awayMatches}`}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
              })}
            />
            <span className="winPercent">{`+${props.selectedTeam.away_win_percentage.toFixed(
              2
            )}%`}</span>
          </div>
        </div>
      </div>
    </CustomDrawer>
  );
};

export default TeamsDrawer;
