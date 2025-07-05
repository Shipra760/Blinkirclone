import React from "react";

export default function Gift() {
  return (
    <div
      className="container py-2"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Navbar */}
      <div className="d-flex align-items-center py-2">
        <button className="btn btn-link text-dark p-0 me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h5 className="m-0" style={{fontSize:"16px"}}>E-gift cards</h5>
      </div>

      {/* Tabs */}
      <div className="d-flex justify-content-evenly border-bottom mb-3">
        <div className="px-4 py-2 fw-semibold text-success border-bottom border-success">
          Sent
        </div>
        <div className="px-4 py-2 text-muted">Received</div>
      </div>

      {/* Body */}
      <div className="d-flex flex-column justify-content-center align-items-center text-center ">
        {/* Image */}
        <img
          src="./dog1.jpeg"
          alt="Dog with Gift"
          className="mb-3"
          style={{ maxWidth: "150px" ,marginTop:"70px" }}
        />

        {/* Text */}
        <p className="fw-semibold mb-1 fs-5">No e-gift cards to show here!</p>
        <p className="text-muted mb-3 " style={{ maxWidth: "300px", fontSize:"15px"}}>
          When you have e-gift cards, they'll be displayed in this space
        </p>

        {/* Button */}
        <button className="btn btn-success" style={{fontSize:"13px"}}>Explore e-gift cards</button>
      </div>
    </div>
  );
}
