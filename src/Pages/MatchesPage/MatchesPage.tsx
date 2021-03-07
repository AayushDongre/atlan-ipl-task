import React, { useState } from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import MatchCard from "../../Components/MatchCard/MatchCard";
import { matches } from "../../data/matches";
import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";

const MatchesPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(matches[0]);

  return (
    <div>
      <CustomDrawer isOpen={drawerState} setDrawerState={setDrawerState}>
        {selectedMatch.date}
      </CustomDrawer>

      <LazyLoading length={matches.length} items={matches}>
        <ReactList
          type="uniform"
          length={matches.length}
          itemRenderer={(id, key) => (
            <div
              onClick={() => {
                setDrawerState(true);
                setSelectedMatch(matches[id]);
              }}
            >
              <MatchCard {...matches[id]} key={key} />
            </div>
          )}
        />
      </LazyLoading>
    </div>
  );
};

export default MatchesPage;
