const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getDentists = async () => {
  const res = await fetch(`${BASE_URL}/dentists`);
  return res.json();
};

export const createAppointment = async (data) => {
  const res = await fetch(`${BASE_URL}/api/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getAppointments = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/appointments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const loginAdmin = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};