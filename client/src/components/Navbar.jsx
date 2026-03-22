import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#C5D5E2] font-rum mx-5 text-white p-4 flex justify-between items-center rounded-full">
      <h1 className="text-blue-700 text-xl font-extrabold tracking-wider uppercase text-[24px]">Bright</h1>
      <div className="font-light  space-x-4">
        <Link to="/" className="bg-blue-700 rounded-full py-2 px-4 tracking-widest">Home</Link>
        <Link to="/admin" className="bg-blue-700 rounded-full py-2 px-4 tracking-widest">Admin</Link>
      </div>
    </div>
  );
}