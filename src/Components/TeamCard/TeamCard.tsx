import React from "react";

import { Team } from "../../data/teams";
import CardBase from "../CardBase/CardBase";

import "./TeamCard.scss";

const TeamCard: React.FC<Team> = (props) => {
  return (
    <div className="teamCard">
      <CardBase>
        <div className="teamName">{props.team}</div>
        <div className="winPercent">
          <div>
            <span className="home">Home</span>
            <span className="homePercent">
              +{props.home_win_percentage.toFixed(2)}%
            </span>
          </div>
          <div>
            <span className="away">Away</span>
            <span className="awayPercent">
              +{props.away_win_percentage.toFixed(2)}%
            </span>
          </div>
        </div>
      </CardBase>
    </div>
  );
};

export default TeamCard;
