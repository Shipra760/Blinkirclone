import React, { useState } from "react";

export default function Feeding() {
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");

  const isDisabled = !pan || !email;

  const handleSubmit = () => {
    alert(`Submitted!\nPAN: ${pan}\nEmail: ${email}`);
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "1.5rem",
        maxWidth: "400px",
        margin: "2rem auto",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        fontFamily: "sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>Feeding India Donation Receipt</h3>
      <p style={{ fontWeight: "bold", fontSize: "0.95rem", margin: "0.5rem 0" }}>
        Please enter your details
      </p>

      <p style={{ fontSize: "0.8rem", lineHeight: "1.4", marginBottom: "1rem" }}>
        The details are collected on behalf of Feeding India for the purpose of
        issuance of Form 10BE (‘Donation Certificate’) required by you for
        claiming deduction under section 80G of Income Tax Act 1961. Donation
        Certificate shall be issued at the end of the relevant financial year,
        within the stipulated time as may be prescribed under applicable laws.
      </p>

      <p style={{ fontSize: "0.75rem", marginBottom: "1rem" }}>
        Please refer to the link:{" "}
        <a
          href="https://www.feedingindia.org/terms/donor"
          target="_blank"
          rel="noreferrer"
        >
          https://www.feedingindia.org/terms/donor
        </a>{" "}
        for detailed terms & conditions and timelines for issuance of Donation
        Certificates.
      </p>

      <input
        type="text"
        placeholder="Enter PAN card number"
        value={pan}
        onChange={(e) => setPan(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "0.75rem",
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "0.9rem",
        }}
      />

      <input
        type="email"
        placeholder="Enter email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "1rem",
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "0.9rem",
        }}
      />

      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "0.6rem",
          backgroundColor: isDisabled ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: isDisabled ? "not-allowed" : "pointer",
          fontSize: "1rem",
        }}
      >
        Submit
      </button>
    </div>
  );
}
