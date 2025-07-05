import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function AddMoney() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(2000);

  const quickAdd = (value) => {
    setAmount((prev) => prev + value);
  };

  return (
    <div
      className="d-flex flex-column"
      style={{ minHeight: "100vh", background: "#fff" }}
    >
      <div className="d-flex align-items-center p-3 border-bottom">
        <button className="btn btn-light me-2" onClick={() => navigate(-1)}>
          <FiArrowLeft />
        </button>
        <h5 className="mb-0">Add money</h5>
      </div>

      <div className="text-center my-4">
        <div className="mb-3">
          <div
            className="rounded-circle mx-auto"
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#f2f2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            ₹+
          </div>
        </div>
        <div style={{ fontSize: "16px", color: "#666" }}>
          Enter amount to add
        </div>
        <h2 className="fw-bold mt-2">₹{amount}</h2>
        <p className="text-muted">
          You can add a maximum of ₹1,00,000 in this month
        </p>

        <div className="d-flex justify-content-center gap-2 mt-2">
          {[500, 1000, 2000].map((val) => (
            <button
              key={val}
              className="btn btn-outline-secondary px-3 py-1 rounded-pill"
              onClick={() => quickAdd(val)}
            >
              + ₹{val}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3 mt-3 text-muted small">
        <p>
          • Blinkit Money balance is valid for 1 year from the date of money
          added
        </p>
        <p>• Blinkit Money is useable on Blinkit and Bistro</p>
        <p>
          • Blinkit Money cannot be transferred to a bank account as per RBI
          guidelines
        </p>
      </div>

      <div
        className="position-fixed bottom-0 start-0 end-0 bg-white border-top d-flex justify-content-between align-items-center px-3 py-2"
        style={{ zIndex: 1000 }}
      >
        <div>
          <div className="small text-muted">PAY USING</div>
          <div className="fw-bold">Google Pay UPI</div>
        </div>
        <button className="btn btn-success rounded-pill px-4 fw-bold">
          ₹{amount.toFixed(2)} Add money
        </button>
      </div>
    </div>
  );
}
