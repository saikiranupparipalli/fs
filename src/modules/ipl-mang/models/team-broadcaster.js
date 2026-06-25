import mongoose from "mongoose";

const teamBroadcaster = new mongoose.Schema(
  {
    teamid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "teamid is required"],
    },
  },
   {timestamps:true},
);

teamBroadcaster.index({teamid:true},{unique:true})

export default mongoose.model("Teambroadcaster", teamBroadcaster)