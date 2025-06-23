import React, { useState, useEffect } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";

export default function Header() {
  const [showForm, setShowForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-100 border-bottom text-dark"
      style={{ backgroundColor: "lightyellow", position: "relative", zIndex: 1 }}
    >
      <div className="d-block d-md-none px-3">
        <div
          className={`d-flex justify-content-between align-items-center mb-2 transition ${
            isScrolled ? "d-none" : ""
          }`}
        >
          <div>
            <div className="fw-bold fs-5">11 minutes</div>
            <div className="small">
              Block D, Sector 10, Meerut Division{" "}
              <i className="bi bi-caret-down-fill ms-1"></i>
            </div>
          </div>
          <div className="d-flex gap-3">
            <FaWallet size={20} />
            <BiUser
              size={24}
              onClick={toggleForm}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div
          className={`position-relative ${
            isScrolled
              ? "position-fixed top-0 start-0 w-100 px-3 shadow bg-white"
              : ""
          }`}
          style={{ zIndex: 1000 }}
        >
          <input
            type="text"
            className="form-control rounded-pill ps-5 my-2"
            placeholder='Search "summer vacation"'
            style={{ backgroundColor: "white", color: "#333" }}
          />
          <BiSearch
            className="position-absolute"
            style={{
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
              color: "gray",
            }}
          />
        </div>

        {showForm && (
          <div
            className="position-absolute end-0 mt-2 me-3 p-3 bg-white shadow rounded"
            style={{
              top: isScrolled ? "60px" : "auto",
              zIndex: 1100,
              width: "250px",
            }}
          >
            <form>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="row align-items-center px-4 gx-3 d-none d-md-flex bg-white text-dark m-0">
        <div className="col-md-4 d-flex align-items-center">
          <img
            src="./blinkit.png"
            alt="Blinkit logo"
            width={80}
            className="me-3"
          />
          <div
            style={{
              borderLeft: "2px solid #17a2b8",
              height: "40px",
              marginRight: "15px",
            }}
          ></div>
          <div>
            <div className="fw-bold">11 minutes</div>
            <small className="text-muted">
              Block D, Sector 10, Meerut Division
            </small>
          </div>
        </div>

        <div className="col-md-5">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder='Search "summer vacation"'
          />
        </div>

        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <FaWallet className="me-3" />
          <BiUser
            size={24}
            onClick={toggleForm}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {showForm && (
        <div
          className="d-none d-md-block position-absolute top-100 end-0 mt-2 me-3 p-3 bg-white shadow rounded"
          style={{ width: "250px", zIndex: 10 }}
        >
          <form>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
