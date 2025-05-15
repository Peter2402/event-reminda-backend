import React, { useState } from "react";
import axios from "axios";

function EventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_time: "",
    location: "",
    is_recurring: false,
    user: 1  // Replace with actual user ID or make dynamic later
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://event-reminda-backend.onrender.com/api/events/", formData)
      .then((res) => {
        alert("Event created!");
        console.log(res.data);
      })
      .catch((err) => {
        alert("Error submitting event");
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Create Event</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required /><br />
      <textarea name="description" placeholder="Description" onChange={handleChange} /><br />
      <input type="datetime-local" name="event_time" onChange={handleChange} required /><br />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} /><br />
      <label>
        <input type="checkbox" name="is_recurring" onChange={handleChange} />
        Is Recurring?
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm;

