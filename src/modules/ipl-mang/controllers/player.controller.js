import Player from "../models/player.js";
import ApiResponse from "../../../common/utils/api-response.js";
import * as playerService from "../services/player.service.js";

const postPlayer = async (req, res) => {
  const player = await playerService.createPlayer(req.body);
  throw ApiResponse.created(res, "player created successfully", player);
};
const getAllPlayer = async (req, res) => {
  const player = await playerService.getAllPlayer(req.body);
  throw ApiResponse.ok(res, "info of player", player);
};
const getPlayerById = async (req, res) => {
  const player = await playerService.getAllPlayerById(req.params.id);
  throw ApiResponse.ok(res, "info of player from ID", player);
};

const putPlayerById = async (req, res) => {
  const player = await playerService.updatePlayer(req.params.id, req.body);
  throw ApiResponse.ok(res, "updated player", player)
};
const deletePlayer = async (req, res) => {
    const player = await playerService.deletePlayerById(req.params.id)
    throw ApiResponse.ok(res, "deleted player", player)
};

export { postPlayer, getAllPlayer, getPlayerById, putPlayerById, deletePlayer };
