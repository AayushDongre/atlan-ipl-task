import React from "react";
import TeamCard from "../Components/TeamCard/TeamCard";
import { teams } from "../data/teams";

const TeamsPage: React.FC = () => {
  return (
    <div>
      {teams.map((team) => (
        <TeamCard
          team={team.team}
          homeWins={team.homeWins}
          awayWins={team.awayWins}
          homeMatches={team.homeMatches}
          awayMatches={team.awayMatches}
          home_win_percentage={team.home_win_percentage}
          away_win_percentage={team.away_win_percentage}
        />
      ))}
    </div>
  );
};

export default TeamsPage;
