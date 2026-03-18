import mongoose from "mongoose";

const dentistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    clinicName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://via.placeholder.com/150"
    },
  },
  { timestamps: true }
);

export default mongoose.model("Dentist", dentistSchema);