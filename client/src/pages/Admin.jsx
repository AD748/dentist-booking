import { useEffect, useState } from "react";
import { getAppointments } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAppointments();
      setAppointments(data);
      setLoading(false)
    };
    fetch();
  }, []);

  return (
    <div className="p-6 tracking-widest">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Dentist</th>
              <th>Clinic</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a._id} className="text-center border-t">
                <td>{a.patientName}</td>
                <td>{a.age}</td>
                <td>{a.gender}</td>
                <td>{new Date(a.appointmentDate).toDateString()}</td>
                <td>{a.dentistId?.name}</td>
                <td>{a.dentistId?.clinicName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


