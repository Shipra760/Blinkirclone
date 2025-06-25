import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function Wallet() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#fff7e6", minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-light border-0"
        >
          ←
        </button>
        <FiSettings size={22} />
      </div>

      {/* Logo & Title */}
      <div className="text-center my-2">
        <img
          src="/blinkit.png" 
          alt="Blinkit Money"
          style={{ width: 80 }}
        />
        <h4 className="fw-bold mt-2 mb-0">blinkit</h4>
        <h2 className="fw-bold">MONEY</h2>
      </div>

      {/* Feature Cards */}
      <div className="px-3">
        <div className="bg-white p-3 rounded shadow-sm mb-3">
          <div className="d-flex">
            <img
              src="/phone1.jpeg"
              alt="tap"
              style={{ width: 40, marginRight: 12 }}
            />
            <div>
              <h6 className="fw-bold mb-1">Single tap payments</h6>
              <p className="mb-0 small">
                Enjoy seamless payments without the wait for OTPs
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 rounded shadow-sm mb-3">
          <div className="d-flex">
            <img
              src="/phone2.jpeg"
              alt="fail"
              style={{ width: 40, marginRight: 12 }}
            />
            <div>
              <h6 className="fw-bold mb-1">Zero failures</h6>
              <p className="mb-0 small">
                Zero payment failures ensure you never miss an order
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 rounded shadow-sm mb-4">
          <div className="d-flex">
            <img
              src="/phone3.jpeg"
              alt="refund"
              style={{ width: 40, marginRight: 12 }}
            />
            <div>
              <h6 className="fw-bold mb-1">Real-time refunds</h6>
              <p className="mb-0 small">
                No need to wait for refunds. Blinkit Money refunds are instant!
              </p>
            </div>
          </div>
        </div>

        {/* Add Money Button */}
        <div className="text-center">
          <button className="btn btn-success w-100 rounded-pill py-2 fw-bold">
            Add Money
          </button>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-5 text-muted fw-semibold">
        Enjoy seamless one tap payments
      </div>
    </div>
  );
}
