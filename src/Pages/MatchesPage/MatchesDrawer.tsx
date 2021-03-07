import React from "react";

import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import MatchTeamNames from "../../Components/MatchTeamNames/MatchTeamNames";
import { Match } from "../../data/matches";

export interface MatchesDrawerProps {
  selectedMatch: Match;
  drawerState: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MatchesDrawer: React.FC<MatchesDrawerProps> = (props) => {
  return (
    <CustomDrawer
      isOpen={props.drawerState}
      setDrawerState={props.setDrawerState}
    >
      <div className="matchDrawer">
        <MatchTeamNames
          team1={props.selectedMatch.team1}
          team2={props.selectedMatch.team2}
          winner={props.selectedMatch.winner}
        />
        <div className="seasonDetails">
          {props.selectedMatch.date} <span className="slash">/</span>{" "}
          {props.selectedMatch.season}
        </div>
        <div className="locationDetails">
          {props.selectedMatch.venue}, {props.selectedMatch.city}
        </div>
        <h1 className="matchHighlightsTitle">Match Highlights</h1>
        <div className="matchHighlights">
          <ul>
            <li>
              <span className="tossWinner">
                {props.selectedMatch.tossWinner} won
              </span>{" "}
              the toss and decided to{" "}
              <span className="tossDecision">
                {props.selectedMatch.tossDecision}
              </span>
            </li>
            <li>
              <span className="matchWinner">{props.selectedMatch.winner}</span>{" "}
              won the match by{" "}
              <span className="winByRuns">
                {props.selectedMatch.win_by_runs} runs
              </span>{" "}
              and{" "}
              <span className="winByWickets">
                {props.selectedMatch.win_by_wickets} wickets
              </span>
            </li>
            <li>
              <span className="manOfTheMatch">
                {props.selectedMatch.player_of_match}
              </span>{" "}
              was declared the{" "}
              <span className="manOfTheMatch">Player of the Match</span>
            </li>
          </ul>
        </div>
      </div>
    </CustomDrawer>
  );
};

export default MatchesDrawer;
