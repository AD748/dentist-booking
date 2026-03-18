import mongoose from "mongoose";
import dotenv from "dotenv";
import Dentist from "./models/Dentist.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const dentists = [
  {
    name: "Dr. Amit Sharma",
    qualification: "BDS, MDS",
    experience: 8,
    clinicName: "Smile Care Clinic",
    address: "Salt Lake Sector V",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Dr. Priya Verma",
    qualification: "BDS",
    experience: 5,
    clinicName: "Bright Smile Dental",
    address: "Park Street",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Dr. Rajesh Gupta",
    qualification: "MDS Orthodontics",
    experience: 10,
    clinicName: "Perfect Teeth",
    address: "New Town",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Dr. Sneha Kapoor",
    qualification: "BDS, Cosmetic Dentist",
    experience: 6,
    clinicName: "White Smile Studio",
    address: "Ballygunge",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Dr. Arjun Mehta",
    qualification: "MDS Prosthodontics",
    experience: 12,
    clinicName: "Dental Hub",
    address: "Howrah",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Dr. Neha Singh",
    qualification: "BDS",
    experience: 4,
    clinicName: "Care Dental",
    address: "Dum Dum",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Dr. Kunal Jain",
    qualification: "MDS Endodontics",
    experience: 9,
    clinicName: "Root Care Clinic",
    address: "Garia",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Dr. Anjali Roy",
    qualification: "BDS",
    experience: 7,
    clinicName: "Smile Plus",
    address: "Behala",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Dr. Vikram Das",
    qualification: "MDS Oral Surgery",
    experience: 11,
    clinicName: "Oral Care Center",
    address: "Sealdah",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Dr. Pooja Nair",
    qualification: "BDS",
    experience: 5,
    clinicName: "Healthy Teeth",
    address: "Lake Town",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Dr. Rohit Sen",
    qualification: "MDS",
    experience: 8,
    clinicName: "Dental Experts",
    address: "Barasat",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Dr. Meera Iyer",
    qualification: "BDS",
    experience: 6,
    clinicName: "Smile Avenue",
    address: "Rajarhat",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

await Dentist.insertMany(dentists);

console.log("12 Dentists Added ✅");
process.exit();