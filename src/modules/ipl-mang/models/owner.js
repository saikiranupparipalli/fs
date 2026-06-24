import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "owner is required"],
    },
    company: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "company is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Owner", ownerSchema);
