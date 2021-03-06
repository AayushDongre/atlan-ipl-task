import React from "react";
import CardBase from "../CardBase/CardBase";

import "./TeamCard.scss";

export interface TeamCardProps {
  teamName: string;
  awayPercent: number;
  homePercent: number;
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
  return (
    <div className="teamCard">
      <CardBase>
        <div className="teamName">{props.teamName}</div>
        <div className="winPercent">
          <div>
            <span className="home">Home</span>
            <span className="homePercent">+{props.homePercent}%</span>
          </div>
          <div>
            <span className="away">Away</span>
            <span className="awayPercent">+{props.awayPercent}%</span>
          </div>
        </div>
      </CardBase>
    </div>
  );
};

export default TeamCard;
