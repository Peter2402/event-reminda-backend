import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        <span role="img" aria-label="calendar">📅</span> Event Reminder App
      </h1>
      <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
  <div className="flex flex-col gap-4">
    <input placeholder="Title" className="border p-2 rounded" />
    <textarea placeholder="Description" className="border p-2 rounded" />
    <input type="datetime-local" className="border p-2 rounded" />
    <input placeholder="Location" className="border p-2 rounded" />
    <label className="flex items-center gap-2">
      <input type="checkbox" />
      <span>Is Recurring?</span>
    </label>
    <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
      Submit
    </button>
  </div>
</form>
    </div>
  );
}

export default App;
