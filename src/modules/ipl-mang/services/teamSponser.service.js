import TeamSponser from "../models/team-sponser.js";
import Team from "../models/team.js";
import Sponser from "../models/sponser.js";
import ApiError from "../../../common/utils/api-error.js";

const attachSponser = async (teamId, sponserId) => {
  const team = await Team.findById(teamId);
  if (!team) throw ApiError.notfound("team not found");

  const sponser = await Sponser.findById(sponserId);
  if (!sponser) throw ApiError.notfound("sponser not found");

  const checkExist = await TeamSponser.findOne({ teamId, sponserId });
  if (checkExist) throw ApiError.conflict("sponser already attached to team");

  const attach = await TeamSponser.create({ teamId, sponserId });
  return attach;
};

// export default attachSponser