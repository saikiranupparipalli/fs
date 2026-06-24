import ApiError from "../../../common/utils/api-error.js";
import Owner from "../models/owner.js";

const createOwner = async (name, company) => {
  const owner = await Owner.create({name, company});
  return owner;
};

const getOwner = async (name) => {
  const owner = await Owner.find();
  if (!owner) throw ApiError.notfound("user not found");
  return owner;
};

const getOwnerById = async (id) => {
  const owner = await Owner.findById(id);
  if (!owner) throw ApiError.notfound("user does not exist with this id");
  return owner;
};

const updateOwner = async (id, { name, company }) => {
  const owner = await Owner.findByIdAndUpdate(
    id,
    { name, company },
    { new: true, runValidators: true },
  );
  if (!owner) throw ApiError.notfound("user not found");

  return owner;
};

const deleteOwner = async (id) => {
  const owner = await Owner.findByIdAndDelete(id);
  if (!owner) throw ApiError.notfound("user not found");
  return owner;
};

export {
    createOwner,
    getOwner,
    getOwnerById,
    updateOwner,
    deleteOwner
};
