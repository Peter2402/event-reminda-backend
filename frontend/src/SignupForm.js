import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register/", formData)
      .then(() => alert("Signup successful! 🎉"))
      .catch(() => alert("Signup failed ❌"));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        name="username"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
