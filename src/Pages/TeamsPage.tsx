import React, { useState } from "react";

import CustomDrawer from "../Components/CustomDrawer/CustomDrawer";
import TeamCard from "../Components/TeamCard/TeamCard";
import { teams } from "../data/teams";

const TeamsPage: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  return (
    <div>
      <CustomDrawer isOpen={drawerState} setDrawerState={setDrawerState}>
        {selectedTeam.team}
      </CustomDrawer>

      {teams.map((team, index) => (
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
  );
};

export default TeamsPage;
