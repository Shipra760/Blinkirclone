import React from "react";

export default function Gst() {
  return (
    <div
      className="container py-3"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Navbar */}
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-link text-dark p-0 me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h5 className="m-0" style={{fontSize:"15px"}}>Add GST Details</h5>
      </div>

      {/* Form */}
      <div className="bg-white p-4 rounded shadow-sm">
        <form>
          <div className="mb-3">
            <label htmlFor="gstNumber" className="form-label fw-semibold" style={{fontSize:"14px"}}>
              GST Number
            </label>
            <input
              type="text"
              className="form-control"
              id="gstNumber"
              placeholder="Enter your GST Number"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="companyName" className="form-label fw-semibold" style={{fontSize:"14px"}}>
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Enter your Company Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold" style={{fontSize:"14px"}}>
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              rows="3"
              placeholder="Enter your Company Address"
            ></textarea>
          </div>

          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-secondary" style={{fontSize:"14px"}}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success" style={{fontSize:"14px"}}>
              Save GST Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
