import mongoose from "mongoose";

const managerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
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
    image: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Manager", managerSchema);
