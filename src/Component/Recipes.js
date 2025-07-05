import React from "react";

export default function Recipes() {
  return (
    <>
      <div className="container vh-100 d-flex flex-column">
        {/* Navbar */}
        <div className="d-flex align-items-center justify-content-between py-2">
          <div>
            <button className="btn btn-link text-dark p-0">
              <i className="bi bi-arrow-left "></i>
            </button>
            <span className="fw-semibold p-2">Bookmarked Recipes</span>
          </div>
          <button className="btn btn-link text-dark p-0">
            <i className="bi bi-search"></i>
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
          {/* Image */}
          <img
            src="./dog.webp"
            alt="Dog"
            className="mb-3"
            style={{ maxWidth: "150px" }}
          />

          {/* Text */}
          <p className="fw-semibold">No recipes here</p>

          {/* Button */}
          <button className="btn btn-success">Explore all recipes</button>
        </div>
      </div>
    </>
  );
}
