import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";

import TeamCard from "../../Components/TeamCard/TeamCard";
import { teams } from "../../data/teams";
import TeamsDrawer from "./TeamsDrawer";

import "./TeamsPage.scss";

const TeamsPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [filters, setFilters] = useState({
    teamName: "",
    homeWins: 0,
    awayWins: 0,
  });

  return (
    <div>
      <TeamsDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        selectedTeam={selectedTeam}
      />

      <div className="inputBar">
        <input
          type="text"
          placeholder="Team Name"
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              teamName: e.target.value,
            }))
          }
        />
        <input
          type="number"
          placeholder="Home Wins"
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              homeWins: !!e.target.value
                ? Number.parseFloat(e.target.value)
                : 0,
            }))
          }
        />
        <input
          type="number"
          placeholder="Away Wins"
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              awayWins: !!e.target.value
                ? Number.parseFloat(e.target.value)
                : 0,
            }))
          }
        />
      </div>

      <div className="teamCardList">
        {teams
          .filter((team) => {
            return (
              team.team
                .toLowerCase()
                .includes(filters.teamName.toLowerCase()) &&
              team.awayWins >= filters.awayWins &&
              team.homeWins >= filters.homeWins
            );
          })
          .map((team, index) => (
            <div
              onClick={() => {
                setDrawerState(true);
                setSelectedTeam(team);
              }}
            >
              <TeamCard {...team} key={index} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamsPage;
