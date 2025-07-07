import React, { useState } from "react";

export default function Enterdetail() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const isDisabled = !name || !dob;

  const handleSubmit = () => {
    alert(`Saved!\nName: ${name}\nDOB: ${dob}`);
  };

  return (
    <div
      style={{
        background: "#fff",
        maxWidth: "400px",
        margin: "4rem auto",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <img
        src="https://img.icons8.com/emoji/96/birthday-cake-emoji.png"
        alt="Birthday Cake"
        style={{ marginBottom: "1rem" }}
      />

      <h2 style={{ margin: 0 }}>Add your birthday!</h2>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        and we’ll remember you every year 🎉
      </p>

      <input
        type="text"
        placeholder="Your name*"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          margin: "1rem 0 0.5rem",
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      />

      <input
        type="date"
        placeholder="Date of birth*"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "0.5rem",
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      />

      <p style={{ fontSize: "0.75rem", color: "#777" }}>
        Once saved, date of birth can’t be changed!
      </p>

      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginTop: "1rem",
          backgroundColor: isDisabled ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
      >
        Save
      </button>
    </div>
  );
}
