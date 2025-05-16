import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/login/", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Login successful! 🔐");
      })
      .catch(() => {
        alert("Login failed ❌. Check username and password.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Log In</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
