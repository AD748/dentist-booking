import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Dental Care</h1>
      <div className="font-semibold space-x-4">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}