import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Notification() {
  const [enabled, setEnabled] = useState(true);

  const toggleSwitch = () => setEnabled(!enabled);

  return (
    <div className="notif-container">
      <div className="header">
        <FaArrowLeft /> <span>Notification preferences</span>
      </div>

      <div className="notif-card">
        <div className="notif-left">
          <FaWhatsapp size={28} color="#25D366" />
          <div>
            <div className="notif-title">Promos and offers</div>
            <div className="notif-subtitle">
              Receive WhatsApp updates about coupons, promotions and offers
            </div>
          </div>
        </div>

        <label className="switch">
          <input type="checkbox" checked={enabled} onChange={toggleSwitch} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
