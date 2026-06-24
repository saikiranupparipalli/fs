import mongoose from "mongoose";

const broadcasterSchema = new mongoose.Schema(
    {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 15,
      required: [true, "broadcaster is required"],
    },

    }, {timestamps:true}
)

export default mongoose.model("broadcaster", broadcasterSchema)