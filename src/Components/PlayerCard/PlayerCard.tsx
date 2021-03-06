import React from "react";
import { CardBall, CardCalender, CardGlobe } from "../../Constants/Icons";
import CardBase from "../CardBase/CardBase";

import "./PlayerCard.scss";

export interface PlayerCardProps {
  name: string;
  dob: string;
  dominantArm: string;
  country: string;
}

const PlayerCard: React.FC<PlayerCardProps> = (props) => {
  return (
    <div className="playerCard">
      <CardBase>
        <div className="playerName">{props.name}</div>
        <div className="playerDetails">
          <span className="country">
            <CardGlobe /> {props.country}
          </span>
          <span className="dob">
            <CardCalender /> {props.dob}
          </span>
        </div>
        <div className="dominantArm">
          <CardBall /> {props.dominantArm}
        </div>
      </CardBase>
    </div>
  );
};
export default PlayerCard;
