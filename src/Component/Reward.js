import React from "react";

export default function Reward() {
  return (
    <>
      <div className="container vh-100 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between py-2">
          <div>
            <button className="btn btn-link text-dark p-0">
              <i className="bi bi-arrow-left "></i>
            </button>
            <span className="fw-semibold p-2">Your Collected Rewards</span>
          </div>
          <button className="btn btn-link text-dark p-0">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
          <img
            src="./dog.webp"
            alt="Dog"
            className="mb-3"
            style={{ maxWidth: "150px" }}
          />
          <p className="fw-semibold">No rewards here</p>
        </div>
      </div>
    </>
  );
}
