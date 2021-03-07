import React, { useState } from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import CustomDrawer from "../Components/CustomDrawer/CustomDrawer";
import PlayerCard from "../Components/PlayerCard/PlayerCard";
import { players } from "../data/players";

const PlayersPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  return (
    <div>
      <CustomDrawer isOpen={drawerState} setDrawerState={setDrawerState}>
        {selectedPlayer.dob}
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
