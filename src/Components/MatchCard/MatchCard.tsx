import React from "react";
import { CardCalender, CardGlobe } from "../../Constants/Icons";
import CardBase from "../CardBase/CardBase";

import "./MatchCard.scss";

export interface MatchCardProps {
  winningTeam: string;
  losingTeam: string;
  loaction: string;
  date: string;
}

const MatchCard: React.FC<MatchCardProps> = (props) => {
  return (
    <div className="matchCard">
      <CardBase>
        <div className="teamNames">
          <span className="winningTeam teamNames">{props.winningTeam}</span>
          <span className="vs">VS</span>
          <span className="losingTeam teamNames">{props.losingTeam}</span>
        </div>
        <div className="matchDetails">
          <span className="matchLocation">
            <CardGlobe /> {props.loaction}
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
