import Player from "../models/player.js";
import Team from "../models/team.js";
import ApiError from "../../../common/utils/api-error.js";

const transferPlayer = async (playerid, newteamid) => {
  const team = await Team.findById(newteamid);

  if (!team) throw ApiError.notfound("team not found");

  const player = await Player.findByIdAndUpdate(
    playerid,
    { teamid: newteamid },
    { new: true, runValidators: true },
  ).populate("teamid", "name");

  if (!player) throw ApiError.notfound("player not found");

  return player;
};

const updatePlayerRole = async (playerid, newRole) => {
  const player = await Player.findByIdAndUpdate(
    playerid,
    { role: newRole },
    { new: true, runValidators: true },
  ).populate("teamid", "name");
  if (!player) throw ApiError.notfound("team not found");

  return player;
};
export { transferPlayer, updatePlayerRole}