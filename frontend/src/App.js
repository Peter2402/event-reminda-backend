import React from "react";
import SignupForm from "./SignupForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">📅 Event Reminder App</h1>
      <SignupForm />
    </div>
  );
}

export default App;
