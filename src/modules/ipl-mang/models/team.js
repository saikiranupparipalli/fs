import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "team is required"],
    },
    ownerid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: [true, "ownerid is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Team", teamSchema);
