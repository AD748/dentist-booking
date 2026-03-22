import { useState } from "react";
import { createAppointment } from "../services/api";
import { useToast } from "../context/ToastContext";

export default function BookingModal({ dentist, onClose }) {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    appointmentDate: "",
  });

  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await createAppointment({
        ...form,
        dentistId: dentist._id,
      });

      showToast("Appointment booked successfully!", "success");
      onClose();
    } catch (err) {
      showToast("Booking failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    if (!form.patientName) {
      showToast("Name is required", "error");
      return false;
    }

    if (form.age <= 0) {
      showToast("Age must be greater than 0", "error");
      return false;
    }

    if(!form.gender) {
      showToast("Gender is required", "error");
      return false;
    }

    const today = new Date();
    const selectedDate = new Date(form.appointmentDate);

    if (selectedDate <= today) {
      showToast("Select a future date", "error");
      return false;
    }

    if(isNaN(selectedDate.getTime())) {
      showToast("Invalid appointment date", "error");
      return false;
    }

    return true;
  };

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center tracking-widest">
      <div className="bg-white p-6 rounded-xl w-[80vw] md:w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Book appointment with {dentist.name}
        </h2>

        <input
          placeholder="Name"
          className="w-full border p-2 rounded-full mb-3"
          onChange={(e) =>
            setForm({ ...form, patientName: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Age"
          className="w-full border p-2 rounded-full mb-3"
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <select
          value={form.gender}
          className="w-full border py-2 px-3 rounded-full mb-3"
          onChange={(e) =>
            setForm({ ...form, gender: e.target.value })
          }
        >
          <option value="" disabled>
            -- Select Gender --
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
        value={form.appointmentDate}
          type="date"
          className="w-full border p-2 rounded-full mb-3"
          onChange={(e) =>
            setForm({ ...form, appointmentDate: e.target.value })
          }
        />

        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:cursor-pointer" onClick={onClose}>
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:cursor-pointer disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? "Booking..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}