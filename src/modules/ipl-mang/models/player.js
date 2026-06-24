import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "player is required"],
    },

    role: {
      type: String,
      trim: true,
      required: [true, "role is required"],
    },

    teamid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      enum:{
        value:["batsman", "bowler", "wicket-keeper", "all-rounder"],
        message: 'Role must be: "batsman", "bowler", "wicket-keeper", "all-rounder"'
      },
      required:[true, "teamid is required"]
    },
  },
  { timestamps: true },
);

export default mongoose.model("Player", playerSchema);
