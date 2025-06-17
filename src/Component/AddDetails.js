import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddDetails() {
  const [cardSize, setCardSize] = useState({ height: 220, imageHeight: 100 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setCardSize({ height: 160, imageHeight: 70 });
      } else if (width <= 576) {
        setCardSize({ height: 180, imageHeight: 75 });
      } else if (width <= 768) {
        setCardSize({ height: 200, imageHeight: 90 });
      } else if (width <= 992) {
        setCardSize({ height: 210, imageHeight: 95 });
      } else {
        setCardSize({ height: 220, imageHeight: 100 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { img: "/cow.jpeg", title: "Cow Milk", volume: "500ml", price: "₹30" },
    { img: "/ice.jpeg", title: "Mother Dairy", volume: "1 liter", price: "₹50" },
    { img: "/chocolate.png", title: "Cold Coffee", volume: "250ml", price: "₹40" },
    { img: "/namkin.jpeg", title: "Organic Milk", volume: "1 liter", price: "₹60" },
    { img: "/cake.jpeg", title: "Flavored Milk", volume: "500ml", price: "₹35" },
    { img: "/biscuit.jpeg", title: "Low Fat Milk", volume: "1 liter", price: "₹45" },
  ];

  return (
    <>
      {/* 🥛 Product Main Card */}
      <div className="container my-3">
        <div className="card border-0 shadow-sm rounded-3 p-3">
          <div className="text-center">
            <img
              src="/cow.jpeg"
              alt="Fresh Cow Milk"
              className="img-fluid"
              style={{ maxHeight: "300%", objectFit: "contain" }}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-success fw-semibold small" style={{ fontSize: "10px" }}>
              14 MINS
            </span>
            <span className="text-warning small" style={{ fontSize: "10px" }}>
              ★ 4.5 <span className="text-muted">(23971)</span>
            </span>
          </div>

          <div className="mt-3">
            <h6 className="fw-bold mb-1" style={{ fontSize: "16px" }}>
              Fresh Cow Milk (100% pure) Milk
            </h6>
            <p className="mb-2 text-muted small">5 ltr</p>

            <div className="d-flex align-items-center mb-2">
              <span className="fw-bold me-2" style={{ fontSize: "18px" }}>
                ₹225
              </span>
              <del className="text-muted me-2" style={{ fontSize: "10px" }}>
                ₹253
              </del>
              <span className="badge bg-primary" style={{ fontSize: "10px" }}>
                11% OFF
              </span>
            </div>

            <p className="text-muted small">₹4.50/100 g</p>

            <button className="btn btn-link text-success p-0" style={{ fontSize: "14px" }}>
              View product details ▼
            </button>
          </div>

          <hr />

          <div className="d-flex align-items-center">
            <img
              src="/cow.jpeg"
              alt="Fortune"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
              className="me-2"
            />
            <div>
              <div className="fw-semibold">Cow Milk</div>
              <a href="#" className="text-decoration-none text-primary small">
                Explore all products →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🛒 Previously Bought Section */}
      <div className="container mt-4">
        <style>{`
          @media (max-width: 576px) {
            .product-card p {
              font-size: 14px !important;
              margin-bottom: 2px !important;
            }

            .product-card .price-text {
              font-size: 11px !important;
            }

            .product-card .add-btn {
              font-size: 10px !important;
              padding: 2px 6px !important;
            }
          }
        `}</style>

        <h4 className="fw-bold" style={{ fontSize: "15px" }}>
          Previously bought
        </h4>

        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-2 mb-3">
              <div
                className="product-card text-start d-flex flex-column justify-content-between p-2"
                style={{
                  height: `${cardSize.height}px`,
                  backgroundColor: "#fff",
                  boxShadow: "0 0 8px rgba(0,0,0,0.05)",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid mb-2"
                  style={{
                    height: `${cardSize.imageHeight}px`,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <p className="mb-1 text-truncate" style={{ fontSize: "15px" }}>
                  {item.title}
                </p>
                <p className="mb-1" style={{ fontSize: "15px" }}>
                  {item.volume}
                </p>
                <div className="d-flex justify-content-between align-items-center px-1">
                  <span className="text-success fw-bold price-text">{item.price}</span>
                  <a
                    href="/details"
                    className="btn btn-light btn-sm px-3 py-1 add-btn border border-success text-decoration-none"
                  >
                    ADD
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
