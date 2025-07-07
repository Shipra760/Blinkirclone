import React, { useState } from "react";

export default function Logout() {
  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const choice = data.get("logoutOption");
    alert(`You selected: ${choice}`);
    setShowModal(false);
  };

  return (
    <div className="profile-container">
      <h2>Your Account</h2>

      <button className="logout-btn" onClick={handleLogoutClick}>
        🚪 Log Out
      </button>
      {showModal && (
        <div className="modal-overlay">
          <form className="modal-form" onSubmit={handleSubmit}>
            <h3>Log out from?</h3>

            <label>
              <input
                type="radio"
                name="logoutOption"
                value="Current Device"
                required
              />
              Current Device
            </label>
            <label>
              <input type="radio" name="logoutOption" value="All Devices" />
              All Devices
            </label>

            <div className="modal-actions">
              <button type="submit" className="submit-btn">
                Confirm
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
