import Player from "../models/player.js";
import Team from "../models/team.js";
import ApiError from "../../../common/utils/api-error.js";
import Stats from "../models/player.stats.js";

const createPlayer = async ({ name, role, teamid }) => {
  const player = await Player.create({ name, role, teamid });
  return player;
};

const getAllPlayer = async () => {
  const player = await Player.findOne();
  if (!player) throw ApiError.notfound("player not found");

  return player;
};

const getAllPlayerById = async (id) => {
  const player = await Player.findOne(id);
  if (!player) throw ApiError.notfound("player not found");

  return player;
};

const updatePlayer = async (id, { name, company }) => {
  const player = await Player.findByIdAndUpdate(id, { name, company });
  return player;
};

const deletePlayerById = async (id) => {
  const player = await Player.findByIdAndDelete(id);
  return player;
};
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

const postPlayerStats = async ({ name, wickets, runs, playerid }) => {
  const player = await Stats.create({ name, wickets, runs, playerid });
  return player;
};
const updatePlayerStats = async (id, { runs }) => {
  const player = await Stats.findByIdAndUpdate(
    id,
    { runs },
    { new: true, runValidators: true },
  );
  if (!player) throw ApiError.notfound("player not found");

  return player;
};
export {
  createPlayer,
  getAllPlayer,
  getAllPlayerById,
  updatePlayer,
  deletePlayerById,
  transferPlayer,
  updatePlayerRole,
  postPlayerStats,
  updatePlayerStats
};
