import Player from "../models/player.js";
// import Owner from "../models/owner.js";
import Team from "../models/team.js";
import ApiError from "../../../common/utils/api-error.js";

const createTeam = async ({ name,  ownerid }) => {
  const team = await Team.create({ name, ownerid });
  return team;
};

const getAllTeam = async () => {
  const team = await Team.findOne();
  if (!team) throw ApiError.notfound("team not found");

  return team;
};

const getAllTeamById = async (id) => {
  const team = await Team.findById(id);
  if (!team) throw ApiError.notfound("team not found");

  return team;
};

const updateTeamById = async (id, { name}) => {
  const team = await Team.findByIdAndUpdate(id, { name});
  return team;
};

const deleteTeamById = async (id) => {
  const team = await Team.findByIdAndDelete(id);
  return team;
};

export {
  createTeam,
  getAllTeam,
  getAllTeamById,
  updateTeamById,
  deleteTeamById,
};
