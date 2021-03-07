import { Player } from "../data/players";
/* eslint-disable */

export const playersFilter = (player: Player, filters: any) => {
  console.log(filters);
  let filter = player.playerName
    .toLowerCase()
    .includes(filters.name.toLowerCase());
  if (player.country !== undefined) {
    filter =
      filter &&
      player.country.toLowerCase().includes(filters.name.toLowerCase());
  }
  if (player.bowlingSkill !== undefined) {
    filter =
      filter &&
      player.bowlingSkill
        .toLowerCase()
        .includes(filters.bowlingSkill.toLowerCase());
  }
  if (player.battingHand !== undefined) {
    filter =
      filter && player.battingHand.toLowerCase().includes(filters.battingHand);
  }
  return filter;
};
