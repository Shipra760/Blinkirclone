import React from "react";
import { FaHome, FaRedoAlt, FaThLarge, FaPrint } from "react-icons/fa";


export default function MobileFooter() {
  return (
    <div
      className="mobile-footer-nav d-flex justify-content-around align-items-center shadow-sm border-top"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        backgroundColor: "#fff",
        zIndex: 1000,
      }}
    >
      <div className="text-center">
        <FaHome size={24} color="orange" />
        <div className="small fw-bold">Home</div>
      </div>
      <div className="text-center">
        <FaRedoAlt size={24} />
        <div className="small">Order Again</div>
      </div>
      <div className="text-center">
        <FaThLarge size={24} />
        <div className="small">Categories</div>
      </div>
      <div className="text-center">
        <FaPrint size={24} />
        <div className="small">Print</div>
      </div>
    </div>
  );
}
