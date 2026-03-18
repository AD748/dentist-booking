import { useState } from "react";
import { loginAdmin } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleLogin = async () => {
    const res = await loginAdmin(form);

    if (res.token) {
      localStorage.setItem("token", res.token);
      showToast("Login successful", "success");
      navigate("/admin");
    } else {
      showToast(res.message || "Login failed", "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <input
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}