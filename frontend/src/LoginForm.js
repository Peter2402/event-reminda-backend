import axios from "axios";
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://event-reminda-backend.onrender.com/admin/core/user/", {
        username,
        password,
      });
      alert("✅ Login successful!");
      console.log("Token:", res.data.token);
    } catch (err) {
      alert("❌ Login failed. Check username and password.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
