import React from "react";

export default function Wal() {
  return (
    <div
      className="container py-2"
      style={{ background: "#fff", minHeight: "100vh" }}
    >
      {/* Navbar */}
      <div className="d-flex align-items-center py-2 mb-4">
        <button className="btn btn-link text-dark p-0 me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h5 className="m-0" style={{ fontSize: "16px" }}>
          Wallet details
        </h5>
      </div>

      {/* Body */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center "
        style={{ marginTop: "150px" }}
      >
        {/* Image */}
        <img
          src="./wal.jpeg"
          alt="No balance"
          style={{ maxWidth: "150px", marginBottom: "20px" }}
        />

        {/* Text */}
        <h6 className="fw-semibold">No balance</h6>
      </div>
    </div>
  );
}
