import mongoose from "mongoose";

const sponserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "sponser is required"],
    }
  },
  { timestamps: true },
);

export default mongoose.model("Sponser", sponserSchema);
