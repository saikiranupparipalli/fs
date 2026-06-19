import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 15,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      minlength: 4,
      maxlength: 20,
      required: true,
      select: false,
    },

    verificationToken: { type: String, select: false },
    refreshToken: { type: String, select: false },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
//   next();
});

userSchema.methods.comparePassword = async function(userTxtPassword){
    return bcrypt.compare(userTxtPassword, this.password)
}

export default mongoose.model("User", userSchema)