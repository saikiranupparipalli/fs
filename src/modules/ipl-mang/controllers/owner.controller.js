import * as ownerService from "../services/owner.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const owner = async (req, res) => {
  const owner = await ownerService.createOwner(req.body.name, req.body.company);
  return ApiResponse.created(res, "user created successfully", owner);
};

const getOwner = async (req, res) => {
  const owner = await ownerService.getOwner();
  throw ApiResponse.ok(res, "got all owners", owner);
};

const getOwnerById = async (req, res) => {
  const owner = await ownerService.getOwnerById(req.params.id);
  throw ApiResponse.ok(res, "got owner by id", owner);
};

const putOwner = async (req, res) => {
  const updatedOwner = await ownerService.updateOwner(req.params.id, req.body);
  throw ApiResponse.ok(res, "updated owner", updatedOwner);
};

const deleteOwner = async (req, res) => {
  const deletedOwner = await ownerService.deleteOwner(req.params.id);
  throw ApiResponse.ok(res, "updated owner", deleteOwner);
};

export { owner, getOwner, getOwnerById, putOwner, deleteOwner };
