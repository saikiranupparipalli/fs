import ApiResponse from "../../../common/utils/api-response.js";
import * as TeamService from "../services/team.service.js";

const postTeam = async (req, res) => {
  const team = await TeamService.createTeam(req.body);
  throw ApiResponse.created(res, "team created successfully", team);
};
const getAllTeam = async (req, res) => {
  const team = await TeamService.getAllTeam();
  throw ApiResponse.ok(res, "info of team", team);
};
const getTeamById = async (req, res) => {
  const team = await TeamService.getAllTeamById(req.params.id);
  throw ApiResponse.ok(res, "info of team from ID", team);
};

const putTeamById = async (req, res) => {
  const team = await TeamService.updateTeamById(req.params.id, req.body);
  throw ApiResponse.ok(res, "updated team", team);
};
const deleteTeam = async (req, res) => {
  const team = await TeamService.deleteTeamById(req.params.id);
  throw ApiResponse.ok(res, "deleted team", team);
};

export { postTeam, getAllTeam, getTeamById, putTeamById, deleteTeam };
