import React from "react";
import classnames from "classnames";

import { CardCalender, CardGlobe } from "../../Constants/Icons";
import { Match } from "../../data/matches";
import CardBase from "../CardBase/CardBase";

import "./MatchCard.scss";

const MatchCard: React.FC<Match> = (props) => {
  return (
    <div className="matchCard">
      <CardBase>
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
        <div className="matchDetails">
          <span className="matchLocation">
            <CardGlobe /> {props.city}
          </span>
          <span className="matchDate">
            <CardCalender /> {props.date}
          </span>
        </div>
      </CardBase>
    </div>
  );
};

export default MatchCard;
