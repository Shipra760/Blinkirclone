import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaRedoAlt, FaThLarge, FaPrint } from "react-icons/fa";

export default function MobileFooter() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  const tabs = [
    { name: "Home", icon: <FaHome size={24} />, route: "/" },
    { name: "Order Again", icon: <FaRedoAlt size={24} />, route: "/orders" },
    { name: "Categories", icon: <FaThLarge size={24} />, route: "/categories" },
    { name: "Print", icon: <FaPrint size={24} />, route: "/print" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
  };

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
            color: activeTab === tab.name ? "#00a400" : "#333",
            fontWeight: activeTab === tab.name ? "bold" : "normal",
            cursor: "pointer",
          }}
          onClick={() => handleTabClick(tab)}
        >
          {tab.icon}
          <div className="small">{tab.name}</div>
        </div>
      ))}
    </div>
  );
}
