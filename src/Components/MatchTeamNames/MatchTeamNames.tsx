import React from "react";
import classnames from "classnames";

import "./MatchTeamNames.scss";

export interface MatchTeamNamesProps {
  winner: string;
  team1: string;
  team2: string;
}

const MatchTeamNames: React.FC<MatchTeamNamesProps> = (props) => {
  return (
    <div className="teamNames">
      <span
        className={classnames({
          teamNames: true,
          winningTeam: props.winner === props.team1,
          losingTeam: props.winner !== props.team1,
        })}
      >
        {props.team1}
      </span>
      <span className="vs">VS</span>
      <span
        className={classnames({
          teamNames: true,
          winningTeam: props.winner === props.team2,
          losingTeam: props.winner !== props.team2,
        })}
      >
        {props.team2}
      </span>
    </div>
  );
};

export default MatchTeamNames;
