import React, { useState } from "react";
import axios from "axios";

function EventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_time: "",
    location: "",
    is_recurring: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://event-reminda-backend.onrender.com/api/events/", formData)
      .then(() => alert("Event created!"))
      .catch(() => alert("Error submitting event"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md flex flex-col space-y-4"
    >
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="datetime-local"
        name="event_time"
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <label className="inline-flex items-center space-x-2">
        <input type="checkbox" name="is_recurring" onChange={handleChange} />
        <span>Is Recurring?</span>
      </label>
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
}

export default EventForm;
