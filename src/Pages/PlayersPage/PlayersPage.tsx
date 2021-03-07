import React, { useState } from "react";
import ReactList from "react-list";
import LazyLoading from "react-list-lazy-load";

import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";
import PlayerCard from "../../Components/PlayerCard/PlayerCard";
import { players } from "../../data/players";
import PlayersDrawer from "./PlayersDrawer";
/* eslint-disable */

import "./PlayersPage.scss";

const PlayersPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    bowlingSkill: "",
    battingHand: "",
  });

  return (
    <div>
      <PlayersDrawer
        selectedPlayer={selectedPlayer}
        setDrawerState={setDrawerState}
        drawerState={drawerState}
      />

      <div className="inputBar">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              name: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              country: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Balling Skill"
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              bowlingSkill: e.target.value,
            }))
          }
        />
        <select
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              battingHand: e.target.value,
            }))
          }
        >
          <option value="" selected>
            Batting Hand
          </option>
          <option value="Right_Hand">Right Hand</option>
          <option value="Left_Hand">Left Hand</option>
        </select>
      </div>

      <div>
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
    </div>
  );
};

export default PlayersPage;
