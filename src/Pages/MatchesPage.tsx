import React from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import MatchCard from "../Components/MatchCard/MatchCard";
import { matches } from "../data/matches";

const MatchesPage: React.FC = () => {
  return (
    <div>
      <LazyLoading length={matches.length} items={matches}>
        <ReactList
          type="uniform"
          length={matches.length}
          itemRenderer={(id, key) => (
            <MatchCard
              season={matches[id].season}
              city={matches[id].city}
              date={matches[id].date}
              team1={matches[id].team1}
              team2={matches[id].team2}
              tossWinner={matches[id].tossWinner}
              tossDecision={matches[id].tossDecision}
              winner={matches[id].winner}
              win_by_runs={matches[id].win_by_runs}
              win_by_wickets={matches[id].win_by_wickets}
              player_of_match={matches[id].player_of_match}
              venue={matches[id].venue}
            />
          )}
        />
      </LazyLoading>
    </div>
  );
};

export default MatchesPage;
