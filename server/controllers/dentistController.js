import Dentist from "../models/Dentist.js";

export const getDentists = async (req, res) => {
  try {
    const dentists = await Dentist.find();
    res.status(200).json(dentists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST add dentist
export const addDentist = async (req, res) => {
  try {
    const dentist = new Dentist(req.body);
    const saved = await dentist.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};