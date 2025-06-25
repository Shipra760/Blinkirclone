import React, { useState, useEffect } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Redirect to login page
  const handleUserClick = () => {
    navigate("/login");
  };

  // ✅ New: Redirect to wallet page
  const handleWalletClick = () => {
    navigate("/wallet");
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
      {/* Mobile View */}
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
            {/* ✅ Mobile Wallet Click */}
            <FaWallet
              size={20}
              onClick={handleWalletClick}
              style={{ cursor: "pointer" }}
            />
            <BiUser
              size={24}
              onClick={handleUserClick}
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
      </div>

      {/* Desktop View */}
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
          {/* ✅ Desktop Wallet Click */}
          <FaWallet
            className="me-3"
            onClick={handleWalletClick}
            style={{ cursor: "pointer" }}
          />
          <BiUser
            size={24}
            onClick={handleUserClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
