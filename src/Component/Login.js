import React from "react";
import { FaBirthdayCake, FaWallet } from "react-icons/fa";
import { MdOutlineSupport, MdPayments } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

const Profile = () => {
  const infoItems = [
    "Your orders",
    "Bookmarked recipes",
    "Address book",
    "GST details",
    "E-Gift Cards",
    "Your Prescriptions",
  ];

  const paymentItems = [
    "Wallet",
    "Blinkit Money",
    "Payment settings",
    "Your collected rewards",
  ];

  const otherInform = [
    "Share the app",
    "About us",
    "Get Feeding India receipt",
    "Account privacy",
    "Notification preferences",
    "Log out",
  ];

  return (
    <div
      className="container py-3"
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-link text-dark p-0 me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h5 className="mb-0 fw-semibold">Profile</h5>
      </div>

      {/* Account Info */}
      <div>
        <h4 className="fw-bold">Your account</h4>
        <p className="text-muted">📞 6306616775</p>

        <div className="bg-warning-subtle rounded p-2 d-flex align-items-center mb-3">
          <FaBirthdayCake size={20} className="me-2 text-warning" />
          <span className="fw-medium">Add your birthday</span>
          <span
            className="ms-auto text-success fw-semibold"
            style={{ cursor: "pointer" }}
          >
            Enter details <BiRightArrowAlt />
          </span>
        </div>
      </div>

      {/* Top Buttons */}
      <div className="d-flex justify-content-between text-center mb-3">
        <div className="flex-fill mx-1 p-2 border rounded">
          <FaWallet size={20} className="mb-1" />
          <div className="small">Blinkit Money</div>
        </div>
        <div className="flex-fill mx-1 p-2 border rounded">
          <MdOutlineSupport size={20} className="mb-1" />
          <div className="small">Support</div>
        </div>
        <div className="flex-fill mx-1 p-2 border rounded">
          <MdPayments size={20} className="mb-1" />
          <div className="small">Payments</div>
        </div>
      </div>

      {/* Appearance */}
      <div className="d-flex align-items-center justify-content-between border rounded p-2 mb-4">
        <div className="d-flex align-items-center" style={{ fontSize: "14px" }}>
          <BsSun className="me-2" />
          <span>Appearance</span>
        </div>
        <span className="badge bg-info ">LIGHT</span>
      </div>

      {/* Information Section */}
      <h6 className="text-muted" style={{ fontSize: "14px" }}>
        YOUR INFORMATION
      </h6>
      {infoItems.map((item, i) => (
        <div
          key={i}
          className="d-flex justify-content-between py-2 border-bottom "
          style={{ fontSize: "13px", fontWeight: "400" }}
        >
          <span>{item}</span>
          <BiRightArrowAlt size={20} />
        </div>
      ))}

      {/* Payment Section */}
      <h6 className="text-muted mt-4" style={{ fontSize: "14px" }}>
        PAYMENTS AND COUPONS
      </h6>
      {paymentItems.map((item, i) => (
        <div
          key={i}
          className="d-flex justify-content-between py-2 border-bottom"
          style={{ fontSize: "13px", fontWeight: "400" }}
        >
          <span>{item}</span>
          <BiRightArrowAlt size={20} />
        </div>
      ))}

      {/* Payment Section */}
      <h6 className="text-muted mt-4" style={{ fontSize: "14px" }}>
        OTHER INFORMATION
      </h6>
      {otherInform.map((item, i) => (
        <div
          key={i}
          className="d-flex justify-content-between py-2 border-bottom"
          style={{ fontSize: "13px", fontWeight: "400" }}
        >
          <span>{item}</span>
          <BiRightArrowAlt size={20} />
        </div>
      ))}
    </div>
  );
};

export default Profile;
