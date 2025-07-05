import React from "react";

export default function Payment() {
  const sectionStyle = {
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const lastItemStyle = {
    ...itemStyle,
    borderBottom: "none",
  };

  const iconStyle = {
    width: "24px",
    height: "24px",
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "15px" }}>
      <h4 className="" style={{fontSize:"16px"}}>Payment Settings</h4>

      {/* Cards */}
      <div style={sectionStyle}>
        <h6>Cards</h6>
        <div style={itemStyle}>
          <div style={leftStyle}>
            <span style={iconStyle}>💳</span>
            <span>Add credit or debit cards</span>
          </div>
          <span style={{ color: "green", cursor: "pointer" }}>ADD</span>
        </div>
        <div style={lastItemStyle}>
          <div style={leftStyle}>
            <img src="./pluxee.png" 
                alt="Pluxee" 
                style={{ height: "6px" }} />
            <span>Pluxee</span>
          </div>
        </div>
      </div>

      {/* UPI */}
      <div style={sectionStyle}>
        <h6>UPI</h6>
        <div style={itemStyle}>
          <div style={leftStyle}>
            <img src="./googlepay.jpeg" alt="GPay" style={iconStyle} />
            <span>Google Pay UPI</span>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={leftStyle}>
            <img src="./phonepe.jpeg" alt="PhonePe" style={iconStyle} />
            <span>PhonePe UPI</span>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={leftStyle}>
            <img src="./paytm.png" alt="Paytm" style={iconStyle} />
            <span>Paytm UPI</span>
          </div>
        </div>
        <div style={lastItemStyle}>
          <div style={leftStyle}>
            <img src="./upi.png" alt="UPI" style={iconStyle} />
            <span>Add new UPI ID</span>
          </div>
          <span style={{ color: "green", cursor: "pointer" }}>ADD</span>
        </div>
      </div>

      {/* Wallets */}
      <div style={sectionStyle}>
        <h6>Wallets</h6>
        <div style={itemStyle}>
          <div style={leftStyle}>
            <img src="./amazon.png" alt="Amazon Pay" style={iconStyle} />
            <span>
              Amazon Pay Balance{" "}
              <span style={{ color: "green", fontSize: "12px" }}>NEW</span>
            </span>
          </div>
          <span style={{ color: "green", cursor: "pointer" }}>ADD</span>
        </div>
        <div style={lastItemStyle}>
          <div style={leftStyle}>
            <img src="./mobik.png" alt="Mobikwik" style={iconStyle} />
            <span>Mobikwik</span>
          </div>
          <span style={{ color: "green", cursor: "pointer" }}>ADD</span>
        </div>
      </div>

      {/* Pay Later */}
      <div style={sectionStyle}>
        <h6>Pay Later</h6>
        <div style={itemStyle}>
          <div style={leftStyle}>
            <img src="./simpl.jpeg" alt="Simpl" style={iconStyle} />
            <span>Simpl</span>
          </div>
          <span style={{ color: "green", cursor: "pointer" }}>ADD</span>
        </div>
        <div style={lastItemStyle}>
          <div style={leftStyle}>
            <img src="./lazy.jpeg" alt="LazyPay" style={iconStyle} />
            <span>LazyPay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
