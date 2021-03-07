import React, { useState } from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import PlayerCard from "../../Components/PlayerCard/PlayerCard";
import { players } from "../../data/players";

import "./PlayersPage.scss";

const PlayersPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  return (
    <div>
      <CustomDrawer isOpen={drawerState} setDrawerState={setDrawerState}>
        <div className="playersDrawer">
          <div className="drawerPlayerName">{selectedPlayer.playerName}</div>
          <h1 className="playerInfo">Player Details</h1>
          <div className="drawerPlayerDetails">
            <ul>
              {selectedPlayer.country && (
                <li>
                  County -{" "}
                  <span className="detail">{selectedPlayer.country}</span>
                </li>
              )}
              {selectedPlayer.dob && (
                <li>
                  Date of birth -{" "}
                  <span className="detail">{selectedPlayer.dob}</span>
                </li>
              )}
              {selectedPlayer.battingHand && (
                <li>
                  Batting Hand -{" "}
                  <span className="detail">
                    {selectedPlayer.battingHand.replace("_", " ")}
                  </span>
                </li>
              )}
              {selectedPlayer.bowlingSkill && (
                <li>
                  Bowling Skills -{" "}
                  <span className="detail">
                    {selectedPlayer.bowlingSkill.replace("-", " ")}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </CustomDrawer>

      <LazyLoading length={players.length} items={players}>
        <ReactList
          type="uniform"
          length={players.length}
          itemRenderer={(id, key) => (
            <div
              onClick={() => {
                setDrawerState(true);
                setSelectedPlayer(players[id]);
              }}
            >
              <PlayerCard {...players[id]} key={key} />
            </div>
          )}
        />
      </LazyLoading>
    </div>
  );
};

export default PlayersPage;
