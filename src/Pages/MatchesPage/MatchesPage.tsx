import React, { useState } from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import MatchCard from "../../Components/MatchCard/MatchCard";
import { matches } from "../../data/matches";
import MatchesDrawer from "./MatchesDrawer";

import "./MatchesPage.scss";

const MatchesPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(matches[0]);

  return (
    <div>
      <MatchesDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        selectedMatch={selectedMatch}
      />

      <div className="inputBar">
        <input type="text" placeholder="Team 1" />
        <input type="text" placeholder="Team 2" />
        <input type="text" placeholder="Venue" />
        <input type="number" placeholder="IPL year" />
      </div>

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
