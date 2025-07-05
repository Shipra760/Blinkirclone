import React from "react";

export default function Book() {
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
        <h5 className="m-0" style={{ fontSize: "16px" }}>
          My addresses
        </h5>
      </div>

      {/* Actions */}
      <div className="bg-white rounded shadow-sm p-2 mb-3">
        <div className="border-bottom py-2 d-flex align-items-center justify-content-between m-2">
          <span className="text-success fw-semibold">+ Add new address</span>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="border-bottom py-2 d-flex align-items-center justify-content-between m-2">
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/120px-Zomato_logo.png"
              alt="Zomato"
              style={{ height: 20 }}
              className="me-2 "
            />
            Import your addresses from Zomato
          </span>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="py-2 d-flex align-items-center justify-content-between">
          <span>
            <i className="bi bi-whatsapp text-success me-2 m-2"></i>
            Request address from someone else
          </span>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <small className="text-muted">Your saved addresses</small>

      {/* Saved Address */}
      <div className="bg-white rounded shadow-sm p-3 mt-2">
        <div className="d-flex align-items-start">
          <div className="me-2">
            <i className="bi bi-house-door-fill fs-4 text-warning"></i>
          </div>
          <div>
            <div>
              <strong>Home</strong>{" "}
              <small className="text-primary">3.05 km away</small>
            </div>
            <div className="text-muted" style={{ fontSize: "0.9rem" }}>
              Shipra shahu, C11 new ashok nagar delhi 96 om medical, Block C,
              New Ashok Nagar, New Delhi
            </div>
            <div className="text-muted" style={{ fontSize: "0.9rem" }}>
              Phone number: 6306616775
            </div>

            {/* Actions */}
            <div className="mt-2">
              <button className="btn btn-light btn-sm me-1">
                <i className="bi bi-three-dots"></i>
              </button>
              <button className="btn btn-light btn-sm">
                <i className="bi bi-share"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="alert alert-warning mt-3 py-2 px-3 d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-share me-2 "></i>
            Now share your addresses with friends and family
          </span>
          <button className="btn btn-sm p-0">
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
