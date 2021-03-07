import React from "react";
import { CardBall, CardCalender, CardGlobe } from "../../Constants/Icons";
import { Player } from "../../data/players";
import CardBase from "../CardBase/CardBase";

import "./PlayerCard.scss";

const PlayerCard: React.FC<Player> = (props) => {
  return (
    <div className="playerCard">
      <CardBase>
        <div className="playerName">{props.playerName}</div>
        <div className="playerDetails">
          <span className="country">
            <CardGlobe />
            {props.country ?? <span className="unknown">Unkown</span>}
          </span>
          <span className="dob">
            <CardCalender />
            {props.dob ?? <span className="unknown">Unkown</span>}
          </span>
        </div>
        <div className="dominantArm">
          <CardBall />
          {props.battingHand?.replace("_", " ") ?? (
            <span className="unknown">Unkown</span>
          )}
        </div>
      </CardBase>
    </div>
  );
};
export default PlayerCard;
