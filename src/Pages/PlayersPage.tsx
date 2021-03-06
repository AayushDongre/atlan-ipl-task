import React from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import PlayerCard from "../Components/PlayerCard/PlayerCard";
import { players } from "../data/players";

const PlayersPage: React.FC = () => {
  return (
    <div>
      <LazyLoading length={players.length} items={players}>
        <ReactList
          type="uniform"
          length={players.length}
          itemRenderer={(id, key) => (
            <PlayerCard
              country={players[id].country}
              playerName={players[id].playerName}
              dob={players[id].dob}
              battingHand={players[id].battingHand}
              key={key}
            />
          )}
        />
      </LazyLoading>
    </div>
  );
};

export default PlayersPage;
