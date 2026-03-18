import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { patientName, age, gender, appointmentDate, dentistId } = req.body;

    if (!patientName || !age || !gender || !appointmentDate || !dentistId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = await Appointment.create({
      patientName,
      age,
      gender,
      appointmentDate,
      dentistId,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("dentistId", "name clinicName")
      .sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};