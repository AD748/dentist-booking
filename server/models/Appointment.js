import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },

    dentistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dentist",
      required: true,
    },

    status: {
      type: String,
      enum: ["Booked", "Completed"],
      default: "Booked",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);