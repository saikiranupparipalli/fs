import Team from "../models/team.js";
import Broadcaster from "../models/broadcaster.js";
import Teambroadcaster from "../models/team-broadcaster.js";
import ApiError from "../../../common/utils/api-error.js";

const assignBroadcaster = async (teamid, broadcasterid) => {
  const team = await Team.findById(teamid);
  if (!team) throw ApiError.notfound("team not found");

  const broadcaster = await Broadcaster.findById(broadcasterid);
  if (!broadcaster) throw ApiError.notfound("broadcaster not found");

  const checkExist = await Teambroadcaster.findOne({teamid, broadcasterid})
  if(checkExist) throw ApiError.conflict("broadcaster has already assigned to the team")

    const createBroadCaster = await Teambroadcaster.create(
        {teamid, broadcasterid}
    )
    return createBroadCaster
};
