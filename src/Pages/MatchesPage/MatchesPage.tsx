import React, { useState } from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import MatchCard from "../../Components/MatchCard/MatchCard";
import { matches } from "../../data/matches";
import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import MatchTeamNames from "../../Components/MatchTeamNames/MatchTeamNames";

import "./MatchesPage.scss";

const MatchesPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(matches[0]);

  return (
    <div>
      <CustomDrawer isOpen={drawerState} setDrawerState={setDrawerState}>
        <div className="matchDrawer">
          <MatchTeamNames
            team1={selectedMatch.team1}
            team2={selectedMatch.team2}
            winner={selectedMatch.winner}
          />
          <div className="seasonDetails">
            {selectedMatch.date} <span className="slash">/</span>{" "}
            {selectedMatch.season}
          </div>
          <div className="locationDetails">
            {selectedMatch.venue}, {selectedMatch.city}
          </div>
          <h1 className="matchHighlightsTitle">Match Highlights</h1>
          <div className="matchHighlights">
            <ul>
              <li>
                <span className="tossWinner">
                  {selectedMatch.tossWinner} won
                </span>{" "}
                the toss and decided to{" "}
                <span className="tossDecision">
                  {selectedMatch.tossDecision}
                </span>
              </li>
              <li>
                <span className="matchWinner">{selectedMatch.winner}</span> won
                the match by{" "}
                <span className="winByRuns">
                  {selectedMatch.win_by_runs} runs
                </span>{" "}
                and{" "}
                <span className="winByWickets">
                  {selectedMatch.win_by_wickets} wickets
                </span>
              </li>
              <li>
                <span className="manOfTheMatch">
                  {selectedMatch.player_of_match}
                </span>{" "}
                was declared the{" "}
                <span className="manOfTheMatch">Player of the Match</span>
              </li>
            </ul>
          </div>
        </div>
      </CustomDrawer>

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
