import mongoose from "mongoose";

const playerStats = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "name is required"],
    },
    wickets: {
      type: Number,
      trim: true,
      required: [true, "wickets count is required"],
    },
    runs: {
      type: Number,
      trim: true,
      required: [true, "runs count is required"],
    },

    playerid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Stats", playerStats);
