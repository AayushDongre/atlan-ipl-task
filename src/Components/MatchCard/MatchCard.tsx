import React from "react";

import { CardCalender, CardGlobe } from "../../Constants/Icons";
import { Match } from "../../data/matches";
import CardBase from "../CardBase/CardBase";
import MatchTeamNames from "../MatchTeamNames/MatchTeamNames";

import "./MatchCard.scss";

const MatchCard: React.FC<Match> = (props) => {
  return (
    <div className="matchCard">
      <CardBase>
        <MatchTeamNames
          team1={props.team1}
          team2={props.team2}
          winner={props.winner}
        />
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
