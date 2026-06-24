import mongoose from "mongoose";

const teamSponserSchema = new mongoose.Schema({
  teamid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: [true, "teamid is required"],
  },

  sponserid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sponser",
    required: [true, "sponserid is required"],
  },
}, {timestamps:true});

export default mongoose.model("Teamsponser", teamSponserSchema)
