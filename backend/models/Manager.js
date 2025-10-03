import mongoose from "mongoose";

const managerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    department: String,
    role: String,
    phone: String,
    experience: Number,
    salary: Number,
    address: String,
    documents: [String],
    lastDate: Date,
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Manager", managerSchema);
