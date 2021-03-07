import React from "react";
import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import { Player } from "../../data/players";

export interface PlayersDrawerProps {
  selectedPlayer: Player;
  drawerState: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayersDrawer: React.FC<PlayersDrawerProps> = (props) => {
  return (
    <CustomDrawer
      isOpen={props.drawerState}
      setDrawerState={props.setDrawerState}
    >
      <div className="playersDrawer">
        <div className="drawerPlayerName">
          {props.selectedPlayer.playerName}
        </div>
        <h1 className="playerInfo">Player Details</h1>
        <div className="drawerPlayerDetails">
          <ul>
            {props.selectedPlayer.country && (
              <li>
                County -{" "}
                <span className="detail">{props.selectedPlayer.country}</span>
              </li>
            )}
            {props.selectedPlayer.dob && (
              <li>
                Date of birth -{" "}
                <span className="detail">{props.selectedPlayer.dob}</span>
              </li>
            )}
            {props.selectedPlayer.battingHand && (
              <li>
                Batting Hand -{" "}
                <span className="detail">
                  {props.selectedPlayer.battingHand.replace("_", " ")}
                </span>
              </li>
            )}
            {props.selectedPlayer.bowlingSkill && (
              <li>
                Bowling Skills -{" "}
                <span className="detail">
                  {props.selectedPlayer.bowlingSkill.replace("-", " ")}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </CustomDrawer>
  );
};

export default PlayersDrawer;
