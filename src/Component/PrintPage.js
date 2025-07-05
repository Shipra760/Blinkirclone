import React from "react";
import { FaStar, FaClock } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export default function PrintPage() {
  return (
    <div
      style={{
        background: "#fffdf4",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      <div style={{ background: "#ffe79a", padding: "12px 16px" }}>
        <div style={{ fontSize: "14px", color: "#444" }}>Prints in</div>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>13 minutes</div>
        <div style={{ fontSize: "14px", color: "#333" }}>
          Block D, Sector 10, Meerut Division ▼
        </div>
      </div>

      <div style={{ padding: "10px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "8px",
            padding: "8px 12px",
            border: "1px solid #ccc",
          }}
        >
          <BiSearch size={20} />
          <input
            type="text"
            placeholder='Search "scissors"'
            style={{
              border: "none",
              outline: "none",
              marginLeft: "10px",
              flex: 1,
              fontSize: "16px",
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <h3 style={{ margin: 0 }}>Print Store</h3>
        <div style={{ color: "#555" }}>
          Blinkit ensures secure prints at every stage
        </div>
      </div>

      <div
        style={{
          margin: "0 16px 20px",
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <h5 style={{ fontWeight: "bold" }}>Documents</h5>
        <ul style={{ paddingLeft: "20px", fontSize: "14px" }}>
          <li>Price starting at ₹3/page</li>
          <li>Paper quality: 70 GSM</li>
          <li>Single side prints</li>
        </ul>
        <button
          style={{
            marginTop: "8px",
            backgroundColor: "#00a400",
            color: "white",
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Upload Files
        </button>
      </div>

      <div style={{ margin: "0 16px" }}>
        <h5 style={{ fontWeight: "bold", marginBottom: "16px" }}>
          Print your Last Minute Needs
        </h5>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "12px",
            boxShadow: "0 0 8px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src="./print.jpeg"
            alt="Print Preview"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <button
            style={{
              marginTop: "8px",
              backgroundColor: "#fff",
              color: "#00a400",
              border: "1px solid #00a400",
              padding: "6px 12px",
              borderRadius: "6px",
              fontWeight: "bold",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Print
          </button>

          <div style={{ fontSize: "14px", marginTop: "10px" }}>
            <strong>Print your Rent Receipt</strong>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaStar size={12} color="#ffc107" />
              <span>(189)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaClock size={12} color="green" />
              <span style={{ fontSize: "12px", color: "#444" }}>13 MINS</span>
            </div>
            <div style={{ fontSize: "14px", marginTop: "4px" }}>
              <span style={{ color: "green", fontWeight: "bold" }}>₹30</span>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#999",
                  marginLeft: "6px",
                }}
              >
                ₹95
              </span>{" "}
              <span
                style={{ color: "green", fontSize: "13px", marginLeft: "4px" }}
              >
                68% OFF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
