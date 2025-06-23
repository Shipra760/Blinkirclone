import React, { useState } from "react";
import { FaHome, FaRedoAlt, FaThLarge, FaPrint } from "react-icons/fa";

export default function MobileFooter() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", icon: <FaHome size={24} /> },
    { name: "Order Again", icon: <FaRedoAlt size={24} /> },
    { name: "Categories", icon: <FaThLarge size={24} /> },
    { name: "Print", icon: <FaPrint size={24} /> },
  ];

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
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className="text-center"
          style={{
            fontSize: "10px",
            color: activeTab === tab.name ? "#00a400" : "#333" ,
            fontWeight: activeTab === tab.name ? "bold" : "normal",
            cursor: "pointer",
          }}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.icon}
          <div className="small">{tab.name}</div>
        </div>
      ))}
    </div>
  );
}
